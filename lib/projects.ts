export type Project = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  year: string;
  stack: string[];
  github?: string;
  secondaryGithub?: string;
  role: string;
  problem: string;
  solution: string;
  highlights: string[];
  architecture: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "mudah-catat",
    index: "01",
    title: "MUDAH CATAT",
    eyebrow: "Flutter · Finance",
    summary: "A practical cashier and finance app for everyday business records.",
    description:
      "A Flutter application for sales records, product management, customer debt and receivable tracking, reports, PDF receipts, and biometric verification.",
    year: "2026",
    stack: ["Flutter", "Dart", "Firebase", "Firestore", "Biometrics"],
    github: "https://github.com/bayupra7ama/kasir-biomentrik",
    role: "Mobile Engineer",
    problem:
      "Small business workflows often become fragmented across notebooks, chat, and spreadsheets, making sales and debt records difficult to follow.",
    solution:
      "I built a mobile-first workflow that keeps transactions, products, customers, debt history, reporting, and device-level verification in one application.",
    highlights: [
      "Firebase Authentication and Cloud Firestore",
      "Customer debt / receivable history and installments",
      "Transaction and report PDF generation",
      "Device biometric verification with local_auth",
      "Business-oriented mobile workflow",
    ],
    architecture: ["Flutter UI", "Application services", "Firebase Auth", "Cloud Firestore", "Native device APIs"],
    accent: "gold",
  },
  {
    slug: "spotgacor",
    index: "02",
    title: "SpotGacor",
    eyebrow: "Android · Location",
    summary: "Fishing spot discovery with maps, navigation, reviews, and community stories.",
    description:
      "A native Android application that connects Kotlin with a Laravel REST API to discover freshwater fishing locations and useful on-site information.",
    year: "2025",
    stack: ["Kotlin", "Android", "Google Maps", "Retrofit", "Laravel API"],
    github: "https://github.com/bayupra7ama/SpotGacor",
    secondaryGithub: "https://github.com/bayupra7ama/SpotGacorBackEnd",
    role: "Android & Backend Developer",
    problem:
      "Useful fishing locations and practical details such as fish type, bait, terrain, and route information are often scattered or shared informally.",
    solution:
      "SpotGacor centralizes location discovery on an interactive map while connecting spot details, navigation, ratings, reviews, and community stories.",
    highlights: [
      "Google Maps markers and user location",
      "Normal, satellite, terrain, and hybrid map modes",
      "Laravel REST API authentication with bearer token",
      "Fishing spot details, ratings, reviews, and sharing",
      "Paging-based community story feed",
    ],
    architecture: ["Android UI", "Retrofit", "Laravel REST API", "Relational data", "Google Maps SDK"],
    accent: "blue",
  },
  {
    slug: "monitoring-ta",
    index: "03",
    title: "Monitoring TA",
    eyebrow: "Android · Academic",
    summary: "A thesis monitoring system connecting students, supervisors, tasks, and progress reports.",
    description:
      "A mobile and backend platform for final-project monitoring with projects, tasks, subtasks, progress reports, supervisor validation, notifications, and burndown progress.",
    year: "2025",
    stack: ["Kotlin", "Jetpack Compose", "Laravel 12", "Sanctum", "Filament"],
    github: "https://github.com/bayupra7ama/monitoring-ta",
    secondaryGithub: "https://github.com/bayupra7ama/monitoring-ta-api",
    role: "Mobile & API Developer",
    problem:
      "Thesis progress can be difficult to monitor when tasks, revisions, reports, and supervisor feedback live in disconnected channels.",
    solution:
      "I structured the workflow around projects and trackable work units, then connected student reporting with supervisor validation and progress visualization.",
    highlights: [
      "Project, task, and subtask management",
      "Student progress-report workflow",
      "Supervisor validation and notifications",
      "Burndown progress visualization",
      "PDF reporting and Laravel admin tooling",
    ],
    architecture: ["Jetpack Compose", "Retrofit", "Laravel API", "Sanctum", "Filament admin"],
    accent: "violet",
  },
  {
    slug: "resikapp",
    index: "04",
    title: "ResikApp",
    eyebrow: "Bangkit · Applied AI",
    summary: "A multidisciplinary capstone combining waste pickup workflows with computer vision.",
    description:
      "A Bangkit Academy capstone project that lets users request waste pickup and uses a camera-based AI feature to classify waste categories.",
    year: "2024",
    stack: ["Android", "Computer Vision", "Machine Learning", "Cloud", "Team Project"],
    github: "https://github.com/bayupra7ama/Capstone",
    role: "Capstone Team Member",
    problem:
      "Waste collection needs both an accessible service workflow and better user awareness about the type of waste being handled.",
    solution:
      "The team combined mobile ordering with image-based classification, integrating Android, machine learning, and cloud components into one end-to-end product.",
    highlights: [
      "Waste pickup request workflow",
      "Camera-based waste classification",
      "Computer-vision model integration",
      "Cross-discipline Android, ML, and Cloud collaboration",
      "Bangkit Academy capstone delivery",
    ],
    architecture: ["Android application", "Camera input", "ML classification", "Cloud services", "Integrated product flow"],
    accent: "green",
  },
  {
    slug: "lapor-infra",
    index: "05",
    title: "Lapor Infra",
    eyebrow: "Laravel · Public Service",
    summary: "Infrastructure incident reporting built during an internship at Diskominfo Pekanbaru.",
    description:
      "A Laravel-based reporting workflow for network infrastructure incidents across OPD in Pekanbaru, developed during an SPBE infrastructure-service internship.",
    year: "2025",
    stack: ["Laravel", "PHP", "Chatbot", "Public Service", "SPBE"],
    github: "https://github.com/bayupra7ama/chatbot_autoreplay_with_laravel",
    role: "Software Developer Intern",
    problem:
      "Infrastructure incident reports across government offices need a clearer intake and response workflow than unstructured communication.",
    solution:
      "I developed a web-based reporting flow with chatbot-style auto replies to help collect and organize network-infrastructure reports.",
    highlights: [
      "Built during Diskominfo Pekanbaru internship",
      "Network-infrastructure incident reporting",
      "Chatbot-style interaction flow",
      "Public-sector SPBE context",
      "Practical operational use case",
    ],
    architecture: ["Laravel application", "Reporting workflow", "Chat interaction", "Operational data", "SPBE context"],
    accent: "orange",
  },
  {
    slug: "7kaih",
    index: "06",
    title: "7KAIH Monitoring",
    eyebrow: "Laravel · Education",
    summary: "A school collaboration system for administrators, teachers, parents, and student habit journals.",
    description:
      "A Laravel 12 multi-role platform for monitoring the 7 Kebiasaan Anak Indonesia Hebat program with WhatsApp OTP, journals, learning materials, feedback, and Excel reporting.",
    year: "2026",
    stack: ["Laravel 12", "WhatsApp OTP", "Role Access", "Excel", "MySQL"],
    github: "https://github.com/bayupra7ama/monitoring-7KAIH-sekolah",
    role: "Full-stack Developer",
    problem:
      "Habit monitoring works best when schools and families share a consistent record, but each role needs a different interface and responsibility.",
    solution:
      "I built separate role-based workflows for administrators, teachers, and parents, tied together by journal monitoring, materials, feedback, OTP verification, and exports.",
    highlights: [
      "Admin, teacher, and parent roles",
      "WhatsApp OTP verification",
      "Student daily habit journals",
      "Learning materials and parent feedback",
      "Excel import and export workflows",
    ],
    architecture: ["Blade UI", "Laravel 12", "Role middleware", "WhatsApp OTP service", "Excel import/export"],
    accent: "cyan",
  },
];

export const extraProjects = [
  {
    title: "UKT Reduction Classification",
    description: "Laravel decision-support workflow connected to an R/C5.0 classification API.",
    stack: "Laravel · R · C5.0 · REST API",
    href: "https://github.com/bayupra7ama/klasifikasi-pengurangan-ukt",
  },
  {
    title: "Jastip E-Commerce",
    description: "Commerce workflow with transaction PIN security and Midtrans payments.",
    stack: "Laravel · Livewire · Midtrans",
    href: "https://github.com/bayupra7ama/jastip-ecommerce",
  },
  {
    title: "Google Maps Review Scraper",
    description: "Automation experiment for extracting review data with browser tooling.",
    stack: "Python · Selenium · Automation",
    href: "https://github.com/bayupra7ama/scraping_googleMaps_review_with_selenium",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
