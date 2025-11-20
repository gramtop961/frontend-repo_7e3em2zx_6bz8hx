import { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error(await res.text())
      setStatus('Thanks — we’ll be in touch shortly!')
      setForm({ name: '', email: '', company: '', interest: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s talk about your Pega roadmap</h2>
          <p className="text-blue-200 mt-3">Tell us where you want to go — we’ll outline an approach, timeline, and team.
          </p>
          {status && <p className="mt-4 text-sm text-blue-200">{status}</p>}
        </div>

        <form onSubmit={submit} className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="px-4 py-3 rounded-lg bg-slate-800/70 text-white placeholder:text-blue-200/60 border border-white/10" required />
            <input name="email" value={form.email} onChange={onChange} placeholder="Email" type="email" className="px-4 py-3 rounded-lg bg-slate-800/70 text-white placeholder:text-blue-200/60 border border-white/10" required />
            <input name="company" value={form.company} onChange={onChange} placeholder="Company" className="px-4 py-3 rounded-lg bg-slate-800/70 text-white placeholder:text-blue-200/60 border border-white/10 sm:col-span-2" />
            <input name="interest" value={form.interest} onChange={onChange} placeholder="Interest (PCS, CDH, CoE, etc.)" className="px-4 py-3 rounded-lg bg-slate-800/70 text-white placeholder:text-blue-200/60 border border-white/10 sm:col-span-2" />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="How can we help?" rows={5} className="px-4 py-3 rounded-lg bg-slate-800/70 text-white placeholder:text-blue-200/60 border border-white/10 sm:col-span-2" required />
          </div>
          <button className="mt-4 w-full px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
