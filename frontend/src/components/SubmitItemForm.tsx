'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { supabase } from '@/lib/supabase'

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  category_id: z.number().min(1, 'Category is required'),
  price: z.number().min(1, 'Price is required'),
  image_url: z.string().url('Must be a valid URL'),
  contact_email: z.string().email('Must be a valid email')
})

type SubmitItemFormData = z.infer<typeof formSchema>

export function SubmitItemForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState('')
  const [categories, setCategories] = useState([])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SubmitItemFormData>({
    resolver: zodResolver(formSchema)
  })

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data, error } = await supabase
          .from('categories')
          .select('id, name')
          .order('name')

        if (error) throw error
        setCategories(data || [])
      } catch (err) {
        console.error('Error fetching categories:', err)
        setError('Failed to load categories')
      }
    }

    fetchCategories()
  }, [])

  const onSubmit = async (data: SubmitItemFormData) => {
    setIsSubmitting(true)
    setError('')

    try {
      // Get country_id for India
      const { data: countryData, error: countryError } = await supabase
        .from('countries')
        .select('id')
        .eq('code', 'IN')
        .single()

      if (countryError) {
        throw new Error('Failed to get country information')
      }

      // Submit item
      const { error: submitError } = await supabase.from('items').insert({
        name: data.name,
        description: data.description,
        category_id: data.category_id,
        country_id: countryData.id,
        price: data.price,
        currency: 'INR',
        image_url: data.image_url,
        status: 'pending',
        contact_email: data.contact_email,
        submitted_by: null
      })

      if (submitError) {
        throw submitError
      }

      setSubmitSuccess(true)
      reset()
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to submit item. Please try again.'
      setError(errorMessage)
      console.error('Error submitting item:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-6 flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
            Item Submitted Successfully!
          </span>
        </h3>
        <p className="text-gray-400 mb-8">
          Thank you for your submission. Our team will review your item and get back to you soon.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
        >
          Submit Another Item
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Item Name
          </label>
          <input
            id="name"
            type="text"
            {...register('name')}
            className="w-full px-4 py-3 bg-black/50 border border-amber-500/20 rounded-xl focus:outline-none focus:border-amber-500/40 text-white"
            placeholder="e.g., Rolex Daytona"
          />
          {errors.name && (
            <p className="mt-1 text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="category" className="block text-gray-300 mb-2">
            Category
          </label>
          <select
            id="category"
            {...register('category_id', { valueAsNumber: true })}
            className="w-full px-4 py-3 bg-black/50 border border-amber-500/20 rounded-xl focus:outline-none focus:border-amber-500/40 text-white"
          >
            <option value="">Select a category</option>
            {categories.map((category: any) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category_id && (
            <p className="mt-1 text-red-400">{errors.category_id.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="price" className="block text-gray-300 mb-2">
            Price (INR)
          </label>
          <input
            id="price"
            type="number"
            {...register('price', { valueAsNumber: true })}
            className="w-full px-4 py-3 bg-black/50 border border-amber-500/20 rounded-xl focus:outline-none focus:border-amber-500/40 text-white"
            placeholder="e.g., 1000000"
          />
          {errors.price && (
            <p className="mt-1 text-red-400">{errors.price.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="block text-gray-300 mb-2">
            Description
          </label>
          <textarea
            id="description"
            {...register('description')}
            rows={4}
            className="w-full px-4 py-3 bg-black/50 border border-amber-500/20 rounded-xl focus:outline-none focus:border-amber-500/40 text-white"
            placeholder="Describe your luxury item in detail..."
          />
          {errors.description && (
            <p className="mt-1 text-red-400">{errors.description.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="image_url" className="block text-gray-300 mb-2">
            Image URL
          </label>
          <input
            id="image_url"
            type="url"
            {...register('image_url')}
            className="w-full px-4 py-3 bg-black/50 border border-amber-500/20 rounded-xl focus:outline-none focus:border-amber-500/40 text-white"
            placeholder="https://example.com/image.jpg"
          />
          {errors.image_url && (
            <p className="mt-1 text-red-400">{errors.image_url.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact_email" className="block text-gray-300 mb-2">
            Contact Email
          </label>
          <input
            id="contact_email"
            type="email"
            {...register('contact_email')}
            className="w-full px-4 py-3 bg-black/50 border border-amber-500/20 rounded-xl focus:outline-none focus:border-amber-500/40 text-white"
            placeholder="your@email.com"
          />
          {errors.contact_email && (
            <p className="mt-1 text-red-400">{errors.contact_email.message}</p>
          )}
        </div>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 flex items-center justify-center ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2" />
              Submitting...
            </>
          ) : (
            'Submit Item'
          )}
        </button>
      </div>
    </form>
  )
}
