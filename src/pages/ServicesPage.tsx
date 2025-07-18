import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import { Dog, Home, Award, Stethoscope, Star } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle title="Nossos Serviços" subtitle="Contamos com os melhores profissionais do ramo, formando uma equipe altamente qualificada para atender e promover o melhor para seu cão!" center />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <ServiceCard
          title="Adestramento e Obediência"
          description="Um cão obediente e educado encanta a todos e ainda é motivo de orgulho para você!"
          icon={<Dog size={40} />}
        />
        <ServiceCard
          title="Hospedagem"
          description="Vai viajar? Hospede seu cão conosco!"
          icon={<Home size={40} />}
        />
        <ServiceCard
          title="Seu cão Campeão"
          description="Treinamento diferenciado e focado para cães de beleza!"
          icon={<Award size={40} />}
        />
        <ServiceCard
          title="Serviços Veterinários"
          description="Atendimentos diferenciados e a domicílio! Contate-nos"
          icon={<Stethoscope size={40} />}
        />
      </div>
    </div>
  );
};

export default ServicesPage;