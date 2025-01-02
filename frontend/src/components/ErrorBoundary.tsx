'use client'

import { useEffect } from 'react'

interface ErrorBoundaryProps {
  error: Error | null | unknown
  reset: () => void
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error)
  }, [error])

  // Get error message safely
  const getErrorMessage = (error: unknown): string => {
    if (error instanceof Error) {
      return error.message
    }
    if (typeof error === 'string') {
      return error
    }
    if (error && typeof error === 'object' && 'message' in error) {
      return String(error.message)
    }
    return 'An unexpected error occurred'
  }

  return (
    <div className="min-h-[400px] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-400 mb-6">
          {getErrorMessage(error)}
        </p>
        <button
          onClick={reset}
          className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
