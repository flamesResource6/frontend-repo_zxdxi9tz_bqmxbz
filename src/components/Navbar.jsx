import { useState, useEffect } from 'react'
import { Menu, Sun, Moon, Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  const nav = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'O mnie' },
    { href: '#skills', label: 'Umiejętności' },
    { href: '#projects', label: 'Projekty' },
    { href: '#process', label: 'Proces' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Kontakt' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-black/30 border-b border-white/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Kamil Gańko</a>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="text-sm text-gray-700 dark:text-gray-300 hover:text-brand-500 dark:hover:text-brand-400 transition-colors">{n.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="p-2 rounded-md border border-white/10 text-gray-800 dark:text-gray-200 hover:bg-white/60 dark:hover:bg-white/10 transition-colors">
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="mailto:kamil.ganko.dev@gmail.com" className="p-2 rounded-md border border-white/10 text-gray-800 dark:text-gray-200 hover:text-brand-500 dark:hover:text-brand-400"><Mail size={18} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-white/10 text-gray-800 dark:text-gray-200 hover:text-brand-500 dark:hover:text-brand-400"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md border border-white/10 text-gray-800 dark:text-gray-200 hover:text-brand-500 dark:hover:text-brand-400"><Linkedin size={18} /></a>
            <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Open menu"><Menu size={20} /></button>
          </div>
        </div>
        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-gray-800 dark:text-gray-200 py-2 border-b border-white/10">{n.label}</a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
