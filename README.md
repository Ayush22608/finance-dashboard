# FinanceDash

FinanceDash is a modern, fully responsive React application designed to help users track and analyze their personal finances seamlessly. With a suite of visualization tools, mock data persistence, and role-based access logic, it offers a fast, dynamic, and intuitive dashboard experience right out of the box.

## Features

- **Dashboard Overview**: Get a bird's-eye view of your total balance, income, expenses, and savings via visually distinct Summary Cards.
- **Transactions Management**: Complete control over your spendings with dynamic filters, comprehensive searching, and sorting capabilities.
- **Financial Insights**: Visualize spending patterns and track monthly categorical trends dynamically mapped to the user data dynamically.
- **Role-Based UI**: Dynamically scales the interface features depending on the current user context (Admin, Editor, Viewer).
- **Dark Mode**: Fully implemented aesthetic toggle that perfectly respects dark/light themes.
- **Local Storage Persistence**: Safely saves all changes, data creations, and theme preferences to the browser memory directly.
- **CSV Export**: Rapid one-click export mechanism to easily back up raw transaction history to CSV format.
- **Animations**: Silky smooth component mounting and interactions powered by Framer Motion.

## Tech Stack

- **Framework**: React, TypeScript, Vite
- **Visuals & Charts**: Recharts, Tailwind CSS, Framer Motion
- **Routing**: React Router DOM
- **Utilities**: date-fns

## Getting Started

### Prerequisites
You will need [Node.js](https://nodejs.org/en) (v18.x or above) installed on your system.

### Installation

```bash
git clone <repo>
cd finance-dashboard
npm install
npm run dev
```
Navigate to your local port host to view the dashboard live.

## Role-Based Access

Access restrictions and features can be freely switched from the Settings page to mock various authenticated user profiles:

- **Admin**: Full environment control. Can freely Create, Read, Update, and Delete (CRUD) transactions.
- **Editor**: Limited mutations. Capable of adding new transactions but cannot delete existing records.
- **Viewer**: Strictly read-only access. The UI gracefully hides modification buttons to prevent unwarranted actions.

## Project Structure

A brief overview of the core source architecture inside `src/`:

```
src/
├── components/   # Reusable UI components (Chart containers, Summary Cards, Modals)
├── context/      # Global React Context providers (Auth Auth/Roles, Global State)
├── data/         # Mock data bootstrapping and initialization logic
├── hooks/        # Custom React hooks (CSV export tools, calculations)
├── pages/        # Top-level route containers (Dashboard, Settings, Transactions)
├── utils/        # Generic helper functions (Text formatters, Date abstractions)
└── index.css     # Global stylesheets and token definitions 
```

## Design Decisions

- **Recharts for Visualization**: Selected for its massive extensibility and reliable responsiveness out of the box. It allows for perfectly themed custom tooltips that respond natively to our Dark Mode without complex CSS overrides.
- **React Context over Redux**: Because this application has focused, self-contained functional domains (Theming, Role Management, Local Transactions), Context was deliberately chosen to mitigate boilerplate overhead.
- **Framer Motion for UX**: Ensures that page transitions and element rendering feel polished and tactile. The relatively small performance overhead is vastly outweighed by the premium aesthetic feel it provides the UI.
- **Mock Data Bootstrap**: Given the absence of a live backend, generating strict LocalStorage bootstrapped mock payloads allows the application to be evaluated instantly without painful database configuration.
