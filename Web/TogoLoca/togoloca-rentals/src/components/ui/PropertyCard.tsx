import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/lib/types';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold truncate">{property.title}</h3>
        <p className="text-gray-600 mb-2">{property.location}</p>
        <p className="text-primary font-bold text-lg">${property.price}/month</p>
        
        <div className="flex justify-between mt-3 text-gray-600 text-sm">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.3 4.6c.4.4.4 1 0 1.4L8.9 7.25H13a1 1 0 010 2H8.9l1.4 1.25a1 1 0 01-1.4 1.4l-3-2.7a1 1 0 010-1.4l3-2.7a1 1 0 011.4 0z" />
            </svg>
            <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6zm1 2a1 1 0 011-1h4a1 1 0 011 1v1H7V6z" />
            </svg>
            <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 3a2 2 0 012-2h8a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V3zm3 0a1 1 0 00-1 1v3h8V4a1 1 0 00-1-1H7z" clipRule="evenodd" />
            </svg>
            <span>{property.area} m²</span>
          </div>
        </div>
        
        <Link href={`/properties/${property.id}`}>
          <div className="mt-4 text-center bg-primary hover:bg-primary/90 text-white py-2 rounded-md transition-colors">
            View Details
          </div>
        </Link>
      </div>
    </div>
  );
}