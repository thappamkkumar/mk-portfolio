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
        src: "/projects/skillvilla/dashboard.png",
        label: "Admin Dashboard",
      },
      {
        src: "/projects/skillvilla/community.png",
        label: "Communities",
      },
      {
        src: "/projects/skillvilla/vedio_call.png",
        label: "Vedio Call",
      },
      {
        src: "/projects/skillvilla/job.png",
        label: "Jobs & Freelance",
      },
    ],

    githubUrl: "https://github.com/thappamkkumar/skillvilla",
    liveUrl: "http://52.53.160.90/",
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
        src: "/projects/shophub/home.png",
        label: "Homepage",
      },
      {
        src: "/projects/shophub/products.png",
        label: "Products",
      },
      {
        src: "/projects/shophub/product-management.png",
        label: "Vendor Product Management",
      },
      {
        src: "/projects/shophub/admin-dashboard.png",
        label: "Admin Panel",
      },
    ],

    githubUrl: "https://github.com/thappamkkumar/multi-vendor-ecommerse",
    liveUrl: "https://shophub.zya.me/",
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
        src: "/projects/styleloop/home.png",
        label: "Homepage",
      },
      {
        src: "/projects/styleloop/order.png",
        label: "Order Management",
      },
      {
        src: "/projects/styleloop/product.png",
        label: "Product Details",
      },
      {
        src: "/projects/styleloop/cart.png",
        label: "Shopping Cart",
      },
    ],

    githubUrl: "https://github.com/thappamkkumar/E-commerse",
    liveUrl: "https://styleloop.page.gd/",
    caseStudyUrl: "/projects/styleloop",
  },
];
