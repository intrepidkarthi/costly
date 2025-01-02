import { Item } from '@/lib/items'
import { formatCurrency } from '@/lib/utils'
import { OptimizedImage } from './OptimizedImage'

interface ItemCardProps {
  item: Item
  onClick?: (item: Item) => void
}

export function ItemCard({ item, onClick }: ItemCardProps) {
  return (
    <div 
      className="group relative bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(251,191,36,0.15)] border border-amber-500/10"
      onClick={() => onClick?.(item)}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-100%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      </div>

      {/* Image container */}
      <div className="aspect-[4/5] w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/0 to-black/0 opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10" />
        <OptimizedImage
          src={item.image_url}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(min-width: 1536px) 384px, (min-width: 1280px) 336px, (min-width: 1024px) 288px, (min-width: 768px) 342px, (min-width: 640px) 284px, calc(100vw - 32px)"
        />
        
        {/* Category badge */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-4 py-2 bg-black/40 backdrop-blur-md text-xs font-medium rounded-full text-amber-400 border border-amber-400/20">
            {item.category.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 bg-gradient-to-b from-gray-900/0 to-gray-900">
        <h3 className="text-xl font-semibold text-white group-hover:text-amber-400 transition-colors duration-300 mb-2">
          {item.name}
        </h3>
        <p className="text-sm text-gray-400 line-clamp-2 mb-4 h-10">
          {item.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wider mb-1">Price</span>
            <span className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
              {formatCurrency(item.price)}
            </span>
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <span className="inline-flex items-center text-amber-400 text-sm font-medium">
              View Details
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
