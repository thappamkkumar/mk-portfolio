import { CaseStudy } from "@/types/case-study";

export const shopHub: CaseStudy = {
  slug: "shophub",

  title: "ShopHub",

  subtitle: "Multi-Vendor E-Commerce Marketplace",

  category: "project",

  type: "Personal Project",

  image: "/case-study/projects/shophub/hero.webp",

  screenshots: [
    {
      title: "Admin Dashboard",
      image: "/case-study/projects/shophub/admin-dashboard.png",
    },

    {
      title: "Order Managment",
      image: "/case-study/projects/shophub/order-managment.png",
    },

    {
      title: "Cart",
      image: "/case-study/projects/shophub/cart.png",
    },

    {
      title: "Product Detail",
      image: "/case-study/projects/shophub/product-detail.png",
    },
  ],

  liveUrl: "https://shophub.zya.me/",

  githubUrl: "https://github.com/thappamkkumar/shophub",

  overview:
    "ShopHub is a multi-vendor e-commerce marketplace that allows multiple vendors to sell products through a shared platform. Vendors can manage products, inventory, and orders independently while administrators maintain control over the marketplace. The platform includes vendor dashboards, customer accounts, order management, product catalogs, and centralized administration.",

  technologies: [
    "Laravel",
    "PHP",
    "MySQL",
    "Bootstrap",
    "JavaScript",
    "AJAX",
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
      label: "Architecture",
      value: "Marketplace",
    },

    {
      label: "Status",
      value: "Deployed",
    },
  ],

  problem:
    "Traditional online stores are limited to a single seller. Building a marketplace requires multiple vendors to independently manage products, inventory, and orders while administrators maintain overall platform control. ShopHub was built to provide a structured marketplace where vendors and customers can interact through a single platform.",

  role:
    "Designed and developed the complete marketplace including storefront development, vendor dashboards, product management, order processing, authentication, database architecture, and administration tools.",

  architecture: {
    layers: [
      {
        title: "Frontend",
        items: [
          "Bootstrap",
          "JavaScript",
          "AJAX",
        ],
      },

      {
        title: "Backend",
        items: [
          "Laravel",
          "PHP",
        ],
      },

      {
        title: "Core Modules",
        items: [
          "Products",
          "Vendors",
          "Customers",
          "Orders",
          "Payments",
          "Vendor Dashboard",
          "Admin Dashboard",
        ],
      },

      {
        title: "Database",
        items: [
          "MySQL",
        ],
      },

      {
        title: "Authentication",
        items: [
          "Admin",
          "Vendor",
          "Customer",
        ],
      },

      {
        title: "Infrastructure",
        items: [
          "Shared Hosting",
          "File Storage",
        ],
      },
    ],
  },

  systems: [
    {
      title: "Marketplace Storefront",
      content:
        "Customers can browse products from multiple vendors through a unified shopping experience.",
    },

    {
      title: "Vendor Dashboard",
      content:
        "Dedicated vendor dashboards allow sellers to manage products, inventory, orders, and marketplace activity independently.",
    },

    {
      title: "Product Management",
      content:
        "Vendors can create, update, and organize products with categories, pricing, images, and stock information.",
    },

    {
      title: "Order Management",
      content:
        "Customers can place orders while vendors and administrators track and manage order lifecycles.",
    },

    {
      title: "Customer Accounts",
      content:
        "User registration, authentication, profile management, and order history tracking.",
    },

    {
      title: "Admin Dashboard",
      content:
        "Centralized administration for vendors, products, customers, orders, and marketplace operations.",
    },
  ],

  challenges: [
    {
      title: "Multi-Role Authorization",

      problem:
        "Administrators, vendors, and customers required different permissions and workflows throughout the platform.",

      solution:
        "Implemented role-based access control to ensure users only access features and resources relevant to their role.",
    },

    {
      title: "Vendor Product Ownership",

      problem:
        "Products and orders needed to remain isolated between vendors while operating inside a shared marketplace.",

      solution:
        "Designed database relationships and ownership rules to securely separate vendor resources.",
    },

    {
      title: "Order Processing Workflow",

      problem:
        "Managing customer orders across multiple vendors required consistent order tracking and status management.",

      solution:
        "Created centralized order workflows for customers, vendors, and administrators.",
    },

    {
      title: "Marketplace Product Discovery",

      problem:
        "Large product catalogs become difficult to navigate without proper search and filtering mechanisms.",

      solution:
        "Implemented category-based navigation, filtering, and search functionality to improve product discovery.",
    },
  ],

  achievements: [
    "Built a complete multi-vendor marketplace platform",
    "Implemented separate admin, vendor, and customer workflows",
    "Developed vendor-specific dashboards and product management",
    "Created centralized marketplace administration",
    "Built product, order, and inventory management systems",
    "Designed relational database architecture",
    "Implemented product search and filtering",
    "Deployed the marketplace for public access",
  ],

  deployment: [
    "Deployed on shared hosting",
    "Integrated MySQL database and file storage",
    "Implemented vendor, customer, and admin workflows",
  ],

  outcomes: [
    "Successfully developed a multi-vendor marketplace architecture.",
    "Implemented vendor, customer, and administrator workflows.",
    "Gained experience building role-based commerce platforms and marketplace systems.",
  ],
};
