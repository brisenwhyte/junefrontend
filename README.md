# June Frontend

A modern, full-featured Next.js frontend application built with TypeScript, Tailwind CSS, and integrated with Firebase authentication and Supabase.

## Overview

This project is a Next.js-based web application that provides a polished user interface with comprehensive component library, form handling, and real-time data management capabilities.

## Tech Stack

### Core Framework
- **Next.js** (v13.5.1) - React framework for production
- **React** (v18.2.0) - UI library
- **TypeScript** - For type-safe JavaScript

### UI Components & Styling
- **Tailwind CSS** (v3.3.3) - Utility-first CSS framework
- **Radix UI** - Headless, accessible component primitives
- **shadcn/ui** - High-quality React components built on Radix UI
- **Lucide React** - Beautiful, consistent icon library
- **Class Variance Authority** - Type-safe CSS class management

### Forms & Data
- **React Hook Form** (v7.53.0) - Performant form handling
- **Zod** (v3.23.8) - TypeScript-first schema validation
- **@hookform/resolvers** - Integration layer for form validation

### Backend & Database
- **Firebase** (v12.5.0) - Authentication and real-time database
- **Supabase** (v2.58.0) - PostgreSQL backend and real-time features

### UI Utilities
- **Date Picker** - React Day Picker for date selection
- **Embla Carousel** - Responsive carousel component
- **Resizable Panels** - Re-sizable panel layouts
- **Recharts** (v2.12.7) - Composable charting library
- **Sonner** - Toast notifications
- **Vaul** - Drawer component
- **CMDk** - Command menu/palette

### Development Tools
- **ESLint** - JavaScript/TypeScript linting
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixes for CSS

## Project Structure

```
junefrontend/
├── app/                    # Next.js app directory
├── components/             # Reusable React components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and helpers
├── public/                 # Static assets
├── styles/                 # Global styles
├── firebaseClient.js       # Firebase configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/brisenwhyte/junefrontend.git
cd junefrontend
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

Create an optimized production build:
```bash
npm run build
```

### Production

Start the production server:
```bash
npm start
```

### Other Commands

- **Linting**: `npm run lint` - Check code quality with ESLint
- **Type checking**: `npm run typecheck` - Verify TypeScript types

## Key Features

- **Authentication**: Firebase-based authentication system
- **Real-time Data**: Supabase integration for real-time database operations
- **Rich Component Library**: Extensive Radix UI components with Tailwind styling
- **Form Handling**: React Hook Form with Zod validation
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Support**: Next.js themes integration
- **Accessibility**: Built with a11y best practices using Radix primitives
- **Data Visualization**: Recharts for interactive charts and graphs

## Configuration

### Firebase Setup

The Firebase configuration is stored in `firebaseClient.js`. Ensure your Firebase project credentials are correctly configured.

### Tailwind CSS

Customization can be done in `tailwind.config.ts` for theme colors, fonts, and other design tokens.

### TypeScript

Configuration options are available in `tsconfig.json` for type checking preferences.

## Languages

- **TypeScript**: 141,693 bytes (91%)
- **JavaScript**: 8,071 bytes (5%)
- **CSS**: 2,466 bytes (2%)

## Browser Support

This project uses modern web standards and is best supported on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available on [GitHub](https://github.com/brisenwhyte/junefrontend).

## Author

**Brise Nwhyte** - [@brisenwhyte](https://github.com/brisenwhyte)

## Support

For issues, questions, or suggestions, please open an [issue](https://github.com/brisenwhyte/junefrontend/issues) on the GitHub repository.
