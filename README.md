# Crypto Platform

A modern, feature-rich cryptocurrency trading and educational platform built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🔐 User Authentication (Sign In/Sign Up)
- 📊 Real-time Cryptocurrency Statistics
- 💰 Portfolio Management
- 📱 Responsive Design
- 🎓 Educational Resources
- 💸 USDC Staking with 4.5% APY
- 🎨 Modern UI with Radix UI Components

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** 
	- Radix UI
	- Shadcn UI Components
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **Charts:** Recharts
- **Date Handling:** date-fns
- **Carousel:** Embla Carousel

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
pnpm install
npm install
```

3. Run the development server:
```bash
pnpm run dev 
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `/app` - Next.js app router files
- `/components` - Reusable UI components
- `/components/ui` - Base UI components
- `/hooks` - Custom React hooks
- `/lib` - Utility functions
- `/public` - Static assets
- `/styles` - Global styles

## Key Components

- `StatsSection` - Displays cryptocurrency statistics
- `FeaturesSection` - Showcases platform features
- `LearnSection` - Educational content section
- `PortfolioCTA` - Portfolio call-to-action section
- `SignInForm/SignUpForm` - Authentication forms

## Development

```bash
# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## License

[License Type] - See LICENSE file for details