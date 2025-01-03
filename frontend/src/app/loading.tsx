export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0A0A0A] flex items-center justify-center z-50">
      <div className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl" />
        
        {/* Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-amber-500/20" />
          <div className="absolute inset-0 rounded-full border-4 border-amber-500 border-t-transparent animate-spin" />
        </div>
      </div>
    </div>
  )
}
