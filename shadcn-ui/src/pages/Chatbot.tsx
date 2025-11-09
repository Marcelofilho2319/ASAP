<<<<<<< HEAD
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Olá! Eu sou o Dr. Doug 🦦, seu ornitorrinco psicólogo. Estou aqui para conversar e ajudar você. Como está se sentindo hoje?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Respostas empáticas do Dr. Doug
  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Saudações
    if (lowerMessage.match(/oi|olá|ola|hey|bom dia|boa tarde|boa noite/)) {
      return 'Olá! É muito bom conversar com você. Como posso ajudar hoje? 😊';
    }

    // Sentimentos negativos
    if (lowerMessage.match(/triste|deprimido|depressão|mal|péssimo|horrível/)) {
      return 'Sinto muito que você esteja passando por isso. Seus sentimentos são válidos e é corajoso da sua parte compartilhar. Você gostaria de me contar mais sobre o que está acontecendo? Estou aqui para ouvir. 💙';
    }

    if (lowerMessage.match(/ansioso|ansiedade|nervoso|preocupado|medo/)) {
      return 'A ansiedade pode ser muito desafiadora. Respire fundo comigo... inspire... expire... Você não está sozinho nisso. Quer conversar sobre o que está causando essa ansiedade? 🌊';
    }

    if (lowerMessage.match(/bullying|assédio|intimidação|ameaça/)) {
      return 'Isso é muito sério e você fez certo em compartilhar comigo. Ninguém merece passar por isso. Vou encaminhar seu caso para a coordenação da escola, que tomará as medidas necessárias. Você está seguro aqui. 🛡️';
    }

    if (lowerMessage.match(/estresse|pressão|prova|trabalho|nota/)) {
      return 'A pressão acadêmica pode ser intensa. Lembre-se: você é mais do que suas notas. Vamos trabalhar juntos em estratégias para gerenciar esse estresse. Que tal começarmos com técnicas de organização e respiração? 📚';
    }

    // Sentimentos positivos
    if (lowerMessage.match(/bem|feliz|ótimo|alegre|animado/)) {
      return 'Que maravilha ouvir isso! Fico muito feliz por você. Aproveite esse momento positivo e lembre-se dele nos dias mais difíceis. O que está deixando você tão bem? 🌟';
    }

    // Agradecimentos
    if (lowerMessage.match(/obrigado|obrigada|valeu|agradeço/)) {
      return 'Por nada! Estou sempre aqui para você. Cuidar da saúde mental é um ato de coragem. Continue assim! 🦦💚';
    }

    // Ajuda específica
    if (lowerMessage.match(/ajuda|socorro|não aguento|não suporto/)) {
      return 'Estou aqui para você. Você não precisa passar por isso sozinho. Vou avaliar sua situação e, se necessário, encaminharei você para um psicólogo especializado. Enquanto isso, vamos conversar. O que está acontecendo? 🤝';
    }

    // Curiosidades sobre ornitorrinco
    if (lowerMessage.match(/ornitorrinco|você|doug/)) {
      return 'Sim, sou um ornitorrinco! 🦦 Nós ornitorrincos somos únicos, assim como você. E assim como eu uso meu bico especial para encontrar comida, vou usar minhas habilidades para ajudar você a encontrar seu caminho. Vamos conversar?';
    }

    // Despedidas
    if (lowerMessage.match(/tchau|adeus|até|bye|falou/)) {
      return 'Até logo! Lembre-se: estou sempre aqui quando precisar. Cuide-se bem! 🦦💚';
    }

    // Resposta padrão empática
    return 'Entendo. Conte-me mais sobre isso. Estou aqui para ouvir você sem julgamentos. Seus sentimentos importam. 💙';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simular tempo de resposta do bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: generateBotResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="h-[calc(100vh-250px)] flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-[#1f8d50] to-[#15703d] text-white rounded-t-lg">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-white">
                <AvatarImage src="/assets/dr-doug-avatar.png" alt="Dr. Doug" />
                <AvatarFallback className="bg-white text-[#1f8d50] text-xl">🦦</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">Dr. Doug</CardTitle>
                <p className="text-sm text-green-100">Ornitorrinco Psicólogo • Online</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-md ${
                    message.sender === 'user'
                      ? 'bg-[#1f8d50] text-white rounded-br-none'
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none'
                  }`}
                >
                  <p className="text-sm md:text-base whitespace-pre-wrap">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-green-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString('pt-BR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-bl-none px-4 py-3 shadow-md">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 text-base"
                disabled={isTyping}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-[#1f8d50] hover:bg-[#15703d] text-white px-6"
              >
                {isTyping ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Dr. Doug está aqui para ouvir você. Suas conversas são confidenciais.
            </p>
          </div>
        </Card>

        {/* Espaço para API de IA */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">
            {`// TODO: Implementar API de IA para chatbot`}
            <br />
            {`// - Integração com GPT/Claude para respostas mais sofisticadas`}
            <br />
            {`// - Sistema de triagem automática baseado em análise de sentimento`}
            <br />
            {`// - Armazenamento de histórico de conversas`}
            <br />
            {`// - Geração de relatórios para coordenação`}
          </p>
        </div>
      </div>
    </div>
  );
=======
import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Loader2 } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Olá! Eu sou o Dr. Doug 🦦, seu ornitorrinco psicólogo. Estou aqui para conversar e ajudar você. Como está se sentindo hoje?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Respostas empáticas do Dr. Doug
  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Saudações
    if (lowerMessage.match(/oi|olá|ola|hey|bom dia|boa tarde|boa noite/)) {
      return 'Olá! É muito bom conversar com você. Como posso ajudar hoje? 😊';
    }

    // Sentimentos negativos
    if (lowerMessage.match(/triste|deprimido|depressão|mal|péssimo|horrível/)) {
      return 'Sinto muito que você esteja passando por isso. Seus sentimentos são válidos e é corajoso da sua parte compartilhar. Você gostaria de me contar mais sobre o que está acontecendo? Estou aqui para ouvir. 💙';
    }

    if (lowerMessage.match(/ansioso|ansiedade|nervoso|preocupado|medo/)) {
      return 'A ansiedade pode ser muito desafiadora. Respire fundo comigo... inspire... expire... Você não está sozinho nisso. Quer conversar sobre o que está causando essa ansiedade? 🌊';
    }

    if (lowerMessage.match(/bullying|assédio|intimidação|ameaça/)) {
      return 'Isso é muito sério e você fez certo em compartilhar comigo. Ninguém merece passar por isso. Vou encaminhar seu caso para a coordenação da escola, que tomará as medidas necessárias. Você está seguro aqui. 🛡️';
    }

    if (lowerMessage.match(/estresse|pressão|prova|trabalho|nota/)) {
      return 'A pressão acadêmica pode ser intensa. Lembre-se: você é mais do que suas notas. Vamos trabalhar juntos em estratégias para gerenciar esse estresse. Que tal começarmos com técnicas de organização e respiração? 📚';
    }

    // Sentimentos positivos
    if (lowerMessage.match(/bem|feliz|ótimo|alegre|animado/)) {
      return 'Que maravilha ouvir isso! Fico muito feliz por você. Aproveite esse momento positivo e lembre-se dele nos dias mais difíceis. O que está deixando você tão bem? 🌟';
    }

    // Agradecimentos
    if (lowerMessage.match(/obrigado|obrigada|valeu|agradeço/)) {
      return 'Por nada! Estou sempre aqui para você. Cuidar da saúde mental é um ato de coragem. Continue assim! 🦦💚';
    }

    // Ajuda específica
    if (lowerMessage.match(/ajuda|socorro|não aguento|não suporto/)) {
      return 'Estou aqui para você. Você não precisa passar por isso sozinho. Vou avaliar sua situação e, se necessário, encaminharei você para um psicólogo especializado. Enquanto isso, vamos conversar. O que está acontecendo? 🤝';
    }

    // Curiosidades sobre ornitorrinco
    if (lowerMessage.match(/ornitorrinco|você|doug/)) {
      return 'Sim, sou um ornitorrinco! 🦦 Nós ornitorrincos somos únicos, assim como você. E assim como eu uso meu bico especial para encontrar comida, vou usar minhas habilidades para ajudar você a encontrar seu caminho. Vamos conversar?';
    }

    // Despedidas
    if (lowerMessage.match(/tchau|adeus|até|bye|falou/)) {
      return 'Até logo! Lembre-se: estou sempre aqui quando precisar. Cuide-se bem! 🦦💚';
    }

    // Resposta padrão empática
    return 'Entendo. Conte-me mais sobre isso. Estou aqui para ouvir você sem julgamentos. Seus sentimentos importam. 💙';
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simular tempo de resposta do bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: generateBotResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="h-[calc(100vh-250px)] flex flex-col bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-[#1f8d50] to-[#15703d] text-white rounded-t-lg">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-white">
                <AvatarImage src="/assets/dr-doug-avatar.png" alt="Dr. Doug" />
                <AvatarFallback className="bg-white text-[#1f8d50] text-xl">🦦</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">Dr. Doug</CardTitle>
                <p className="text-sm text-green-100">Ornitorrinco Psicólogo • Online</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 shadow-md ${
                    message.sender === 'user'
                      ? 'bg-[#1f8d50] text-white rounded-br-none'
                      : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none'
                  }`}
                >
                  <p className="text-sm md:text-base whitespace-pre-wrap">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-green-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString('pt-BR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-700 rounded-2xl rounded-bl-none px-4 py-3 shadow-md">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          <div className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 text-base"
                disabled={isTyping}
              />
              <Button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-[#1f8d50] hover:bg-[#15703d] text-white px-6"
              >
                {isTyping ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
              Dr. Doug está aqui para ouvir você. Suas conversas são confidenciais.
            </p>
          </div>
        </Card>

        {/* Espaço para API de IA */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">
            {`// TODO: Implementar API de IA para chatbot`}
            <br />
            {`// - Integração com GPT/Claude para respostas mais sofisticadas`}
            <br />
            {`// - Sistema de triagem automática baseado em análise de sentimento`}
            <br />
            {`// - Armazenamento de histórico de conversas`}
            <br />
            {`// - Geração de relatórios para coordenação`}
          </p>
        </div>
      </div>
    </div>
  );
>>>>>>> 3c2d5cf (ASAP)
}