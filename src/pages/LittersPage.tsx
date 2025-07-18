import React from 'react';
import { Calendar, Star, Shield, Heart } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const LittersPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-28 bg-gray-900">
        <div className="absolute inset-0 opacity-30">
          
        </div>
        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ninhadas Disponíveis</h1>
          <div className="h-1 w-20 bg-accent mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl">
            Filhotes de Rottweiler com excelente genética, saúde garantida e temperamento equilibrado.
          </p>
        </div>
      </section>

      {/* Current Litter */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Ninhada Atual" 
            subtitle="Filhotes disponíveis para reserva"
          />
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informações da Ninhada</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="text-primary mr-3" size={24} />
                    <div>
                      <p className="font-medium">Data de Nascimento</p>
                      <p className="text-gray-600">10/12/2024</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Star className="text-primary mr-3" size={24} />
                    <div>
                      <p className="font-medium">Pais</p>
                      <p className="text-gray-600">Orion x Radissa</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Shield className="text-primary mr-3" size={24} />
                    <div>
                      <p className="font-medium">Garantias</p>
                      <p className="text-gray-600">Pedigree CBKC, Microchip, Vacinas em dia</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Heart className="text-primary mr-3" size={24} />
                    <div>
                      <p className="font-medium">Disponibilidade</p>
                      <p className="text-gray-600">Reservas Abertas</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="font-bold mb-3">Incluso na Compra:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Pedigree CBKC
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Microchip internacional
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Primeira dose da vacina importada
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Vermifugação completa
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Kit filhote
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Contrato de compra e venda
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Suporte pós-venda
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-2xl font-bold text-primary mb-4">Interessado em reservar um filhote?</p>
              <p className="text-gray-600 mb-6">Entre em contato conosco para mais informações e disponibilidade</p>
              <a href="tel:+5511994424033" className="btn btn-primary text-lg">
                Ligue Agora: (11) 99442-4033
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Processo de Compra" 
            subtitle="Entenda como funciona o processo de reserva e aquisição dos nossos filhotes"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Contato Inicial</h3>
              <p className="text-gray-600">
                Entre em contato conosco para verificar a disponibilidade de filhotes 
                e esclarecer suas dúvidas sobre o processo de compra.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Reserva</h3>
              <p className="text-gray-600">
                Após a escolha do filhote, é realizado um contrato de reserva com 
                pagamento de 30% do valor total para garantir sua preferência.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <span className="text-primary font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Entrega</h3>
              <p className="text-gray-600">
                Com 60 dias de idade, o filhote estará pronto para ir para seu novo lar, 
                com toda documentação e procedimentos veterinários em dia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Perguntas Frequentes" 
            subtitle="Tire suas dúvidas sobre o processo de compra de filhotes"
          />
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Como é feita a reserva do filhote?</h3>
              <p className="text-gray-600">
                A reserva é feita mediante contrato e pagamento de 30% do valor total. 
                O restante é pago na retirada do filhote, quando ele completar 60 dias.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Vocês entregam em outros estados?</h3>
              <p className="text-gray-600">
                Sim, fazemos envio para todo o Brasil através de empresas especializadas 
                em transporte de animais, com toda segurança necessária.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Qual a garantia de saúde oferecida?</h3>
              <p className="text-gray-600">
                Oferecemos garantia de 15 dias para doenças infecciosas e 12 meses para 
                problemas genéticos hereditários, conforme contrato.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Posso visitar os filhotes antes da compra?</h3>
              <p className="text-gray-600">
                Sim, incentivamos a visita ao canil para conhecer os filhotes e seus pais. 
                As visitas devem ser agendadas previamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-3xl text-white font-bold mb-4">
            Pronto para ter um Rottweiler Von Olivio?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Entre em contato agora mesmo para reservar seu filhote ou 
            esclarecer suas dúvidas sobre nossa próxima ninhada.
          </p>
          <a href="tel:+5511994424033" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8">
            Ligue Agora: (11) 99442-4033
          </a>
        </div>
      </section>
    </div>
  );
};

export default LittersPage;