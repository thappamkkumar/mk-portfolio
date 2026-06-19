import { CaseStudy } from "@/types/case-study";

export const shopHub: CaseStudy = {
  slug: "shophub",

  title: "ShopHub",

  subtitle: "Multi-Vendor E-Commerce Platform",

  category: "project",

  type: "Personal Project",

  image: "/case-study/projects/shophub/hero.webp",

  screenshots: [
    {
      title: "Storefront",
      image: "/case-study/projects/shophub/storefront.webp",
    },

    {
      title: "Vendor Dashboard",
      image: "/case-study/projects/shophub/vendor-dashboard.webp",
    },

    {
      title: "Admin Panel",
      image: "/case-study/projects/shophub/admin-panel.webp",
    },

    {
      title: "Product Management",
      image: "/case-study/projects/shophub/products.webp",
    },
  ],

  githubUrl: "https://github.com/thappamkkumar/shophub",

  overview:
    "ShopHub is a multi-vendor e-commerce platform that allows multiple vendors to manage products, process orders, and sell through a shared marketplace. The platform includes vendor management, product catalog management, order processing, payments, and administrative controls.",

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
      value: "Multi Vendor",
    },

    {
      label: "Status",
      value: "Completed",
    },
  ],

  problem:
    "Traditional online stores are often limited to a single seller. Building a marketplace where multiple vendors can manage their own products, orders, and inventory requires proper access control, product management workflows, and centralized administration.",

  role:
    "Designed and developed the complete platform including storefront development, vendor management, product management, order processing, payment workflows, database design, and administration features.",

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
          "Orders",
          "Payments",
          "Admin Panel",
          "Customers",
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
          "Local Hosting",
          "File Storage",
        ],
      },
    ],
  },

  systems: [
    {
      title: "Product Catalog",
      content:
        "Vendors can create, update, and manage product listings with categories, pricing, images, and inventory information.",
    },

    {
      title: "Vendor Management",
      content:
        "Dedicated vendor accounts allow sellers to manage products, monitor orders, and track marketplace activity.",
    },

    {
      title: "Order Management",
      content:
        "Customers can place orders while vendors and administrators can track and manage order lifecycles.",
    },

    {
      title: "Customer Accounts",
      content:
        "User registration, authentication, profile management, and order history tracking.",
    },

    {
      title: "Admin Dashboard",
      content:
        "Centralized management system for vendors, products, users, orders, and marketplace operations.",
    },

    {
      title: "Search & Filtering",
      content:
        "Product discovery through category browsing, filtering, and search functionality.",
    },
  ],

  challenges: [
    {
      title: "Multi-Role Authorization",

      problem:
        "Different users such as administrators, vendors, and customers required separate permissions and workflows.",

      solution:
        "Implemented role-based access control to ensure each user type could only access relevant functionality.",
    },

    {
      title: "Vendor Product Ownership",

      problem:
        "Products and orders needed to remain isolated between vendors while still operating inside a shared marketplace.",

      solution:
        "Designed database relationships and ownership rules to securely separate vendor resources.",
    },

    {
      title: "Order Processing Workflow",

      problem:
        "Managing customer orders across multiple vendors required consistent order tracking and status updates.",

      solution:
        "Created centralized order management workflows for customers, vendors, and administrators.",
    },

    {
      title: "Product Search & Filtering",

      problem:
        "Large product catalogs become difficult to navigate without effective filtering and search mechanisms.",

      solution:
        "Implemented category-based filtering and search functionality to improve product discovery.",
    },
  ],

  achievements: [
    "Built a complete multi-vendor marketplace platform",
    "Implemented vendor-specific product management",
    "Developed role-based authentication and authorization",
    "Created centralized order management workflows",
    "Designed relational database architecture",
    "Built product search and filtering functionality",
    "Developed vendor and admin dashboards",
    "Implemented marketplace management features",
  ],

  deployment: [
    "Completed full-stack marketplace implementation",
    "Built as a portfolio and learning project",
    "Demonstrates multi-vendor commerce architecture",
  ],

  outcomes: [
    "Gained experience building large CRUD-based applications.",
    "Learned marketplace architecture and role-based system design.",
    "Implemented product, order, vendor, and customer workflows.",
  ],
};