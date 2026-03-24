'use client'
import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'nav-blur' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-xl text-forest-400 text-glow tracking-wide">
          VAT<span className="text-star-300">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="nav-link text-sm text-star-300 font-body tracking-widest uppercase">
              {l.label}
            </a>
          ))}
          <a
            href="mailto:anhtuvu2413@gmail.com"
            className="ml-4 px-4 py-2 text-sm border border-forest-500 text-forest-400 rounded-full hover:bg-forest-500 hover:text-night-950 transition-all duration-300 font-body tracking-wide"
          >
            Hire me
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-star-300">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open
              ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
              : <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round"/>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden nav-blur px-6 pb-6 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-star-300 hover:text-forest-400 transition-colors text-sm tracking-widest uppercase">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
