import { CaseStudy } from "@/types/case-study";

export const styleLoop: CaseStudy = {
  slug: "styleloop",

  title: "StyleLoop",

  subtitle: "Single-Vendor Fashion E-Commerce Platform",

  category: "project",

  type: "Personal Project",

  image: "/case-study/projects/styleloop/hero.webp",

  screenshots: [
    {
      title: "Home Storefront",
      image: "/case-study/projects/styleloop/storefront.webp",
    },

    {
      title: "Product Catalog",
      image: "/case-study/projects/styleloop/products.webp",
    },

    {
      title: "Shopping Cart",
      image: "/case-study/projects/styleloop/cart.webp",
    },

    {
      title: "Admin Dashboard",
      image: "/case-study/projects/styleloop/admin.webp",
    },
  ],

  githubUrl:
    "https://github.com/thappamkkumar/styleloop",

  overview:
    "StyleLoop is a fashion-focused e-commerce platform where customers can browse products, manage shopping carts, place orders, and track purchases. The platform includes product management, inventory control, order processing, authentication, and administrative tools.",

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
      value: "Single Vendor",
    },

    {
      label: "Status",
      value: "Completed",
    },
  ],

  problem:
    "Many small businesses need an online storefront to manage products, process customer orders, and handle inventory without relying on third-party marketplace platforms. StyleLoop was created as a complete e-commerce solution for managing online sales and operations.",

  role:
    "Designed and developed the entire platform including customer-facing storefronts, product management, authentication, shopping cart workflows, order processing, database design, and administration features.",

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
          "Categories",
          "Cart",
          "Orders",
          "Customers",
          "Admin Panel",
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
          "Customer Accounts",
          "Admin Access",
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
        "Browse products with categories, pricing, descriptions, and product images.",
    },

    {
      title: "Shopping Cart",
      content:
        "Customers can add products to their cart, update quantities, and manage purchases before checkout.",
    },

    {
      title: "Order Management",
      content:
        "Track customer orders from placement through fulfillment and delivery.",
    },

    {
      title: "Customer Accounts",
      content:
        "Registration, login, profile management, and order history tracking.",
    },

    {
      title: "Inventory Management",
      content:
        "Manage product stock levels and product availability from the admin dashboard.",
    },

    {
      title: "Admin Dashboard",
      content:
        "Centralized management for products, orders, customers, and store operations.",
    },
  ],

  challenges: [
    {
      title: "Shopping Cart Workflow",

      problem:
        "Maintaining cart state while allowing customers to modify quantities and products before checkout.",

      solution:
        "Implemented session-based cart management with dynamic cart updates.",
    },

    {
      title: "Order Processing",

      problem:
        "Managing order creation, status updates, and purchase tracking across the application.",

      solution:
        "Created a structured order workflow from checkout through fulfillment.",
    },

    {
      title: "Inventory Management",

      problem:
        "Preventing inventory inconsistencies while products are being purchased.",

      solution:
        "Integrated inventory validation and stock updates during order processing.",
    },

    {
      title: "Product Search & Filtering",

      problem:
        "Helping customers quickly find relevant products within a growing catalog.",

      solution:
        "Implemented category-based navigation and filtering features.",
    },
  ],

  achievements: [
    "Built a complete single-vendor e-commerce platform",
    "Implemented shopping cart and checkout workflows",
    "Developed order management functionality",
    "Created product and inventory management systems",
    "Built customer authentication and account management",
    "Designed relational database architecture",
    "Implemented product search and filtering",
    "Developed an admin management dashboard",
  ],

  deployment: [
    "Completed full-stack e-commerce implementation",
    "Built as a portfolio and learning project",
    "Demonstrates end-to-end commerce workflows",
  ],

  outcomes: [
    "Gained experience building complete e-commerce systems.",
    "Implemented customer, product, and order management workflows.",
    "Strengthened backend architecture and database design skills.",
  ],
};