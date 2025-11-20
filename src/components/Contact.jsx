import { useState } from "react"

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("Sending...")

    const form = new FormData(e.currentTarget)
    const payload = {
      name: form.get("name"),
      email: form.get("email") || null,
      phone: form.get("phone") || null,
      service: form.get("service"),
      message: form.get("message") || null,
    }

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000"
      const res = await fetch(`${baseUrl}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`Request failed: ${res.status}`)
      setStatus("Thanks! We\'ll be in touch shortly.")
      e.currentTarget.reset()
    } catch (err) {
      setStatus(`Something went wrong: ${err.message}`)
    }
  }

  return (
    <section id="contact" className="relative bg-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Request a quote</h2>
        <p className="text-slate-300 mb-8">Tell us what you need. We\'ll get back within 1 business day.</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Full name" className="px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder:text-slate-400" />
            <input name="email" type="email" placeholder="Email (optional)" className="px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder:text-slate-400" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="phone" placeholder="Phone (optional)" className="px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder:text-slate-400" />
            <select name="service" required className="px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white">
              <option value="" disabled selected>Choose a service</option>
              <option>General Maintenance</option>
              <option>Rewires</option>
              <option>Smoke Alarms</option>
              <option>Security & CCTV</option>
              <option>EV Chargers</option>
              <option>Lighting</option>
              <option>Other</option>
            </select>
          </div>
          <textarea name="message" rows="4" placeholder="Tell us a bit more..." className="px-4 py-3 rounded-lg bg-slate-950/60 border border-white/10 text-white placeholder:text-slate-400" />

          <button className="mt-2 inline-flex justify-center items-center px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-colors">
            Send request
          </button>
          {status && (
            <p className="text-sm text-slate-200">{status}</p>
          )}
        </form>
      </div>
    </section>
  )
}
