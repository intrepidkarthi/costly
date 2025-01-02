'use client'

import { useEffect, useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { supabase } from '@/lib/supabase'

interface PendingItem {
  id: number
  name: string
  category: string
  price: number
  created_at: string
}

export default function AdminDashboardPage() {
  const [pendingItems, setPendingItems] = useState<PendingItem[]>([])
  const [stats, setStats] = useState({
    pendingCount: 0,
    totalItems: 0,
    categoriesCount: 0,
  })

  useEffect(() => {
    fetchDashboardData()
  }, [])

  async function fetchDashboardData() {
    // Fetch pending items
    const { data: pending } = await supabase
      .from('items')
      .select('id, name, category_id, price, created_at')
      .eq('status', 'pending')
      .order('created_at', { ascending: false })

    // Fetch stats
    const { count: pendingCount } = await supabase
      .from('items')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending')

    const { count: totalItems } = await supabase
      .from('items')
      .select('*', { count: 'exact', head: true })

    const { count: categoriesCount } = await supabase
      .from('categories')
      .select('*', { count: 'exact', head: true })

    setPendingItems(pending || [])
    setStats({
      pendingCount: pendingCount || 0,
      totalItems: totalItems || 0,
      categoriesCount: categoriesCount || 0,
    })
  }

  async function handleApprove(itemId: number) {
    const { error } = await supabase
      .from('items')
      .update({ status: 'approved' })
      .eq('id', itemId)

    if (!error) {
      fetchDashboardData()
    }
  }

  async function handleReject(itemId: number) {
    const { error } = await supabase
      .from('items')
      .update({ status: 'rejected' })
      .eq('id', itemId)

    if (!error) {
      fetchDashboardData()
    }
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Pending Reviews</h3>
            <p className="text-3xl font-bold text-amber-400">{stats.pendingCount}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Total Items</h3>
            <p className="text-3xl font-bold text-amber-400">{stats.totalItems}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Categories</h3>
            <p className="text-3xl font-bold text-amber-400">{stats.categoriesCount}</p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Pending Submissions</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-800">
                  <th className="pb-3">Item Name</th>
                  <th className="pb-3">Category</th>
                  <th className="pb-3">Price (INR)</th>
                  <th className="pb-3">Submitted At</th>
                  <th className="pb-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingItems.map((item) => (
                  <tr key={item.id} className="border-b border-gray-800">
                    <td className="py-4">{item.name}</td>
                    <td>{item.category}</td>
                    <td>₹{item.price.toLocaleString('en-IN')}</td>
                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                    <td>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleReject(item.id)}
                          className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {pendingItems.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-4 text-center text-gray-400">
                      No pending submissions
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
