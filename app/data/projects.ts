export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  fullDescription?: string;
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Tavus - The OS for Human-AI Interaction",
    description:
      "AI-powered video personalization platform transforming human-AI interaction.",
    image:
      "projects/tavus-pic-2.png",
    technologies: ["React", "Node.js",  "Python", "TensorFlow", "AWS", "Docker", "MongoDB", "Redis", "PostgreSQL", "Tailwind CSS"],
    category: "Full Stack",
    fullDescription:
      "AI-powered video personalization platform transforming human-AI interaction. Building blocks to empower your AI Agent to see, hear, respond, and look human – in real time.",
    features: [
      "User authentication and profile management",
      "Developer first APIs with SDKs, documentation, and portal",
      "Bring a human dimension to AI agents, in real-time",
      "The Conversational Video Interface powers AI agents that not only look real – but can see, hear, and interact live on a video call.",
      "Personalized videos generation based on the pre-trained avatars",
      "Pre-trained avatars for various use cases",
      "Real-time video processing and rendering",
      "Analytics and reporting tools",
      "Integration with third-party services and APIs",
      "User-friendly interface for managing video content",
      "Customizable templates for video generation",
    ],
    liveUrl: "https://www.tavus.io/",
    githubUrl: "",
    screenshots: [
      "projects/tavus-pic-1.png",
      "projects/tavus-pic-3.png",
    ],
  },
  {
    id: "4",
    title: "RemoteIQ (Formally CattronConnect)",
    description:
      "A Web-based locomotive monitoring and diagnostic platform.",
    image:
      "projects/cattron-connect-pic-1.png",
    technologies: ["React", "Redux", "Express", "PostgreSQL"],
    category: "Full Stack",
    fullDescription:
      `RemoteIQ™ Rail is a cloud-based analytics tool that monitors activities in the yard, optimizing operations and helping keep assets and personnel safe. The cloud platform directly connects to the locomotive to gather vital information about operator productivity, wheel slip, speed violations, communication health, emergency brake incidents and more. A live virtual dashboard provides timely and sometimes even critical insights to help manage maintenance strategies and maximize performance.
       Event-based alerts and notifications are emailed to on-site supervisors and tracked within RemoteIQ. The responsive user interface creates a mobile-friendly experience for operators, providing a snapshot of yard conditions. It integrates with Google Maps for reporting on OCU location, current status and metrics.`,
    features: [
      "Live Monitoring: View any online locomotive remote control system in real-time",
      "Remote Diagnostics: Access diagnostic data and perform troubleshooting remotely",
      "On-Demand Reports: Productivity, reliability, and rule enforcement reports can be generated whenever a user wants to view the data",
      "Scheduled Reports: Schedule and email predefined reports to user lists",
      "Predefined Alerts: Email alerts can be generated when the locomotive remote control data shows selected events",
      "Scheduled Data Transfers: Schedule regular data transfers of raw data",
      "Helps increase productivity, safety and profitability",
      "Real-time data aggregation from multiple platforms",
      "Real-time fleet and asset tracking",
      "Customizable reporting and analytics dashboard",
      "Allows user to create and manage custom reports to monitor equipment and personnel health and provide alerts before damage occurs",
      "Provides real time information to maintenance and plant managers",
      "Uploading of operating software and firmware to equipment",
      "Remote access to equipment for troubleshooting and diagnostics",
      "Configuration of select features (BCF)",
      "Diagnostics and data logging/viewing can all be done remotely from the locomotive yard",
    ],
    liveUrl: "https://example.com/social-analytics",
    githubUrl: "https://github.com/example/social-analytics",
    screenshots: [
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&q=80",
    ],
  },
  {
    id: "2",
    title: "Grip Studio",
    description:
      "The mobile marketplace for health and fitness.",
    image:
      "projects/grip-studio-pic-1.png",
    technologies: ["React", "Node.js",  "Python", "TensorFlow", "AWS", "Docker", "MongoDB", "Redis", "PostgreSQL", "Tailwind CSS"],
    category: "Full Stack",
    fullDescription:
      "GripStudio is a multi-platform app to ensure that everyone has the opportunity to be in charge of their personal health and fitness.  ",
    features: [
      "User authentication and profile management",
      "25+ fitness and wellness categories of all skill levels.",
      "Easily view upcoming classes and events in your area tailored to your personal preferences and goals.",
      "In-depth class details provide the confidence you need to sweat it out, without sweating the details.",
      "Find your perfect instructor match.",
      "Book classes and events with ease.",
      "Analytics and reporting tools",
      "Integration with third-party services and APIs",
    ],
    liveUrl: "https://www.gripstudio.app/",
    githubUrl: "",
    screenshots: [
      "projects/grip-studio-pic-1.png",
    ],
  },
  {
    id: "3",
    title: "Offer Approved",
    description:
      "A buyer’s first marketplace: Tired of long lines and sold-out games? Browse, select, and list tickets easily, just through your phone.",
    image:
      "projects/ofa-pic-1.png",
    technologies: ["Vue.js", "D3.js", "Firebase", "Tailwind CSS"],
    category: "Frontend",
    fullDescription:
      "A comprehensive financial dashboard that helps users track their investments, expenses, and financial goals. The application features interactive data visualizations, budget planning tools, and investment portfolio analysis to provide users with a complete overview of their financial health.",
    features: [
      "Expense tracking and categorization",
      "Budget planning and monitoring",
      "Investment portfolio management",
      "Financial goal setting and progress tracking",
      "Interactive charts and visualizations",
      "Bank account integration",
      "Customizable dashboard widgets",
      "Financial reports and insights",
    ],
    liveUrl: "https://offerapproved.com",
    githubUrl: "",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
  },
  // {
  //   id: "5",
  //   title: "Task Management System",
  //   description:
  //     "A collaborative task management application with real-time updates and team workflow features.",
  //   image:
  //     "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  //   technologies: ["React", "Socket.io", "Express", "MongoDB"],
  //   category: "Full Stack",
  //   fullDescription:
  //     "A collaborative task management system designed for teams to organize, track, and complete projects efficiently. The application features real-time updates, customizable workflows, and integration capabilities with other productivity tools.",
  //   features: [
  //     "Task creation, assignment, and tracking",
  //     "Project organization and milestone setting",
  //     "Real-time collaboration and updates",
  //     "Customizable workflows and board views",
  //     "Time tracking and reporting",
  //     "File sharing and document management",
  //     "Calendar integration and deadline reminders",
  //     "Mobile app for on-the-go management",
  //   ],
  //   liveUrl: "https://example.com/task-management",
  //   githubUrl: "https://github.com/example/task-management",
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
  //     "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
  //   ],
  // },
  // {
  //   id: "6",
  //   title: "Health & Fitness Tracker",
  //   description:
  //     "A mobile-first application for tracking workouts, nutrition, and health metrics with personalized insights.",
  //   image:
  //     "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
  //   technologies: ["React Native", "GraphQL", "Node.js", "MongoDB"],
  //   category: "Mobile",
  //   fullDescription:
  //     "A comprehensive health and fitness tracking application that helps users monitor their workouts, nutrition, and overall health metrics. The app provides personalized insights and recommendations based on user data and goals, supporting a holistic approach to health and wellness.",
  //   features: [
  //     "Workout planning and tracking",
  //     "Nutrition logging and meal planning",
  //     "Health metrics monitoring (weight, sleep, heart rate)",
  //     "Goal setting and progress visualization",
  //     "Personalized recommendations and insights",
  //     "Social features for motivation and accountability",
  //     "Integration with fitness devices and apps",
  //     "Customizable dashboard and reports",
  //   ],
  //   liveUrl: "https://example.com/fitness-tracker",
  //   githubUrl: "https://github.com/example/fitness-tracker",
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80",
  //     "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  //   ],
  // },
  // {
  //   id: "7",
  //   title: "Real Estate Marketplace",
  //   description:
  //     "A platform connecting property buyers, sellers, and agents with advanced search and virtual tours.",
  //   image:
  //     "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  //   technologies: ["Angular", "Node.js", "PostgreSQL", "AWS"],
  //   category: "Full Stack",
  //   fullDescription:
  //     "A comprehensive real estate marketplace that connects property buyers, sellers, and agents. The platform features advanced property search capabilities, virtual tours, mortgage calculators, and agent-client communication tools to streamline the property buying and selling process.",
  //   features: [
  //     "Advanced property search with multiple filters",
  //     "Virtual property tours and 3D walkthroughs",
  //     "Mortgage calculator and financing resources",
  //     "Agent profiles and direct messaging",
  //     "Property listing management for sellers and agents",
  //     "Saved searches and property alerts",
  //     "Neighborhood information and market trends",
  //     "Review and rating system for agents",
  //   ],
  //   liveUrl: "https://example.com/real-estate",
  //   githubUrl: "https://github.com/example/real-estate",
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  //     "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
  //   ],
  // },
  // {
  //   id: "8",
  //   title: "Learning Management System",
  //   description:
  //     "An educational platform with course creation, student management, and interactive learning features.",
  //   image:
  //     "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  //   technologies: ["React", "Django", "PostgreSQL", "Redis"],
  //   category: "Full Stack",
  //   fullDescription:
  //     "A comprehensive learning management system designed for educational institutions and online course creators. The platform includes tools for course creation, student management, assessment, and interactive learning experiences to facilitate effective online education.",
  //   features: [
  //     "Course creation and curriculum management",
  //     "Student enrollment and progress tracking",
  //     "Interactive content including videos, quizzes, and assignments",
  //     "Discussion forums and real-time chat",
  //     "Automated grading and feedback",
  //     "Certificate generation upon course completion",
  //     "Analytics dashboard for instructors",
  //     "Mobile-responsive design for learning on the go",
  //   ],
  //   liveUrl: "https://example.com/lms",
  //   githubUrl: "https://github.com/example/lms",
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  //     "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  //   ],
  // },
  // {
  //   id: "9",
  //   title: "Weather Visualization App",
  //   description:
  //     "An interactive weather application with beautiful visualizations and forecasting capabilities.",
  //   image:
  //     "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
  //   technologies: ["Vue.js", "D3.js", "Node.js", "Weather API"],
  //   category: "Frontend",
  //   fullDescription:
  //     "An interactive weather application that provides users with current conditions, forecasts, and historical weather data through beautiful and informative visualizations. The app uses multiple weather data sources to ensure accuracy and offers location-based personalization.",
  //   features: [
  //     "Real-time weather conditions and forecasts",
  //     "Interactive maps and data visualizations",
  //     "Historical weather data and trends",
  //     "Severe weather alerts and notifications",
  //     "Location-based personalization",
  //     "Multiple location tracking",
  //     "Weather impact on daily activities",
  //     "Shareable weather reports and screenshots",
  //   ],
  //   liveUrl: "https://example.com/weather",
  //   githubUrl: "https://github.com/example/weather",
  //   screenshots: [
  //     "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
  //     "https://images.unsplash.com/photo-1530908295418-a12e326966ba?w=800&q=80",
  //   ],
  // },
];
