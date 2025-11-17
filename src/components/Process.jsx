import { motion } from 'framer-motion'
import { Lightbulb, PencilRuler, Code2, BugPlay, Rocket } from 'lucide-react'

const steps = [
  { icon: Lightbulb, title: 'Analiza', desc: 'Zrozumienie celów biznesowych i potrzeb użytkowników.' },
  { icon: PencilRuler, title: 'Projekt', desc: 'Makiety, design system i architektura informacji.' },
  { icon: Code2, title: 'Development', desc: 'Implementacja front-endu i back-endu z CI/CD.' },
  { icon: BugPlay, title: 'Testy', desc: 'QA, testy jednostkowe i e2e, monitoring.' },
  { icon: Rocket, title: 'Wdrożenie i utrzymanie', desc: 'Skalowalna infrastruktura i ciągłe usprawnienia.' },
]

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Proces pracy</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-5 rounded-xl border border-white/10 bg-white/5">
              <s.icon className="text-brand-400" />
              <div className="mt-3 font-medium">{s.title}</div>
              <div className="mt-1 text-sm text-neutral-300">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
