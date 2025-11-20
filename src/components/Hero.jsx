import { Shield, Zap, AlarmClock, Wrench } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 -z-0 opacity-40 bg-[radial-gradient(circle_at_20%_10%,#22d3ee_0%,transparent_25%),radial-gradient(circle_at_80%_30%,#60a5fa_0%,transparent_25%),radial-gradient(circle_at_50%_90%,#34d399_0%,transparent_25%)]" />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sky-200 text-sm mb-6">
              <Zap className="w-4 h-4" />
              Reliable Electrical & Security Specialists
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
              Electrician & Security Services you can trust
            </h1>
            <p className="mt-6 text-slate-200 text-lg leading-relaxed">
              We handle maintenance, full and partial rewires, smoke alarm installation, and modern security systems. Fast response. Clean workmanship. Safety first.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-colors">
                Get a free quote
              </a>
              <a href="#services" className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/10 transition-colors">
                Explore services
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-300/90">
              <div className="flex items-center gap-2"><Wrench className="w-4 h-4"/>24/7 call-out</div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4"/>Fully insured</div>
              <div className="flex items-center gap-2"><AlarmClock className="w-4 h-4"/>On-time arrival</div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4"/>Safety certified</div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-sky-400/20 to-emerald-400/10 blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: 'Maintenance', desc: 'Fault finding, repairs, upgrades' },
                  { title: 'Rewires', desc: 'Full & partial rewires, certification' },
                  { title: 'Smoke Alarms', desc: 'Supply, install, compliance' },
                  { title: 'Security', desc: 'CCTV, alarms, access control' },
                ].map((card) => (
                  <div key={card.title} className="rounded-xl p-4 bg-slate-900/60 border border-white/10">
                    <p className="text-white font-semibold">{card.title}</p>
                    <p className="text-slate-300 text-sm mt-1">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
