import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Entre em Contato" 
                subtitle="Estamos à disposição para atender suas necessidades e responder suas dúvidas."
                center={false}
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Telefone</h3>
                    <p className="text-gray-600">+55 (11) 99442-4033</p>
                    <p className="text-gray-600">+55 (11) 4479-0700</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <p className="text-gray-600">contato@canilvonolivio.com.br</p>
                    <p className="text-gray-600">reginaldo@canilvonolivio.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Endereço</h3>
                    <p className="text-gray-600">São Paulo, SP - Brasil</p>
                    <p className="text-gray-600">Visitas apenas com agendamento prévio</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Horário de Atendimento</h3>
                    <p className="text-gray-600">Segunda - Sexta: 8:00 - 18:00</p>
                    <p className="text-gray-600">Sábado: 9:00 - 15:00</p>
                    <p className="text-gray-600">Domingo: Fechado</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Siga-nos nas Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="YouTube"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  </a>
                  <a 
                    href="https://whatsapp.com" 
                    className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="aspect-video rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.017687785714!2d-47.6781336!3d-23.564733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c593502fe46db1%3A0xba4c6e4f525854ac!2sCanil%20de%20Rottweiler%20-%20Canil%20Von%20Olivio!5e0!3m2!1spt-BR!2sbr!4v1717690000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Canil Von Olivio"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionTitle 
            title="Perguntas Frequentes" 
            subtitle="Encontre respostas para as dúvidas mais comuns sobre o Canil Von Olivio."
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Como reservar um filhote?</h3>
              <p className="text-gray-600">
                Para reservar um filhote, entre em contato conosco por telefone ou email. Informaremos 
                sobre ninhadas disponíveis ou previstas e o processo de reserva, que inclui um contrato 
                e um depósito de 30% do valor total.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Vocês fazem entrega para outros estados?</h3>
              <p className="text-gray-600">
                Sim, despachamos filhotes para todo o Brasil, seguindo todos os protocolos de segurança 
                e bem-estar animal. Os custos de transporte são calculados separadamente conforme a 
                localidade de destino.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Quais documentos acompanham o filhote?</h3>
              <p className="text-gray-600">
                Todos os nossos filhotes são entregues com: Pedigree da CBKC, carteira de vacinação, 
                vermifugação em dia, microchip, contrato de compra e venda, e manual de cuidados.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">Vocês oferecem garantias de saúde?</h3>
              <p className="text-gray-600">
                Sim, oferecemos garantia de saúde de 15 dias para doenças infecciosas e 12 meses para 
                doenças genéticas hereditárias, conforme os termos detalhados em nosso contrato.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-3">É possível visitar o canil antes da compra?</h3>
              <p className="text-gray-600">
                Sim, incentivamos visitas ao nosso canil mediante agendamento prévio. É uma oportunidade 
                para você conhecer nossas instalações, práticas de criação e os pais dos filhotes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16">
        <div className="container text-center">
          <h2 className="text-3xl text-white font-bold mb-4">
            Pronto para trazer um Rottweiler para sua família?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Entre em contato agora mesmo para verificar disponibilidade de filhotes ou 
            agendar uma visita ao nosso canil.
          </p>
          <a href="tel:+5511994424033" className="btn bg-white text-primary hover:bg-gray-100 text-lg px-8">
            Ligue Agora: (11) 99442-4033
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;