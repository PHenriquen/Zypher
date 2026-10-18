export type Division = {
  slug: string;
  name: string;
  focus: string;
  role: string;
  description: string;
  color: string;
  colorSoft: string;
  motif: string;
  mark: string;
  markName: string;
  tone: string;
  keywords: string[];
};

export type Project = {
  slug: string;
  name: string;
  divisionSlug: string;
  category: string;
  tagline: string;
  description: string;
  status: string;
  href: string;
  repositoryPrivate?: boolean;
  mark: string;
  accent: string;
};

export const company = {
  name: "Zypher",
  strapline: "Tecnologia · Engenharia · Pesquisa",
  headline: "Construir sistemas. Criar produtos. Explorar além do software.",
  description:
    "Zypher é uma identidade pessoal de portfólio e experimentação em software, IA, hardware e experiências interativas.",
  principle:
    "Uma identidade visual compartilhada. Cada projeto mantém personalidade própria, estágio real e objetivos verificáveis.",
};

export const founderLinks = {
  portfolio: "https://website-kohl-six-11.vercel.app/",
  github: "https://github.com/PHenriquen",
  linkedin: "https://www.linkedin.com/in/pedro-nogueira-138aa2304/",
};

export const founderUrl = founderLinks.portfolio;

export const divisions: Division[] = [
  {
    slug: "labs",
    name: "Labs",
    focus: "Pesquisa e P&D experimental",
    role: "Incubar o que ainda não está pronto para virar produto.",
    description:
      "Pesquisa exploratória, protótipos, estudos técnicos e experimentos. Labs é o espaço protegido para testar ideias antes de atribuí-las a uma divisão de produto.",
    color: "#E53935",
    colorSoft: "#FF8A80",
    motif: "Célula aberta / protótipo / estrutura de pesquisa",
    mark: "/brand/divisions/labs.svg",
    markName: "Open Cell",
    tone: "Experimental, técnico, direto e propositalmente inacabado.",
    keywords: ["pesquisa", "protótipo", "descoberta"],
  },
  {
    slug: "intelligence",
    name: "Intelligence",
    focus: "IA e automação inteligente",
    role: "Construir inteligência que entende contexto e age dentro de limites claros.",
    description:
      "Assistentes, agentes, voz, sistemas contextuais e automação inteligente. A divisão prioriza controle local, ações explicáveis e integração útil em vez de IA como espetáculo.",
    color: "#00D6FF",
    colorSoft: "#70E7FF",
    motif: "Núcleo / presença / luz controlada",
    mark: "/brand/divisions/intelligence.svg",
    markName: "Living Core",
    tone: "Clara, calma, luminosa e precisa.",
    keywords: ["inteligência", "contexto", "automação"],
  },
  {
    slug: "products",
    name: "Products",
    focus: "SaaS e produtos digitais",
    role: "Transformar fluxos bem definidos em produtos de software úteis.",
    description:
      "SaaS, produtos web e ferramentas digitais para uso profissional ou pessoal. Products é menos experimental que Labs e menos orientada a infraestrutura que Systems.",
    color: "#00C896",
    colorSoft: "#85FFDE",
    motif: "Camadas / módulos / software entregue",
    mark: "/brand/divisions/products.svg",
    markName: "Product Stack",
    tone: "Útil, acessível, modular e rápida.",
    keywords: ["produto", "workflow", "usabilidade"],
  },
  {
    slug: "systems",
    name: "Systems",
    focus: "Software industrial e operacional",
    role: "Conectar telemetria, operação e decisões em sistemas técnicos confiáveis.",
    description:
      "Software industrial, monitoramento, telemetria, integração, incidentes e apoio à decisão para ambientes operacionais onde confiabilidade e visibilidade importam.",
    color: "#3F73FF",
    colorSoft: "#A8BDFF",
    motif: "Sinal / trilho / fluxo sincronizado",
    mark: "/brand/divisions/systems.svg",
    markName: "Signal Rail",
    tone: "Técnica, confiável, densa e controlada.",
    keywords: ["telemetria", "integração", "confiabilidade"],
  },
  {
    slug: "engineering",
    name: "Engineering",
    focus: "Hardware, IoT e computação física",
    role: "Dar uma interface física ao software.",
    description:
      "Sistemas embarcados, IoT, dispositivos, robótica, wearables e protótipos que conectam código a sensores, mecânica, ambientes e interação humana.",
    color: "#E99A55",
    colorSoft: "#F5C79D",
    motif: "Intertravamento / estrutura / material",
    mark: "/brand/divisions/engineering.svg",
    markName: "Interlock",
    tone: "Estrutural, tátil, deliberada e robusta.",
    keywords: ["hardware", "embarcados", "físico"],
  },
  {
    slug: "interactive",
    name: "Interactive",
    focus: "Jogos e experiências digitais",
    role: "Usar tecnologia como meio de expressão, não apenas como infraestrutura.",
    description:
      "Jogos e experiências interativas em que mecânica, ritmo, atmosfera, arte e narrativa podem ter o mesmo peso da tecnologia por trás deles.",
    color: "#FFD200",
    colorSoft: "#FFF0A3",
    motif: "Input / resposta / pixel play",
    mark: "/brand/divisions/interactive.svg",
    markName: "Dual Input",
    tone: "Lúdica, autoral, responsiva e claramente interativa.",
    keywords: ["jogo", "experiência", "play"],
  },
];

export const projects: Project[] = [
  {
    // Legacy route slug preserved to avoid breaking existing links.
    slug: "illume",
    name: "LUMI",
    divisionSlug: "intelligence",
    category: "Assistente de IA",
    tagline: "IA local para Windows, voz, documentos e ações com permissões.",
    description:
      "Assistente desktop em desenvolvimento com Electron, TypeScript, Python, SQLite e Ollama. Inclui conversação local e integrações controladas com o computador.",
    status: "Em desenvolvimento · Código privado",
    href: "https://github.com/PHenriquen/Lumi-IA",
    repositoryPrivate: true,
    mark: "/brand/projects/illume.svg",
    accent: "#00D6FF",
  },
  {
    slug: "nodi",
    name: "SyncHub",
    divisionSlug: "products",
    category: "SaaS / Backend",
    tagline: "Rastreabilidade entre tarefas, commits e entregas do GitHub.",
    description:
      "Protótipo local com NestJS, Next.js, webhooks assinados, deduplicação de eventos e histórico de sincronização. Produto SaaS e cliente mobile são planos futuros.",
    status: "Protótipo local · Código privado",
    href: "https://github.com/PHenriquen/SyncHub",
    repositoryPrivate: true,
    mark: "/brand/projects/nodi.svg",
    accent: "#00C896",
  },
  {
    slug: "sincrohub",
    name: "S.V.I. 4.0",
    divisionSlug: "systems",
    category: "IoT / Monitoramento industrial",
    tagline: "Sensores, ESP32 e telemetria apresentados em um sistema supervisório.",
    description:
      "Protótipo de bancada para supervisão industrial com FastAPI, painel web, leituras por USB/Serial, histórico e simulação de sensores.",
    status: "Protótipo · Código privado",
    href: "https://github.com/PHenriquen/S.V.I",
    repositoryPrivate: true,
    mark: "/brand/projects/sincrohub.svg",
    accent: "#3F73FF",
  },
  {
    slug: "manopla",
    name: "Manopla Inteligente",
    divisionSlug: "engineering",
    category: "Embarcados / Mecatrônica",
    tagline: "Firmware, telemetria e laboratório 3D para um wearable experimental.",
    description:
      "Prototipação digital com ESP32, protocolo serial, modelo OpenSCAD e interface 3D interativa. Montagem e validação física ainda em desenvolvimento.",
    status: "Protótipo digital",
    href: "https://github.com/PHenriquen/Manopla-Inteligente",
    mark: "/brand/projects/manopla.svg",
    accent: "#E99A55",
  },
  {
    slug: "ecos-do-tempo",
    name: "Ressonância Zero",
    divisionSlug: "interactive",
    category: "Jogo 2D",
    tagline: "Ritmo, ondas, builds e poderes em partidas para superar a própria pontuação.",
    description:
      "Jogo autoral em pré-produção com Noah e Rin. A proposta prioriza combate, movimento, invocações e cartas de evolução antes de expandir conteúdo.",
    status: "Pré-produção · Código privado",
    href: "https://github.com/PHenriquen/Ressonancia-Zero",
    repositoryPrivate: true,
    mark: "/brand/projects/requiem.svg",
    accent: "#C64659",
  },
];

export function getDivision(slug: string) {
  return divisions.find((division) => division.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
