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
  image_url: z.string().url('Must be a valid URL')
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
      // Check if user is authenticated
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      if (authError || !user) {
        throw new Error('Please log in to submit items')
      }

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
        submitted_by: user.id
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
      <div className="text-center py-10">
        <h3 className="text-2xl font-bold text-amber-500 mb-4">
          Item Submitted Successfully!
        </h3>
        <p className="text-gray-400 mb-6">
          Your item has been submitted for review. We'll notify you once it's approved.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="bg-amber-500 text-white px-6 py-2 rounded-md hover:bg-amber-600 transition-colors"
        >
          Submit Another Item
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
      {error && (
        <div className="bg-red-500/10 border border-red-500 text-red-500 rounded-md p-4">
          {error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name')}
          className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white shadow-sm focus:border-amber-500 focus:ring-amber-500"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-300">
          Description
        </label>
        <textarea
          id="description"
          rows={4}
          {...register('description')}
          className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white shadow-sm focus:border-amber-500 focus:ring-amber-500"
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-500">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-300">
          Category
        </label>
        <select
          id="category"
          {...register('category_id', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white shadow-sm focus:border-amber-500 focus:ring-amber-500"
        >
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category_id && (
          <p className="mt-1 text-sm text-red-500">{errors.category_id.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-300">
          Price (INR)
        </label>
        <input
          type="number"
          id="price"
          {...register('price', { valueAsNumber: true })}
          className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white shadow-sm focus:border-amber-500 focus:ring-amber-500"
        />
        {errors.price && (
          <p className="mt-1 text-sm text-red-500">{errors.price.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="image_url" className="block text-sm font-medium text-gray-300">
          Image URL
        </label>
        <input
          type="url"
          id="image_url"
          {...register('image_url')}
          className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white shadow-sm focus:border-amber-500 focus:ring-amber-500"
          placeholder="https://example.com/image.jpg"
        />
        {errors.image_url && (
          <p className="mt-1 text-sm text-red-500">{errors.image_url.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-md bg-amber-500 py-2 px-4 text-white hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Item'}
        </button>
      </div>
    </form>
  )
}
