import { motion } from 'framer-motion'

const projects = [
  {
    title: 'KDPW eVoting',
    desc: 'Duża aplikacja do głosowań online dla rynku kapitałowego. Odpowiedzialność: front-end, architektura komponentowa, optymalizacja wydajności.',
    tech: ['Angular', 'TypeScript', 'RxJS'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1555431189-0fabf2667795?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Platforma webowa (Next.js + NestJS)',
    desc: 'Aplikacje webowe łączące SSR/SSG i API. Modułowa architektura, CI/CD i integracje zewnętrzne.',
    tech: ['Next.js', 'NestJS', 'TypeScript'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop'
  },
  {
    title: 'Strony firmowe i e‑commerce',
    desc: 'Nowoczesne strony i sklepy z naciskiem na Core Web Vitals i SEO. PWA, analityka, integracje płatności.',
    tech: ['React', 'Next.js', 'Stripe'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1400&auto=format&fit=crop'
  }
]

function Tag({ children }) {
  return <span className="text-xs px-2 py-1 rounded bg-white/10 text-white/90 border border-white/10">{children}</span>
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-white dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white">Projekty</h2>
          <a href="#contact" className="text-sm text-brand-600 dark:text-brand-400 hover:underline">Chcesz podobny projekt? Porozmawiajmy</a>
        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article key={p.title} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-white dark:bg-white/5">
              <div className="aspect-[16/10] bg-neutral-900">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tech.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
                <div className="mt-4">
                  <a href={p.link} className="text-sm text-brand-600 dark:text-brand-400 hover:underline">Zobacz więcej</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
