import { motion } from 'framer-motion'

interface Stat {
  label: string
  value: string | number
  change?: number
}

interface CategoryStatsProps {
  stats: Stat[]
}

export function CategoryStats({ stats }: CategoryStatsProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 transform transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex flex-col">
            <dt className="text-gray-400 text-sm">{stat.label}</dt>
            <dd className="text-2xl font-bold text-white mt-2">{stat.value}</dd>
            {stat.change !== undefined && (
              <div className={`flex items-center gap-1 mt-2 ${
                stat.change >= 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                <span>{Math.abs(stat.change)}%</span>
                <svg
                  className={`w-4 h-4 ${stat.change >= 0 ? '' : 'transform rotate-180'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
