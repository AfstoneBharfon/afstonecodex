import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary flex items-center">
          <span>TogoLoca Rentals</span>
        </Link>
        
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/properties" className="text-gray-700 hover:text-primary transition-colors">
            Properties
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#" className="text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link href="#" className="hidden md:inline-block px-4 py-2 text-sm bg-white border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition-colors">
            Log In
          </Link>
          <Link href="#" className="px-4 py-2 text-sm bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            List Your Property
          </Link>
        </div>
      </div>
    </nav>
  );
}