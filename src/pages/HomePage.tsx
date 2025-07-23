import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Heart, Shield, Zap, Users, DogIcon } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import DogCard from '../components/DogCard';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { ShoppingBag, X, Package, Truck, CreditCard, Gift, Star } from 'lucide-react';
import { Calendar, User, Phone } from 'lucide-react';


import Dog from '../img/rottweiler.jpg';
import Jester from '../img/Jester.jpg';
import Quex from '../img/Quex.jpg';
import Amy from '../img/Amy.jpg';
import Filhotes from '../img/filhote.jpg';
import Capa from '../img/Capa.png';

import Royal from '../img/Royal.png';
import Msd from '../img/MSD.png';
import Bravecto from '../img/Bravecto.png';
import Vetnil from '../img/Vetnil.png';
import Canil from '../img/canil.jpg';

import { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
  const [showStoreModal, setShowStoreModal] = useState(false);

  useEffect(() => {
    setShowStoreModal(true);
  }, []);

  return (

    
    <div>
      {/* Store Announcement Modal */}
      {showStoreModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl transform transition-all">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <ShoppingBag className="text-primary" size={28} />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-3xl font-bold text-primary">Nova Loja Virtual!</h2>
                    <p className="text-gray-600">Produtos exclusivos para seu Rottweiler</p>
                  </div>
                </div>
                <button 
                  onClick={() => setShowStoreModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="mb-8">
                <p className="text-lg text-gray-700 mb-6">
                  Estamos muito felizes em anunciar nossa nova loja virtual com produtos selecionados especialmente para você!
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Package className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Produtos Premium</h4>
                      <p className="text-sm text-gray-600">Rações e acessórios de alta qualidade</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Truck className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Entrega Segura</h4>
                      <p className="text-sm text-gray-600">Enviamos para todo Brasil</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CreditCard className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Pagamento Facilitado</h4>
                      <p className="text-sm text-gray-600">Parcele suas compras</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Star className="text-primary mt-1" size={20} />
                    <div>
                      <h4 className="font-medium">Produtos Exclusivos</h4>
                      <p className="text-sm text-gray-600">Itens selecionados para seu pet</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-4">
                <button 
                  onClick={() => setShowStoreModal(false)}
                  className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Fechar
                </button>
                <a 
                  href="/store" 
                  className="btn btn-primary flex items-center gap-2"
                >
                  <Gift size={20} />
                  Visitar Loja
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/50">
          <img 
            src={Capa} 
            alt="Rottweiler" 
            className="w-full h-full object-cover object-top mix-blend-overlay"
          />
        </div>
        <div className="container relative h-full flex items-center justify-end">
  <div className="max-w-3xl animate-fade-in text-right">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">
              Canil Von Olivio
            </h1>
            <h2 className="text-2xl md:text-3xl text-accent font-bold mb-6">
              Melhor Criador da Raça Rottweiler - 2002 a 2022
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Há mais de 20 anos criando exemplares superiores com genética comprovada, 
              temperamento equilibrado e saúde garantida.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/dogs" className="btn btn-primary">
                Conheça Nossos Cães
              </Link>
              <Link to="/litters" className="btn btn-outline bg-transparent text-white border-white hover:bg-white hover:text-secondary">
                Filhotes Disponíveis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-right">
              <SectionTitle 
                title="Sobre o Canil Von Olivio" 
                subtitle="Especialistas em criação da raça Rottweiler com foco em qualidade, saúde e temperamento."
                center={false}
              />
              
              <p className="text-gray-600 mb-6">
                Fundado em 2002, o Canil Von Olivio se estabeleceu como referência na criação de Rottweilers 
                de qualidade superior no Brasil, conquistando o título de Melhor Criador da Raça 
                por 20 anos consecutivos.
              </p>
              
              <p className="text-gray-600 mb-6">
                Nossa filosofia de criação busca preservar as características originais da raça, 
                valorizando a saúde, o temperamento equilibrado e a estrutura física adequada, 
                seguindo os mais altos padrões internacionais.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center">
                  <Shield className="text-primary mr-3" size={24} />
                  <span className="font-medium">Saúde Garantida</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-primary mr-3" size={24} />
                  <span className="font-medium">Premiados</span>
                </div>
                <div className="flex items-center">
                  <Heart className="text-primary mr-3" size={24} />
                  <span className="font-medium">Criação Responsável</span>
                </div>
                <div className="flex items-center">
                  <Zap className="text-primary mr-3" size={24} />
                  <span className="font-medium">Genética Superior</span>
                </div>
              </div>
              
              <Link to="/about" className="btn btn-primary">
                Saiba Mais
              </Link>
            </div>
            
            <div className="relative h-[500px] animate-slide-up">
              <img 
                src={Canil}
                alt="Foto Canil" 
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent text-secondary p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">20+ Anos</h3>
                <p>de Excelência em Criação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dogs */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Nossos Destaques" 
            subtitle="Conheça alguns dos exemplares premiados que compõem nosso plantel de reprodutores."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DogCard 
              name="JESTER"
              image={Jester}
              gender="Macho"
              birthDate="15/05/2019"
              titles={["Campeão Brasileiro", "Melhor da Raça 2021"]}
            />
            <DogCard 
              name="QUEX"
              image={Quex}
              gender="Macho"
              birthDate="22/07/2020"
              titles={["Campeã Brasileira", "Melhor Fêmea 2022"]}
            />
            <DogCard 
              name="AMMY"
              image={Amy}
              gender="Fêmea"
              birthDate="08/03/2021"
              titles={["Jovem Promessa 2022"]}
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/dogs" className="btn btn-primary">
              Ver Todo o Plantel
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Nossos Serviços" 
            subtitle="Oferecemos serviços completos para o bem-estar e desenvolvimento do seu Rottweiler."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Adestramento e Obediência"
              description="Um cão obediente e educado encanta a todos e ainda é motivo de orgulho para você!"
              icon={<DogIcon size={24} />}
              link="/services#training"
            />
            <ServiceCard 
              title="Hospedagem Canina"
              description="Vai viajar? Hospede seu cão em um ambiente seguro, com supervisão profissional 24h."
              icon={<Heart size={24} />}
              link="/services#boarding"
            />
            <ServiceCard 
              title="Treinamento para Exposições"
              description="Treinamento diferenciado e focado para cães de beleza com potencial para campeonatos!"
              icon={<Award size={24} />}
              link="/services#show"
            />
            <ServiceCard 
              title="Consultoria em Nutrição"
              description="Orientação profissional sobre a alimentação ideal para cada fase da vida do seu Rottweiler."
              icon={<Shield size={24} />}
              link="/services#nutrition"
            />
            <ServiceCard 
              title="Reprodução Assistida"
              description="Serviços especializados para garantir ninhadas saudáveis e de alto padrão genético."
              icon={<Users size={24} />}
              link="/services#breeding"
            />
            <ServiceCard 
              title="Acompanhamento Veterinário"
              description="Assistência veterinária especializada em Rottweilers, com foco em medicina preventiva."
              icon={<Heart size={24} />}
              link="/services#veterinary"
            />
          </div>
        </div>
      </section>

      {/* Call to Action - Available Puppies */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-black/70">
          <img 
            src={Filhotes} 
            alt="Rottweiler puppies" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="container relative text-center">
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            Filhotes Disponíveis
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Compre hoje mesmo o seu Filhote de Rottweiler. Despachamos para todo Brasil!
          </p>
          <div className="bg-white/95 p-8 rounded-xl max-w-3xl mx-auto mb-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">RESERVAS ABERTAS</h3>
                  <div className="h-1 w-20 bg-primary rounded-full mb-4"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-primary" size={20} />
                    <p className="text-gray-700">Nascimento: 10/12/2024</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="text-primary" size={20} />
                    <p className="text-gray-700">Pais: Orion x Radissa</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium mb-2">Para maiores informações:</p>
                  <p className="text-xl font-bold text-primary flex items-center justify-center gap-2">
                    <Phone size={20} />
                    11-99442-4033 (REGINALDO)
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={Jester} 
                  alt="Orion" 
                  className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src={Amy} 
                  alt="Radissa" 
                  className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
                <p className="text-center text-sm font-medium text-gray-600">ORION</p>
                <p className="text-center text-sm font-medium text-gray-600">RADISSA</p>
              </div>
            </div>
          </div>
          
          <Link to="/litters" className="btn btn-accent text-lg px-8 py-3 hover:scale-105 transition-transform">
            Mais Informações
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="O Que Dizem Nossos Clientes" 
            subtitle="Depoimentos de pessoas que adquiriram filhotes ou utilizaram nossos serviços."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Carlos Silva"
              location="São Paulo, SP"
              text="Adquiri meu Rottweiler com o Canil Von Olivio há 3 anos e não poderia estar mais satisfeito. Além da beleza excepcional, meu cão tem um temperamento incrível e saúde de ferro."
              rating={5}
            />
            <TestimonialCard 
              name="Mariana Costa"
              location="Rio de Janeiro, RJ"
              text="O serviço de adestramento é fantástico! Em poucas semanas minha cadela já estava muito mais obediente e sociável. Os profissionais são extremamente capacitados."
              rating={5}
            />
            <TestimonialCard 
              name="Roberto Mendes"
              location="Belo Horizonte, MG"
              text="Já hospedei meu Rottweiler várias vezes no canil e sempre volta super feliz e bem cuidado. O ambiente é limpo e organizado, e a equipe é muito atenciosa."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* Partners/Sponsors */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Nossos Patrocinadores" 
            subtitle="Agradecemos aos nossos patrocinadores que acreditaram em nossa causa e se propuseram a ajudar a viabilização desse projeto."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            <div className="flex justify-center">
              <img 
                src={Royal} 
                alt="Royal Canin" 
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={Msd}
                alt="MSD Saúde Animal" 
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={Bravecto} 
                alt="Bravecto" 
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src={Vetnil} 
                alt="Vetnil" 
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-3xl text-white font-bold mb-4">
            Tem interesse em nossos cães ou serviços?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco para mais informações, agendamentos ou para verificar 
            a disponibilidade de filhotes.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8">
            Fale Conosco
          </Link>
        </div>
      </section>

      <a 
  href="https://wa.me/5511994424033?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20saber%20mais%20sobre%20os%20filhotes%20do%20Canil%20Von%20Olivio!" 
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-6 left-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    fill="currentColor" 
    className="w-5 h-5"
  >
    <path d="M380.9 97.1C339-12.7 195.6-35.2 111.7 48.9 47.5 113.2 32.1 209.3 70.6 285.1L4.2 469.4c-2.3 6.5 4.2 12.7 10.7 10.7l183.7-66.2c73.8 37.9 163.8 24.3 223.4-35.4 83.9-83.9 61.4-227.3-41.1-280.4zM265.8 367.6c-54.4 0-105.1-26.5-134.5-71.2l-9.6-14.5-57.6 20.7 20.7-57.6-14.5-9.6c-44.7-29.4-71.2-80.1-71.2-134.5 0-94.1 76.6-170.7 170.7-170.7s170.7 76.6 170.7 170.7-76.6 170.6-170.7 170.6z"/>
  </svg>
  Fale Conosco
</a>


    </div>
    
  );
};

export default HomePage;

