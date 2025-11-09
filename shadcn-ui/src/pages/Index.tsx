import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, MessageCircle, Shield, BookOpen, Users, ArrowRight } from 'lucide-react';

export default function Index() {
  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-[#1f8d50]" />,
      title: 'Chatbot Dr. Doug',
      description: 'Converse com nosso ornitorrinco psicólogo, sempre empático e atencioso.'
    },
    {
      icon: <Shield className="h-8 w-8 text-[#1f8d50]" />,
      title: 'Sistema de Denúncias',
      description: 'Reporte casos de bullying, assédio e outras situações de forma segura.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#1f8d50]" />,
      title: 'Conteúdo Educativo',
      description: 'Artigos e vídeos sobre psicologia, bem-estar e autocuidado.'
    },
    {
      icon: <Users className="h-8 w-8 text-[#1f8d50]" />,
      title: 'Atendimento Especializado',
      description: 'Triagem com coordenação e encaminhamento para psicólogos quando necessário.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1f8d50] to-[#15703d] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              Bem-vindo ao ASAP
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
              Apoio Sistêmico Acadêmico Psicológico
            </p>
            <p className="text-lg md:text-xl mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              Plataforma de auxílio psicológico para alunos da rede ETEC. 
              Aqui você encontra suporte, orientação e um espaço seguro para cuidar da sua saúde mental.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
              <Link to="/login">
                <Button size="lg" className="bg-white text-[#1f8d50] hover:bg-green-50 font-bold text-lg px-8">
                  Fazer Login
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/chatbot">
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8">
                  Falar com Dr. Doug
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" 
                  fill="currentColor" 
                  className="text-[#e6f4f7] dark:text-gray-900"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f8d50] dark:text-green-400 mb-4">
              Como Podemos Ajudar
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Oferecemos diversos recursos para apoiar sua saúde mental e bem-estar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 hover:border-[#1f8d50] dark:hover:border-green-400 transition-all duration-300 hover:shadow-xl"
              >
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle className="text-2xl text-gray-800 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#f0f9f5] to-[#e6f4f7] dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <Heart className="h-16 w-16 text-[#1f8d50] dark:text-green-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Sua Saúde Mental é Prioridade
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Não hesite em buscar ajuda. Estamos aqui para apoiar você em todos os momentos.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-[#1f8d50] hover:bg-[#15703d] text-white font-bold text-lg px-8">
              Acessar Meu Painel
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}