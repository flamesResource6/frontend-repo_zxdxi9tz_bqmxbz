import { motion } from 'framer-motion'

const posts = [
  {
    title: 'TypeScript w praktyce: wzorce, pułapki i tipy',
    excerpt: 'Jak pisać bezpieczny i zwięzły kod w TS, który skaluje się w dużych projektach front-endowych.',
    date: '2025-04-15',
    tags: ['TypeScript', 'Best Practices']
  },
  {
    title: 'Integracja AI w aplikacjach webowych',
    excerpt: 'Architektura, bezpieczeństwo i przykłady użycia LLM w produktach SaaS.',
    date: '2025-03-22',
    tags: ['AI', 'Architecture']
  },
  {
    title: 'Core Web Vitals w realnych projektach',
    excerpt: 'Techniki optymalizacji wydajności w React/Next.js i jak je mierzyć.',
    date: '2025-02-10',
    tags: ['Performance', 'Next.js']
  }
]

function Tag({ children }) { return <span className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">{children}</span> }

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-semibold">Blog / Notatki</h2>
          <a href="#contact" className="text-sm text-brand-600 dark:text-brand-400 hover:underline">Zasubskrybuj aktualizacje</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article key={p.title} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-5 rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-white/5">
              <div className="text-xs text-neutral-500 dark:text-neutral-400">{new Date(p.date).toLocaleDateString('pl-PL')}</div>
              <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.excerpt}</p>
              <div className="mt-3 flex flex-wrap gap-2">{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
