// data/projects.ts

import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "skillvilla",
    slug: "skillvilla",

    name: "SkillVilla",

    tagline:
      "Professional Media & Networking Platform",

    period: "Jan 2025 – Ongoing",

    summary:
      "Full-stack professional networking and media platform featuring posts, stories, communities, real-time chat, audio/video calling, job listings, freelance modules, and content discovery systems.",

    technologies: [
      "React.js",
      "Laravel",
      "MySQL",
      "WebSocket",
      "WebRTC",
      "REST APIs",
    ],

    images: [
      {
        src: "/projects/skillvilla/feed.webp",
        label: "Feed",
      },
      {
        src: "/projects/skillvilla/community.webp",
        label: "Communities",
      },
      {
        src: "/projects/skillvilla/chat.webp",
        label: "Realtime Chat",
      },
      {
        src: "/projects/skillvilla/jobs.webp",
        label: "Jobs & Freelance",
      },
    ],

    githubUrl: "",
    liveUrl: "",
    caseStudyUrl: "/projects/skillvilla",
  },

  {
    id: "shophub",
    slug: "shophub",

    name: "ShopHub",

    tagline:
      "Multi-Vendor Commerce Platform",

    period: "Feb 2024 – Apr 2024",

    summary:
      "Full-stack multi-vendor commerce platform enabling vendors to manage products, orders, storefronts, payments, and business operations through dedicated vendor workflows and centralized administration.",

    technologies: [
      "Laravel",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],

    images: [
      {
        src: "/projects/shophub/home.webp",
        label: "Homepage",
      },
      {
        src: "/projects/shophub/products.webp",
        label: "Products",
      },
      {
        src: "/projects/shophub/vendor.webp",
        label: "Vendor Dashboard",
      },
      {
        src: "/projects/shophub/admin.webp",
        label: "Admin Panel",
      },
    ],

    githubUrl: "",
    liveUrl: "",
    caseStudyUrl: "/projects/shophub",
  },

  {
    id: "styleloop",
    slug: "styleloop",

    name: "StyleLoop",

    tagline:
      "Fashion E-Commerce Store",

    period: "Sep 2023 – Nov 2023",

    summary:
      "Modern fashion e-commerce application featuring product discovery, category browsing, authentication workflows, shopping cart functionality, order management, and responsive shopping experiences.",

    technologies: [
      "Laravel",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],

    images: [
      {
        src: "/projects/styleloop/home.webp",
        label: "Homepage",
      },
      {
        src: "/projects/styleloop/catalog.webp",
        label: "Catalog",
      },
      {
        src: "/projects/styleloop/product.webp",
        label: "Product Details",
      },
      {
        src: "/projects/styleloop/cart.webp",
        label: "Shopping Cart",
      },
    ],

    githubUrl: "",
    liveUrl: "",
    caseStudyUrl: "/projects/styleloop",
  },
];