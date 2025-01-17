export function StatsSection() {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold">$145B</div>
            <div className="text-sm uppercase tracking-wider">Quarterly volume traded</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold">100+</div>
            <div className="text-sm uppercase tracking-wider">Countries supported</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-bold">$130B</div>
            <div className="text-sm uppercase tracking-wider">Assets on platform</div>
          </div>
        </div>
      </div>
    </div>
  )
}

