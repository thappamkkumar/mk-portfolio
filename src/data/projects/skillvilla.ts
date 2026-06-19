import { CaseStudy } from "@/types/case-study";

export const skillVilla: CaseStudy = {
  slug: "skillvilla",

  title: "SkillVilla",

  subtitle: "Platform for Skills, Talent & Professional Growth",

  category: "project",

  type: "Personal Project",

  image: "/case-study/projects/skillvilla/hero.webp",//feed,community,chat,jobs

  screenshots: [
    {
      title: "Home Feed",
      image: "/case-study/projects/skillvilla/hero.webp",
    },

    {
      title: "Workfolio Showcase",
      image: "/case-study/projects/skillvilla/hero.webp",
    },

    {
      title: "Communities",
      image: "/case-study/projects/skillvilla/hero.webp",
    },

    {
      title: "Realtime Communication", //call image
      image: "/case-study/projects/skillvilla/hero.webp",
    },
 
  ],

  liveUrl: "http://52.53.160.90/",

  githubUrl: "https://github.com/thappamkkumar/skillvilla",

  overview:
    "SkillVilla is a platform where users can showcase their skills, share their work, build a professional presence, and connect with others. Users can publish posts, create workfolios, share stories, join communities, discover jobs and freelance opportunities, livestream, and communicate in real time.",

  technologies: [
    "React",
    "Redux Toolkit",
    "Bootstrap",
    "Laravel",
    "MySQL",
    "Laravel Reverb",
    "Pusher Echo",
    "WebRTC",
    "AWS EC2",
  ],

  metrics: [
    {
      label: "Role",
      value: "Full Stack Developer",
    },
    {
      label: "Team",
      value: "Solo Project",
    },
    {
      label: "Modules",
      value: "10+",
    },
    {
      label: "Status",
      value: "Deployed",
    },
  ],

  problem:
    "People often use different platforms to showcase their work, build a network, share content, join communities, find opportunities, and communicate with others. Managing these activities across multiple services creates a fragmented experience. SkillVilla was built to bring these activities together in one platform.",

  role:
    "Designed and developed the entire platform independently, including frontend development, backend APIs, database design, realtime communication features, deployment, and infrastructure management.",

  architecture: {
    layers: [
      {
        title: "Frontend",
        items: [
          "React",
          "Redux Toolkit",
          "Bootstrap",
        ],
      },

      {
        title: "Backend",
        items: [
          "Laravel REST API",
        ],
      },

      {
        title: "Core Modules",
        items: [
          "Posts",
          "Stories",
          "Workfolios",
          "Problems",
          "Communities",
          "Jobs",
          "Freelance",
          "Networking",
        ],
      },

      {
        title: "Database",
        items: [
          "MySQL",
        ],
      },

      {
        title: "Realtime",
        items: [
          "Laravel Reverb",
          "Pusher Echo",
          "Chat",
          "Notifications",
        ],
      },

      {
        title: "Communication",
        items: [
          "WebRTC",
          "Audio Calls",
          "Video Calls",
          "Livestreaming",
        ],
      },

      {
        title: "Infrastructure",
        items: [
          "AWS EC2",
          "Local Storage",
        ],
      },
    ],
  },

  systems: [
    {
      title: "Posts",
      content:
        "Users can share updates, ideas, achievements, and professional content while engaging through likes and comments.",
    },

    {
      title: "Stories",
      content:
        "Temporary photo and video content that automatically disappears after 24 hours.",
    },

    {
      title: "Workfolios",
      content:
        "A dedicated space for users to showcase projects, achievements, skills, and professional work.",
    },

    {
      title: "Problems",
      content:
        "Users can share challenges and receive suggestions, feedback, and solutions from the community.",
    },

    {
      title: "Communities",
      content:
        "Topic-based communities where members can share content, discuss ideas, and communicate through group chat.",
    },

    {
      title: "Jobs",
      content:
        "Organizations can publish job opportunities while users can discover and apply for relevant positions.",
    },

    {
      title: "Freelance",
      content:
        "A space for clients and professionals to connect around freelance opportunities and project work.",
    },

    {
      title: "Networking",
      content:
        "Users can follow each other, build professional connections, and discover people with similar interests.",
    },

    {
      title: "Chat & Calling",
      content:
        "Real-time messaging along with audio and video calling powered by Laravel Reverb and WebRTC.",
    },

    {
      title: "Livestreaming",
      content:
        "Users can host live sessions and interact with viewers in real time.",
    },
  ],

  challenges: [
    {
      title: "Unified Content Architecture",

      problem:
        "Supporting posts, stories, workfolios, problems, jobs, and freelance content while maintaining a consistent user experience.",

      solution:
        "Built reusable content workflows and shared interaction patterns across modules.",
    },

    {
      title: "Real-Time Messaging",

      problem:
        "Delivering instant messaging and synchronized conversations between users.",

      solution:
        "Implemented realtime communication using Laravel Reverb and Pusher Echo.",
    },

    {
      title: "Audio & Video Calling",

      problem:
        "Managing signaling, peer connections, and media streams for user calls.",

      solution:
        "Integrated WebRTC with Laravel-powered signaling workflows.",
    },

    {
      title: "Scalable Feed Experience",

      problem:
        "Loading large amounts of content without impacting performance.",

      solution:
        "Implemented cursor pagination and incremental content loading.",
    },
  ],

  achievements: [
    "Built 10+ interconnected platform modules",
    "Implemented realtime messaging and notifications",
    "Developed audio and video calling using WebRTC",
    "Created community-based content sharing and group chat",
    "Built networking and follow systems",
    "Implemented livestreaming functionality",
    "Designed relational database architecture",
    "Deployed and maintained the platform on AWS EC2",
  ],

  deployment: [
    "Hosted on AWS EC2",
    "Available for demonstration and testing",
    "Future plans include user acquisition and platform growth",
  ],

  outcomes: [
    "Created a unified platform for showcasing skills, building a network, and discovering opportunities.",
    "Implemented realtime messaging, audio/video calling, and livestreaming features.",
    "Gained hands-on experience building and managing a large full-stack application independently.",
  ],
};