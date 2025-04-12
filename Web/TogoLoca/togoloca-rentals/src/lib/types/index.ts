export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in square meters
  image: string;
  amenities: string[];
  availableFrom: string; // ISO date string
}

export interface SearchFilters {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
}

// Next.js 15 App Router types for dynamic route components
export interface PageParams {
  id: string;
}

export interface PropertyDetailPageProps {
  params: PageParams;
}