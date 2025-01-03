import { supabase } from './supabase'

export interface Category {
  id: number
  name: string
}

export interface Item {
  id: number
  name: string
  description: string
  price: number
  image_url: string
  category_id: number
  category: {
    id: number
    name: string
  }
  created_at: string
  status: 'pending' | 'approved' | 'rejected'
}

export interface ItemsFilter {
  categoryId?: number
  minPrice?: number
  maxPrice?: number
  sortBy?: 'price_asc' | 'price_desc' | 'newest'
  search?: string
  page?: number
  limit?: number
}

export interface PaginatedItems {
  items: Item[]
  total: number
  page: number
  totalPages: number
}

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('id, name')
    .order('name')

  if (error) {
    throw error
  }

  return data || []
}

export async function getItems(filter: ItemsFilter = {}): Promise<PaginatedItems> {
  const {
    page = 1,
    limit = 12,
    categoryId,
    minPrice,
    maxPrice,
    search,
    sortBy,
  } = filter

  try {
    let query = supabase
      .from('items')
      .select('*, category:categories(*)', { count: 'exact' })
      .eq('status', 'approved')
      .range((page - 1) * limit, page * limit - 1)

    if (categoryId) {
      query = query.eq('category_id', categoryId)
    }

    if (minPrice) {
      query = query.gte('price', minPrice)
    }

    if (maxPrice) {
      query = query.lte('price', maxPrice)
    }

    if (search) {
      query = query.ilike('name', `%${search}%`)
    }

    switch (sortBy) {
      case 'price_asc':
        query = query.order('price', { ascending: true })
        break
      case 'price_desc':
        query = query.order('price', { ascending: false })
        break
      case 'newest':
        query = query.order('created_at', { ascending: false })
        break
      default:
        query = query.order('created_at', { ascending: false })
    }

    const { data, error, count } = await query

    if (error) {
      console.error('getItems: Supabase error:', error)
      throw error
    }

    if (!data) {
      return {
        items: [],
        total: 0,
        page,
        totalPages: 0,
      }
    }

    const items = data.map(item => {
      if (!item) {
        throw new Error('Item is null or undefined')
      }

      return {
        id: item.id,
        name: item.name,
        description: item.description,
        price: Number(item.price),
        image_url: item.image_url,
        category_id: item.category_id,
        category: {
          id: item.category?.id,
          name: item.category?.name
        },
        created_at: item.created_at,
        status: item.status as 'pending' | 'approved' | 'rejected'
      }
    })

    return {
      items,
      total: count || 0,
      page,
      totalPages: Math.ceil((count || 0) / limit),
    }
  } catch (error) {
    console.error('getItems: Error:', error)
    throw error
  }
}

export async function getItemsByCategory(categoryId: number): Promise<Item[]> {
  const { data, error } = await supabase
    .from('items')
    .select('*, category:categories(*)')
    .eq('category_id', categoryId)
    .eq('status', 'approved')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('getItemsByCategory: Supabase error:', error)
    throw error
  }

  if (!data) {
    return []
  }

  return data.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: Number(item.price),
    image_url: item.image_url,
    category_id: item.category_id,
    category: {
      id: item.category?.id,
      name: item.category?.name
    },
    created_at: item.created_at,
    status: item.status as 'pending' | 'approved' | 'rejected'
  }))
}

export async function getItemById(id: number): Promise<Item | null> {
  const { data, error } = await supabase
    .from('items')
    .select('*, category:categories(*)')
    .eq('id', id)
    .single()

  if (error) {
    if (error.code === 'PGRST116') {
      return null
    }
    console.error('getItemById: Supabase error:', error)
    throw error
  }

  if (!data) {
    return null
  }

  return {
    id: data.id,
    name: data.name,
    description: data.description,
    price: Number(data.price),
    image_url: data.image_url,
    category_id: data.category_id,
    category: {
      id: data.category?.id,
      name: data.category?.name
    },
    created_at: data.created_at,
    status: data.status as 'pending' | 'approved' | 'rejected'
  }
}

export async function getPendingItems(): Promise<Item[]> {
  const { data, error } = await supabase
    .from('items')
    .select('*, category:categories(*)')
    .eq('status', 'pending')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('getPendingItems: Supabase error:', error)
    throw error
  }

  if (!data) {
    return []
  }

  return data.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description,
    price: Number(item.price),
    image_url: item.image_url,
    category_id: item.category_id,
    category: {
      id: item.category?.id,
      name: item.category?.name
    },
    created_at: item.created_at,
    status: item.status as 'pending' | 'approved' | 'rejected'
  }))
}

export async function updateItemStatus(id: number, status: 'approved' | 'rejected'): Promise<void> {
  const { error } = await supabase
    .from('items')
    .update({ status })
    .eq('id', id)

  if (error) {
    console.error('updateItemStatus: Supabase error:', error)
    throw error
  }
}
