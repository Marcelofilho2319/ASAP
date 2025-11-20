// Mock data para desenvolvimento - Substituir por APIs reais no futuro

export interface Student {
  id: string;
  name: string;
  rm: string;
  course: string;
  grade: string;
  email: string;
  profilePicture: string;
}

export interface MonthlyUsage {
  month: string;
  sessions: number;
  averageScore: number;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}

// Dados mockados do aluno
export const mockStudent: Student = {
  id: '1',
  name: 'João Silva',
  rm: '12345',
  course: 'Desenvolvimento de Sistemas',
  grade: '3º Módulo',
  email: 'joao.silva@etec.sp.gov.br',
  profilePicture: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
};

// Dados de uso mensal
export const mockMonthlyUsage: MonthlyUsage[] = [
  { month: 'Jan', sessions: 3, averageScore: 7.5 },
  { month: 'Fev', sessions: 5, averageScore: 7.8 },
  { month: 'Mar', sessions: 4, averageScore: 8.2 },
  { month: 'Abr', sessions: 6, averageScore: 8.0 },
  { month: 'Mai', sessions: 7, averageScore: 8.5 },
  { month: 'Jun', sessions: 5, averageScore: 8.3 }
];

// Artigos educativos
export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'Como Lidar com a Ansiedade Acadêmica',
    category: 'Ansiedade',
    description: 'Técnicas práticas para gerenciar a ansiedade durante os estudos e provas.',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400',
    videoUrl: 'https://www.youtube.com/watch?v=example1'
  },
  {
    id: '2',
    title: 'Reconhecendo Sinais de Depressão',
    category: 'Depressão',
    description: 'Aprenda a identificar sinais de depressão e quando buscar ajuda profissional.',
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400'
  },
  {
    id: '3',
    title: 'Combatendo o Bullying Escolar',
    category: 'Bullying',
    description: 'Estratégias para lidar com situações de bullying e onde buscar apoio.',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400'
  },
  {
    id: '4',
    title: 'Técnicas de Mindfulness para Estudantes',
    category: 'Bem-estar',
    description: 'Práticas de atenção plena para melhorar o foco e reduzir o estresse.',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400',
    videoUrl: 'https://www.youtube.com/watch?v=example2'
  },
  {
    id: '5',
    title: 'Gerenciamento de Tempo e Estresse',
    category: 'Pressão Acadêmica',
    description: 'Como organizar seus estudos e reduzir a pressão acadêmica.',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400'
  },
  {
    id: '6',
    title: 'Construindo Autoestima Saudável',
    category: 'Autoestima',
    description: 'Dicas para desenvolver uma autoimagem positiva e confiança.',
    imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400'
  }
];

// Equipe de desenvolvimento
export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Vinicius Feitosa',
    role: 'Banco de dados/Programação',
    imageUrl: 'public/assets/vinicius.jpeg'
  },
  {
    id: '2',
    name: 'Marcelo Filho',
    role: 'Dev Fullstack',
    imageUrl: 'public/assets/marcelo.jpeg'
  },
  {
    id: '3',
    name: 'Lucas Oliveira',
    role: 'Documentação',
    imageUrl: 'public/assets/lucas.jpeg'
  },
  {
    id: '4',
    name: 'Isabelly Silva',
    role: 'Design e pesquisas',
    imageUrl: 'public/assets/isabelly.jpeg'
  },
  {
    id: '5',
    name: 'Oitavo Dodói',
    role: 'Designer/Dev FrontEnd',
    imageUrl: 'public/assets/octavio.jpeg'
  },
  {
    id: '6',
    name: 'Maria Eduarda Amaral',
    role: 'Documentação',
    imageUrl: 'public/assets/maduamaral.jpeg'
  },
  {
    id: '7',
    name: 'Saumel Rodrigues',
    role: 'Dev BackEnd',
    imageUrl: 'public/assets/samuel.jpeg'
  },
  {
    id: '8',
    name: 'Maria Eduarda Arruda',
    role: 'Designer/Artista',
    imageUrl: 'public/assets/maduarruda.jpeg'
  }
];

// Estrutura para futuras APIs
export const API_ENDPOINTS = {
  // Microsoft OAuth
  MICROSOFT_AUTH: '/api/auth/microsoft',
  MICROSOFT_PROFILE: '/api/auth/microsoft/profile',
  
  // Dados do aluno
  STUDENT_PROFILE: '/api/student/profile',
  STUDENT_USAGE: '/api/student/usage',
  
  // Chatbot
  CHATBOT_MESSAGE: '/api/chatbot/message',
  CHATBOT_HISTORY: '/api/chatbot/history',
  CHATBOT_ASSESSMENT: '/api/chatbot/assessment',
  
  // Conteúdo
  ARTICLES: '/api/content/articles',
  VIDEOS: '/api/content/videos',
  
  // Denúncias
  REPORTS: '/api/reports',
  SUBMIT_REPORT: '/api/reports/submit'
};