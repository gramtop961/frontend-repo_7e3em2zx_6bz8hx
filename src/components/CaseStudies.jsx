function CaseStudies() {
  const cases = [
    {
      name: 'Global Bank',
      result: '30% faster dispute resolution using Pega Case Management and DX API',
    },
    {
      name: 'Telecom Leader',
      result: '12% increase in NPS with Pega Customer Service knowledge and guided troubleshooting',
    },
    {
      name: 'Insurance Carrier',
      result: 'Real-time underwriting decisions with CDH driving 18% lift in conversions',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Outcomes we’ve delivered</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.name} className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 text-blue-100">
              <p className="text-sm text-blue-300/80">{c.name}</p>
              <p className="mt-2 text-lg text-white">{c.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
