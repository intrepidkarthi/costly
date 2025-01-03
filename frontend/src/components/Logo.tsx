import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg transform rotate-45" />
        <div className="absolute inset-[2px] bg-[#0A0A0A] rounded-lg transform rotate-45 flex items-center justify-center group-hover:bg-black/80 transition-colors">
          <span className="text-amber-500 font-bold transform -rotate-45 text-lg">C</span>
        </div>
      </div>
      <span className="text-xl font-bold text-white">
        Costly<span className="text-amber-500">.in</span>
      </span>
    </Link>
  )
}
