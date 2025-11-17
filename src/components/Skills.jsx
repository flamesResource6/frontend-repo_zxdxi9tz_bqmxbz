import { motion } from 'framer-motion'
import { Code2, Cpu, Boxes, Workflow, Zap } from 'lucide-react'

const tech = [
  { name: 'JavaScript', level: 'Expert', color: 'bg-yellow-400/20 text-yellow-300' },
  { name: 'TypeScript', level: 'Expert', color: 'bg-blue-400/20 text-blue-300' },
  { name: 'React', level: 'Expert', color: 'bg-cyan-400/20 text-cyan-300' },
  { name: 'Next.js', level: 'Advanced', color: 'bg-neutral-700/50 text-neutral-200' },
  { name: 'Angular', level: 'Advanced', color: 'bg-red-400/20 text-red-300' },
  { name: 'NestJS', level: 'Advanced', color: 'bg-pink-400/20 text-pink-300' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-neutral-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Umiejętności</h2>
          <div className="text-sm text-neutral-400">Czysty kod • Wydajność • UX • Nowoczesny design</div>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tech.map((t, i) => (
            <motion.div key={t.name} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.04}} className="p-5 rounded-xl border border-white/10 bg-white/5">
              <div className="flex items-center justify-between">
                <div className="text-white font-medium">{t.name}</div>
                <div className={`text-xs px-2 py-1 rounded ${t.color}`}>{t.level}</div>
              </div>
              <div className="mt-3 h-2 w-full bg-white/10 rounded overflow-hidden">
                <div className="h-full bg-brand-500" style={{ width: `${Math.min(100, (['Expert','Advanced','Intermediate'].indexOf(t.level)+2)*25)}%` }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
