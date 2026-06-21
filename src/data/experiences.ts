import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "vk-salon",

    company: "VK Salon",

    role: "Full Stack Engineer",

    period: "Aug 2025 - Ongoing",

    description:
      "Developed and deployed a salon booking and business management platform featuring appointment workflows, content management, reviews, and administrative operations.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
    ],

    liveUrl: "https://vk-salon.vercel.app/",
    caseStudyUrl: "/experience/vk-salon",

    images: [
      {
        src: "/experience/vk-salon/home.png",
        label: "Homepage",
      },
      {
        src: "/experience/vk-salon/services.png",
        label: "Services",
      },
      {
        src: "/experience/vk-salon/booking.png",
        label: "Booking",
      },
      {
        src: "/experience/vk-salon/admin.png",
        label: "Admin",
      },
    ],
  },

  {
    id: "kundal-makeover",

    company: "Kundal Makeover",

    role: "Full Stack Engineer",

    period: "Apr 2026 - Ongoing",

    description:
      "Developed and deployed a responsive beauty salon website focused on customer engagement, service showcase, and lead generation.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],

    liveUrl: "https://kundal-makeover.vercel.app/",
    caseStudyUrl: "",
    images: [
      {
        src: "/experience/kundal/home.png",
        label: "Homepage",
      },
      {
        src: "/experience/kundal/services.png",
        label: "Services",
      },
      {
        src: "/experience/kundal/work.png",
        label: "Gallery & Customer Showcase",
      },
      {
        src: "/experience/kundal/contact.png",
        label: "Contact",
      },
    ],
  },

  
  {
    id: "shivam-electro-tools",

    company: "Shivam Electro Tools",

    role: "Full Stack Engineer",

    period: "Nov 2023 - Sep 2024",

    description:
      "Built a full-stack e-commerce platform including product management, shopping cart, payments, OTP authentication, order workflows and administration.",

    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
      "Bootstrap",
      "JavaScript",
    ],

    liveUrl: "",
    caseStudyUrl: "",
    images: [ ],
  },

];
