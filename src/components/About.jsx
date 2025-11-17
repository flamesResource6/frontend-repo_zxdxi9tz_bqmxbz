import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">O mnie</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Jestem developerem z 5-letnim doświadczeniem komercyjnym w tworzeniu aplikacji webowych. Specjalizuję się w JavaScript/TypeScript i frameworkach React, Next.js oraz Angular. Lubię projektować czytelne architektury front-endowe, stawiając na czysty kod, wydajność i świetne UX.
            </p>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">
              Brałem udział w tworzeniu KDPW eVoting — dużej aplikacji do głosowań online. Interesuję się integracją AI w produktach cyfrowych: automatyzacją procesów, inteligentnymi funkcjami i personalizacją.
            </p>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300">
              Certyfikacja: Disciplined Agile Senior Scrum Master (DASSM). Rozumiem procesy zwinne, iteracyjne wytwarzanie oprogramowania i efektywną współpracę z biznesem.
            </p>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
            {[
              {k:'JavaScript',v:'ES2023, nowoczesne wzorce, testy'},
              {k:'TypeScript',v:'silne typowanie, bezpieczeństwo'},
              {k:'React / Next.js',v:'SSR/SSG, app router, optymalizacja'},
              {k:'Angular',v:'aplikacje korporacyjne, RxJS'},
              {k:'NestJS',v:'API, architektura modularna'},
              {k:'AI',v:'integracje LLM, automatyzacja'},
            ].map((s, i) => (
              <motion.div key={s.k} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-5 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur">
                <div className="text-sm text-brand-500">{s.k}</div>
                <div className="text-neutral-800 dark:text-neutral-200 font-medium mt-1">{s.v}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
