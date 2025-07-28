import React, { useState } from 'react';
import { Calendar, Star, Shield, Heart, Users, MapPin, Phone, Mail, Camera } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ImageModal from '../components/ImageModal';
import LitterCard from '../components/LitterCard';
import { currentLitters, getAvailableLitters } from '../data/litters';

const LittersPage: React.FC = () => {
  const [modalImage, setModalImage] = useState<{
    src: string;
    alt: string;
    title: string;
    description: string;
  } | null>(null);

  const openModal = (image: { src: string; alt: string; title: string; description: string }) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const availableLitters = getAvailableLitters();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-28 bg-gray-900">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/src/img/filhote.jpg" 
            alt="Filhotes de Rottweiler" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ninhadas Disponíveis</h1>
          <div className="h-1 w-20 bg-accent mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl">
            Filhotes de Rottweiler com excelente genética, saúde garantida e temperamento equilibrado.
          </p>
        </div>
      </section>
     

      {/* Todas Ninhadas */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Todas as Ninhadas" 
            subtitle="Histórico completo de nossas ninhadas e linhagens."
          />
          
          <div className="space-y-8">
            {currentLitters.map((litter) => (
              <div key={litter.id} className="bg-white rounded-lg shadow-lg p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-primary">{litter.name}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        litter.status === 'available' ? 'text-green-600 bg-green-100' :
                        litter.status === 'reserved' ? 'text-yellow-600 bg-yellow-100' :
                        'text-red-600 bg-red-100'
                      }`}>
                        {litter.status === 'available' ? 'Disponível' :
                         litter.status === 'reserved' ? 'Reservado' : 'Vendido'}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Nascimento:</strong> {litter.birthDate}</p>
                    </div>
                    
                    <p className="text-gray-600 mt-4">{litter.description}</p>
                    
                    {/* Contact Buttons for each litter */}
                    <div className="mt-6 space-y-3">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Interessado? Entre em contato:</h4>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <a 
                          href="https://wa.me/5511994424033" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                          </svg>
                          WhatsApp
                        </a>
                        <a 
                          href="mailto:canilvonolivio@gmail.com" 
                          className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {litter.images.slice(0, 2).map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Filhote ${index + 1}`}
                        className="w-full rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Informações Importantes" 
            subtitle="Tudo que você precisa saber sobre nossos filhotes"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-bold">Garantias</h3>
              </div>
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
                  Vacinas em dia
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Vermifugação completa
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Heart className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-bold">Incluso na Compra</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Kit filhote completo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Contrato de compra e venda
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Suporte pós-venda
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Orientações de cuidados
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <MapPin className="text-primary mr-3" size={24} />
                <h3 className="text-xl font-bold">Entrega</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Envio para todo Brasil
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Transporte seguro
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Acompanhamento da viagem
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Visitas agendadas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionTitle 
            title="Entre em Contato" 
            subtitle="Estamos aqui para esclarecer suas dúvidas e ajudar na escolha do seu filhote"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Phone className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Telefone</h3>
              <p className="text-gray-600">(11) 99442-4033</p>
              <p className="text-sm text-gray-500">Segunda a Domingo</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <MapPin className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Localização</h3>
              <p className="text-gray-600">Santo André, SP</p>
              <p className="text-sm text-gray-500">Visitas agendadas</p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <Camera className="text-primary mx-auto mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Fotos Atualizadas</h3>
              <p className="text-gray-600">Instagram</p>
              <a 
                href="https://www.instagram.com/canilvonolivio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                @canilvonolivio
              </a>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+5511994424033" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8">
              <Phone className="mr-2" size={20} />
              Ligue Agora: (11) 99442-4033
            </a>
            <a href="https://wa.me/5511994424033" className="btn bg-green-600 hover:bg-green-700 text-white text-lg px-8">
              <Mail className="mr-2" size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <ImageModal
          isOpen={!!modalImage}
          onClose={closeModal}
          imageSrc={modalImage.src}
          imageAlt={modalImage.alt}
          title={modalImage.title}
          description={modalImage.description}
        />
      )}
    </div>
  );
};

export default LittersPage;