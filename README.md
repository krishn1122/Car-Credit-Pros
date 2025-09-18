# 🚗 Car Credit Pros

> **Drive Your Dream Car - No Matter Your Credit**

A modern, responsive car financing platform built with React and TypeScript that helps customers with all credit types secure vehicle financing. Car Credit Pros specializes in making car ownership accessible through personalized financing solutions.

![Car Credit Pros Dashboard](Dashboard.png)

## ✨ Features

### 🎯 **Credit Inclusive Financing**
- **Good Credit**: Premium rates and exclusive financing options
- **Bad Credit**: Flexible terms and credit rebuilding programs  
- **No Credit**: First-time buyer programs to build credit history

### 🛠️ **Comprehensive Services**
- **Personalized Car Financing**: Custom financing with competitive rates
- **Credit Consultation**: Credit analysis and improvement strategies
- **Vehicle Selection**: Expert guidance in finding the perfect car
- **Additional Support**: Trade-in assistance, insurance guidance, and documentation help

### 📱 **Modern User Experience**
- Fully responsive design optimized for all devices
- Interactive appointment scheduling system
- Professional UI with smooth animations
- Mobile-first approach with intuitive navigation

## 🖼️ Screenshots

### Homepage
![Homepage](Dashboard.png)
*Clean, professional homepage with compelling messaging about credit-inclusive financing*

### Key Sections
- **Hero Section**: Eye-catching automotive imagery with clear value proposition
- **Credit Types**: Dedicated sections for all credit histories
- **Services Overview**: Comprehensive service offerings
- **Appointment Booking**: Interactive calendar and time slot selection

## 🚀 Tech Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM 6.26.2
- **State Management**: TanStack React Query
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/car-credit-pros.git

# Navigate to project directory
cd car-credit-pros

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── AboutUs.tsx     # About page
│   ├── Services.tsx    # Services page
│   ├── Schedule.tsx    # Appointment booking
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # Global styles
```

## 🎨 Design System

### Color Palette
- **Primary**: `#FFBB3D` (Golden Yellow)
- **Secondary**: `#FCFCFC` (Off White)
- **Dark**: `#3A3A3A` (Dark Gray)
- **Darker**: `#000000` (Black)

### Typography
- **Font Family**: Plus Jakarta Sans
- **Weights**: 400, 500, 600, 700

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push to main branch

### Vercel
1. Import project from GitHub
2. Vercel will auto-detect Vite configuration
3. Deploy with zero configuration

### Manual Deployment
```bash
# Build for production
npm run build

# The dist/ folder contains the built application
# Upload contents to your web server
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)

