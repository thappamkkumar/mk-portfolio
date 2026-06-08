import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: "vk-salon",

    company: "VK Salon",

    role: "Full Stack Engineer",

    period: "May 2025 – Ongoing",

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

    images: [
      {
        src: "/experience/vk-salon/home.webp",
        label: "Homepage",
      },
      {
        src: "/experience/vk-salon/services.webp",
        label: "Services",
      },
      {
        src: "/experience/vk-salon/booking.webp",
        label: "Booking",
      },
      {
        src: "/experience/vk-salon/admin.webp",
        label: "Dashboard",
      },
    ],
  },

  {
    id: "kundal",

    company: "Kundal Makeover",

    role: "Full Stack Engineer",

    period: "Apr 2026 – Ongoing",

    description:
      "Developed and deployed a responsive beauty salon website focused on customer engagement, service showcase, and lead generation.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel",
    ],

    liveUrl: "https://kundal-makeover.vercel.app/",

    images: [
      {
        src: "/experience/kundal/home.webp",
        label: "Homepage",
      },
      {
        src: "/experience/kundal/services.webp",
        label: "Services",
      },
      {
        src: "/experience/kundal/testimonials.webp",
        label: "Testimonials",
      },
      {
        src: "/experience/kundal/contact.webp",
        label: "Contact",
      },
    ],
  },

  
  {
    id: "shivam",

    company: "Shivam Electro Tools",

    role: "Full Stack Engineer",

    period: "Oct 2023 – Sep 2024",

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

    images: [ ],
  },

];