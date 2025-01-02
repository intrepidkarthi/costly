import { Navbar } from '@/components/Navbar'
import { SubmitItemForm } from '@/components/SubmitItemForm'

export default function SubmitPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Submit a Luxury Item</h1>
          <div className="bg-gray-900 rounded-lg p-8">
            <p className="text-gray-400 mb-8 text-center">
              Have a luxury item to share? Submit it for review and we&apos;ll add it to our catalog.
            </p>
            <SubmitItemForm />
          </div>
        </div>
      </div>
    </>
  )
}
