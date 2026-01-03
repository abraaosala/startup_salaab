
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">S</div>
            <span className="text-xl font-bold tracking-tight text-white">SALAAB</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#services" className="hover:text-blue-400 transition-colors">Serviços</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Sobre</a>
            <a href="#consultant" className="hover:text-blue-400 transition-colors">Consultor IA</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contato</a>
          </nav>
          <div className="flex items-center">
            <a href="#consultant" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all">
              Falar com IA
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
