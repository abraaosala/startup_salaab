
import React from 'react';
import Header from './components/Header';
import AIConsultant from './components/AIConsultant';

const ServiceCard: React.FC<{ icon: string; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="p-8 glass rounded-2xl hover:bg-white/10 transition-all border border-slate-800 hover:border-blue-500/50 group">
    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

const SocialIcon: React.FC<{ icon: string }> = ({ icon }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors text-slate-300 hover:text-white">
    <span className="text-xs font-bold">{icon[0]}</span>
  </a>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide uppercase">
              Startup de Desenvolvimento
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              SALAAB: <br />
              <span className="text-gradient">Inovar e Liderar</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Transformamos ideias complexas em soluções tecnológicas de alto impacto. Da inteligência artificial ao desenvolvimento Full-Stack, nós lideramos o futuro.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#consultant" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-1">
                Iniciar um Projeto
              </a>
              <a href="#services" className="px-8 py-4 glass text-white rounded-xl font-bold transition-all hover:bg-white/10">
                Ver Serviços
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <img 
              src="https://picsum.photos/800/600?grayscale" 
              alt="Salaab Tech" 
              className="relative rounded-2xl shadow-2xl border border-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-4 border-t border-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Nossa Especialidade</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon="⚡"
              title="Full-Stack Dev"
              desc="Aplicações web e mobile escaláveis utilizando as tecnologias mais modernas do mercado."
            />
            <ServiceCard 
              icon="🤖"
              title="AI Integration"
              desc="Modelos de linguagem, visão computacional e automação inteligente para o seu negócio."
            />
            <ServiceCard 
              icon="☁️"
              title="Cloud Architecture"
              desc="Infraestrutura robusta em AWS, Google Cloud e Azure com foco em alta disponibilidade."
            />
            <ServiceCard 
              icon="🛡️"
              title="Cybersecurity"
              desc="Auditoria e implementação de práticas de segurança de nível empresarial."
            />
            <ServiceCard 
              icon="📊"
              title="Data Analytics"
              desc="Transformamos dados brutos em decisões estratégicas através de dashboards avançados."
            />
            <ServiceCard 
              icon="🎨"
              title="Product Design"
              desc="UX/UI focada em conversão e experiência fluida para o usuário final."
            />
          </div>
        </div>
      </section>

      <AIConsultant />

      {/* About Section */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-7xl mx-auto glass p-12 rounded-3xl grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold mb-6">Manifesto Salaab</h2>
            <div className="space-y-4 text-slate-300">
              <p>Inovação não é apenas criar o novo, é resolver problemas de forma que ninguém mais pensou. Na Salaab, acreditamos que liderar o mercado exige coragem técnica e visão humana.</p>
              <p>Nossa equipe é composta por engenheiros de software, cientistas de dados e designers que não aceitam o "bom o suficiente". Buscamos a excelência em cada linha de código.</p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">✓</span>
                  <span>Foco em Resultados de Negócio</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">✓</span>
                  <span>Transparência e Agilidade</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-blue-500">✓</span>
                  <span>Tecnologia de Ponta</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">50+</div>
                <div className="text-sm text-slate-400">Projetos Entregues</div>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">15</div>
                <div className="text-sm text-slate-400">Especialistas</div>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-emerald-500 mb-2">98%</div>
                <div className="text-sm text-slate-400">Uptime Garantido</div>
              </div>
              <div className="bg-slate-800 p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-sm text-slate-400">Suporte Técnico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 border-t border-slate-900 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">S</div>
                <span className="text-xl font-bold text-white">SALAAB</span>
              </div>
              <p className="text-slate-400 max-sm mb-8">
                Inovando hoje para liderar amanhã. O parceiro ideal para escalar seu desenvolvimento tecnológico.
              </p>
              <div className="flex space-x-4">
                <SocialIcon icon="LinkedIn" />
                <SocialIcon icon="GitHub" />
                <SocialIcon icon="Twitter" />
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#consultant" className="hover:text-white transition-colors">Especialista IA</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contato</h4>
              <ul className="space-y-4 text-slate-400">
                <li>contato@salaab.dev</li>
                <li>Rua da Inovação, 1000</li>
                <li>São Paulo - SP</li>
                <li>+55 (11) 9999-9999</li>
              </ul>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-900 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Salaab Development Startup. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
