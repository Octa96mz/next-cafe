Fresh Coffee — Café Order Management System

Fresh Coffee is a full-stack web application built with Next.js, TypeScript, and Prisma, designed to efficiently manage coffee shop orders and products.

This system streamlines the workflow between customers, the kitchen staff, and the administration panel, providing a seamless and modern experience for both staff and users.

🚀 Features
🧩 Admin Panel

Manage and visualize products with pagination and search.

Create, edit, and delete products easily.

Organize products by categories (e.g., Coffee, Cold Drinks, etc.).

Clean and responsive UI for a smooth user experience.

☕ Kiosk / Order Taking

Intuitive interface for placing customer orders.

Orders are automatically sent to the kitchen dashboard for preparation.

Real-time status updates: In Preparation → Ready for Pickup.

👨‍🍳 Kitchen Dashboard

Displays all incoming orders in real time.

Allows marking orders as “Completed”, updating the status across the system.

Improves communication between kitchen staff and front service.

📦 Completed Orders

Displays all ready-to-pick-up orders for customers.

Helps manage pickup flow and completed order tracking.

🛠️ Tech Stack
Area	Technologies
Frontend	Next.js (App Router), React, Tailwind CSS
Language	TypeScript
Backend / API	Next.js Server Components and API Routes
Database	Prisma ORM (compatible with PostgreSQL / MySQL / SQLite)
Linting / Code Quality	ESLint with Next.js + TypeScript configuration
Deployment	Vercel or any Node.js environment
📦 Installation & Setup
1. Clone the repository
git clone https://github.com/Octa96mz/next-cafe
cd next-cafe

2. Install dependencies
npm install
# or
yarn install

3. Configure the environment

Create a .env file in the project root and add your database URL and other environment variables:

DATABASE_URL="your_database_connection_string"

4. Generate Prisma client
npx prisma generate

5. Run the development server
npm run dev
# or
yarn dev


Your app should now be running at http://localhost:3000

🧠 Project Structure
app/
 ├── admin/
 │    ├── orders/
 │    ├── products/
 │    └── ...
 ├── orders/
 ├── api/
 └── ...
prisma/
 ├── schema.prisma
 └── generated/

🎯 Purpose

Fresh Coffee aims to modernize and simplify order management in coffee shops, improving coordination between staff and ensuring a fast, efficient service experience for customers.

🧑‍💻 Author

Developed with ☕ and ❤️ by Octa96mz