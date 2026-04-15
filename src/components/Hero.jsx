import { useState, useEffect, useRef } from 'react'
import { ArrowDown, Mail, ExternalLink, Download } from 'lucide-react'
import venkatPhoto from '../assets/venkat.jpg'

const roles = [
  'Full Stack Developer',
  'Java & Spring Boot Dev',
  'Backend Developer',
  'React Developer',
  'Patent Holder 🏆',
]

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 4,
  duration: Math.random() * 4 + 3,
}))

export default function Hero({ darkMode }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = isDeleting ? 60 : 100

    if (!isDeleting && displayText === current) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800)
      return
    }
    if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
      return
    }

    timeoutRef.current = setTimeout(() => {
      setDisplayText(isDeleting
        ? current.slice(0, displayText.length - 1)
        : current.slice(0, displayText.length + 1)
      )
    }, speed)

    return () => clearTimeout(timeoutRef.current)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center overflow-hidden ${
        darkMode
          ? 'bg-gradient-to-br from-gray-950 via-indigo-950/20 to-gray-950'
          : 'bg-gradient-to-br from-white via-indigo-50/50 to-purple-50/30'
      }`}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-10 w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full blur-3xl opacity-20 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-300'}`} />
        <div className={`absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full blur-3xl opacity-15 ${darkMode ? 'bg-purple-600' : 'bg-purple-300'}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full blur-3xl opacity-10 ${darkMode ? 'bg-pink-600' : 'bg-pink-300'}`} />
        {particles.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full opacity-30 float-anim ${darkMode ? 'bg-indigo-400' : 'bg-indigo-500'}`}
            style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }}
          />
        ))}
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Left */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-5 ${
              darkMode ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border border-indigo-200'
            }`}>
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot flex-shrink-0" />
              Open to Full-Time Opportunities
            </div>

            <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 leading-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Hi, I&apos;m{' '}
              <span className="gradient-text whitespace-nowrap">Venkat B M</span>
            </h1>

            <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              <span className="text-indigo-500">{displayText}</span>
              <span className="cursor" />
            </h2>

            <p className={`text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-7 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Motivated backend developer at <span className="font-semibold text-indigo-500">Cognizant</span> with
              expertise in Java, Spring Boot & microservices. Building secure, scalable RESTful APIs and
              full-stack applications. Also a <span className="font-semibold text-purple-500">Patent Holder</span> 🏆
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5 text-sm"
              >
                View My Work <ExternalLink size={15} />
              </button>
              <a
                href="/My-Portfolio/VenkatBM_Resume.pdf"
                download="VenkatBM_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={15} /> Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5 text-sm ${
                  darkMode ? 'border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10' : 'border-indigo-300 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Mail size={15} /> Contact
              </a>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Find me on:</span>
              {[
                { icon: GithubIcon, href: 'https://github.com/bubby-2003', label: 'GitHub' },
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/venkat-b-m/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:venkatbm1999@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 ${
                    darkMode ? 'bg-gray-800 text-gray-400 hover:bg-indigo-500/20 hover:text-indigo-400' : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Real Photo */}
          <div className={`flex-1 flex justify-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">

              {/* Outer spinning dashed ring */}
              <div className="absolute -inset-5 rounded-full border-2 border-dashed border-indigo-500/40 rotate-slow" />
              {/* Second outer ring */}
              <div className="absolute -inset-10 rounded-full border border-purple-500/20 rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />

              {/* Gradient glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-30 scale-110" />

              {/* Gradient border ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-2xl float-anim">
                <div className={`p-1 rounded-full ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
                  <img
                    src={venkatPhoto}
                    alt="Venkat B M"
                    className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover object-top"
                  />
                </div>
              </div>


            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Scroll down</span>
          <ArrowDown size={16} className={`animate-bounce ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`} />
        </div>
      </div>
    </section>
  )
}
