import Image from "next/image";
import Link from "next/link";
import PurchaseTicket from "./components/PurchaseTicket";

// Mock data for speakers
const speakers = [
  {
    id: 1,
    name: "Dr. Emily Johnson",
    role: "Tech Innovation Specialist",
    company: "Future Labs",
    image: "/speakers/speaker1.png",
    bio: "Leading expert in emerging technologies with over 15 years of experience in Silicon Valley."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Strategy Director",
    company: "Global Innovations",
    image: "/speakers/speaker2.png",
    bio: "Renowned product strategist who transformed multiple startups into industry leaders."
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Digital Transformation Lead",
    company: "Transform Co",
    image: "/speakers/speaker3.png",
    bio: "Specializes in guiding traditional businesses through successful digital transformations."
  },
  {
    id: 4,
    name: "James Rodriguez",
    role: "AI Research Scientist",
    company: "DeepMind Solutions",
    image: "/speakers/speaker4.png",
    bio: "Pioneer in practical applications of artificial intelligence for business growth."
  },
];

// Mock data for ticket tiers
const ticketTiers = [
  {
    id: "standard",
    name: "Standard Access",
    price: 199,
    features: [
      "Access to all keynote sessions",
      "Networking opportunities",
      "Conference materials",
      "Coffee and lunch included"
    ]
  },
  {
    id: "premium",
    name: "Premium Access",
    price: 399,
    features: [
      "All Standard Access benefits",
      "VIP seating at keynotes",
      "Exclusive Q&A sessions with speakers",
      "Conference dinner event"
    ]
  },
  {
    id: "vip",
    name: "VIP Package",
    price: 799,
    features: [
      "All Premium Access benefits",
      "One-on-one meetings with speakers",
      "Workshop participation",
      "1-year membership to online community",
      "Conference recordings"
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Growth Summit 2025</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl">
              Join 100 ambitious young professionals and industry-leading experts for an inspirational conference focused on career advancement and innovation.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>June 15-16, 2025</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Innovation Center, San Francisco</span>
              </div>
            </div>
            <Link href="#tickets" className="bg-white text-indigo-900 hover:bg-indigo-100 font-medium py-3 px-8 rounded-full text-lg transition duration-300">
              Register Now
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white"></div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About the Event</h2>
            <div className="w-20 h-1 bg-indigo-700 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              The Professional Growth Summit brings together emerging talent and established experts for two days of inspiration, learning, and networking. This conference is specifically designed for young professionals seeking to accelerate their career growth and stay at the forefront of industry innovations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-indigo-100 text-indigo-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inspiring Keynotes</h3>
              <p className="text-gray-600">Learn from industry leaders who have successfully navigated their careers and built impactful businesses.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-indigo-100 text-indigo-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategic Networking</h3>
              <p className="text-gray-600">Connect with peers and mentors in your industry through structured networking sessions.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <div className="bg-indigo-100 text-indigo-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Practical Workshops</h3>
              <p className="text-gray-600">Develop new skills through hands-on workshops focused on cutting-edge tools and methodologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Expert Speakers</h2>
            <div className="w-20 h-1 bg-indigo-700 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Learn from industry leaders who are shaping the future of business and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="bg-white rounded-lg overflow-hidden shadow-md transition duration-300 hover:shadow-xl">
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                  <p className="text-indigo-700 mb-2">{speaker.role}</p>
                  <p className="text-gray-500 text-sm mb-4">{speaker.company}</p>
                  <p className="text-gray-600 text-sm">{speaker.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tickets Section */}
      <section id="tickets" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Tickets</h2>
            <div className="w-20 h-1 bg-indigo-700 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Secure your spot at the Professional Growth Summit. Limited to 100 participants only.
            </p>
          </div>
          
          {/* Replacing static ticket cards with interactive PurchaseTicket component */}
          <PurchaseTicket ticketTiers={ticketTiers} />
          
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              Group discounts available for teams of 3+. <a href="#" className="text-indigo-700 hover:underline">Contact us</a> for details.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions?</h2>
            <div className="w-20 h-1 bg-indigo-700 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Reach out to our team for any questions about the event.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-indigo-700 hover:bg-indigo-800 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Professional Growth Summit</h3>
              <p className="text-gray-400">
                A premier event for ambitious young professionals looking to accelerate their careers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Speakers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Schedule</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Tickets</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@growthsummit.com</span>
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2025 Professional Growth Summit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
