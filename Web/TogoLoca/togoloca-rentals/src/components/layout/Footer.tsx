import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TogoLoca Rentals</h3>
            <p className="text-gray-300">
              Find your perfect apartment in Togo with ease. We connect renters with the best properties across the country.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/properties" className="text-gray-300 hover:text-white transition-colors">Properties</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Apartments</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Houses</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Villas</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Studios</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p>123 Main Street</p>
              <p>Lomé, Togo</p>
              <p className="mt-2">Email: info@togoloca.com</p>
              <p>Phone: +228 12345678</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} TogoLoca Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}