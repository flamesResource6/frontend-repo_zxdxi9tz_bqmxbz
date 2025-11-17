export default function Footer(){
  return (
    <footer className="py-10 bg-neutral-950 text-neutral-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Kamil Gańko. Wszelkie prawa zastrzeżone.</div>
        <div className="opacity-80">Zbudowano z myślą o wydajności, UX i nowoczesnym designie.</div>
      </div>
    </footer>
  )
}
