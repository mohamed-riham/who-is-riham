import { Project, TimelineItem, SkillGroup, Certification, Article, Experience, ResearchMetric, GitHubRepo } from './types';

export const PERSONAL_INFO = {
  name: "M.A. Mohamed Riham",
  title: "AI Developer & Data Science Undergraduate",
  subTitle: "Software Engineer & Data Science Undergraduate specializing in Intelligent Data Solutions",
  biography: "I am a Software Engineer and Data Science Undergraduate based in Addalaichenai, specializing in engineering localized, privacy-first Edge AI hardware assist devices, clean database-driven architectures adhering strictly to robust SOLID design patterns, and high-precision convolutional and machine learning models.",
  email: "mohamedriham93@gmail.com",
  github: "https://github.com/mohamed-riham",
  linkedin: "https://linkedin.com/in/mohamed-riham",
  devTo: "https://dev.to/mohamed-riham",
  medium: "https://medium.com/@mohamed-riham",
  instagram: "https://www.instagram.com/_mohamed_riham/",
};

export const PROJECTS: Project[] = [
  {
    id: "lkr-detector",
    title: "Sri Lankan Banknote Detector for the Visually Impaired",
    category: "iot",
    shortDescription: "An edge-computing assistant utilizing custom YOLOv8n and hardware modules to detect LKR cash denominations and provide Tamil/Sinhala/English vocal feedback.",
    longDescription: "A hardware-software assistive helper engineered to facilitate monetary autonomy for Sri Lanka's visually impaired demographic. The system grabs environmental frames with an ESP32-CAM and pipes them through an on-device, fully-quantized YOLOv8 object recognition schema. Once validated, it fires dedicated serial controls to trigger audio narration arrays on a speaker.",
    problem: "Visually impaired residents face structural barriers in currency handling. Standard identification solutions are slow and rely on active internet networks, resulting in latency and information-leak issues.",
    solution: "A local, offline hardware module utilizing a customized micro-controller connected to an MP3 serial driver, loaded with custom-recorded trilingual voice files corresponding to localized banknotes.",
    features: [
      "Custom Dataset Creation: Collected, annotated, and released over 2,158 authentic high-resolution LKR note photos.",
      "High-Precision Quantized Engine: Quantized the YOLOv8n network to run smoothly under resource-constrained boundaries.",
      "Instant Trilingual Audio: Serial speaker announcements triggering Sinhala, Tamil, or English files depending on user switches.",
      "6 Active Denomination Classes: Rs. 20, 50, 100, 500, 1000, and 5000."
    ],
    results: [
      "Released highly-rated academic dataset (LKR Notes Dataset) to the public on Kaggle (2,158 structured files, 256MB) maintaining an 8.1 usability rating.",
      "Ensured zero-latency response time under fluctuating real-world lighting settings on physical hardware."
    ],
    techStack: ["YOLOv8", "Python", "ESP32-CAM", "C++", "OpenCV", "DFPlayer Mini"],
    hardwareSpecs: ["ESP32-CAM Board", "DFPlayer Mini Serial Module", "8 Ohm Miniature Speaker", "FTDI Programmer Board"],
    kaggleUrl: "https://www.kaggle.com/datasets/mohamedriham/sri-lankan-currency-notes-dataset",
    githubUrl: "https://github.com/mohamed-riham/Sri-Lankan-Currency-Detector-YOLOv8",
    devToUrl: "https://dev.to/mohamed-riham/building-an-accessible-currency-detector-for-the-sr-lankan-visually-impaired-with-yolov8-3flc",
    customStats: [
      { label: "Kaggle Dataset Usability", value: "8.1" },
      { label: "Annotated LKR Files", value: "2,158" },
      { label: "Hardware Cost", value: "<$15" }
    ],
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "edith-assistant",
    title: "EDITH: Privacy-First Offline Assistant",
    category: "data-science",
    shortDescription: "A secure, offline intelligent system providing low-latency trilingual voice capabilities, fuzz speech mechanics, and dashboard launching macros.",
    longDescription: "A terminal personal ecosystem built entirely in Python designed to eliminate cloud tracking. Uses speech recognition algorithms, semantic fuzz dictionaries, and localized TTS compilation to respond without intermediate buffering latency.",
    problem: "Cloud personal assistants stream user voice metrics continuously to external servers, demanding non-stop network connection and leaking corporate code pipelines or secret operational variables.",
    solution: "A local terminal service running custom subprocess macros, managing files, setting project servers, and running developer pipelines without internet dependencies.",
    features: [
      "Complete Local Computation: Voice metadata never touches external cloud adapters, keeping keys and operations secure on the file system.",
      "Intelligent Subsystem Control: Direct voice command automation for restarting active database servers and starting IDE terminals.",
      "Edge-TTS Compilation: Immediate, multi-vocal sound playback matching user inputs with semantic dictionary trees."
    ],
    results: [
      "Reduced speech-to-action pipeline response rates into a clean sub-200ms processing loop.",
      "Eliminated 100% of outbound network leaks during offline scripting exercises."
    ],
    techStack: ["Python", "SpeechRecognition", "Edge-TTS", "FuzzyWuzzy", "Subprocess Loops"],
    githubUrl: "https://github.com/mohamed-riham",
    youtubeUrl: "https://www.youtube.com/watch?v=IeytAWt0NNw",
    devToUrl: "https://dev.to/mohamed-riham/i-built-an-offline-jarvis-in-python-no-internet-needed-demo-video-inside-4bhn",
    linkedinEmbedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7327798813300051969?compact=1",
    customStats: [
      { label: "Web Reliance", value: "0.0%" },
      { label: "Intent Match Rate", value: "96.4%" },
      { label: "Vocal Latency", value: "<180ms" }
    ],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sampath-dashboard",
    title: "Sampath Food City Sales Dashboard",
    category: "software",
    shortDescription: "An enterprise analytical data dashboard using decoupled Factory, Observer, and Singleton patterns to process sales reports and inventory levels.",
    longDescription: "A modular, scalable pipeline developed in Streamlit and Flask. Adheres directly to SOLID principles. Decoupled parsing methods separate sales input schemas, while dynamic DB gateways handle connection safety.",
    problem: "Commercial inventory operations struggle with layout inconsistencies in CSV records, which lead to crashes, double insertions, or DB connection pool limits.",
    solution: "A software-pattern approach using a Factory engine that creates custom parser files depending on format metrics, backed by observers that instantly refresh visuals.",
    features: [
      "Factory Pattern Parser Design: Dynamically instantiates the correct parser and data preprocessor based on incoming sales file formats.",
      "Singleton Connection Pattern: Restricts Database socket allocations, eliminating data-source memory leaks during heavy analytical loops.",
      "Observer Pattern State Broker: Pushes instant event notices to the frontend to trigger a recalculation of inventory charts when data changes."
    ],
    results: [
      "Successfully created a robust corporate dashboard utilizing clean code patterns without structural debt.",
      "Maintained zero analytical runtime leaks during mock tests with highly varied tabular report sets."
    ],
    techStack: ["Flask", "Streamlit", "Pandas", "SOLID Architecture", "Singleton & Observer Patterns"],
    githubUrl: "https://github.com/mohamed-riham/Data-Science-Dashboard-python",
    customStats: [
      { label: "Architecture", value: "SOLID Core" },
      { label: "Leak Rate", value: "0.0%" },
      { label: "Charts Frame Rate", value: "60fps" }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "biometric-attendance",
    title: "Automated Student Attendance Tracking Core",
    category: "full-stack",
    shortDescription: "A dlib-powered face tracking and notification terminal automating attendance logging with SMTP parent email updates and PyQt user widgets.",
    longDescription: "An educational solution designed to replace manual entry lists. Compiles face visual data from camera feeds, extracts embedding landmarks, matches distance ratios inside MySQL, and auto-dispatches alerts.",
    problem: "Manual and barcode registries in colleges permit proxy check-ins, leak administrative time, and fail to immediately alert guardians of student absences.",
    solution: "An automated facial landmark comparison desktop station paired with safe email routing queues and proper database key constraints.",
    features: [
      "High-Fidelity Embedding Distances: Uses deep learning facial recognition to evaluate embeddings against registered data.",
      "Auto-SMTP Alert Dispatchers: Multi-threaded task pipeline that emails parental accounts the moment check-in criteria are validated in the DB.",
      "PyQt Control Center: Smooth administrative control layout showing status graphs, class records, and missing parameters."
    ],
    results: [
      "Designed and deployed a terminal layout, eliminating check-in queues in test cohorts.",
      "Automated verification alerts sent to parent mailboxes with immediate timestamps."
    ],
    techStack: ["PyQt5", "OpenCV", "MySQL", "face_recognition", "Python", "SMTP SMTPClient"],
    githubUrl: "https://github.com/mohamed-riham/face_recognition_attendance_system",
    linkedinEmbedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7279573993232195584?compact=1",
    customStats: [
      { label: "Matching Rate", value: "99.2%" },
      { label: "E-Mail Delivery", value: "<2.4s" },
      { label: "Database Support", value: "MySQL" }
    ],
    image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "azirah-game",
    title: "Azirah: Don't Let Her See You",
    category: "game",
    shortDescription: "A suspenseful 3D psychological survival game built with Unity & C# featuring custom Blender assets and complex algorithmic enemy state handlers.",
    longDescription: "An indie game project designed to practice OOP software patterns under intense memory and frame-rate limits. Features state machines, baked static lighting environments, and audio-reactive proximity triggers.",
    problem: "Real-time game loops in Unity often experience performance spikes due to trash collections (GC), poorly constructed update triggers, and expensive visual models.",
    solution: "Highly clean C# architecture with localized enemy patrolling and custom-modeled low-polygon assets created specifically in Blender.",
    features: [
      "FSM Enemy Logic: Finite State Machines managing patrolling, noise investigation, and alert states smoothly.",
      "Asset Polishing on Blender: Custom models optimized for real-time vertex computations, keeping the rendering footprint small.",
      "Dynamic Audio Mapping: Generates acoustic tension based on calculated proximity vectors."
    ],
    results: [
      "Mastery of fundamental game loops, low-latency state checks, and coordinate geometry calculations in C#.",
      "Sustained 60 frames-per-second performance on low-tier graphics laptops."
    ],
    techStack: ["C#", "Unity Engine", "Blender", "Finite State Machines", "Graphics Baking"],
    githubUrl: "https://github.com/mohamed-riham",
    linkedinEmbedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7351122801895886848?compact=1",
    customStats: [
      { label: "Target Framerate", value: "60 FPS" },
      { label: "Asset Format", value: ".FBX optimized" },
      { label: "Engine Code", value: "100% C#" }
    ],
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "abc-hospital",
    title: "ABC Hospital Portal Core",
    category: "full-stack",
    shortDescription: "A solid HND assignments assignment built with core PHP and MySQL, compiling doctors, room allocations, and patient profiles cleanly.",
    longDescription: "A pure PHP full-stack appointment scheduling database solution. Developed from scratch, this system manages registrations and matches medical professional slots without bloated external libraries.",
    problem: "Beginner database applications often overlook proper SQL validation, suffer from SQL injection risks, and fail to structure tables into normalized relations.",
    solution: "A complete normalized MySQL core with PHP controllers, featuring custom field validation, visual appointment models, and clean CSS styling.",
    features: [
      "Pure PHP Structure: Structured as a pure PHP project for higher execution velocity.",
      "Optimized Patient Booking: Interactive form structures that show matching clinician schedules.",
      "Relational Constraints: Fully normalized schema with strict doctor-to-schedule bindings."
    ],
    results: [
      "Delivered as an exemplary distinction-grade assignments project during HND studies.",
      "Coded completely with: PHP (86.8%), CSS (12.8%), and JavaScript (0.4%)."
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "Tailwind CSS", "HTML5"],
    githubUrl: "https://github.com/mohamed-riham/ABC_HOSPITAL",
    customStats: [
      { label: "PHP Ratio", value: "86.8%" },
      { label: "Security", value: "Parameterized" },
      { label: "Grade Awarded", value: "Distinction" }
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
  }
];

export const CAREER_TIMELINE: TimelineItem[] = [
  {
    id: "timeline-1",
    period: "2025 – 2026",
    title: "BSc (Hons) in Data Science",
    institution: "ICBT Campus",
    status: "In Progress",
    coreFocus: "Advanced computational modeling, machine learning pipelines, and deep learning topologies.",
    details: [
      "Specializing in deep learning, convolution networks, classification matrix optimization, and distributed databases.",
      "Actively applying software engineering standards (clean code, OOP) directly to data pipeline challenges.",
      "Conducting extensive big-data evaluation research on massive imbalanced datasets."
    ],
    category: "academic"
  },
  {
    id: "timeline-2",
    period: "2023 – 2025",
    title: "Higher National Diploma (HND) in Software Engineering",
    institution: "BCAS Campus",
    status: "Completed (Merit)",
    coreFocus: "Object-oriented software systems, transactional relational databases, and enterprise IT security.",
    details: [
      "Excelled in systems analysis, software engineering principles (SDLC), and data structures.",
      "Designed and deployed raw database platforms, web clients, and local network directories.",
      "Voted by student cohort as Batch Representative for the BCAS IT Society (BITS)."
    ],
    category: "academic"
  },
  {
    id: "timeline-3",
    period: "Jan 2025 – Jul 2025",
    title: "Web Developer",
    institution: "Axis Academy",
    status: "Completed",
    coreFocus: "Full-stack client updates, custom registration forms, and database management.",
    details: [
      "Successfully created and supported Axis Academy's central online resource pages.",
      "Automated custom analytical tools and dynamic registration filters, increasing student inquiry processing speeds.",
      "Set up dynamic administration dashboards using PHP, CSS, and secure backend routing."
    ],
    category: "career"
  },
  {
    id: "timeline-4",
    period: "Oct 2024",
    title: "Volunteer hardware Specialist",
    institution: "BCAS PC Clinic",
    status: "Service",
    coreFocus: "Hardware diagnostic operations, OS configurations, and community IT maintenance.",
    details: [
      "Volunteered at Kalmunai, Sri Lanka, diagnosing and repairing physical computers for local families.",
      "Secured system recoveries, installed safe Linux systems, and updated slow legacy rigs.",
      "Fostered community collaboration by presenting systems maintenance workshops to local students."
    ],
    category: "career"
  },
  {
    id: "timeline-5",
    period: "2023",
    title: "Diploma in Information Technology",
    institution: "BCAS Campus",
    status: "Completed (Merit)",
    coreFocus: "Network topologies, foundational coding syntax, and logical systems mapping.",
    details: [
      "Studied basic computer science rules, dynamic routing equations, and standard document schemas.",
      "Refined academic presentations and reports with an emphasis on system design diagrams."
    ],
    category: "academic"
  }
];

export const RESEARCH_DATA = {
  title: "A Comparative Study of Random Forest and XGBoost for Detecting Credit Card Fraud Transactions using Big Data",
  studentId: "1028401",
  assessor: "A.L.F. Sajeetha",
  supervisor: "Mr. Mohamed Nismy",
  scope: "Comparative analysis of robust algorithmic classifiers over highly uneven commercial transactional logs.",
  totalTransactions: "1,000,000+ Transactions",
  fraudRatio: "0.52% Fraud / 99.48% Legitimate",
  imbalanceMethod: "Synthetic Minority Over-sampling Technique (SMOTE)",
  randomForestModelDesc: "Ensemble of decision tree estimators implementing bootstrap aggregation and random sub-feature sampling to prevent modeling over-learning patterns.",
  xgboostModelDesc: "Gradient boosting library utilizing secondary extreme gradient updates to iteratively bound and correct preceding estimator residuals.",
  pValue: "0.0003 (Statistically Significant)",
  conclusion: "XGBoost demonstrated superior classification metrics, particularly in recall and precision, proving its readiness for high-consequence fraud alerting terminals.",
  metrics: [
    { metric: "Accuracy", randomForest: 99.63, xgboost: 99.74, improvement: "+0.11%" },
    { metric: "Precision", randomForest: 99.66, xgboost: 99.71, improvement: "+0.05%" },
    { metric: "Recall", randomForest: 99.63, xgboost: 99.74, improvement: "+0.11%" },
    { metric: "F1-Score", randomForest: 99.65, xgboost: 99.72, improvement: "+0.07%" },
  ] as ResearchMetric[]
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Python", level: 95, description: "Advanced scripting, ML modeling, and system automation protocols." },
      { name: "SQL", level: 90, description: "Structured query architectures, relational safety keys, and indexing." },
      { name: "JavaScript / TS", level: 85, description: "React application components, responsive layouts, data plotting." },
      { name: "C# (Unity)", level: 80, description: "Object-oriented structures, game-loop updates, state machines." },
      { name: "PHP", level: 85, description: "Full-stack direct CRUD models, MySQL connections, parameterization." }
    ]
  },
  {
    category: "AI & Machine Learning",
    iconName: "Cpu",
    skills: [
      { name: "Scikit-Learn", level: 92, description: "Feature engineering, regression models, classification metrics." },
      { name: "TensorFlow", level: 82, description: "Neural network maps, model structures, classification tuning." },
      { name: "OpenCV", level: 88, description: "Real-time edge video capturing, frames filtration, landmark mapping." },
      { name: "YOLOv8 Edge AI", level: 90, description: "Detection training, yolov8n weights quantization, IoT compiling." },
      { name: "SMOTE (Imbalanced)", level: 95, description: "Oversampling minority patterns to establish balanced classifiers." }
    ]
  },
  {
    category: "Web & Microservices",
    iconName: "Globe",
    skills: [
      { name: "FastAPI", level: 88, description: "Structuring swift asynchronous pipelines and server routing paths." },
      { name: "Flask", level: 85, description: "Connecting database hooks directly to browser dashboards." },
      { name: "Streamlit", level: 92, description: "Dynamic creation of interface components for quick ML visualizations." },
      { name: "Tailwind CSS", level: 90, description: "Modern, high-fidelity responsive structural styling." }
    ]
  },
  {
    category: "Hardware & IoT",
    iconName: "Layers",
    skills: [
      { name: "ESP32-CAM", level: 88, description: "Camera flashing, local image acquisition, WiFi/Serial loops." },
      { name: "DFPlayer Mini", level: 85, description: "Microprocessor pin matching for serial-driven sound relays." },
      { name: "Raspberry Pi", level: 80, description: "Linux deployment, custom script startup execution ports." }
    ]
  },
  {
    category: "Systems & Developer Tools",
    iconName: "Wrench",
    skills: [
      { name: "Git & Version Control", level: 90, description: "Branching protocols, merge conflicts, code repositories." },
      { name: "Linux / Shell Scripts", level: 85, description: "Bash automations, offline package setups, system controls." },
      { name: "Docker Containerization", level: 75, description: "Isolating web dashboards and services inside images." },
      { name: "n8n Workflow Automation", level: 88, description: "Designing multi-stage triggers mapping security warnings." }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services",
    date: "July 2025",
    badgeColor: "from-amber-500 to-orange-600",
    description: "Validates fluency in cloud-native ML pipelines, data ingestion patterns, and cloud model hosting architectures.",
    skillsValidated: ["Cloud Scaling", "ML Operations", "Amazon SageMaker Intro", "Pipeline Sizing"]
  },
  {
    id: "cert-2",
    title: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    date: "July 2025",
    badgeColor: "from-blue-500 to-indigo-600",
    description: "Covers foundation model hyperparameters, optimal prompt layout practices, and deployment boundaries.",
    skillsValidated: ["Generative AI", "Prompt Engineering", "AWS Bedrock", "Evaluation Matrices"]
  },
  {
    id: "cert-3",
    title: "Workshop Participation Certificate",
    issuer: "Axis Academy Addalaichenai",
    date: "December 2024",
    badgeColor: "from-teal-500 to-emerald-600",
    description: "Recognizes technical workshop collaboration, local computing mentorship, and web tooling research.",
    skillsValidated: ["Community Engagement", "Web Tooling", "Local Troubleshooting"]
  }
];

export const ARTICLES: Article[] = [
  {
    id: "article-1",
    title: "Software Engineering vs. Data Science in 2025",
    date: "Nov 5, 2025",
    readTime: "4 min read",
    platform: "Dev.to",
    url: "https://dev.to/mohamed-riham/software-engineering-vs-data-science-in-2025",
    excerpt: "Provides critical guidance explaining that simple coding will become highly automated. Advocates that developers should expand beyond basic syntax to implement adaptive systems that predict, classify, and automate.",
    tags: ["Career Strategy", "AI Trends", "Data Science Roadmap"],
    impactNotes: "Featured recommendation for computational undergraduate panels."
  },
  {
    id: "article-2",
    title: "Why I Chose BSc (Hons) Data Science Following My HND",
    date: "Nov 4, 2025",
    readTime: "3 min read",
    platform: "Dev.to",
    url: "https://dev.to/mohamed-riham/why-i-chose-bsc-hons-data-science",
    excerpt: "Details the logical transition from HND clean code structures into deep learning. Discusses how sound software design patterns act as the ideal launchpad to implement reliable, production-ready AI pipelines.",
    tags: ["Personal Journey", "Academic Transition", "Software Coding"],
    impactNotes: "Highly shared among BCS and BCAS software engineering cohorts."
  },
  {
    id: "article-3",
    title: "The LinkedIn Lockout Experience: Design Lessons from Automated Identity Verification Failures",
    date: "Jul 15, 2025",
    readTime: "6 min read",
    platform: "Dev.to",
    url: "https://dev.to/mohamed-riham/linkedin-lockout-experience",
    excerpt: "A technical case study analyzing automated identity verification failures with Persona. Riham outlines how single-line layout overlap printed on Sri Lankan licenses repeatedly failed automated scans—suggesting robust human-fallback UI structures.",
    tags: ["User Experience", "OCR Systems", "Feature Analysis", "Inclusive UI"],
    impactNotes: "Advocated local ID document modernization and inclusive model fail-safes."
  }
];

export const RESEARCH_PRESENTATIONS = [
  {
    title: "Why Group Theory is Essential for Computing Students",
    platform: "SlideShare",
    focus: "Computational Mathematics / Algebraic Cryptography",
    desc: "Explores symmetric groups, cryptographic transformations, and matrices used in visual graphic rendering engines and artificial neural layers."
  },
  {
    title: "Domain Names & Domain Name Systems",
    platform: "SlideShare",
    focus: "Networking / System Protocols",
    desc: "Analyzes standard IP resolution, zone authority hierarchies, and reverse DNS lookup operations within secure configurations."
  },
  {
    title: "SDLC & Beta Testing Guidelines",
    platform: "SlideShare",
    focus: "System Quality Assurance",
    desc: "Deep dive into testing lifecycles, structured error logs, and release boundaries for reliable release candidates."
  },
  {
    title: "Music Playlist Management System Using ADTs",
    platform: "SlideShare",
    focus: "Data Structures & Performance",
    desc: "Visualizes Abstract Data Types (ADTs) demonstrating structural algorithmic operations over memory bounds."
  },
  {
    title: "IT Security for Revuelto Financial Services",
    platform: "SlideShare",
    focus: "Enterprise Security Architecture",
    desc: "Designs absolute system isolation, firewall standards, encryption hashes, and data protection boundaries for financial compliance."
  },
  {
    title: "Emotional Intelligence in Technical Communication",
    platform: "SlideShare",
    focus: "Interpersonal Team Operations",
    desc: "Highlights structural collaboration protocols, translating technical statistics into straightforward commercial statements."
  }
];

export const GITHUB_REPOS: GitHubRepo[] = [
  {
    name: "who-is-riham",
    description: "The official responsive and high-performance resume and portfolio website of M.A. Mohamed Riham.",
    url: "https://github.com/mohamed-riham/who-is-riham",
    language: "TypeScript",
    isPrivate: false,
    stars: 1,
    updatedAt: "34 minutes ago",
    tags: ["Portfolio", "SEO", "React", "Framer Motion"]
  },
  {
    name: "mokkapix-vault",
    description: "Secure digital locker and imaging application containing high-fidelity photo processing modules.",
    url: "https://github.com/mohamed-riham/mokkapix-vault",
    language: "TypeScript",
    isPrivate: false,
    stars: 1,
    updatedAt: "3 days ago",
    tags: ["Vault", "Security", "TypeScript"]
  },
  {
    name: "Senior-TV-Player",
    description: "Accessible multimedia broadcast and streaming application designed with high-contrast UI controls.",
    url: "https://github.com/mohamed-riham/Senior-TV-Player",
    language: "TypeScript",
    isPrivate: false,
    stars: 1,
    updatedAt: "last week",
    tags: ["Media", "Streaming", "Accessibility"]
  },
  {
    name: "personal-website",
    description: "Initial clean layout responsive web landing page and curriculum vitae document.",
    url: "https://github.com/mohamed-riham/personal-website",
    language: "HTML",
    isPrivate: false,
    stars: 1,
    updatedAt: "2 weeks ago",
    tags: ["CSS", "Web design", "HTML5"]
  },
  {
    name: "Real-Estate-Tokenization-DApp",
    description: "Decentralized real estate tokenization platform for fractional ownership of localized properties.",
    url: "https://github.com/mohamed-riham/Real-Estate-Tokenization-DApp",
    language: "HTML",
    isPrivate: false,
    stars: 1,
    updatedAt: "Mar 1, 2026",
    tags: ["DApp", "Blockchain", "Web3", "Ethereum"]
  },
  {
    name: "mohamed-riham",
    description: "Profile readme repository featuring structured professional skills, tools, and social links.",
    url: "https://github.com/mohamed-riham/mohamed-riham",
    language: "Markdown",
    isPrivate: false,
    stars: 1,
    updatedAt: "Nov 6, 2025",
    tags: ["Profile", "Markdown", "Readme"]
  },
  {
    name: "Smart-Home-Door-Lock-System-IoT-Enabled-Access-Control",
    description: "Internet-connected security hardware system integrating ESP8266, RFID credentials, and local buzzer alerts.",
    url: "https://github.com/mohamed-riham/Smart-Home-Door-Lock-System-IoT-Enabled-Access-Control",
    language: "C++",
    isPrivate: false,
    stars: 1,
    updatedAt: "Oct 31, 2025",
    tags: ["C++", "IoT", "Arduino", "ESP8266"]
  },
  {
    name: "portfolio",
    description: "Classic responsive personal portfolio utilizing standard semantic components and transitions.",
    url: "https://github.com/mohamed-riham/portfolio",
    language: "HTML",
    isPrivate: false,
    stars: 1,
    updatedAt: "Oct 30, 2025",
    tags: ["HTML", "Vanilla CSS", "JS"]
  },
  {
    name: "Data-Science-Dashboard-python",
    description: "Interactive data analysis dashboard application utilizing Pandas, Matplotlib, and Streamlit for dynamic visualization.",
    url: "https://github.com/mohamed-riham/Data-Science-Dashboard-python",
    language: "Python",
    isPrivate: false,
    stars: 1,
    updatedAt: "Oct 26, 2025",
    tags: ["Python", "Streamlit", "Pandas", "Matplotlib"]
  },
  {
    name: "Sri-Lankan-Currency-Detector-YOLOv8",
    description: "Sri Lankan Rupee (LKR) currency identifier dataset (1,000+ custom annotated pictures) and trained YOLOv8 neural weights.",
    url: "https://github.com/mohamed-riham/Sri-Lankan-Currency-Detector-YOLOv8",
    language: "Python",
    isPrivate: false,
    stars: 1,
    updatedAt: "Oct 18, 2025",
    tags: ["Computer Vision", "YOLOv8", "Deep Learning", "LKR currency"]
  },
  {
    name: "AimBot-Panel",
    description: "Custom control console UI built with modern coordinate calculations and vector math.",
    url: "https://github.com/mohamed-riham/AimBot-Panel",
    language: "C#",
    isPrivate: false,
    stars: 2,
    updatedAt: "Oct 6, 2025",
    tags: ["C#", "Windows Forms", "DirectX"]
  },
  {
    name: "CRP-Final",
    description: "Big Data analysis on massive transactions to evaluate Machine Learning algorithms for fraud detection.",
    url: "https://github.com/mohamed-riham",
    language: "Data Analysis",
    isPrivate: true,
    stars: 1,
    updatedAt: "Apr 19, 2025",
    tags: ["Data Science", "Jupyter", "Big Data"]
  },
  {
    name: "Research_Papers",
    description: "Curated research repository detailing classification metrics, SMOTE imbalance processes, and statistical tests.",
    url: "https://github.com/mohamed-riham",
    language: "Research",
    isPrivate: true,
    stars: 1,
    updatedAt: "Feb 18, 2025",
    tags: ["LaTeX", "Research Paper", "Academic"]
  },
  {
    name: "face_recognition_attendance_system",
    description: "Campus attendance terminal utilizing face_recognition embeddings, SMTP messaging, and MySQL logs.",
    url: "https://github.com/mohamed-riham/face_recognition_attendance_system",
    language: "Python",
    isPrivate: false,
    stars: 1,
    updatedAt: "Jan 23, 2025",
    tags: ["Python", "dlib", "OpenCV", "MySQL"]
  },
  {
    name: "ABC_HOSPITAL",
    description: "Full-stack medical booking system assignment completed for HND with secure PHP routing and relational SQL database.",
    url: "https://github.com/mohamed-riham/ABC_HOSPITAL",
    language: "PHP",
    isPrivate: false,
    stars: 1,
    updatedAt: "Dec 8, 2024",
    tags: ["PHP", "MySQL", "HND Assignment"]
  },
  {
    name: "Human-Resource-Management",
    description: "Employee directories, secure login, and salary sheet management terminal developed in Python.",
    url: "https://github.com/mohamed-riham/Human-Resource-Management",
    language: "Python",
    isPrivate: false,
    stars: 1,
    updatedAt: "Mar 20, 2024",
    tags: ["Python", "Management System", "OOP"]
  },
  {
    name: "pythonProject1",
    description: "Custom logical scripting patterns, regular expression filters, and data pipeline tests in Python.",
    url: "https://github.com/mohamed-riham/pythonProject1",
    language: "Python",
    isPrivate: false,
    stars: 1,
    updatedAt: "Feb 27, 2024",
    tags: ["Python", "Scripting", "Regex"]
  },
  {
    name: "pythonProject",
    description: "Secure database communication structures, JSON encoders, and utility scripting loops.",
    url: "https://github.com/mohamed-riham",
    language: "Python",
    isPrivate: true,
    stars: 1,
    updatedAt: "Feb 20, 2024",
    tags: ["Python", "Backend Scripts"]
  },
  {
    name: "Pycharm_LORD",
    description: "A secure development repository containing environment properties, IDE extensions, and automation scripts.",
    url: "https://github.com/mohamed-riham",
    language: "Config",
    isPrivate: true,
    stars: 1,
    updatedAt: "Feb 8, 2024",
    tags: ["IDE Settings", "Automation"]
  },
  {
    name: "LABSHEET02",
    description: "University lab assignments analyzing standard sorting algorithms, recursive trees, and algorithmic complexity.",
    url: "https://github.com/mohamed-riham",
    language: "Python",
    isPrivate: true,
    stars: 1,
    updatedAt: "Jan 25, 2024",
    tags: ["Python", "Algorithms", "Lab Sheet"]
  },
  {
    name: "ProgrammingPython",
    description: "Collection of functional algorithms, array manipulation routines, and logical exercises.",
    url: "https://github.com/mohamed-riham",
    language: "Python",
    isPrivate: true,
    stars: 1,
    updatedAt: "Jan 16, 2024",
    tags: ["Python", "Practice Labs"]
  },
  {
    name: "PythonMasterRHM",
    description: "Master sandbox demonstrating deep OOP principles, class decorators, magic methods, and multi-threaded queues.",
    url: "https://github.com/mohamed-riham",
    language: "Python",
    isPrivate: true,
    stars: 1,
    updatedAt: "Jan 16, 2024",
    tags: ["Python", "OOP", "Concurrency"]
  }
];

