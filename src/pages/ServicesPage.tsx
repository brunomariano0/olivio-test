import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle title="Our Services" subtitle="Professional Dog Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <ServiceCard
          title="Dog Training"
          description="Professional training services to help your dog become well-behaved and obedient. We offer both group and private sessions."
          price="From $75/session"
        />
        <ServiceCard
          title="Breeding Consultation"
          description="Expert guidance on responsible breeding practices, genetic health testing, and puppy care."
          price="From $150/consultation"
        />
        <ServiceCard
          title="Health Screening"
          description="Comprehensive health screenings and genetic testing for breeding dogs to ensure healthy bloodlines."
          price="From $200/screening"
        />
        <ServiceCard
          title="Puppy Socialization"
          description="Early socialization programs to help puppies develop into well-adjusted adult dogs."
          price="From $50/session"
        />
        <ServiceCard
          title="Stud Services"
          description="Professional stud services with our champion bloodline dogs, including health certifications."
          price="Contact for pricing"
        />
        <ServiceCard
          title="Breeding Program Support"
          description="Full-service support for your breeding program, including whelping assistance and puppy care guidance."
          price="Custom packages available"
        />
      </div>
    </div>
  );
};

export default ServicesPage;