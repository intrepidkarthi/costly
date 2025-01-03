'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { getPendingItems, updateItemStatus, type Item } from '@/lib/items'
import { supabase } from '@/lib/supabase'

interface DashboardStats {
  pendingCount: number
  totalItems: number
  categoriesCount: number
}

export default function AdminDashboardPage() {
  const [pendingItems, setPendingItems] = useState<Item[]>([])
  const [stats, setStats] = useState<DashboardStats>({
    pendingCount: 0,
    totalItems: 0,
    categoriesCount: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  async function fetchDashboardData() {
    try {
      setLoading(true)
      setError(null)

      // Fetch pending items using our new function
      const items = await getPendingItems()
      setPendingItems(items)

      // Fetch stats
      const [
        { count: pendingCount },
        { count: totalItems },
        { count: categoriesCount }
      ] = await Promise.all([
        supabase
          .from('items')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'pending'),
        supabase
          .from('items')
          .select('*', { count: 'exact', head: true }),
        supabase
          .from('categories')
          .select('*', { count: 'exact', head: true })
      ])

      setStats({
        pendingCount: pendingCount || 0,
        totalItems: totalItems || 0,
        categoriesCount: categoriesCount || 0,
      })
    } catch (err) {
      console.error('Error fetching dashboard data:', err)
      setError('Failed to load dashboard data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  async function handleApprove(itemId: number) {
    try {
      await updateItemStatus(itemId, 'approved')
      await fetchDashboardData()
    } catch (err) {
      console.error('Error approving item:', err)
      // You might want to show a toast notification here
    }
  }

  async function handleReject(itemId: number) {
    try {
      await updateItemStatus(itemId, 'rejected')
      await fetchDashboardData()
    } catch (err) {
      console.error('Error rejecting item:', err)
      // You might want to show a toast notification here
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-12">
        <h1 className="text-5xl font-bold mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
            Admin Dashboard
          </span>
        </h1>

        {error ? (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-8">
            <p className="text-red-400">{error}</p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Pending Reviews', value: stats.pendingCount },
            { label: 'Total Items', value: stats.totalItems },
            { label: 'Categories', value: stats.categoriesCount }
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-900 via-gray-900 to-black p-8 rounded-2xl border border-amber-500/10">
              <h3 className="text-xl font-semibold mb-2 text-gray-400">{stat.label}</h3>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-2xl border border-amber-500/10 p-8">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              Pending Submissions
            </span>
          </h2>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="inline-flex flex-col items-center">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-4 border-amber-400/20" />
                  <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin" />
                </div>
                <p className="mt-4 text-gray-400">Loading submissions...</p>
              </div>
            </div>
          ) : pendingItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No pending submissions to review</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-amber-500/10">
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Item</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Category</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Price</th>
                    <th className="text-left py-4 px-4 text-gray-400 font-medium">Submitted</th>
                    <th className="text-right py-4 px-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingItems.map((item) => (
                    <tr key={item.id} className="border-b border-amber-500/10 last:border-0">
                      <td className="py-4 px-4">
                        <div className="font-medium text-white">{item.name}</div>
                        <div className="text-sm text-gray-400">{item.description.slice(0, 100)}...</div>
                      </td>
                      <td className="py-4 px-4 text-gray-400">{item.category.name}</td>
                      <td className="py-4 px-4 text-gray-400">₹{item.price.toLocaleString()}</td>
                      <td className="py-4 px-4 text-gray-400">
                        {new Date(item.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleApprove(item.id)}
                            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleReject(item.id)}
                            className="px-4 py-2 border border-amber-500/20 text-amber-400 rounded-lg hover:bg-amber-500/10 transition-all duration-300"
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
