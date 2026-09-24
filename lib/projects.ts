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
  live?: string;
  secondaryGithub?: string;
  role: string;
  problem: string;
  solution: string;
  highlights: string[];
  architecture: string[];
  accent: string;
  visual: "finance" | "map" | "academic" | "ai" | "chat" | "education" | "service" | "village" | "classification" | "commerce";
};

export const projects: Project[] = [
  {
    slug: "ponsel-yen",
    index: "01",
    title: "PonselYen Management System",
    eyebrow: "Next.js · Business Operations",
    summary: "A live service-center workspace for phone repairs, inventory, sales, customers, and reporting.",
    description: "A web application that brings repair tracking, spare-part inventory, sales, customer records, reporting, and receipt printing into one workspace.",
    year: "2026",
    stack: ["Next.js", "React", "MongoDB", "JavaScript", "ESC/POS"],
    github: "https://github.com/bayupra7ama/PonselYen_Management_Sistem",
    live: "https://ponsel-yen-management-sistem.vercel.app/",
    role: "Full-stack Developer",
    problem: "Phone service shops need to track device intake, repair status, parts, sales, and handover details without losing context between workflows.",
    solution: "I built one web workspace for service orders, inventory, sales, customers, and reports, with printable service and sales receipts.",
    highlights: ["Service order and device-status workflow", "Spare-part and accessory inventory", "Sales and customer records", "Reporting and printable receipts", "Next.js API backed by MongoDB"],
    architecture: ["Next.js interface", "Route handlers", "Service and sales data", "MongoDB", "ESC/POS receipts"],
    accent: "orange",
    visual: "service",
  },
  {
    slug: "desa-cantik",
    index: "02",
    title: "Desa Cantik Air Putih",
    eyebrow: "Laravel · Village Services",
    summary: "Village information, population statistics, and public letter requests in one platform.",
    description: "A Laravel village platform with population charts, public letter requests, an administrative panel, and encryption for selected sensitive fields and uploaded documents.",
    year: "2025",
    stack: ["Laravel", "PHP", "Filament", "MySQL", "AES-256"],
    github: "https://github.com/bayupra7ama/desacantik-AirPutih-Bengkalis",
    role: "Full-stack Developer",
    problem: "Village information, population statistics, and letter requests are difficult to navigate when each workflow lives in a separate place.",
    solution: "I connected a public village website and statistical dashboard with letter submission and an administrative workspace. Selected sensitive fields and uploaded files are encrypted at rest.",
    highlights: ["Population charts and village statistics", "Public letter request forms", "Filament administration panel", "Citizen and family data management", "Encryption for selected fields and uploaded files"],
    architecture: ["Public Laravel pages", "Statistics endpoint", "Letter requests", "Filament admin", "Village data"],
    accent: "green",
    visual: "village",
  },
  {
    slug: "7kaih",
    index: "03",
    title: "7KAIH Monitoring",
    eyebrow: "Laravel · Education",
    summary: "A school collaboration system for administrators, teachers, parents, and student habit journals.",
    description:
      "A Laravel 12 multi-role platform for monitoring the 7 Kebiasaan Anak Indonesia Hebat program with WhatsApp OTP, journals, learning materials, feedback, and Excel reporting.",
    year: "2026",
    stack: ["Laravel 12", "WhatsApp OTP", "Role Access", "Excel", "MySQL"],
    github: "https://github.com/bayupra7ama/monitoring-7KAIH-sekolah",
    secondaryGithub: "https://github.com/bayupra7ama/wa-server-bot",
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
    visual: "education",
  },
  {
    slug: "spotgacor",
    index: "04",
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
    visual: "map",
  },
  {
    slug: "ukt",
    index: "05",
    title: "UKT Reduction Classification",
    eyebrow: "Laravel · Decision Support",
    summary: "A tuition-relief review workflow connected to an R classification API.",
    description: "A decision-support application for UKT reduction applications, linking student submissions and administrative review with an R-based C5.0 classification service.",
    year: "2025",
    stack: ["Laravel", "PHP", "R", "C5.0", "REST API"],
    github: "https://github.com/bayupra7ama/klasifikasi-pengurangan-ukt",
    secondaryGithub: "https://github.com/bayupra7ama/klasifikasi-pengurangan-menggunanakan-model-C50-ukt-api",
    role: "Full-stack & Data Developer",
    problem: "Reviewing tuition-reduction applications requires consistent handling of student data and a clear way to inspect classification results.",
    solution: "I connected a Laravel application workflow to an R API that applies a trained C5.0 model as decision support for application review.",
    highlights: ["Student application workflow", "Administrative review", "R-based C5.0 classification API", "Model evaluation and retraining scripts", "Laravel and R integration"],
    architecture: ["Laravel interface", "Application records", "REST request", "R / C5.0 model", "Review result"],
    accent: "violet",
    visual: "classification",
  },
  {
    slug: "jastip",
    index: "06",
    title: "Jastip E-Commerce",
    eyebrow: "Laravel · Commerce",
    summary: "A shopping workflow with transaction PIN verification and Midtrans payments.",
    description: "A Laravel and Livewire shopping application with customer and admin workflows, transaction PIN verification, and Midtrans payment integration.",
    year: "2025",
    stack: ["Laravel 12", "Livewire", "Midtrans", "MySQL", "Authentication"],
    github: "https://github.com/bayupra7ama/jastip-ecommerce",
    role: "Full-stack Developer",
    problem: "A personal-shopping service needs a clear path from browsing products to checkout, payment, and order handling.",
    solution: "I built customer and admin flows around products, checkout, a transaction PIN, and Midtrans payment processing.",
    highlights: ["Product browsing and customer orders", "Admin product and order workflow", "Transaction PIN verification", "Midtrans payment integration", "Livewire customer interface"],
    architecture: ["Livewire storefront", "Laravel 12", "Transaction PIN", "Midtrans", "Order records"],
    accent: "cyan",
    visual: "commerce",
  },
  {
    slug: "mudah-catat",
    index: "07",
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
    visual: "finance",
  },
  {
    slug: "monitoring-ta",
    index: "08",
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
    visual: "academic",
  },
];

export const extraProjects = [
  {
    title: "ResikApp",
    description: "Bangkit capstone combining a waste-pickup workflow with camera-based classification.",
    stack: "Android · Computer Vision · Team Project",
    href: "https://github.com/bayupra7ama/Capstone",
  },
  {
    title: "Lapor Infra",
    description: "Infrastructure incident reporting developed during an internship at Diskominfo Pekanbaru.",
    stack: "Laravel · Chatbot · Public Service",
    href: "https://github.com/bayupra7ama/chatbot_autoreplay_with_laravel",
  },
  {
    title: "Sistem Administrasi Surat Desa",
    description: "Dedicated letter-service workflow for resident requests, review, revisions, and issuing letters.",
    stack: "Laravel · Blade · PDF",
    href: "https://github.com/bayupra7ama/sistem-administrasi-surat-desa",
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
