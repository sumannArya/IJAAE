# IJAAE

International Journal of Advanced Applied Engineering - Web Application

## Overview

This is a modern web application built with React, TypeScript, and Vite, featuring Supabase authentication and database integration.

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Backend**: Supabase (Authentication & Database)
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation

## Project Structure

```
IJAAE/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── layout/       # Layout components (Navbar, Logo, DashboardLayout)
│   │   ├── ui/           # UI components (Button, Card, Input, etc.)
│   │   └── NavLink.tsx   # Navigation link component
│   ├── hooks/            # Custom React hooks
│   │   ├── use-mobile.tsx
│   │   ├── use-toast.ts
│   │   └── useAuth.tsx
│   ├── integrations/
│   │   └── supabase/     # Supabase client and types
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Auth.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # App entry point
│   └── index.css         # Global styles
├── supabase/
│   ├── migrations/       # Database migrations
│   └── config.toml       # Supabase configuration
└── [config files]        # TypeScript, ESLint, Tailwind, etc.
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sumannArya/IJAAE.git
cd IJAAE
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
Create a `.env` file in the root directory (already present locally, but not committed to git):
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features

- 🔐 **Authentication**: Secure user authentication with Supabase
- 📱 **Responsive Design**: Mobile-friendly UI with Tailwind CSS
- 🎨 **Modern UI**: Beautiful components from shadcn/ui
- 🔒 **Protected Routes**: Dashboard accessible only to authenticated users
- 🌐 **Routing**: Client-side routing with React Router
- 📊 **Dashboard**: User dashboard with profile management
- 🔔 **Toast Notifications**: User feedback with toast notifications

## Database Setup

Run the migrations in the `supabase/migrations/` directory to set up the database schema:
- `20240101000000_initial_schema.sql` - Creates profiles table with RLS policies

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is part of IJAAE (International Journal of Advanced Applied Engineering).
