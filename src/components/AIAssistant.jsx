import { useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function AIAssistant(){
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ role: 'assistant', content: 'Cześć! Jestem AI Assistant. Opowiedz o swoim pomyśle – podpowiem technologię i wycenę wstępną.' }])
  const [input, setInput] = useState('')

  const send = (e) => {
    e.preventDefault()
    if(!input.trim()) return
    const user = { role: 'user', content: input.trim() }
    const reply = { role: 'assistant', content: 'Dzięki! Na podstawie opisu sugeruję stos: Next.js + NestJS + Tailwind. Po więcej – napisz na maila.' }
    setMessages((m)=>[...m, user, reply])
    setInput('')
  }

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button onClick={()=>setOpen(!open)} className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-400 text-white shadow-lg">
        <Sparkles size={18}/> AI Assistant
      </button>
      {open && (
        <div className="mt-3 w-80 max-h-96 rounded-xl border border-white/10 bg-neutral-900 text-white overflow-hidden shadow-xl">
          <div className="px-4 py-3 border-b border-white/10 font-medium">Szybka konsultacja</div>
          <div className="p-3 space-y-2 max-h-56 overflow-auto">
            {messages.map((m,i)=> (
              <div key={i} className={`${m.role==='assistant' ? 'bg-white/5' : 'bg-brand-500/20'} p-2 rounded`}>{m.content}</div>
            ))}
          </div>
          <form onSubmit={send} className="p-3 border-t border-white/10 flex gap-2">
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Opisz swój projekt..." className="flex-1 px-3 py-2 rounded bg-neutral-800 outline-none"/>
            <button className="px-3 py-2 rounded bg-brand-500 hover:bg-brand-400">Wyślij</button>
          </form>
        </div>
      )}
    </div>
  )
}
