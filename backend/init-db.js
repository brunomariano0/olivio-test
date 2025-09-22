const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configuração da conexão com o banco de dados
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'olivio_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Função para ler arquivos JSON
const readJsonFile = (filename) => {
  const filePath = path.join(__dirname, '..', 'public', filename);
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Erro ao ler arquivo ${filename}:`, error);
    return null;
  }
};

// Função para criar as tabelas e importar dados
const initializeDatabase = async () => {
  let connection;
  
  try {
    // Criar conexão
    connection = await mysql.createConnection({
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password
    });
    
    // Criar banco de dados se não existir
    console.log(`Criando banco de dados ${dbConfig.database} se não existir...`);
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbConfig.database}`);
    
    // Usar o banco de dados
    await connection.query(`USE ${dbConfig.database}`);
    
    // Criar tabela de cachorros
    console.log('Criando tabela de cachorros...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS dogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image VARCHAR(255),
        dados JSON,
        titulos JSON,
        pedigree TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    
    // Criar tabela de ninhadas
    console.log('Criando tabela de ninhadas...');
    await connection.query(`
      CREATE TABLE IF NOT EXISTS litters (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        parents JSON,
        birthDate DATE,
        status VARCHAR(50) DEFAULT 'available',
        images JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);
    
    // Verificar se já existem dados nas tabelas
    const [dogsCount] = await connection.query('SELECT COUNT(*) as count FROM dogs');
    const [littersCount] = await connection.query('SELECT COUNT(*) as count FROM litters');
    
    // Importar dados de cachorros se a tabela estiver vazia
    if (dogsCount[0].count === 0) {
      console.log('Importando dados de cachorros...');
      const dogsData = readJsonFile('dogs-v2.json');
      
      if (dogsData && dogsData[2] && dogsData[2].data) {
        for (const dog of dogsData[2].data) {
          // Verificar se o cachorro tem nome, caso contrário, usar "Cachorro sem nome"
          if (dog && dog.name) {
            await connection.query(
              'INSERT INTO dogs (name, image, dados, titulos, pedigree) VALUES (?, ?, ?, ?, ?)',
              [
                dog.name,
                dog.image || '',
                JSON.stringify(dog.dados || {}),
                JSON.stringify(dog.titulos || []),
                dog.pedigree || ''
              ]
            );
          } else {
            console.log('Pulando cachorro sem nome');
          }
        }
        
        // Verificar quantos cachorros foram realmente importados
        const [newCount] = await connection.query('SELECT COUNT(*) as count FROM dogs');
        console.log(`${newCount[0].count} cachorros importados com sucesso!`);
      }
    } else {
      console.log(`Tabela de cachorros já contém ${dogsCount[0].count} registros. Pulando importação.`);
    }
    
    // Importar dados de ninhadas se a tabela estiver vazia
    if (littersCount[0].count === 0) {
      console.log('Importando dados de ninhadas...');
      const littersData = readJsonFile('ninhada.json');
      
      if (littersData) {
        let importedCount = 0;
        
        for (const litter of littersData) {
          // Verificar se a ninhada tem ID
          if (litter && litter.id) {
            // Converter formato antigo para novo formato
            const newLitter = {
              name: `Ninhada ${litter.id}`,
              parents: {
                father: litter.idpai || 'Desconhecido',
                mother: litter.idmae || 'Desconhecido'
              },
              birthDate: null, // Não temos essa informação no formato antigo
              status: 'available',
              images: litter.foto_copy || []
            };
            
            try {
              await connection.query(
                'INSERT INTO litters (name, parents, birthDate, status, images) VALUES (?, ?, ?, ?, ?)',
                [
                  newLitter.name,
                  JSON.stringify(newLitter.parents),
                  newLitter.birthDate,
                  newLitter.status,
                  JSON.stringify(newLitter.images)
                ]
              );
              importedCount++;
            } catch (error) {
              console.error(`Erro ao importar ninhada ${litter.id}:`, error.message);
            }
          } else {
            console.log('Pulando ninhada sem ID');
          }
        }
        
        // Verificar quantas ninhadas foram realmente importadas
        const [newCount] = await connection.query('SELECT COUNT(*) as count FROM litters');
        console.log(`${newCount[0].count} ninhadas importadas com sucesso!`);
      }
    } else {
      console.log(`Tabela de ninhadas já contém ${littersCount[0].count} registros. Pulando importação.`);
    }
    
    console.log('Inicialização do banco de dados concluída com sucesso!');
    
  } catch (error) {
    console.error('Erro ao inicializar banco de dados:', error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
};

// Executar inicialização
initializeDatabase();