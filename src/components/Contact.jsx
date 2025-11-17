import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileDown } from 'lucide-react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Wysyłanie...')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      // Placeholder: in real app send to backend/Email API
      await new Promise(r => setTimeout(r, 600))
      setStatus('Dziękuję! Odezwię się wkrótce.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Coś poszło nie tak. Spróbuj ponownie.')
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-neutral-950 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Kontakt</h2>
            <p className="mt-3 text-neutral-300">Masz projekt? Chętnie pomogę zaplanować i wdrożyć rozwiązanie skrojone pod Twój biznes.</p>
            <div className="mt-6 flex gap-3">
              <a href="mailto:kamil.ganko.dev@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 hover:bg-white/10"><Mail size={18}/> Napisz maila</a>
              <a href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/10 hover:bg-white/10"><FileDown size={18}/> Pobierz CV</a>
            </div>
            <div className="mt-6 flex gap-4 text-neutral-300">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-brand-400"><Github/></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-brand-400"><Linkedin/></a>
            </div>
          </div>
          <motion.form initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} onSubmit={onSubmit} className="p-6 rounded-xl border border-white/10 bg-white/5">
            <div className="grid grid-cols-1 gap-4">
              <input required name="name" placeholder="Imię i nazwisko" className="px-4 py-3 rounded-md bg-neutral-900 border border-white/10 outline-none focus:ring-2 focus:ring-brand-500"/>
              <input required name="email" type="email" placeholder="Email" className="px-4 py-3 rounded-md bg-neutral-900 border border-white/10 outline-none focus:ring-2 focus:ring-brand-500"/>
              <textarea required name="message" placeholder="Wiadomość" rows="5" className="px-4 py-3 rounded-md bg-neutral-900 border border-white/10 outline-none focus:ring-2 focus:ring-brand-500"/>
              <button className="mt-2 px-5 py-3 rounded-md bg-brand-500 hover:bg-brand-400 transition-colors font-medium">Wyślij</button>
              {status && <div className="text-sm text-neutral-300">{status}</div>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
