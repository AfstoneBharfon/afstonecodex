# TogoLoca Rentals

A modern apartment rental platform built with Next.js, TypeScript, and Tailwind CSS that allows users to browse, search, and view rental properties in Togo.

## Features

- Responsive design that works on all devices
- Property listing with search and filtering functionality
- Detailed property pages with images and amenities
- Modern UI with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Navigate to the project directory
```bash
cd togoloca-rentals
```

3. Install dependencies
```bash
npm install
# or
yarn install
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Deploying to Vercel (Recommended)

1. Create a Vercel account at [vercel.com](https://vercel.com) if you don't have one

2. Install the Vercel CLI
```bash
npm install -g vercel
```

3. Log in to Vercel from the CLI
```bash
vercel login
```

4. Deploy the application (from the project root)
```bash
vercel
```

5. For production deployment
```bash
vercel --prod
```

### Alternative Deployment Options

#### Netlify

1. Create a `netlify.toml` file in the project root:
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

2. Install the Netlify CLI
```bash
npm install -g netlify-cli
```

3. Deploy to Netlify
```bash
netlify deploy
```

#### Manual Deployment

1. Build your application
```bash
npm run build
```

2. Start the production server
```bash
npm run start
```

You can then host the application on any service that supports Node.js applications (AWS, DigitalOcean, Heroku, etc.).

## Project Structure

- `src/app/` - Contains the main pages of the application (using Next.js App Router)
- `src/components/` - Reusable UI components
- `src/lib/` - Utilities, types, and mock data

## Technologies Used

- **Next.js** - React framework for building server-rendered applications
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS** - For styling
- **React** - UI library

## Features Implemented

1. **Home Page** - Features showcase properties and a call to action
2. **Property Listing** - View all properties with search and filtering
3. **Property Details** - View detailed information about a specific property
4. **Responsive Design** - Works on mobile, tablet, and desktop

## Future Enhancements

- User authentication and profiles
- Property booking system
- Map integration for property locations
- Property owner dashboard
- Reviews and ratings system
- Favoriting properties
