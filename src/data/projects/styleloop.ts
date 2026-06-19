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
      title: "Product Details",
      image: "/case-study/projects/styleloop/product-details.webp",
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

  liveUrl: "https://styleloop.page.gd/",

  githubUrl: "https://github.com/thappamkkumar/styleloop",

  overview:
    "StyleLoop is a single-vendor fashion e-commerce platform that enables customers to browse products, manage shopping carts, place orders, and track purchases. The platform includes product management, inventory control, customer accounts, and an administrative dashboard for managing store operations.",

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
      value: "Deployed",
    },
  ],

  problem:
    "Small businesses need an online platform to showcase products, manage inventory, process orders, and serve customers efficiently. StyleLoop was built as a complete e-commerce solution that provides both customer-facing shopping experiences and administrative management tools.",

  role:
    "Designed and developed the entire platform including frontend interfaces, backend APIs, database design, authentication, shopping cart workflows, order processing, inventory management, and administration features.",

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
          "Shared Hosting",
          "File Storage",
        ],
      },
    ],
  },

  systems: [
    {
      title: "Product Catalog",
      content:
        "Browse products with categories, pricing, descriptions, product images, and detailed product information.",
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
        "Centralized management for products, orders, customers, inventory, and store operations.",
    },
  ],

  challenges: [
    {
      title: "Shopping Cart Workflow",

      problem:
        "Maintaining cart state while allowing customers to update quantities and manage products before checkout.",

      solution:
        "Implemented session-based cart management with dynamic cart updates and checkout validation.",
    },

    {
      title: "Order Processing",

      problem:
        "Managing order creation, order status updates, and customer purchase tracking.",

      solution:
        "Built a structured order workflow covering checkout, order creation, and order management.",
    },

    {
      title: "Inventory Management",

      problem:
        "Preventing inventory inconsistencies while products are being purchased by customers.",

      solution:
        "Integrated inventory validation and stock updates throughout the order lifecycle.",
    },

    {
      title: "Product Search & Filtering",

      problem:
        "Helping customers quickly discover products within a growing catalog.",

      solution:
        "Implemented category-based navigation, filtering, and search functionality.",
    },
  ],

  achievements: [
    "Built a complete single-vendor e-commerce platform",
    "Implemented customer authentication and account management",
    "Developed shopping cart and checkout workflows",
    "Created product and inventory management systems",
    "Built order tracking and management functionality",
    "Designed relational database architecture",
    "Implemented product search and filtering",
    "Deployed the application for public access",
  ],

  deployment: [
    "Deployed on shared hosting",
    "Integrated MySQL database and file storage",
    "Implemented product, cart, and order workflows",
  ],

  outcomes: [
    "Successfully built a complete e-commerce application from scratch.",
    "Gained experience with customer, product, and order management systems.",
    "Strengthened backend development and database design skills.",
  ],
};