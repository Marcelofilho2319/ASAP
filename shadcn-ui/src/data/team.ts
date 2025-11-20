/**
 * ALTERAR AQUI: Dados da equipe
 * Para adicionar um novo membro, siga o padrão abaixo:
 * {
 *   id: "nome-membro",
 *   name: "Nome Completo",
 *   role: "Cargo/Função",
 *   bio: "Breve descrição do membro",
 *   image: "/assets/team/nome-membro.jpg",  // Adicione a imagem em public/assets/team/
 *   email: "email@asap-etec.edu.br",
 *   specialties: ["Especialidade 1", "Especialidade 2"],
 * }
 */

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  specialties?: string[];
  phone?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "dra-maria",
    name: "Dra. Maria Silva",
    role: "Psicóloga Clínica",
    bio: "Especialista em psicologia clínica com mais de 10 anos de experiência em atendimento a adolescentes.",
    image: "/assets/team/dra-maria.jpg",
    email: "maria.silva@asap-etec.edu.br",
    specialties: ["Psicologia Clínica", "Adolescentes", "Depressão e Ansiedade"],
    phone: "(11) 3000-0001",
  },
  {
    id: "dr-joão",
    name: "Dr. João Santos",
    role: "Psicólogo Organizacional",
    bio: "Especialista em gestão escolar e bem-estar institucional. Desenvolve programas de prevenção.",
    image: "/assets/team/dr-joao.jpg",
    email: "joao.santos@asap-etec.edu.br",
    specialties: ["Psicologia Organizacional", "Prevenção", "Bem-estar Escolar"],
    phone: "(11) 3000-0002",
  },
  {
    id: "psic-ana",
    name: "Ana Costa",
    role: "Psicóloga Educacional",
    bio: "Focada em orientação vocacional e desenvolvimento de habilidades socioemocionais.",
    image: "/assets/team/psic-ana.jpg",
    email: "ana.costa@asap-etec.edu.br",
    specialties: ["Orientação Vocacional", "Desenvolvimento Emocional", "Autoestima"],
    phone: "(11) 3000-0003",
  },
];

/**
 * ALTERAR AQUI: Dados da dedicatória/missão
 * Edite o texto de missão, visão e valores da plataforma
 */

export const DEDICATION = {
  title: "Nossa Missão",
  subtitle: "Apoio Sistêmico Acadêmico Psicológico",
  description:
    "ASAP é uma plataforma dedicada a fornecer apoio psicológico, orientação e um espaço seguro para denúncias entre alunos da rede ETEC.",
  vision:
    "Criar um ambiente escolar saudável, inclusivo e seguro onde todos os alunos possam se desenvolver plenamente.",
  values: [
    "Empatia: Compreender e respeitar as emoções de cada aluno",
    "Confidencialidade: Manter a privacidade de todos os relatos e consultores",
    "Acessibilidade: Disponibilizar apoio a todos os estudantes",
    "Profissionalismo: Atendimento qualificado de profissionais certificados",
  ],
};

/**
 * ALTERAR AQUI: URLs de imagens importantes
 * Substitua pelos caminhos reais das suas imagens
 */

export const ASSET_URLS = {
  logo: "/img/ASAP /images/ASAPETEC.jpg",
  ornitorrinco: "/img/ornitorrinco-andando.gif",
  heroImage: "/assets/hero-image.jpg", // Imagem principal da página inicial
  bannerDark: "/assets/banner-dark.jpg", // Banner para modo escuro
};
