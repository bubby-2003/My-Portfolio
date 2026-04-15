import { useState, useEffect, useRef } from 'react'
import { ArrowDown, Mail, ExternalLink, Link } from 'lucide-react'

// Brand icon SVGs (lucide-react doesn't include brand icons)
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
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const roles = [
  'Full Stack Developer',
  'React Specialist',
  'Java Developer',
  'Problem Solver',
  'Open Source Enthusiast',
]

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
        <div className={`absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${
          darkMode ? 'bg-indigo-600' : 'bg-indigo-300'
        }`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-15 ${
          darkMode ? 'bg-purple-600' : 'bg-purple-300'
        }`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 ${
          darkMode ? 'bg-pink-600' : 'bg-pink-300'
        }`} />

        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={p.id}
            className={`absolute rounded-full opacity-30 float-anim ${
              darkMode ? 'bg-indigo-400' : 'bg-indigo-500'
            }`}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(${darkMode ? '#6366f1' : '#6366f1'} 1px, transparent 1px), linear-gradient(to right, ${darkMode ? '#6366f1' : '#6366f1'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6 ${
              darkMode
                ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                : 'bg-indigo-50 text-indigo-600 border border-indigo-200'
            }`}>
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-dot" />
              Available for hire
            </div>

            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I&apos;m{' '}
              <span className="gradient-text">Venkat</span>
            </h1>

            <h2 className={`text-2xl md:text-3xl font-semibold mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <span className="text-indigo-500">{displayText}</span>
              <span className="cursor" />
            </h2>

            <p className={`text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate developer crafting elegant, high-performance web applications.
              I turn complex ideas into beautiful digital experiences with clean code and creative design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                View My Work <ExternalLink size={16} />
              </button>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                  darkMode
                    ? 'border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10'
                    : 'border-indigo-300 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                <Mail size={16} /> Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Find me on:</span>
              {[
                { icon: GithubIcon, href: 'https://github.com/venkat', label: 'GitHub' },
                { icon: LinkedinIcon, href: 'https://linkedin.com/in/venkat', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:venkat@example.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-400 hover:bg-indigo-500/20 hover:text-indigo-400'
                      : 'bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                  }`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Avatar / Visual */}
          <div className={`flex-1 flex justify-center transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-indigo-500/30 rotate-slow" />
              <div className="absolute -inset-8 rounded-full border border-purple-500/20 rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />

              {/* Avatar circle */}
              <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-2xl float-anim ${
                darkMode
                  ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 border-4 border-indigo-500/30'
                  : 'bg-gradient-to-br from-indigo-100 via-purple-100 to-white border-4 border-indigo-200'
              }`}>
                <div className="text-center">
                  <div className="text-7xl md:text-8xl mb-2">👨‍💻</div>
                  <div className={`text-lg font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                    Venkat
                  </div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Developer
                  </div>
                </div>

                {/* Tech badges floating */}
                {[
                  { label: 'React', top: '-top-4', left: 'left-8', color: 'bg-blue-500' },
                  { label: 'Java', top: '-top-4', right: 'right-8', color: 'bg-orange-500' },
                  { label: 'Node.js', bottom: '-bottom-4', left: 'left-4', color: 'bg-green-500' },
                  { label: 'SQL', bottom: '-bottom-4', right: 'right-4', color: 'bg-yellow-500' },
                ].map(({ label, top, left, right, bottom, color }) => (
                  <div
                    key={label}
                    className={`absolute ${top || ''} ${left || ''} ${right || ''} ${bottom || ''} px-3 py-1 rounded-full text-white text-xs font-bold ${color} shadow-lg`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Scroll down</span>
          <ArrowDown size={16} className={`animate-bounce ${darkMode ? 'text-indigo-400' : 'text-indigo-500'}`} />
        </div>
      </div>
    </section>
  )
}
