import React from 'react';
import { Shield, Award, Heart, Users, ThumbsUp, DogIcon } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

// Imagens
import Brava from '../img/Brava.jpg';
import Berlin from '../img/Berlin.jpg'
import Blanca from '../img/Blanca.jpg'
import Amy from '../img/Amy.jpg'

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero */}      

      {/* History Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <SectionTitle 
                title="Nossa História" 
                subtitle="Uma trajetória de paixão e dedicação à raça Rottweiler."
                center={false}
              />
              
              <p className="text-gray-600 mb-6">
                Fundado em 2002 por Reginaldo Olivio, o Canil Von Olivio nasceu da paixão por uma raça 
                incomparável: o Rottweiler. O que começou como um sonho de criar exemplares de qualidade 
                superior evoluiu para um projeto reconhecido internacionalmente.
              </p>
              
              <p className="text-gray-600 mb-6">
                Nos primeiros anos, o foco estava em estudar profundamente as linhagens e a 
                genética da raça. Com investimentos constantes em exemplares de alta qualidade e 
                parcerias com criadores renomados da Europa, o plantel foi se aprimorando.
              </p>
              
              <p className="text-gray-600 mb-6">
                Em 2005, conquistamos nosso primeiro título de Melhor Criador em uma exposição 
                nacional. Desde então, acumulamos consecutivamente o título de Melhor Criador 
                da Raça Rottweiler no Brasil, de 2002 a 2022.
              </p>
              
              <p className="text-gray-600">
                Hoje, o Canil Von Olivio é sinônimo de excelência e referência para criadores 
                e entusiastas da raça em todo o Brasil, mantendo o compromisso de preservar 
                e aprimorar as características genuínas do Rottweiler.
              </p>
            </div>
            
            <div className="relative h-[750px] order-1 lg:order-2">
              <img 
                src={Brava} 
                alt="Brava" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              <div className="absolute top-4 left-4 bg-primary text-white p-4 rounded">
                <span className="block text-3xl font-bold">20+</span>
                <span>Anos de Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Missão e Valores" 
            subtitle="Nossos princípios fundamentais que orientam cada decisão e ação."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm h-full">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <Heart className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p className="text-gray-600">
                Criar Rottweilers de excelência, preservando as características originais da raça, 
                promovendo saúde, temperamento equilibrado e conformação ideal, contribuindo para 
                a valorização e o reconhecimento desta extraordinária raça.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm h-full">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <DogIcon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-gray-600">
                Ser reconhecido internacionalmente como referência em criação de Rottweilers, 
                estabelecendo novos patamares de qualidade e excelência, influenciando positivamente 
                o desenvolvimento da raça no Brasil e no mundo.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm h-full">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <Shield className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Ética e transparência em todas as atividades
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Compromisso com o bem-estar animal
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Excelência e aprimoramento contínuo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Responsabilidade com clientes e comunidade
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Preservação da essência da raça Rottweiler
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Nossa Abordagem" 
            subtitle="Como trabalhamos para garantir a excelência em nossa criação."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Shield className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Seleção Genética Rigorosa</h3>
                    <p className="text-gray-600">
                      Cada reprodutor é cuidadosamente selecionado com base em genealogia, 
                      saúde, temperamento e conformação, seguindo os mais altos padrões internacionais.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cuidados de Saúde Preventivos</h3>
                    <p className="text-gray-600">
                      Todos os nossos cães passam por exames preventivos regulares e testes 
                      genéticos para garantir a saúde e a longevidade da linhagem.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Award className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Participação em Exposições</h3>
                    <p className="text-gray-600">
                      Participamos ativamente de exposições nacionais e internacionais, 
                      validando a qualidade de nossos exemplares por juízes especializados.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Users className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Socialização e Treinamento</h3>
                    <p className="text-gray-600">
                      Nossos filhotes recebem socialização precoce e estimulação adequada, 
                      preparando-os para serem cães equilibrados e felizes em seus novos lares.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={Brava} 
                alt="Brava" 
                className="w-full h-85 object-cover bg-white rounded-lg shadow-md" 
              />
              <img 
                src={Berlin} 
                alt="Berlin" 
                className="w-full h-85 object-cover bg-white rounded-lg shadow-md" 
              />
              <img 
                src={Blanca} 
                alt="Blanca" 
                className="w-full h-85 object-cover bg-white rounded-lg shadow-md" 
              />
              <img 
                src={Amy} 
                alt="Amy" 
                className="w-full h-85 object-cover bg-white rounded-lg shadow-md" 
              />
            </div>
          </div>
        </div>
      </section>

     

      {/* Achievements */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Nossos Reconhecimentos" 
            subtitle="Principais conquistas e premiações ao longo de nossa história."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-20 h-20 flex items-center justify-center rounded-full mb-6">
                <Award className="text-primary" size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-2">20+</h3>
              <p className="font-medium">Anos como Melhor Criador</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-20 h-20 flex items-center justify-center rounded-full mb-6">
                <Heart className="text-primary" size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="font-medium">Filhotes Criados</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-20 h-20 flex items-center justify-center rounded-full mb-6">
                <ThumbsUp className="text-primary" size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-2">300+</h3>
              <p className="font-medium">Clientes Satisfeitos</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm">
              <div className="bg-primary/10 w-20 h-20 flex items-center justify-center rounded-full mb-6">
                <Shield className="text-primary" size={36} />
              </div>
              <h3 className="text-3xl font-bold mb-2">150+</h3>
              <p className="font-medium">Títulos em Exposições</p>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Principais Títulos</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold">Melhor Criador da Raça Rottweiler</h4>
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">2002-2022</span>
                </div>
                <p className="text-gray-600 mt-2">Confederação Brasileira de Cinofilia (CBC)</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold">Grande Campeão Brasileiro - Orion Von Olivio</h4>
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">2021</span>
                </div>
                <p className="text-gray-600 mt-2">Confederação Brasileira de Cinofilia (CBC)</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold">Melhor Canil de Rottweiler da América Latina</h4>
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">2018</span>
                </div>
                <p className="text-gray-600 mt-2">Federação Cinológica Internacional (FCI)</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold">Prêmio Excelência em Criação</h4>
                  <span className="bg-primary text-white px-3 py-1 rounded text-sm">2015</span>
                </div>
                <p className="text-gray-600 mt-2">Associação Brasileira de Rottweiler</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;