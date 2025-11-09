import { Card, CardContent } from '@/components/ui/card';
import { mockTeamMembers } from '@/lib/mockData';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Users } from 'lucide-react';

export default function Team() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Heart className="h-16 w-16 text-[#1f8d50] dark:text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f8d50] dark:text-green-400 mb-4">
            Nossa Equipe
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dedicamos este projeto a todos que tornaram possível a criação da plataforma ASAP. 
            Agradecemos especialmente aos professores orientadores e à equipe de desenvolvimento.
          </p>
        </div>

        {/* Carrossel de membros da equipe */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="h-8 w-8 text-[#1f8d50] dark:text-green-400" />
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Membros da Equipe
            </h2>
          </div>

          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {mockTeamMembers.map((member) => (
                <CarouselItem key={member.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                      <CardContent className="flex flex-col items-center p-8 space-y-4">
                        <Avatar className="h-32 w-32 border-4 border-[#1f8d50] shadow-lg">
                          <AvatarImage src={member.imageUrl} alt={member.name} />
                          <AvatarFallback className="text-2xl bg-[#1f8d50] text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-center space-y-2">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                            {member.name}
                          </h3>
                          <p className="text-sm text-[#1f8d50] dark:text-green-400 font-semibold">
                            {member.role}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Mensagem de agradecimento */}
        <Card className="bg-gradient-to-r from-[#1f8d50] to-[#15703d] text-white border-none shadow-2xl">
          <CardContent className="p-10 text-center space-y-6">
            <h2 className="text-3xl font-bold">Agradecimentos Especiais</h2>
            <p className="text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
              Agradecemos profundamente aos professores orientadores que acreditaram neste projeto 
              e nos guiaram durante todo o desenvolvimento. Seu apoio e conhecimento foram fundamentais 
              para transformar nossa visão em realidade.
            </p>
            <p className="text-lg text-green-100 max-w-3xl mx-auto leading-relaxed">
              À equipe de desenvolvimento, que dedicou incontáveis horas de trabalho, criatividade 
              e paixão para criar uma plataforma que realmente faça a diferença na vida dos alunos da ETEC.
            </p>
            <p className="text-xl font-semibold text-white mt-8">
              Juntos, estamos construindo um futuro mais saudável e acolhedor! 💚
            </p>
          </CardContent>
        </Card>

        {/* Grid adicional com todos os membros */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-10">
            Todos os Colaboradores
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mockTeamMembers.map((member) => (
              <Card 
                key={member.id}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="flex flex-col items-center p-6 space-y-3">
                  <Avatar className="h-20 w-20 border-2 border-[#1f8d50]">
                    <AvatarImage src={member.imageUrl} alt={member.name} />
                    <AvatarFallback className="bg-[#1f8d50] text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <h3 className="font-bold text-gray-800 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#1f8d50] dark:text-green-400">
                      {member.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nota sobre personalização */}
        <div className="mt-12 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-2 border-yellow-200 dark:border-yellow-800">
          <p className="text-sm text-yellow-800 dark:text-yellow-200 text-center">
            <strong>Nota:</strong> Os nomes e fotos acima são exemplos. Substitua com os dados reais 
            da sua equipe editando o arquivo <code className="bg-yellow-100 dark:bg-yellow-900 px-2 py-1 rounded">src/lib/mockData.ts</code>
          </p>
        </div>
      </div>
    </div>
  );
}