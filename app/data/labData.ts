// Lab data and constants

// Type definitions
export interface HeroSlideStats {
  [key: string]: string
}

export interface HeroSlide {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  gradient: string
  cta: string
  link: string
  stats?: HeroSlideStats
}

export const labInfo = {
  name: "Machine Learning Lab",
  fullName: "Machine Learning Laboratory",
  department: "Department of Computer Engineering",
  university: "Jeju National University",
  location: "Jeju 63243, Korea",
  director: "Dr. Yung-Cheol Byun",
  email: "yungcheolbyun@gmail.com",
  phone: "+82-64-754-3657",
  address: "Dept. of Computer Engineering, Jeju National University, 102 Jejudaehak-ro, Jeju-si, Jeju-do, Korea, 690-756",
  workingHours: "9:00 - 18:00",
  established: "2003",
  website: "https://ml-jnu.github.io"
}

export const researchAreas = [
  {
    id: "machine-learning",
    title: "Machine Learning & AI",
    description: "Advanced research in artificial intelligence, deep learning, and machine learning applications for real-world problems including renewable energy, transportation, and smart systems.",
    icon: "Brain",
    gradient: "from-blue-500 via-cyan-500 to-purple-600",
    color: "blue",
    keywords: ["Deep Learning", "Neural Networks", "Predictive Modeling", "Time Series Analysis", "Pattern Recognition"],
    applications: [
      "Renewable Energy Optimization",
      "Smart Transportation Systems", 
      "Predictive Maintenance",
      "Recommendation Systems",
      "Natural Language Processing"
    ],
    projects: [
      {
        title: "AI for Renewable Energy",
        description: "Developing intelligent systems for optimal energy distribution and consumption prediction",
        status: "Active"
      },
      {
        title: "Smart City Analytics",
        description: "Machine learning solutions for urban planning and traffic optimization",
        status: "Active"
      }
    ]
  },
  {
    id: "image-processing",
    title: "Computer Vision & Image Processing",
    description: "Cutting-edge research in computer vision, medical image analysis, and CNN applications for object detection, classification, and segmentation tasks.",
    icon: "Eye",
    gradient: "from-green-500 via-emerald-500 to-teal-600",
    color: "green",
    keywords: ["Computer Vision", "CNN", "Medical Imaging", "Object Detection", "Image Segmentation"],
    applications: [
      "Medical Image Analysis",
      "Autonomous Vehicle Vision",
      "Quality Control Systems",
      "Facial Recognition",
      "Environmental Monitoring"
    ],
    projects: [
      {
        title: "Brain Tumor Detection",
        description: "AI-powered system for early detection and classification of brain tumors using MRI scans",
        status: "Active"
      },
      {
        title: "Skin Lesion Analysis",
        description: "Deep learning models for automated skin cancer detection and classification",
        status: "Completed"
      }
    ]
  },
  {
    id: "llm-generative",
    title: "LLM & Generative AI Models",
    description: "Advanced research in Large Language Models, generative AI, and transformer architectures for natural language processing, content generation, and conversational AI systems.",
    icon: "Brain",
    gradient: "from-purple-500 via-pink-500 to-red-600",
    color: "purple",
    keywords: ["Large Language Models", "Generative AI", "Transformers", "Natural Language Processing", "Conversational AI"],
    applications: [
      "Automated Content Generation",
      "Intelligent Chatbots",
      "Code Generation",
      "Language Translation",
      "Educational AI Assistants"
    ],
    projects: [
      {
        title: "Korean Language Model",
        description: "Developing specialized LLM for Korean language understanding and generation",
        status: "Active"
      },
      {
        title: "Medical AI Assistant",
        description: "Generative AI system for medical diagnosis and treatment recommendations",
        status: "Planning"
      }
    ]
  },
  {
    id: "iot-edge",
    title: "IoT & Edge Computing",
    description: "Research in Internet of Things, edge computing, and distributed intelligence for smart environments and real-time processing applications.",
    icon: "Cpu",
    gradient: "from-purple-500 via-indigo-500 to-blue-600",
    color: "purple",
    keywords: ["IoT", "Edge Computing", "Sensor Networks", "Real-time Processing", "Embedded Systems"],
    applications: [
      "Smart Agriculture",
      "Industrial IoT",
      "Environmental Monitoring",
      "Smart Home Systems",
      "Wearable Devices"
    ],
    projects: [
      {
        title: "Smart Agriculture Platform",
        description: "IoT-based system for precision farming and crop monitoring",
        status: "Active"
      },
      {
        title: "Edge AI for Manufacturing",
        description: "Real-time quality control using edge computing and AI",
        status: "Active"
      }
    ]
  }
]

export const heroSlides = [
  {
    id: 1,
    title: "Welcome to Machine Learning Lab",
    subtitle: "🚀 Leading Edge Research",
    description: "Pioneering breakthrough discoveries in artificial intelligence, machine learning, and deep learning that revolutionize industries worldwide.",
    image: "/mllab.jpeg",
    gradient: "from-emerald-500 via-green-600 to-teal-700",
    cta: "Discover Our Research",
    link: "/research",
    stats: { projects: "50+", publications: "200+", collaborations: "Global" }
  },
  {
    id: 2,
    title: "Healthcare AI Revolution",
    subtitle: "🏥 Transforming Medical Science",
    description: "Developing intelligent systems for medical diagnosis, treatment optimization, and patient care that save lives through cutting-edge technology.",
    image: "/journal_img.png",
    gradient: "from-emerald-500 via-green-600 to-teal-700",
    cta: "View Publications",
    link: "/publications",
    stats: { impact: "High", citations: "1000+", journals: "Top-tier" }
  },
  {
    id: 3,
    title: "Research Excellence",
    subtitle: "🎯 Award-Winning Innovation", 
    description: "Our dedicated team of researchers and students pushing the boundaries of what's possible in machine learning and AI applications.",
    image: "/bg-1.jpg",
    gradient: "from-emerald-500 via-green-600 to-teal-700",
    cta: "Meet Our Team",
    link: "/team",
    stats: { members: "25+", experience: "20+ Years", awards: "Multiple" }
  },
  {
    id: 4,
    title: "Smart IoT Ecosystem",
    subtitle: "🌐 Connected Intelligence",
    description: "Building the future with Internet of Things and edge computing solutions for smart cities, precision agriculture, and Industry 4.0.",
    image: "/IMG_5952.JPG",
    gradient: "from-emerald-500 via-green-600 to-teal-700",
    cta: "Latest Innovations",
    link: "/news",
    stats: { devices: "1000+", networks: "Global", efficiency: "95%" }
  }
]

export const navigationItems = [
  { name: "Home", href: "/", icon: "Home" },
  { name: "Research", href: "/research", icon: "Beaker" },
  { name: "Publications", href: "/publications", icon: "BookOpen" },
  { name: "Team", href: "/team", icon: "Users" },
  { name: "News", href: "/news", icon: "Newspaper" },
  { name: "Contact", href: "/contact", icon: "Mail" }
]