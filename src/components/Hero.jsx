import { motion } from 'framer-motion'

function Hero({ onContactClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/40 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
          >
            Pega-first consulting for enterprises that need to move fast
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-xl"
          >
            We design, build, and scale mission‑critical Pega applications—covering workflow, decisioning, and customer service with measurable outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button onClick={onContactClick} className="px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition">Start a conversation</button>
            <a href="#services" className="px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition">Our services</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-500/20 border border-white/10 backdrop-blur-sm p-6">
            <div className="grid grid-cols-3 gap-3 h-full">
              {['Case Management','Pega DX API','Decisioning','Customer Service','DevOps','CoE'].map((item, i) => (
                <div key={i} className="rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-center text-sm text-blue-100 p-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
