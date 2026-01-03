
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
};

export const generateBusinessAdvice = async (userChallenge: string): Promise<string> => {
  const ai = getAIClient();
  const prompt = `Você é o Consultor Virtual da Salaab, uma startup de desenvolvimento de software de elite focada em 'Inovar e Liderar'. 
  O usuário está descrevendo um desafio de negócio ou uma ideia: "${userChallenge}".
  
  Sua tarefa é:
  1. Analisar brevemente o problema.
  2. Propor uma solução inovadora usando tecnologias modernas (IA, Cloud, Apps, Web3, etc).
  3. Explicar como a Salaab pode liderar esse projeto para transformar o negócio do cliente.
  
  Mantenha o tom profissional, inspirador e conciso. Use Markdown para formatação.`;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.9,
      },
    });
    return response.text || "Desculpe, não consegui processar sua solicitação no momento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Houve um erro ao consultar o especialista. Por favor, tente novamente.";
  }
};
