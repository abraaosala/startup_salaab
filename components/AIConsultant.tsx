
import React, { useState } from 'react';
import { generateBusinessAdvice } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [challenge, setChallenge] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!challenge.trim()) return;

    setLoading(true);
    setResponse(null);
    const advice = await generateBusinessAdvice(challenge);
    setResponse(advice);
    setLoading(false);
  };

  return (
    <section id="consultant" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Salaab <span className="text-gradient">AI Consultant</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Tem um desafio técnico ou uma ideia de startup? Nossa inteligência artificial proprietária analisa seu cenário e propõe caminhos de inovação.
          </p>
        </div>

        <div className="glass p-8 rounded-3xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="challenge" className="block text-sm font-medium text-slate-300 mb-2">
                Descreva seu desafio ou visão de projeto:
              </label>
              <textarea
                id="challenge"
                rows={4}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Ex: Preciso de uma plataforma escalável para logística que use dados em tempo real..."
                value={challenge}
                onChange={(e) => setChallenge(e.target.value)}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                loading 
                  ? 'bg-slate-700 text-slate-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-[1.01] active:scale-[0.99] text-white shadow-lg shadow-blue-500/20'
              }`}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processando Insights...
                </span>
              ) : 'Analisar com IA'}
            </button>
          </form>

          {response && (
            <div className="mt-8 p-6 bg-slate-800/50 border border-blue-500/30 rounded-2xl animate-fade-in">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mr-3 text-xs font-bold">AI</div>
                <h3 className="font-semibold text-blue-400 uppercase tracking-widest text-xs">Resposta da Salaab AI</h3>
              </div>
              <div className="prose prose-invert max-w-none text-slate-300 space-y-4">
                {response.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
