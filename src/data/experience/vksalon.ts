import { CaseStudy } from "@/types/case-study";

export const vkSalon: CaseStudy = {
  slug: "vk-salon",

  title: "VK Salon",

  subtitle: "Salon Booking & Business Management Platform",

  category: "experience",

  type: "Client Project",

  image: "/case-study/experience/vk-salon/hero.webp",

  screenshots: [
    {
      title: "Homepage Experience",
      image: "/case-study/experience/vk-salon/home.webp",
    },

    {
      title: "Services & Styles",
      image: "/case-study/experience/vk-salon/services.webp",
    },

    {
      title: "Appointment Booking",
      image: "/case-study/experience/vk-salon/booking.webp",
    },

    {
      title: "Admin Dashboard",
      image: "/case-study/experience/vk-salon/admin.webp",
    },
  ],

  liveUrl: "https://vk-salon.vercel.app/",

  githubUrl: "https://github.com/thappamkkumar/vk-salon",

  overview:
    "VK Salon is a salon booking and business management platform built for a real client. Customers can explore services, hairstyles, barbers, reviews, and salon updates while submitting appointment requests online. The salon team can manage appointments and business content through an admin dashboard.",

  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Supabase",
    "Vercel",
  ],

  metrics: [
    {
      label: "Role",
      value: "Full Stack Developer",
    },

    {
      label: "Client",
      value: "VK Salon",
    },

    {
      label: "Project Type",
      value: "Client Project",
    },

    {
      label: "Status",
      value: "Live & Active",
    },
  ],

  problem:
  "VK Salon needed a professional online platform to showcase services, hairstyles, barbers, and customer reviews while allowing potential customers to submit appointment requests. The business also required an easy way to manage content and appointments without technical assistance.",
  
  role:
    "Worked directly with the client to gather requirements, design the user experience, develop frontend and backend functionality, manage the database, deploy the application, and support ongoing business operations.",

  architecture: {
    layers: [
      {
        title: "Frontend",
        items: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
        ],
      },

      {
        title: "Backend",
        items: [
          "Next.js Route Handlers",
        ],
      },

      {
        title: "Core Modules",
        items: [
          "Services",
          "Styles",
          "Barbers",
          "Reviews",
          "Posts",
          "Appointments",
        ],
      },

      {
        title: "Database",
        items: [
          "PostgreSQL",
          "Supabase",
        ],
      },

      {
        title: "Storage",
        items: [
          "Supabase Storage",
        ],
      },

      {
        title: "Infrastructure",
        items: [
          "Vercel",
        ],
      },
    ],
  },

  systems: [
    {
      title: "Services",
      content:
        "Customers can view available salon services along with pricing information before booking an appointment.",
    },

    {
      title: "Style Gallery",
      content:
        "A collection of hairstyle examples that helps customers discover styles before booking an appointment.",
    },

    {
      title: "Appointment Booking",
      content:
        "Customers can submit appointment requests that are stored in the database and managed by the salon team.",
    },

    {
      title: "Salon And Barber",
      content:
        "The platform includes salon and barber information such as experience, contact details, and business background.",
    },

    {
      title: "Reviews",
      content:
        "Customer reviews help build trust and provide social proof for the business.",
    },

    {
      title: "Content Management",
      content:
        "The salon can manage services, styles, barbers, posts, and appointments through an administrative dashboard.",
    },
  ],

  challenges: [
    {
      title: "Dynamic Content Management",

      problem:
        "The client needed the ability to update services, styles, barber information, and posts without developer assistance.",

      solution:
        "Built database-driven content management workflows that allow business content to be updated through the admin dashboard.",
    },

    {
      title: "Appointment Management",

      problem:
        "Appointment requests needed to be collected, stored, and reviewed efficiently by the salon team.",

      solution:
        "Created an appointment management system with database storage and administrative tools for reviewing customer requests.",
    },

    {
      title: "Media Storage",

      problem:
        "The platform required frequent image uploads for styles, services, and promotional content.",

      solution:
        "Integrated Supabase Storage for managing and serving media assets.",
    },

    {
      title: "Performance & SEO",

      problem:
        "The website needed fast loading times and strong search engine visibility.",

      solution:
        "Used Next.js optimization features including server-side rendering, image optimization, and SEO-friendly page structures.",
    },
  ],

  achievements: [
    "Delivered a production-ready platform for a real client",
    "Implemented appointment booking and management workflows",
    "Built database-driven content management functionality",
    "Integrated PostgreSQL and Supabase Storage",
    "Developed responsive mobile-first user interfaces",
    "Created service, style, barber, review, and post management systems",
    "Deployed the application on Vercel",
    "Successfully launched a platform actively used by the client",
  ],

  deployment: [
    "Deployed on Vercel",
    "Integrated PostgreSQL database through Supabase",
    "Configured media storage using Supabase Storage",
    "Currently used by the client for managing content and appointments",
  ],

  outcomes: [
    "Provided VK Salon with a professional online presence.",
    "Simplified appointment collection and customer engagement.",
    "Enabled the client to manage business content independently.",
    "Delivered a production system that supports daily business operations.",
  ],
};