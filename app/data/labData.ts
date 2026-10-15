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
    id: "solar-pv",
    title: "Solar Energy & Photovoltaic AI",
    description: "AI for the full solar pipeline: segmenting PV panels across image resolutions with multi-agent, uncertainty-aware frameworks, mapping rooftop installations from satellite and aerial imagery with minimal labelled data, and tracking the true global power peak in module-level solar optimizers.",
    icon: "Sun",
    gradient: "from-orange-500 via-amber-500 to-yellow-600",
    color: "orange",
    keywords: ["PV Segmentation", "Solar Mapping", "MPPT", "Domain Adaptation", "Human-in-the-Loop", "Uncertainty Estimation"],
    applications: [
      "PV Panel Segmentation & Mapping",
      "Rooftop Solar Detection from Satellite Imagery",
      "Behind-the-Meter Installation Discovery",
      "Generation Capacity Estimation",
      "Global MPPT for Module-Level Optimizers"
    ],
    projects: [
      {
        title: "MAPVNet-Q: Multi-Agent PV Segmentation",
        description: "A multi-agent framework that uses uncertainty-based quality features and a gain-prediction router to pick the best segmentation model, improving PV mapping reliability across imagery sources and acquisition conditions",
        status: "Active"
      },
      {
        title: "SolarMap AI: Rooftop Solar Mapping",
        description: "Segments PV panels address by address across Jeju Island, estimates generation capacity, and flags unregistered installations, with a human-in-the-loop loop that retrains the model on corrected masks",
        status: "Active"
      },
      {
        title: "ML-Seeded Global MPPT",
        description: "A learned seed predicts the global peak region from about six voltage probes, then hands over to Perturb & Observe and re-seeds when shading changes, tracking the true peak at a fraction of the measurement cost",
        status: "Active"
      }
    ]
  },
  {
    id: "energy-forecasting",
    title: "Probabilistic Energy & Grid Forecasting",
    description: "Reliable, uncertainty-aware forecasting for power systems: physics-guided and physics-informed deep learning, meta-learning for unseen operating regimes, conformal calibration of prediction intervals, and explainable multivariate time-series models for generation, demand and grid state.",
    icon: "TrendingUp",
    gradient: "from-blue-500 via-cyan-500 to-purple-600",
    color: "blue",
    keywords: ["Probabilistic Forecasting", "Physics-Informed ML", "Uncertainty Quantification", "Conformal Prediction", "Meta-Learning", "Explainable AI"],
    applications: [
      "Grid-State & Power-Flow Forecasting",
      "Solar Power Forecasting",
      "Electricity Demand & Consumption Prediction",
      "Renewable Generation Forecasting",
      "Uncertainty-Aware Grid Operations"
    ],
    projects: [
      {
        title: "Physics-Guided Meta-Learning for Grid-State Forecasting",
        description: "Combines graph-based learning, uncertainty quantification and differentiable power-flow modeling to forecast nodal power, bus voltages and line loadings that stay physically consistent in unseen operating regimes",
        status: "Active"
      },
      {
        title: "Regime-Aware Conformal Solar Forecasting",
        description: "Calibrates prediction intervals of physics-informed deep learning models per solar regime, for reliable coverage under changing irradiance and weather conditions",
        status: "Active"
      },
      {
        title: "Multivariate Time-Series Forecasting for Energy",
        description: "Neural architectures that model temporal dynamics and cross-variable dependencies for multi-horizon forecasting of renewable generation, electricity demand and consumption",
        status: "Active"
      }
    ]
  },
  {
    id: "efficient-vision",
    title: "Efficient Vision & Edge AI",
    description: "Real-time, edge-deployable computer vision: confidence-guided hybrid architectures for language-guided video segmentation, and lightweight, distilled models that judge the analytical value of satellite imagery onboard to cut unnecessary data transmission.",
    icon: "Eye",
    gradient: "from-sky-500 via-blue-500 to-cyan-600",
    color: "green",
    keywords: ["Video Segmentation", "Vision-Language Models", "Knowledge Distillation", "Model Compression", "Satellite Imagery", "Edge AI"],
    applications: [
      "Real-Time Language-Guided Video Segmentation",
      "Onboard Satellite Image Selection",
      "Cloud-Aware Land-Cover Analysis",
      "Bandwidth-Efficient Satellite Downlink",
      "Edge-Deployable Vision Systems"
    ],
    projects: [
      {
        title: "ConfTrackNet: Real-Time Video Instance Segmentation",
        description: "A confidence-guided hybrid framework pairing a heavy vision-language detector on key frames with lightweight mask propagation, re-detecting only when a multi-signal confidence estimator sees quality drop",
        status: "Active"
      },
      {
        title: "Task-Retention Utility for Satellite Downlink",
        description: "Predicts how much land-cover segmentation performance survives cloud cover using clear-to-cloud knowledge distillation and a lightweight model, so satellites prioritize imagery by analytical value rather than cloud coverage alone",
        status: "Active"
      }
    ]
  },
  {
    id: "trustworthy-llm",
    title: "Trustworthy LLMs & Adaptive RAG",
    description: "Making generative AI reliable: adaptive retrieval-augmented generation that chooses retrieval channels per query, answers or abstains based on visual evidence and confidence, and selectively revises responses as video and sensor observations change.",
    icon: "Brain",
    gradient: "from-purple-500 via-pink-500 to-red-600",
    color: "purple",
    keywords: ["Adaptive RAG", "Multimodal LLMs", "Reliable AI", "Evidence Grounding", "Confidence Estimation", "Decision Support"],
    applications: [
      "Smart Farming Decision Support",
      "Evidence-Grounded Question Answering",
      "Video & Sensor-Based Reasoning",
      "Answer-or-Abstain Response Control",
      "Context-Aware Response Revision"
    ],
    projects: [
      {
        title: "Adaptive RAG for Smart Farming",
        description: "Selects retrieval channels by query and candidates, learns to answer or abstain from visual evidence, and revises only the affected parts of a response when sensor states change, delivering evidence-grounded farm decision support",
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
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2070&q=80",
    gradient: "from-blue-500 via-sky-600 to-cyan-700",
    cta: "Discover Our Research",
    link: "/research",
    stats: { projects: "50+", publications: "396+", collaborations: "Global" }
  },
  {
    id: 2,
    title: "Healthcare AI Revolution",
    subtitle: "🏥 Transforming Medical Science",
    description: "Developing intelligent systems for medical diagnosis, treatment optimization, and patient care that save lives through cutting-edge technology.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2070&q=80",
    gradient: "from-blue-500 via-sky-600 to-cyan-700",
    cta: "View Publications",
    link: "/publications",
    stats: { impact: "High", citations: "7777+", journals: "Top-tier" }
  },
  {
    id: 3,
    title: "Research Excellence",
    subtitle: "🎯 Award-Winning Innovation", 
    description: "Our dedicated team of researchers and students pushing the boundaries of what's possible in machine learning and AI applications.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2070&q=80",
    gradient: "from-blue-500 via-sky-600 to-cyan-700",
    cta: "Meet Our Team",
    link: "/team",
    stats: { members: "25+", experience: "20+ Years", awards: "Multiple" }
  },
  {
    id: 4,
    title: "Smart IoT Ecosystem",
    subtitle: "🌐 Connected Intelligence",
    description: "Building the future with Internet of Things and edge computing solutions for smart cities, precision agriculture, and Industry 4.0.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2070&q=80",
    gradient: "from-blue-500 via-sky-600 to-cyan-700",
    cta: "Latest Innovations",
    link: "/news",
    stats: { devices: "1000+", networks: "Global", efficiency: "95%" }
  }
]

export interface ArchitectureComponent {
  name: string
  description: string
  icon: string
}

export interface PerformanceDataset {
  name: string
  setting?: string
  metrics: { label: string; value: string }[]
  fps: string
  latency: string
}

export interface ProjectDetails {
  overview: string
  researchProblem: string
  howItWorks: { step: number; title: string; description: string }[]
  architectureImage?: { src: string; caption: string }
  architectureComponents: ArchitectureComponent[]
  whyDifferent: string
  propagationDesign?: { description: string; params: string; trainableParams: string; speed: string }
  confidenceSignals?: { name: string; description: string }[]
  confidenceDescription?: string
  performance: {
    datasets: PerformanceDataset[]
    improvement?: string
  }
  qualitativeResultsImage?: { src: string; caption: string }
  edgeDeployment?: {
    hardware: string
    powerMode: string
    precision: string
    fps: string
    latency: string
    metrics: { label: string; value: string }[]
    description: string
    realtimeVideos?: { src: string; label: string }[]
  }
}

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
  details?: ProjectDetails
}

export const currentProjects: Project[] = [
  {
    id: 7,
    title: "Hybrid Architecture for Real-Time Query-Based Video Instance Segmentation",
    shortTitle: "ConfTrackNet",
    description: "A real-time vision-language segmentation framework that combines heavy detection on key frames with lightweight mask propagation, achieving near-SOTA accuracy at 190+ FPS.",
    objectives: [
      "Design a confidence-guided adaptive routing system for video segmentation",
      "Achieve real-time inference speed (30+ FPS) without sacrificing segmentation quality",
      "Enable edge deployment on embedded hardware like NVIDIA Jetson",
      "Eliminate fixed keyframe schedules with dynamic re-detection triggers"
    ],
    technologies: ["Vision Transformers", "DistilBERT", "MobileViT-S", "Swin-B", "Deformable Convolution", "Cross-Modal Fusion"],
    keyFeatures: [
      "Confidence-guided adaptive routing (no fixed keyframe schedule)",
      "Frozen MobileViT-S propagation branch at 5.0 ms per frame",
      "Three-signal confidence estimator (feature similarity, embedding consistency, mask quality)",
      "~15.8× throughput improvement over heavy baseline",
      "Edge deployment at ~100 FPS on NVIDIA Jetson AGX Orin"
    ],
    status: "Active",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    category: "Computer Vision",
    icon: "Video",
    details: {
      overview: "ConfTrackNet is a real-time vision-language segmentation framework designed to identify and segment a target object in video using a natural language query. Instead of performing expensive cross-modal reasoning on every frame, the framework intelligently combines accurate heavy detection on key frames with lightweight mask propagation on intermediate frames. This design enables strong segmentation accuracy while achieving real-time speed, making the model suitable for both desktop and edge deployment.",
      researchProblem: "Existing query-based video segmentation methods usually apply the full transformer-based vision-language model to every frame. This gives strong accuracy, but it is too slow for real-time applications, often running well below 30 FPS. ConfTrackNet addresses this gap by introducing adaptive routing: it spends heavy computation only when necessary, and uses efficient tracking-style propagation for the rest of the video.",
      howItWorks: [
        { step: 1, title: "Text Query Encoding", description: "The input text query is encoded once using a frozen DistilBERT text encoder, so the language information can be reused across all frames — eliminating redundant NLP computation." },
        { step: 2, title: "Heavy Key-Frame Detection", description: "The first frame is processed by a heavy detection pathway built on Swin-B with cross-modal fusion and a transformer decoder, producing a high-quality initial segmentation mask." },
        { step: 3, title: "Lightweight Propagation + Confidence Gate", description: "For subsequent frames, a lightweight MobileViT-S pathway propagates the mask using previous mask, current-frame features, and text guidance. A confidence estimator decides whether to trust the result or re-trigger full detection." }
      ],
      architectureImage: { src: "/architecture.png", caption: "Full pipeline of ConfTrackNet: the Baseline (heavy) detection pathway (top), Key Frame Detection Module with confidence-guided routing (middle), and the Lightweight Tracking Pipeline for intermediate frames (bottom)." },
      architectureComponents: [
        { name: "Text Encoder", description: "Frozen DistilBERT that converts the natural language query into a shared embedding reused across all frames.", icon: "Type" },
        { name: "Heavy Detection Pathway", description: "Swin-B backbone with cross-modal vision-language fusion and a transformer decoder for accurate key-frame segmentation.", icon: "ScanSearch" },
        { name: "Lightweight Propagation Pathway", description: "Frozen MobileViT-S with a mask encoder, deformable mask warping module, and multi-scale decoder. Only 3.16M total parameters (0.64M trainable), running at 5.0 ms per frame.", icon: "Zap" },
        { name: "Multi-Signal Confidence Estimator", description: "Fuses three complementary signals — feature similarity, embedding consistency, and mask quality estimation — into a single reliability score.", icon: "BarChart3" },
        { name: "Confidence-Guided Re-Detection Gate", description: "Dynamically triggers full inference only when confidence falls below threshold, replacing expensive fixed-interval keyframe schedules.", icon: "GitBranch" }
      ],
      whyDifferent: "The main novelty of ConfTrackNet is that it does not use a fixed key-frame schedule. Instead, it uses confidence-guided adaptive routing. The system dynamically decides whether to continue propagating the mask or to perform a fresh full detection. This is more effective than running heavy detection every N frames, because video difficulty changes over time — objects can be partially occluded in one segment and fully visible in another. The paper demonstrates that adaptive routing achieves a significantly better balance between accuracy and speed than any fixed-interval keyframe selection strategy.",
      propagationDesign: { description: "The lightweight branch uses a frozen MobileViT-S backbone, a mask encoder, a learned deformable mask warping module, and a multi-scale decoder. It is the primary reason the model achieves real-time speed.", params: "3.16M", trainableParams: "0.64M", speed: "5.0 ms / frame" },
      confidenceSignals: [
        { name: "Feature Similarity", description: "Checks whether the object appearance remains visually consistent between frames." },
        { name: "Embedding Consistency", description: "Checks whether the instance identity (as encoded by the text query) is preserved across the propagated mask." },
        { name: "Mask Quality Estimation", description: "Checks whether the predicted mask spatially aligns well with the current frame's features." }
      ],
      confidenceDescription: "These three signals are fused into a single confidence score. Frames with low confidence automatically trigger re-detection via the heavy pathway. The full three-signal configuration achieved the best results in ablation studies.",
      qualitativeResultsImage: { src: "/qualitative-results.png", caption: "Qualitative segmentation results on Ref-YouTube-VOS. Each block shows (top to bottom): input frames, ground truth masks, and ConfTrackNet predictions. The model accurately tracks and segments the queried object across challenging motion and occlusion scenarios." },
      performance: {
        datasets: [
          { name: "Ref-YouTube-VOS", metrics: [{ label: "J Score", value: "68.53" }, { label: "F Score", value: "69.45" }, { label: "J&F", value: "68.99" }], fps: "190.7", latency: "5.0 ms" },
          { name: "Ref-DAVIS 2017", setting: "Zero-Shot", metrics: [{ label: "J Score", value: "67.26" }, { label: "F Score", value: "68.50" }, { label: "J&F", value: "67.88" }], fps: "167.7", latency: "6.0 ms" }
        ],
        improvement: "~15.8× throughput improvement over the heavy baseline while preserving nearly identical segmentation quality"
      },
      edgeDeployment: {
        hardware: "NVIDIA Jetson AGX Orin 64GB", powerMode: "30W", precision: "FP16", fps: "~100", latency: "10.0 ms",
        metrics: [{ label: "J Score", value: "68.46" }, { label: "F Score", value: "69.36" }, { label: "J&F", value: "68.91" }],
        description: "A major strength of ConfTrackNet is practical deployment. The model maintains strong segmentation quality on embedded hardware, making it suitable for real-world edge AI and robotics applications where both accuracy and power efficiency are critical.",
        realtimeVideos: [
          { src: "/Media1.mp4", label: "Real-Time Demo — Clip 1" },
          { src: "/Media2.mp4", label: "Real-Time Demo — Clip 2" },
          { src: "/Media3.mp4", label: "Real-Time Demo — Clip 3" },
        ]
      }
    }
  },
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
    gradient: "from-blue-500 via-cyan-500 to-cyan-600",
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
    gradient: "from-sky-500 via-blue-500 to-lime-600",
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
    gradient: "from-cyan-500 via-cyan-500 to-blue-600",
    category: "Smart Building",
    partner: "Building Management Systems Inc.",
    icon: "Building"
  }
]

export interface ProjectDashboard {
  id: string
  title: string
  tagline: string
  description: string
  field: string
  tag: string
  image: string
  video: string
  duration: number
  gradient: string
  icon: string
  highlights: string[]
  technologies: string[]
}

// Lab projects with video walkthroughs (from the Student Project Atlas)
export const projectDashboards: ProjectDashboard[] = [
  {
    id: "pv-scope",
    title: "PV-Scope",
    tagline: "One platform, three scales: multi-resolution solar panel segmentation",
    description: "Discover, identify and measure photovoltaic systems in satellite, aerial and UAV imagery. An agentic MAPVNet router picks the specialist model trained for each image's scale, so every panel pixel is marked accurately whatever the source.",
    field: "Solar Energy",
    tag: "Computer Vision",
    image: "/dashboards/pv-scope.jpg",
    video: "/project-videos/pv-scope.mp4",
    duration: 61,
    gradient: "from-orange-500 via-amber-500 to-yellow-600",
    icon: "Sun",
    highlights: [
      "Analyse a single image in about a second, or a whole folder in one run",
      "Agentic routing across SegFormer and Swin-UNet specialists",
      "Train your own model with no code, then export scores and PDF reports"
    ],
    technologies: ["MAPVNet", "SegFormer", "Swin-UNet", "Multi-Resolution Segmentation"]
  },
  {
    id: "solarmap-ai",
    title: "SolarMap AI",
    tagline: "Find, measure and verify solar installations across Jeju",
    description: "Maps solar PV systems in satellite imagery of Jeju and compares what the model finds against the official register. Operators can correct outlines by hand, estimate energy production and retrain the model from their corrections.",
    field: "Solar Energy",
    tag: "Computer Vision",
    image: "/dashboards/solarmap-ai.jpg",
    video: "/project-videos/solarmap-ai.mp4",
    duration: 57,
    gradient: "from-emerald-500 via-teal-500 to-cyan-600",
    icon: "Sun",
    highlights: [
      "Pixel-level panel detection on real satellite imagery",
      "Spots installations missing from the official register",
      "Human-in-the-loop correction, retraining and dataset export"
    ],
    technologies: ["Semantic Segmentation", "Satellite Imagery", "Human-in-the-Loop", "Energy Estimation"]
  },
  {
    id: "pi-solar-power",
    title: "PI-Solar Power",
    tagline: "Physics-informed solar forecasting you can verify",
    description: "Asks one question: if a machine-learning forecaster is given the physics of the sun, does it forecast better, and can we prove it? Solar position, clear-sky irradiance and cell temperature set the ceiling, and the same learner is scored with and without physics on unseen data.",
    field: "Solar Energy",
    tag: "Physics-Informed AI",
    image: "/dashboards/pi-solar-power.jpg",
    video: "/project-videos/pi-solar-power.mp4",
    duration: 77,
    gradient: "from-yellow-500 via-amber-500 to-orange-600",
    icon: "Sun",
    highlights: [
      "42 rooftop PV sites, or upload your own power CSV",
      "Before-and-after comparison of models with and without physics",
      "Prediction bands for uncertainty-aware forecasts"
    ],
    technologies: ["Physics-Informed ML", "Clear-Sky Modeling", "Probabilistic Forecasting", "PV Analytics"]
  },
  {
    id: "solar-pv-simulator",
    title: "Solar PV Simulator",
    tagline: "Configure modules and explore partial-shading scenarios",
    description: "A step-by-step simulator for photovoltaic experiments: choose a real module or upload your own, set the array layout, irradiance and cell temperature, then explore shading scenarios to see how global maximum power point tracking responds.",
    field: "Solar Energy",
    tag: "Simulation",
    image: "/dashboards/solar-pv-simulator.jpg",
    video: "/project-videos/solar-pv-simulator.mp4",
    duration: 64,
    gradient: "from-rose-500 via-orange-500 to-amber-500",
    icon: "Sun",
    highlights: [
      "Library of commercial modules plus custom uploads",
      "Setup, scenario and results workflow",
      "Advanced research parameters for MPPT experiments"
    ],
    technologies: ["PV Modeling", "Global MPPT", "Partial Shading", "Streamlit"]
  },
  {
    id: "hyrat-meta",
    title: "HyRaT-Meta",
    tagline: "Forecasting energy demand, renewable generation and curtailment",
    description: "A research framework that forecasts how the grid will keep supply and demand in balance: energy load, renewable generation, and the curtailment that happens when there is more renewable power than the grid can use.",
    field: "Forecasting",
    tag: "Energy Forecasting",
    image: "/dashboards/hyrat-meta.jpg",
    video: "/project-videos/hyrat-meta.mp4",
    duration: 59,
    gradient: "from-violet-500 via-purple-500 to-indigo-600",
    icon: "TrendingUp",
    highlights: [
      "Explore grid data and supply-demand imbalance day by day",
      "Live, step-by-step forecasting sessions with accuracy checks",
      "Bilingual English and Korean interface"
    ],
    technologies: ["Meta-Learning", "Time-Series Forecasting", "Grid Analytics", "Curtailment Modeling"]
  },
  {
    id: "prophetboost-studio",
    title: "ProphetBoost Studio",
    tagline: "Forecast electricity demand in one click",
    description: "Pick a dataset, pick your models, and see how well they predict, with live charts and side-by-side scores. Uses the built-in Jeju Island dataset or your own CSV, and runs several models at once for a fair comparison.",
    field: "Forecasting",
    tag: "Machine Learning",
    image: "/dashboards/prophetboost-studio.jpg",
    video: "/project-videos/prophetboost-studio.mp4",
    duration: 58,
    gradient: "from-sky-500 via-blue-500 to-indigo-600",
    icon: "TrendingUp",
    highlights: [
      "Ten models including ProphetBoost, XGBoost, LightGBM and neural networks",
      "Live forecasts with side-by-side accuracy comparison",
      "Jeju Island electricity load dataset built in"
    ],
    technologies: ["ProphetBoost", "XGBoost", "LightGBM", "Load Forecasting"]
  },
  {
    id: "learning-to-navigate",
    title: "Learning to Navigate",
    tagline: "Goal-directed robot navigation with reinforcement learning",
    description: "Robots learn to reach a goal while avoiding obstacles, trained with reinforcement learning in the Webots R2025a simulator on both an NAO humanoid and a quadruped platform.",
    field: "Robotics",
    tag: "Reinforcement Learning",
    image: "/dashboards/learning-to-navigate.jpg",
    video: "/project-videos/learning-to-navigate.mp4",
    duration: 100,
    gradient: "from-blue-600 via-indigo-600 to-cyan-600",
    icon: "Bot",
    highlights: [
      "Goal-directed navigation with obstacle avoidance",
      "NAO humanoid and quadruped robots",
      "Simulated training in Webots R2025a"
    ],
    technologies: ["Reinforcement Learning", "Webots", "Robot Navigation", "Obstacle Avoidance"]
  },
  {
    id: "smart-farm",
    title: "Smart Farm",
    tagline: "Evidence-grounded monitoring and inspection planning",
    description: "Monitors farm conditions, identifies the areas that need attention and helps plan inspections. The AI shows its evidence, while the operator approves every action, so devices are never changed automatically.",
    field: "Smart Agriculture",
    tag: "Farm Monitoring",
    image: "/dashboards/smart-farm.jpg",
    video: "/project-videos/smart-farm.mp4",
    duration: 117,
    gradient: "from-green-600 via-emerald-500 to-teal-600",
    icon: "Sprout",
    highlights: [
      "Real-time cultivation zone and sensor monitoring",
      "AI evidence review with operator approval",
      "Guided recovery workflow and record export"
    ],
    technologies: ["Adaptive RAG", "IoT Sensors", "Decision Support", "Evidence Grounding"]
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