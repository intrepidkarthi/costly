import { Navbar } from '@/components/Navbar'
import { SubmitItemForm } from '@/components/SubmitItemForm'

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[url('/luxury-pattern.svg')] opacity-5" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Submit Your Luxury Item
              </span>
            </h1>
            <div className="w-40 h-1 mx-auto bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a luxury item to share? Submit it for review and join our exclusive collection.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-2xl p-8 md:p-12 border border-amber-500/10">
              <SubmitItemForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
