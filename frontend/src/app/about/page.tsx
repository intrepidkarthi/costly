'use client'

import { Navbar } from '@/components/Navbar'

export default function AboutPage() {
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
                About Costly
              </span>
            </h1>
            <div className="w-40 h-1 mx-auto bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Redefining luxury commerce in India, one exceptional piece at a time
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="absolute right-0 top-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black p-12 rounded-3xl border border-amber-500/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
              <h2 className="text-3xl font-bold mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                  Our Story
                </span>
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  In the heart of India's Silicon Valley, Bangalore, Costly was born from a simple observation: the growing appetite for luxury in India deserved a platform that matched its sophistication. The name "Costly" itself is a nod to our Indian roots, where the word has long been synonymous with quality, prestige, and aspiration.
                </p>
                <p>
                  What began as a curated collection of timepieces in early 2024 has evolved into a comprehensive luxury marketplace. Our journey is driven by a deep understanding of both technology and luxury, combining Bangalore's innovative spirit with India's rich heritage of luxury and craftsmanship.
                </p>
                <p>
                  Today, Costly.in stands as a testament to our commitment to authenticity, trust, and excellence. We've created more than just a marketplace; we've built a community where luxury enthusiasts, collectors, and connoisseurs come together to celebrate exceptional craftsmanship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent" />
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              Our Core Values
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Authenticity",
                description: "Every item on our platform undergoes rigorous verification. We believe in absolute transparency and authenticity in every transaction.",
                icon: (
                  <svg className="w-8 h-8 text-amber-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: "Trust",
                description: "Built on the foundation of trust, we ensure every interaction on our platform is secure, reliable, and exceeds expectations.",
                icon: (
                  <svg className="w-8 h-8 text-amber-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                )
              },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from customer service to platform innovation, setting new standards in luxury e-commerce.",
                icon: (
                  <svg className="w-8 h-8 text-amber-500/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 via-gray-900 to-black p-8 rounded-2xl border border-amber-500/10 relative group hover:border-amber-500/20 transition-colors duration-300">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
              Our Journey
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                date: "January 2024",
                title: "The Vision Takes Shape",
                description: "Costly.in is conceived in Bangalore, starting with a vision to revolutionize luxury commerce in India."
              },
              {
                date: "March 2024",
                title: "Platform Launch",
                description: "Launch of our curated marketplace with an initial focus on luxury timepieces and jewelry."
              },
              {
                date: "June 2024",
                title: "Expanding Horizons",
                description: "Expansion into luxury automobiles and real estate, partnering with premium dealers across India."
              },
              {
                date: "October 2024",
                title: "Trust & Innovation",
                description: "Introduction of our advanced verification system and concierge service."
              },
              {
                date: "2025",
                title: "The Future Ahead",
                description: "Continuing our mission to make luxury more accessible while maintaining our commitment to authenticity and excellence."
              }
            ].map((milestone, index) => (
              <div key={index} className="relative pl-8 pb-12 border-l border-amber-500/20 last:border-0">
                <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-amber-500 to-amber-500/0" />
                <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-amber-500" />
                <div className="text-sm text-amber-400 mb-2">{milestone.date}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                <p className="text-gray-400">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Looking Ahead
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Our vision is to be India's most trusted destination for luxury items, where each transaction is a testament to authenticity and excellence. We're not just selling products; we're curating experiences and building a community of luxury enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/items'}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/10"
              >
                Explore Our Collection
              </button>
              <button
                onClick={() => window.location.href = '/contact'}
                className="px-8 py-4 border border-amber-500/20 text-amber-400 rounded-xl hover:bg-amber-500/10 transition-all duration-300"
              >
                Connect With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
