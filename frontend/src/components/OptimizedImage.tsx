'use client'

import { useState } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  fill = false,
  width,
  height,
  sizes,
  priority = false
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`bg-gray-800 flex items-center justify-center ${className}`}
        style={!fill ? { width, height } : { position: 'absolute', inset: 0 }}
      >
        <span className="text-gray-400">Failed to load image</span>
      </div>
    )
  }

  return (
    <div 
      className={`${className} ${fill ? 'relative w-full h-full' : ''}`} 
      style={!fill ? { width, height } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        className={`duration-700 ease-in-out ${
          isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
        } ${fill ? 'object-cover' : ''}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
        priority={priority}
        unoptimized={true}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
    </div>
  )
}
