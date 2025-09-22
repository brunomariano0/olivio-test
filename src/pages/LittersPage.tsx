import React, { useState, useEffect } from 'react';
import { Camera, Heart, Mail, MapPin, Phone, Shield } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ImageModal from '../components/ImageModal';

const LittersPage: React.FC = () => {
  const [litters, setLitters] = useState<any[]>([]);
  const [modalImage, setModalImage] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [dogs, setDogs] = useState<any[]>([]);

  useEffect(() => {
    // Carrega ninhadas
    fetch("/ninhada.json")
      .then((res) => res.json())
      .then((data) => {
        // Ordena do maior para o menor id (mais recente primeiro)
        const littersSorted = [...data[2].data].sort((a, b) => Number(b.id) - Number(a.id));
        setLitters(littersSorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar ninhadas:", err);
        setLoading(false);
      });

    // Carrega cães e monta campo image
    fetch("/dogs-v2.json")
      .then((res) => res.json())
      .then((data) => {
        // Extrai o array de cães e monta o campo image
        const dogsArray = data[2].data.map((dog: any) => ({
          id: dog.id,
          name: dog.nome,
          image: `https://canilvonolivio.com.br/fotos/${dog.imagem}`,
        }));
        setDogs(dogsArray);
      })
      .catch((err) => console.error("Erro ao carregar cães:", err));
  }, []);

  // Função para buscar imagem do cão pelo id
  const getDogImageById = (id: string) => {
    const dog = dogs.find((d: any) => d.id === id);
    return dog ? dog.image : null; // use 'image' aqui
  };

  // Função para buscar nome do cão pelo id
  const getDogNameById = (id: string) => {
    const dog = dogs.find((d: any) => d.id === id);
    return dog ? dog.name : id;
  };

  const openModal = (image: { src: string; alt: string; title: string; description: string }) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-28 bg-gray-900">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/src/img/filhote.jpg" 
            alt="Filhotes de Rottweile" 
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

          {loading ? (
            <p className="text-center text-gray-600">Carregando ninhadas...</p>
          ) : litters.length === 0 ? (
            <p className="text-center text-gray-600">Nenhuma ninhada encontrada.</p>
          ) : (
            <div className="space-y-8">
              {litters.map((litter) => (
                <div key={litter.id} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-primary">Ninhada #{litter.id}</h3>
                        <span className="px-3 py-1 rounded-full text-sm font-medium text-green-600 bg-green-100">
                          Disponível
                        </span>
                      </div>

                      <div className="space-y-2 text-gray-700">
                        <p><strong>Pai:</strong> {getDogNameById(litter.idpai)}</p>
                        <p><strong>Mãe:</strong> {getDogNameById(litter.idmae)}</p>
                      </div>

                      <div className="mt-4 text-gray-600" dangerouslySetInnerHTML={{ __html: litter.infadd }} />
                      <p>{litter.descricao ?? ""}</p>

                      <div className="mt-6 space-y-3">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Interessado? Entre em contato:</h4>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a 
                            href="https://wa.me/5511994424033" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                          >
                            WhatsApp
                          </a>
                          <a 
                            href="mailto:vonolivio@canilvonolivio.com.br" 
                            className="inline-flex items-center justify-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Fotos dos pais e filhotes */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Pai */}
                      {getDogImageById(litter.idpai) && (
                        <img
                          src={getDogImageById(litter.idpai)}
                          alt="Pai"
                          className="w-full rounded-lg shadow-md"
                        />
                      )}
                      {/* Mãe */}
                      {getDogImageById(litter.idmae) && (
                        <img
                          src={getDogImageById(litter.idmae)}
                          alt="Mãe"
                          className="w-full rounded-lg shadow-md"
                        />
                      )}
                      {/* Filhotes */}
                      {Object.keys(litter)
                        .filter((key) => key.startsWith("foto_copy") && litter[key])
                        .map((key, index) => (
                          <img 
                            key={index}
                            src={litter[key]}
                            alt={`Filhote ${index + 1}`}
                            className="w-full rounded-lg shadow-md"
                          />
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

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
