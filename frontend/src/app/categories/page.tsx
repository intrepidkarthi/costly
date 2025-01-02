import Link from 'next/link'
import { Navbar } from '@/components/Navbar'

const categories = [
  {
    id: 'luxury-cars',
    name: 'Luxury Cars',
    description: 'Exclusive automobiles and supercars',
    imageUrl: '/images/cars.jpg',
  },
  {
    id: 'fine-watches',
    name: 'Fine Watches',
    description: 'Premium timepieces and collectibles',
    imageUrl: '/images/watches.jpg',
  },
  {
    id: 'luxury-hotels',
    name: 'Luxury Hotels',
    description: 'Five-star hotels and premium resorts',
    imageUrl: '/images/hotels.jpg',
  },
  {
    id: 'designer-fashion',
    name: 'Designer Fashion',
    description: 'High-end fashion and accessories',
    imageUrl: '/images/fashion.jpg',
  },
  {
    id: 'real-estate',
    name: 'Premium Real Estate',
    description: 'Luxury properties and mansions',
    imageUrl: '/images/realestate.jpg',
  },
  {
    id: 'fine-dining',
    name: 'Fine Dining',
    description: 'Exclusive restaurants and culinary experiences',
    imageUrl: '/images/dining.jpg',
  },
]

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Browse by Category
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/categories/${category.id}`}
              className="group"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden transform transition-all duration-300 group-hover:scale-105">
                <div className="h-48 bg-gray-700"></div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-amber-400">
                    {category.name}
                  </h2>
                  <p className="text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
