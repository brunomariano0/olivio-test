const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');
const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Configuração da conexão com o banco de dados MySQL
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'olivio_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Criar pool de conexões
const pool = mysql.createPool(dbConfig);

// Função para testar a conexão com o banco de dados
const testDatabaseConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
    connection.release();
    return true;
  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error);
    return false;
  }
};

// Testar conexão ao iniciar o servidor
testDatabaseConnection();

app.post('/send', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true, // porta 465 = true
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${nome}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: 'Nova mensagem do site',
    text: `
      Nome: ${nome}
      E-mail: ${email}
      Mensagem:
      ${mensagem}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'E-mail enviado com sucesso via Locaweb!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ error: 'Erro ao enviar e-mail.' });
  }
});

// Rotas para Cachorros (Dogs)
app.get('/api/dogs', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM dogs');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar cachorros:', error);
    res.status(500).json({ error: 'Erro ao buscar cachorros do banco de dados' });
  }
});

app.get('/api/dogs/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM dogs WHERE id = ?', [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Cachorro não encontrado' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Erro ao buscar cachorro:', error);
    res.status(500).json({ error: 'Erro ao buscar cachorro do banco de dados' });
  }
});

app.post('/api/dogs', async (req, res) => {
  try {
    const newDog = req.body;
    
    // Verificar campos obrigatórios
    if (!newDog.name) {
      return res.status(400).json({ error: 'Nome do cachorro é obrigatório' });
    }
    
    // Inserir no banco de dados
    const [result] = await pool.query(
      'INSERT INTO dogs (name, image, dados, titulos, pedigree) VALUES (?, ?, ?, ?, ?)',
      [
        newDog.name,
        newDog.image || '',
        JSON.stringify(newDog.dados || {}),
        JSON.stringify(newDog.titulos || []),
        newDog.pedigree || ''
      ]
    );
    
    // Retornar o cachorro com o ID gerado
    const insertedId = result.insertId;
    const [rows] = await pool.query('SELECT * FROM dogs WHERE id = ?', [insertedId]);
    
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error('Erro ao criar cachorro:', error);
    res.status(500).json({ error: 'Erro ao salvar novo cachorro no banco de dados' });
  }
});

app.put('/api/dogs/:id', (req, res) => {
  const dogsData = readJsonFile('dogs-v2.json');
  if (!dogsData) {
    return res.status(500).json({ error: 'Erro ao ler dados dos cachorros' });
  }
  
  const dogIndex = dogsData[2].data.findIndex(dog => dog.id === req.params.id);
  if (dogIndex === -1) {
    return res.status(404).json({ error: 'Cachorro não encontrado' });
  }
  
  const updatedDog = { ...dogsData[2].data[dogIndex], ...req.body };
  updatedDog.id = req.params.id; // Garantir que o ID não seja alterado
  
  dogsData[2].data[dogIndex] = updatedDog;
  
  if (writeJsonFile('dogs-v2.json', dogsData)) {
    res.json(updatedDog);
  } else {
    res.status(500).json({ error: 'Erro ao atualizar cachorro' });
  }
});

app.delete('/api/dogs/:id', async (req, res) => {
  try {
    const dogId = req.params.id;
    
    // Verificar se o cachorro existe
    const [checkRows] = await pool.query('SELECT * FROM dogs WHERE id = ?', [dogId]);
    if (checkRows.length === 0) {
      return res.status(404).json({ error: 'Cachorro não encontrado' });
    }
    
    // Excluir do banco de dados
    await pool.query('DELETE FROM dogs WHERE id = ?', [dogId]);
    
    res.status(200).json({ message: 'Cachorro excluído com sucesso' });
  } catch (error) {
    console.error('Erro ao excluir cachorro:', error);
    res.status(500).json({ error: 'Erro ao excluir cachorro do banco de dados' });
  }
});

// Rotas para Ninhadas
app.get('/api/litters', (req, res) => {
  const littersData = readJsonFile('ninhada.json');
  if (!littersData) {
    return res.status(500).json({ error: 'Erro ao ler dados das ninhadas' });
  }
  res.json(littersData[2].data);
});

app.get('/api/litters/:id', (req, res) => {
  const littersData = readJsonFile('ninhada.json');
  if (!littersData) {
    return res.status(500).json({ error: 'Erro ao ler dados das ninhadas' });
  }
  
  const litter = littersData[2].data.find(litter => litter.id === req.params.id);
  if (!litter) {
    return res.status(404).json({ error: 'Ninhada não encontrada' });
  }
  
  res.json(litter);
});

app.post('/api/litters', (req, res) => {
  const littersData = readJsonFile('ninhada.json');
  if (!littersData) {
    return res.status(500).json({ error: 'Erro ao ler dados das ninhadas' });
  }
  
  const newLitter = req.body;
  // Gerar ID único (maior ID + 1)
  const maxId = Math.max(...littersData[2].data.map(litter => parseInt(litter.id)), 0);
  newLitter.id = String(maxId + 1);
  
  littersData[2].data.push(newLitter);
  
  if (writeJsonFile('ninhada.json', littersData)) {
    res.status(201).json(newLitter);
  } else {
    res.status(500).json({ error: 'Erro ao salvar nova ninhada' });
  }
});

app.put('/api/litters/:id', (req, res) => {
  const littersData = readJsonFile('ninhada.json');
  if (!littersData) {
    return res.status(500).json({ error: 'Erro ao ler dados das ninhadas' });
  }
  
  const litterIndex = littersData[2].data.findIndex(litter => litter.id === req.params.id);
  if (litterIndex === -1) {
    return res.status(404).json({ error: 'Ninhada não encontrada' });
  }
  
  const updatedLitter = { ...littersData[2].data[litterIndex], ...req.body };
  updatedLitter.id = req.params.id; // Garantir que o ID não seja alterado
  
  littersData[2].data[litterIndex] = updatedLitter;
  
  if (writeJsonFile('ninhada.json', littersData)) {
    res.json(updatedLitter);
  } else {
    res.status(500).json({ error: 'Erro ao atualizar ninhada' });
  }
});

app.delete('/api/litters/:id', (req, res) => {
  const littersData = readJsonFile('ninhada.json');
  if (!littersData) {
    return res.status(500).json({ error: 'Erro ao ler dados das ninhadas' });
  }
  
  const litterIndex = littersData[2].data.findIndex(litter => litter.id === req.params.id);
  if (litterIndex === -1) {
    return res.status(404).json({ error: 'Ninhada não encontrada' });
  }
  
  littersData[2].data.splice(litterIndex, 1);
  
  if (writeJsonFile('ninhada.json', littersData)) {
    res.status(200).json({ message: 'Ninhada removida com sucesso' });
  } else {
    res.status(500).json({ error: 'Erro ao remover ninhada' });
  }
});

// Rota para autenticação do admin
app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  // Credenciais fixas para demonstração (em produção, use banco de dados e hash)
  if (username === 'admin' && password === 'admin123') {
    res.json({ 
      success: true, 
      token: 'admin-token-123', // Em produção, use JWT
      user: { username, role: 'admin' }
    });
  } else {
    res.status(401).json({ success: false, message: 'Credenciais inválidas' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
