import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { mockStudent, mockMonthlyUsage } from '@/lib/mockData';
import { MessageCircle, TrendingUp, Calendar, Award, User, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const currentMonth = mockMonthlyUsage[mockMonthlyUsage.length - 1];
  const averageScore = currentMonth.averageScore;

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-7xl space-y-8">
        {/* Header com perfil */}
        <Card className="bg-gradient-to-r from-[#1f8d50] to-[#15703d] text-white border-none shadow-xl">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
                <AvatarImage src={mockStudent.profilePicture} alt={mockStudent.name} />
                <AvatarFallback className="text-2xl bg-white text-[#1f8d50]">
                  {mockStudent.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 text-center md:text-left space-y-2">
                <h1 className="text-3xl font-bold">{mockStudent.name}</h1>
                <div className="flex flex-col md:flex-row gap-4 text-green-100">
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <User className="h-4 w-4" />
                    <span>RM: {mockStudent.rm}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <GraduationCap className="h-4 w-4" />
                    <span>{mockStudent.course}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start">
                    <Calendar className="h-4 w-4" />
                    <span>{mockStudent.grade}</span>
                  </div>
                </div>
                <p className="text-sm text-green-100">{mockStudent.email}</p>
              </div>

              <Link to="/chatbot">
                <Button size="lg" className="bg-white text-[#1f8d50] hover:bg-green-50 font-semibold">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar com Dr. Doug
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Cards de estatísticas */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Sessões Este Mês
              </CardTitle>
              <Calendar className="h-5 w-5 text-[#1f8d50]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#1f8d50] dark:text-green-400">
                {currentMonth.sessions}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Atendimentos realizados
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Nota Média Mensal
              </CardTitle>
              <Award className="h-5 w-5 text-[#1f8d50]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-[#1f8d50] dark:text-green-400">
                {averageScore.toFixed(1)}
              </div>
              <Progress value={averageScore * 10} className="mt-2" />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Avaliação do bem-estar emocional
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-300">
                Tendência
              </CardTitle>
              <TrendingUp className="h-5 w-5 text-[#1f8d50]" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                +0.5
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Melhora em relação ao mês anterior
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Gráfico de uso mensal */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 dark:text-white">
                Uso Mensal da Plataforma
              </CardTitle>
              <CardDescription>
                Número de sessões realizadas nos últimos 6 meses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockMonthlyUsage}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="sessions" fill="#1f8d50" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Gráfico de nota média */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 dark:text-white">
                Evolução do Bem-Estar
              </CardTitle>
              <CardDescription>
                Nota média mensal baseada nas avaliações do Dr. Doug
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={mockMonthlyUsage}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="averageScore" 
                    stroke="#1f8d50" 
                    strokeWidth={3}
                    dot={{ fill: '#1f8d50', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Informações adicionais */}
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-900 border-2 border-[#1f8d50]/20">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800 dark:text-white">
              Como Funciona a Avaliação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-gray-700 dark:text-gray-300">
            <p>
              <strong>Nota Média Mensal:</strong> O Dr. Doug avalia seu estado emocional através de perguntas 
              durante os atendimentos. A nota varia de 0 a 10 e reflete seu bem-estar geral.
            </p>
            <p>
              <strong>Encaminhamento:</strong> Com base nas suas respostas, o Dr. Doug pode:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Encaminhar para coordenação (casos de bullying, assédio, etc.)</li>
              <li>Sugerir atendimento com psicólogo (depressão, ansiedade, pressão acadêmica)</li>
              <li>Oferecer recursos educativos e técnicas de autocuidado</li>
            </ul>
          </CardContent>
        </Card>

        {/* Espaço para API */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">
            {`// TODO: Conectar com APIs reais`}
            <br />
            {`// - Microsoft Graph API para foto de perfil`}
            <br />
            {`// - API de dados do aluno (RM, curso, série)`}
            <br />
            {`// - API de histórico de atendimentos`}
          </p>
        </div>
      </div>
    </div>
  );
}