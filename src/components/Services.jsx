import { Shield, Video, AlarmClock, Lightbulb, Zap, Wrench } from "lucide-react"

const services = [
  {
    icon: <Wrench className="w-6 h-6 text-sky-400" />,
    title: "Electrical Maintenance",
    desc: "Troubleshooting, repairs, upgrades, lighting and socket additions.",
  },
  {
    icon: <Zap className="w-6 h-6 text-emerald-400" />,
    title: "Rewires",
    desc: "Full and partial rewires with certification and safety testing.",
  },
  {
    icon: <AlarmClock className="w-6 h-6 text-amber-400" />,
    title: "Smoke Alarms",
    desc: "Supply and installation of interlinked, compliant smoke/heat alarms.",
  },
  {
    icon: <Video className="w-6 h-6 text-purple-400" />,
    title: "Security & CCTV",
    desc: "CCTV, intruder alarms, smart doorbells and access control systems.",
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-pink-400" />,
    title: "Lighting",
    desc: "LED upgrades, garden lighting, feature and emergency lighting.",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-400" />,
    title: "Safety Testing",
    desc: "EICR, landlord certificates, PAT testing, and compliance reports.",
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/7 transition-colors">
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              </div>
              <p className="text-slate-300 mt-3">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
