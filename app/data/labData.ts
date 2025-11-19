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
    id: "lightweight-edge",
    title: "Lightweight Models for Edge Devices",
    description: "Pioneering research in model compression, quantization, knowledge distillation, and optimization techniques to deploy efficient AI models on resource-constrained edge devices with minimal power consumption and maximum performance.",
    icon: "Cpu",
    gradient: "from-orange-500 via-amber-500 to-yellow-600",
    color: "orange",
    keywords: ["Model Compression", "Quantization", "Knowledge Distillation", "Edge AI", "On-Device Learning", "Model Optimization"],
    applications: [
      "Mobile AI Applications",
      "Drone-based AI Systems",
      "Embedded Vision Systems",
      "Low-Power Inference",
      "Real-time Edge Processing",
      "Teacher-Student Model Training"
    ],
    projects: [
      {
        title: "Lightweight LLM for Tourism",
        description: "Developing low-power LLM models optimized for mobile and edge devices in tourism applications",
        status: "Active"
      },
      {
        title: "On-Device AI for Drones",
        description: "Building efficient AI models for real-time solar panel inspection using drones",
        status: "Active"
      }
    ]
  },
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
    image: "/IMG_0731.jpg",
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
    image: "/IMG_0731.jpg",
    gradient: "from-emerald-500 via-green-600 to-teal-700",
    cta: "Latest Innovations",
    link: "/news",
    stats: { devices: "1000+", networks: "Global", efficiency: "95%" }
  }
]

export interface Project {
  id: number
  title: string
  shortTitle: string
  description: string
  objectives: string[]
  technologies: string[]
  keyFeatures: string[]
  status: "Active" | "Planning" | "Completed"
  image: string
  gradient: string
  category: string
  partner?: string
  icon: string
}

export const currentProjects: Project[] = [
  {
    id: 1,
    title: "LLM for Traffic Digital Twin",
    shortTitle: "Traffic Digital Twin",
    description: "Using LLM to automatically generate traffic scenarios for building and optimizing city transportation digital twins.",
    objectives: [
      "Build digital twin for city traffic environment",
      "Generate realistic traffic scenarios using LLM",
      "Optimize traffic flow through simulation",
      "Apply successful solutions to physical intersections"
    ],
    technologies: ["Large Language Models", "Digital Twin", "Traffic Simulation", "Real-time Analytics", "Urban Planning AI"],
    keyFeatures: [
      "Automatic traffic scenario generation",
      "Real-world data integration (roads, signals, vehicles)",
      "Traffic flow optimization algorithms",
      "Physical-digital twin synchronization"
    ],
    status: "Active",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
    gradient: "from-red-500 via-rose-500 to-pink-600",
    category: "Smart City",
    partner: "City Transportation Authority",
    icon: "Car"
  },
  {
    id: 2,
    title: "Lightweight LLM Technology for Smart Tourism",
    shortTitle: "Smart Tourism AI",
    description: "Developing a low-power LLM-based AI recommendation service for smart tourism with personalized information delivery.",
    objectives: [
      "Develop low-power LLM model engine optimized for mobile and edge devices",
      "Enhance LLM using RAG (Retrieval-Augmented Generation) technology",
      "Collect and integrate comprehensive tourism data for model training",
      "Build integrated AI tourism platform with personalized recommendations"
    ],
    technologies: ["Large Language Models", "RAG", "Edge Computing", "Mobile AI", "Tourism Data Analytics"],
    keyFeatures: [
      "Low-power consumption for extended battery life",
      "Real-time personalized tourism recommendations",
      "Integration with local tourism databases",
      "Multi-language support for international tourists"
    ],
    status: "Active",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    gradient: "from-blue-500 via-cyan-500 to-teal-600",
    category: "LLM & Tourism",
    partner: "Local Tourism Company",
    icon: "MapPin"
  },
  {
    id: 3,
    title: "LLM-Based Smart Farm Service",
    shortTitle: "Smart Farming AI",
    description: "Creating a lightweight LLM for wasabi smart farming optimization with sovereign AI capabilities and real-time IoT integration.",
    objectives: [
      "Develop lightweight LLM for mobile and edge computing in agriculture",
      "Build sovereign LLM system using RAG with IoT sensor data",
      "Integrate international and domestic wasabi variety information",
      "Optimize cultivation processes from planning to harvest"
    ],
    technologies: ["Lightweight LLM", "RAG", "IoT Sensors", "Edge AI", "Agricultural Analytics"],
    keyFeatures: [
      "Real-time IoT sensor data integration",
      "Cultivation know-how recommendations",
      "Product quality and yield optimization",
      "Production cost analysis and reduction"
    ],
    status: "Active",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    gradient: "from-green-500 via-emerald-500 to-lime-600",
    category: "Smart Agriculture",
    partner: "Agricultural Research Institute",
    icon: "Sprout"
  },
  {
    id: 4,
    title: "Establishing On-Device AI for Drone-Based Solar Panel Inspection",
    shortTitle: "Drone Solar Inspection",
    description: "Building a smart preventive maintenance system using on-device AI on drones for automated solar panel inspection and fault prediction.",
    objectives: [
      "Deploy on-device AI directly on inspection drones",
      "Integrate high-resolution cameras and thermal imaging",
      "Develop real-time defect detection algorithms",
      "Implement predictive maintenance alerting system"
    ],
    technologies: ["On-Device AI", "Computer Vision", "Thermal Imaging", "IoT Sensors", "Predictive Analytics"],
    keyFeatures: [
      "Real-time crack and corrosion detection",
      "Overheating prediction and alerts",
      "Automated inspection flight paths",
      "Instant manager notifications for issues"
    ],
    status: "Active",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    gradient: "from-orange-500 via-amber-500 to-yellow-600",
    category: "Renewable Energy",
    partner: "Solar Energy Company",
    icon: "Sun"
  },
  {
    id: 5,
    title: "AI-Based Roof Edge Extraction for Solar Panel Installation",
    shortTitle: "Solar Roof Analysis",
    description: "Combining ViT and LLM technology to identify roof edges and obstacles from aerial imagery for optimal solar panel installation planning.",
    objectives: [
      "Develop ViT model for obstacle detection on roofs",
      "Restore hidden roof areas using AI reconstruction",
      "Implement precise edge detection algorithms",
      "Create LLM-based reasoning for installation planning"
    ],
    technologies: ["Vision Transformer (ViT)", "Large Language Models", "Edge Detection", "Satellite Imagery", "3D Reconstruction"],
    keyFeatures: [
      "Automatic obstacle identification",
      "Hidden area restoration and mapping",
      "Structural suitability assessment",
      "Optimal panel arrangement suggestions"
    ],
    status: "Active",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    gradient: "from-purple-500 via-violet-500 to-indigo-600",
    category: "Renewable Energy",
    icon: "Home"
  },
  {
    id: 6,
    title: "Development of Data Management Technology for Sovereign AI BEMS",
    shortTitle: "AI BEMS Data Platform",
    description: "Using LLM to standardize and normalize diverse BEMS data for optimal building energy management with sovereign AI capabilities.",
    objectives: [
      "Define standardized codebook for BEMS elements",
      "Normalize diverse and unstructured building data",
      "Validate data for logical consistency and reliability",
      "Power RAG-based Sovereign AI for building optimization"
    ],
    technologies: ["Large Language Models", "RAG", "Data Normalization", "BEMS Integration", "Energy Analytics"],
    keyFeatures: [
      "Automatic data standardization and cleaning",
      "Building equipment codebook system",
      "Data validation and quality assurance",
      "AI-driven energy optimization"
    ],
    status: "Active",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    gradient: "from-teal-500 via-cyan-500 to-blue-600",
    category: "Smart Building",
    partner: "Building Management Systems Inc.",
    icon: "Building"
  }
]

export const navigationItems = [
  { name: "Home", href: "/", icon: "Home" },
  { name: "Research", href: "/research", icon: "Beaker" },
  { name: "Projects", href: "/projects", icon: "Rocket" },
  { name: "Publications", href: "/publications", icon: "BookOpen" },
  { name: "Team", href: "/team", icon: "Users" },
  { name: "News", href: "/news", icon: "Newspaper" },
  { name: "Contact", href: "/contact", icon: "Mail" }
]