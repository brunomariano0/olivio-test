import React, { useEffect, useState } from 'react';
import { Award, Calendar, QrCode, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PedigreeTree from '../components/PedigreeTree';


interface DogTitle {
  exposicao: string;
  classificacao: string;
  juiz: string;
  data: string;
  local: string;
}

interface Dog {
  id: string;
  name: string;
  image: string;
  dados: {
    numero: string;
    apelido: string;
    nome: string;
    rg: string;
    microchip: string;
    dataNascimento: string;
    sexo: string;
    displasia: string;
  };
  titulos: DogTitle[];
  pedigree: {
    pai: string;
    mae: string;
    avosPaternos: string[];
    avosMaternos: string[];
    bisavosPaternos: string[];
    bisavosMaternos: string[];
  };
}


  
const DogsPage: React.FC = () => {
  const [dogs, setDogs] = useState<Dog[]>([]); 
  const [selectedDog, setSelectedDog] = useState<Dog | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

 

  useEffect(() => {
    fetch('/dogs-v2.json')
      .then((res) => res.json())
      .then((data) => {
        const filtrados = data[2].data.map((dog: any) => ({
          id: dog.id,
          name: dog.nome,
          image: `https://canilvonolivio.com.br/fotos/${dog.imagem}`,
          dados: {
            numero: dog.id,
            apelido: dog.apelido,
            nome: dog.nome,
            rg: dog.rg,
            microchip: dog.microchip,
            dataNascimento: dog.dtns,
            sexo: dog.sexo === "F\u00c3\u00aamea" ? "Fêmea" : dog.sexo,
            displasia: dog.ppa,
          },
          titulos: [
            ...Array.from({ length: 10 }).map((_, i) => ({
              exposicao: dog[`exp_copy${10 - i}`] || '',
              classificacao: dog[`class_copy${10 - i}`] || '',
              juiz: dog[`juiz_copy${10 - i}`] || '',
              data: dog[`data_copy${10 - i}`] || '',
              local: dog[`local_copy${10 - i}`] || '',
            })).filter(t => t.exposicao || t.classificacao || t.juiz || t.data || t.local),
          ],
          pedigree: {
            pai: dog.lv1_pai || '',
            mae: dog.lv1_mae || '',
            avosPaternos: [dog.lv2_pai1, dog.lv2_pai2].filter(Boolean),
            avosMaternos: [dog.lv2_mae1, dog.lv2_mae2].filter(Boolean),
            bisavosPaternos: [dog.lv3_pai1, dog.lv3_pai2, dog.lv3_pai3, dog.lv3_pai4].filter(Boolean),
            bisavosMaternos: [dog.lv3_mae1, dog.lv3_mae2, dog.lv3_mae3, dog.lv3_mae4].filter(Boolean),
          },
        }))
        .sort((a: any, b: any) => a.name.localeCompare(b.name)); // <-- Adicione esta linha para ordenar

        setDogs(filtrados);
      });
  }, []);

  console.log(dogs)
  

  const openModal = (dog: Dog) => {
    setSelectedDog(dog);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDog(null);
  };

  const navigateDog = (direction: 'prev' | 'next') => {
    if (!selectedDog) return;
    
    const currentIndex = dogs.findIndex(dog => dog.id === selectedDog.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = currentIndex === dogs.length - 1 ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex === 0 ? dogs.length - 1 : currentIndex - 1;
    }
    
    setSelectedDog(dogs[newIndex]);
  };

  return (
    <div>
      {/* Hero Section */}
      

      {/* Dogs Grid */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Reprodutores" 
            subtitle="Cães selecionados com rigorosos critérios de saúde, temperamento e morfologia."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {dogs.map((dog) => (
              <div 
                key={dog.id}
                className="group relative cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                onClick={() => openModal(dog)}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={dog.image} 
                    alt={dog.name} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{dog.name}</h3>
                    <p className="text-sm opacity-90">{dog.dados.sexo}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                    dog.dados.sexo.toLowerCase() === 'macho' ? 'bg-blue-600' : 'bg-pink-600'
                  }`}>
                    {dog.dados.sexo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dog Details Modal */}
      {isModalOpen && selectedDog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-7xl max-h-[90vh] overflow-y-auto relative">
            {/* Navigation Arrows */}
            <button
              onClick={() => navigateDog('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-all z-50"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateDog('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-all z-50"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative p-8">
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <span className="sr-only">Fechar</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-3xl font-bold mb-8 text-center">{selectedDog.name}</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <img 
                    src={selectedDog.image} 
                    alt={selectedDog.name} 
                    className="w-full max-h-[600px] object-contain rounded-lg shadow-md"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Dados do Cão</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-2 font-medium">#</td>
                          <td>{selectedDog.dados.numero}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Apelido:</td>
                          <td>{selectedDog.dados.apelido}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Nome:</td>
                          <td>{selectedDog.dados.nome}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">RG:</td>
                          <td>{selectedDog.dados.rg}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Microchip:</td>
                          <td>{selectedDog.dados.microchip}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Data de nascimento:</td>
                          <td>{selectedDog.dados.dataNascimento}</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2 font-medium">Sexo:</td>
                          <td>{selectedDog.dados.sexo}</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-medium">Displasia/PPA/APRS:</td>
                          <td>{selectedDog.dados.displasia}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Títulos</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3">Exposição</th>
                        <th className="text-left p-3">Classificação</th>
                        <th className="text-left p-3">Juiz</th>
                        <th className="text-left p-3">Data</th>
                        <th className="text-left p-3">Local</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedDog.titulos.map((titulo, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-3">{titulo.exposicao}</td>
                          <td className="p-3">{titulo.classificacao}</td>
                          <td className="p-3">{titulo.juiz}</td>
                          <td className="p-3">{titulo.data}</td>
                          <td className="p-3">{titulo.local}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <PedigreeTree
                  pai={selectedDog.pedigree.pai}
                  mae={selectedDog.pedigree.mae}
                  avosPaternos={selectedDog.pedigree.avosPaternos}
                  avosMaternos={selectedDog.pedigree.avosMaternos}
                  bisavosPaternos={selectedDog.pedigree.bisavosPaternos}
                  bisavosMaternos={selectedDog.pedigree.bisavosMaternos}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DogsPage;
