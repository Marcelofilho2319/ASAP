import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockArticles } from '@/lib/mockData';
import { BookOpen, Video, ExternalLink } from 'lucide-react';

export default function Articles() {
  const categories = ['Todos', 'Ansiedade', 'Depressão', 'Bullying', 'Bem-estar', 'Pressão Acadêmica', 'Autoestima'];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1f8d50] dark:text-green-400 mb-4">
            Conteúdo Educativo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Aprenda sobre psicologia, bem-estar e autocuidado através de nossos artigos e vídeos educativos
          </p>
        </div>

        {/* Filtros de categoria */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === 'Todos' ? 'default' : 'outline'}
              className={`cursor-pointer px-4 py-2 text-sm ${
                category === 'Todos' 
                  ? 'bg-[#1f8d50] hover:bg-[#15703d] text-white' 
                  : 'hover:bg-[#1f8d50] hover:text-white border-[#1f8d50]'
              }`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Grid de artigos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticles.map((article) => (
            <Card 
              key={article.id}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=400';
                  }}
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-[#1f8d50] text-white">
                    {article.category}
                  </Badge>
                </div>
                {article.videoUrl && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      <Video className="h-3 w-3 mr-1" />
                      Vídeo
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-800 dark:text-white line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 dark:text-gray-300 line-clamp-3">
                  {article.description}
                </CardDescription>

                <div className="flex gap-2">
                  <Button 
                    className="flex-1 bg-[#1f8d50] hover:bg-[#15703d] text-white"
                    size="sm"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Ler Artigo
                  </Button>
                  {article.videoUrl && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-[#1f8d50] text-[#1f8d50] hover:bg-[#1f8d50] hover:text-white"
                    >
                      <Video className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Seção de recursos adicionais */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-2 border-blue-200 dark:border-blue-800">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-white flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                Biblioteca de Recursos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                Acesse nossa biblioteca completa com e-books, guias práticos e materiais educativos 
                sobre saúde mental e bem-estar.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Explorar Biblioteca
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-2 border-purple-200 dark:border-purple-800">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 dark:text-white flex items-center gap-2">
                <Video className="h-6 w-6 text-purple-600" />
                Canal de Vídeos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>
                Assista vídeos educativos, palestras e workshops sobre diversos temas relacionados 
                à saúde mental e desenvolvimento pessoal.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Ver Vídeos
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Espaço para API */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">
            {`// TODO: Conectar com API de conteúdo`}
            <br />
            {`// - Sistema de CMS para gerenciar artigos e vídeos`}
            <br />
            {`// - Filtros dinâmicos por categoria`}
            <br />
            {`// - Sistema de busca e recomendações personalizadas`}
          </p>
        </div>
      </div>
    </div>
  );
}