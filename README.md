# HealthCheck Pro - Medical Checkup Booking Website

A modern, responsive medical checkup booking website built with React, TypeScript, and Tailwind CSS. This production-ready application allows users to browse health checkup packages, book appointments, and manage their healthcare needs online.

## 🌟 Features

### User Features
- **Package Browsing**: View and compare comprehensive health checkup packages
- **Detailed Information**: Access test details, preparation instructions, and pricing
- **Online Booking**: Multi-step appointment booking with date/time selection
- **User Authentication**: Secure login and registration system
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive UI**: Smooth animations and micro-interactions

### Admin Features
- **Booking Management**: View, filter, and manage all appointments
- **Dashboard Analytics**: Track bookings, revenue, and key metrics
- **Patient Management**: Access patient information and history
- **Report Management**: Handle test reports and delivery

### Technical Features
- **Modern React**: Built with React 18 and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Architecture**: Modular, reusable components
- **State Management**: Efficient local state management
- **Form Validation**: Comprehensive form validation and error handling
- **Accessibility**: WCAG compliant design patterns

## 🏥 Health Packages

### Available Packages
1. **Full Body Checkup** (₹2,999)
   - Comprehensive health assessment
   - 10+ tests including CBC, Lipid Profile, ECG
   - 3-4 hours duration

2. **Heart Health Package** (₹1,999)
   - Specialized cardiac assessment
   - ECG, 2D Echo, Stress Test
   - 2-3 hours duration

3. **Diabetes Panel** (₹899)
   - Complete diabetes screening
   - HbA1c, Glucose levels, Insulin
   - 1-2 hours duration

4. **Senior Citizen Care** (₹3,999)
   - Comprehensive package for 60+ years
   - Bone density, memory assessment
   - 4-5 hours duration

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd healthcheck-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Health packages display
│   ├── BookingModal.tsx # Appointment booking
│   ├── AuthModal.tsx    # Login/Registration
│   ├── About.tsx        # About section
│   ├── FAQ.tsx          # Frequently asked questions
│   ├── Contact.tsx      # Contact information
│   ├── Footer.tsx       # Site footer
│   └── AdminPanel.tsx   # Admin dashboard
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
├── index.css           # Global styles
└── vite-env.d.ts       # Vite type definitions
```

## 🎨 Design System

### Color Palette
- **Primary Blue**: #2563EB (Blue-600)
- **Secondary Green**: #059669 (Green-600)
- **Background**: #F8FAFC (Gray-50)
- **Text Primary**: #1F2937 (Gray-800)
- **Text Secondary**: #6B7280 (Gray-500)

### Typography
- **Headings**: Inter font family, bold weights
- **Body**: Inter font family, regular weight
- **Line Height**: 150% for body text, 120% for headings

### Spacing
- **Base Unit**: 8px (0.5rem)
- **Component Padding**: 24px (1.5rem)
- **Section Spacing**: 64px (4rem) on desktop

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_endpoint
VITE_PAYMENT_KEY=your_payment_gateway_key
```

### Tailwind Configuration
The project uses a custom Tailwind configuration optimized for healthcare applications with extended color palettes and spacing utilities.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🧪 Testing

### Manual Testing Checklist
- [ ] Package browsing and filtering
- [ ] Booking flow completion
- [ ] User authentication
- [ ] Form validation
- [ ] Responsive design
- [ ] Admin panel functionality

## 🚀 Deployment

### Netlify Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure environment variables in Netlify dashboard

### Vercel Deployment
1. Connect your repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Set environment variables

## 🔒 Security Considerations

- Input validation on all forms
- Secure authentication flow
- Protected admin routes
- HTTPS enforcement in production
- Regular dependency updates

## 🎯 Performance Optimizations

- Lazy loading of components
- Optimized images with proper sizing
- Minimal bundle size with tree shaking
- Efficient re-rendering with React hooks
- CSS optimization with Tailwind purging

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: support@healthcheckpro.com
- Phone: +1 (555) 123-4567
- Documentation: [Project Wiki](link-to-wiki)

## 🔄 Version History

### v1.0.0 (Current)
- Initial release
- Complete booking system
- User authentication
- Admin panel
- Responsive design
- Payment integration ready

## 🎨 Design Credits

- Icons: [Lucide React](https://lucide.dev/)
- Images: [Pexels](https://pexels.com/)
- Fonts: [Inter](https://fonts.google.com/specimen/Inter)

---

**Built with ❤️ for better healthcare accessibility**