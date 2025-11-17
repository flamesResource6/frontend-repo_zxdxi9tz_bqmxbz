import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-24 md:pb-32 bg-neutral-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark bg-grid opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(109,90,255,0.25),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(0,229,255,0.15),transparent_30%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Kamil Gańko
            </motion.h1>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.6}} className="mt-3 text-xl text-gray-300">
              Front-End Developer / Fullstack JavaScript Developer
            </motion.p>
            <motion.p initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.6}} className="mt-6 text-lg text-gray-300 max-w-2xl">
              Tworzę nowoczesne aplikacje webowe, które działają szybko i wyglądają świetnie.
            </motion.p>
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.6}} className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-md bg-brand-500 hover:bg-brand-400 text-white font-medium transition-colors">Zobacz projekty</a>
              <a href="#contact" className="px-5 py-3 rounded-md border border-white/10 hover:bg-white/10 transition-colors">Skontaktuj się</a>
            </motion.div>
          </div>
          <div className="lg:col-span-6 h-[380px] sm:h-[460px] md:h-[520px] lg:h-[560px] xl:h-[620px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 bg-neutral-900/40">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
