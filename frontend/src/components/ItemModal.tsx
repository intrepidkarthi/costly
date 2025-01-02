import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { OptimizedImage } from './OptimizedImage'
import { Item } from '@/lib/items'
import { formatCurrency } from '@/lib/utils'

interface ItemModalProps {
  item: Item | null
  isOpen: boolean
  onClose: () => void
}

export function ItemModal({ item, isOpen, onClose }: ItemModalProps) {
  if (!item) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/95 backdrop-blur-lg" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 sm:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-6xl transform overflow-hidden rounded-2xl bg-gradient-to-b from-gray-900 to-black p-1">
                {/* Gradient border */}
                <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 to-amber-600/20 rounded-2xl" />
                
                <div className="relative p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Image Section */}
                    <div className="relative">
                      <div className="aspect-[4/3] w-full relative overflow-hidden rounded-xl">
                        <OptimizedImage
                          src={item.image_url}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Category Badge */}
                      <div className="absolute bottom-4 right-4">
                        <span className="px-4 py-2 bg-black/40 backdrop-blur-md text-sm font-medium rounded-full text-amber-400 border border-amber-400/20">
                          {item.category.name}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col">
                      <div className="mb-8">
                        <Dialog.Title as="h2" className="text-4xl font-bold text-white mb-4">
                          {item.name}
                        </Dialog.Title>

                        <div className="prose prose-invert prose-amber">
                          <p className="text-lg text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="mt-auto space-y-8">
                        {/* Price Section */}
                        <div className="flex items-baseline justify-between border-t border-amber-500/10 pt-6">
                          <span className="text-lg font-medium text-gray-400">Price</span>
                          <div className="text-right">
                            <span className="block text-4xl font-bold text-amber-400">
                              {formatCurrency(item.price)}
                            </span>
                            <span className="text-sm text-gray-500">Including all taxes</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-end space-x-4">
                          <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/10 font-medium"
                          >
                            Contact Seller
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
