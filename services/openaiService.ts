import OpenAI from 'openai';

const getAIClient = () => {
    return new OpenAI({
        apiKey: process.env.OPENAI_API_KEY || "",
        dangerouslyAllowBrowser: true // Required for client-side usage if not proxying, though server-side is recommended. 
    });
};

export const generateBusinessAdvice = async (userChallenge: string): Promise<string> => {
    const openai = getAIClient();
    const prompt = `Você é o Consultor Virtual da Salaab, uma startup de desenvolvimento de software de elite focada em 'Inovar e Liderar'. 
  O usuário está descrevendo um desafio de negócio ou uma ideia: "${userChallenge}".
  
  Sua tarefa é:
  1. Analisar brevemente o problema.
  2. Propor uma solução inovadora usando tecnologias modernas (IA, Cloud, Apps, Web3, etc).
  3. Explicar como a Salaab pode liderar esse projeto para transformar o negócio do cliente.
  
  Mantenha o tom profissional, inspirador e conciso. Use Markdown para formatação.`;

    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o", // Or gpt-3.5-turbo if preferred for cost
            messages: [
                { role: "system", content: "You are a helpful and innovative business tech consultant." },
                { role: "user", content: prompt }
            ],
            temperature: 0.7,
        });

        return response.choices[0].message.content || "Desculpe, não consegui processar sua solicitação no momento.";
    } catch (error) {
        console.error("OpenAI Error:", error);
        return "Houve um erro ao consultar o especialista. Por favor, tente novamente.";
    }
};
