function Services() {
  const items = [
    {
      title: 'Pega Implementations',
      desc: 'Greenfield builds and modernization using Pega Platform with scalable architecture and reusable frameworks.',
    },
    {
      title: 'Pega Customer Service (PCS)',
      desc: 'Design, configure, and extend PCS for seamless omni-channel service with knowledge management and case automation.',
    },
    {
      title: 'Decisioning & CDH',
      desc: 'Always-on decisioning, next-best-action, propensity modeling, and real-time containers integrated across channels.',
    },
    {
      title: 'Upgrades & DevOps',
      desc: 'Plan and execute upgrades, test automation, branch-based development, and CI/CD with guardrails.',
    },
    {
      title: 'Center of Excellence',
      desc: 'Stand up or level up your Pega CoE: standards, design reviews, enablement, and platform governance.',
    },
    {
      title: 'Managed Services',
      desc: 'Run, monitor, and enhance your Pega applications with measurable SLAs and SRE practices.',
    },
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What we do</h2>
        <p className="text-blue-200 mt-3 max-w-3xl">From discovery to production operations, we bring senior Pega talent and proven delivery playbooks.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((card) => (
            <div key={card.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-blue-100">
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-blue-200/90 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
