"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { properties } from "@/lib/data";
import { notFound } from "next/navigation";

export default function PropertyDetail() {
  // Get the ID from the route using useParams hook
  const params = useParams();
  const id = params.id as string;

  // Find the property with the matching id
  const property = properties.find((p) => p.id === id);

  // If property not found, show 404 page
  if (!property) {
    notFound();
  }

  // Format date
  const availableFromDate = new Date(property.availableFrom);
  const formattedDate = availableFromDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <Link href="/properties" className="flex items-center text-primary mb-6 hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Properties
        </Link>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          {/* Property Images */}
          <div className="relative h-96 w-full">
            <Image
              src={property.image}
              alt={property.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* Property Details */}
          <div className="p-6">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <p className="text-gray-600 text-lg mb-2">{property.location}</p>
              </div>
              <div className="mt-4 lg:mt-0">
                <p className="text-3xl font-bold text-primary">${property.price}/month</p>
                <p className="text-gray-600">Available from {formattedDate}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8 border-b border-gray-200 pb-6">
              <div className="text-center">
                <p className="text-gray-600">Bedrooms</p>
                <p className="text-xl font-semibold">
                  {property.bedrooms === 0 ? "Studio" : property.bedrooms}
                </p>
              </div>
              <div className="text-center">
                <p className="text-gray-600">Bathrooms</p>
                <p className="text-xl font-semibold">{property.bathrooms}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-600">Area</p>
                <p className="text-xl font-semibold">{property.area} m²</p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2">
                {property.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium transition-colors">
                Schedule a Viewing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}