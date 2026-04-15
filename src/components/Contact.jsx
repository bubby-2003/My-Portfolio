import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'venkatbm1999@gmail.com', href: 'mailto:venkatbm1999@gmail.com', color: 'from-blue-500 to-indigo-500' },
  { icon: Phone, label: 'Phone', value: '+91 80735 80509', href: 'tel:+918073580509', color: 'from-green-500 to-emerald-500' },
  { icon: MapPin, label: 'Location', value: 'Bangalore, India', href: '#', color: 'from-purple-500 to-pink-500' },
]

const socials = [
  { icon: GithubIcon, href: 'https://github.com/bubby-2003', label: 'GitHub', color: 'hover:bg-gray-700 hover:text-white' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/venkat-b-m/', label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
  { icon: Mail, href: 'mailto:venkatbm1999@gmail.com', label: 'Email', color: 'hover:bg-red-500 hover:text-white' },
]

export default function Contact({ darkMode }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  const inputClass = `w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 ${
    darkMode ? 'bg-gray-700/50 border-gray-600 text-gray-200 placeholder-gray-500' : 'bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400'
  }`

  return (
    <section id="contact" ref={ref} className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`text-center mb-16 section-hidden ${visible ? 'section-visible' : ''}`}>
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
          }`}>Contact Me</span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className={`max-w-xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Have an opportunity, project, or just want to say hi? I'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* Left */}
          <div className={`lg:col-span-2 space-y-6 section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <a key={label} href={href}
                className={`flex items-center gap-4 p-5 rounded-2xl border glow-card group transition-all ${
                  darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
                }`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div>
                  <p className={`text-xs font-medium mb-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{label}</p>
                  <p className={`font-semibold text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{value}</p>
                </div>
              </a>
            ))}

            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`}>
              <p className={`text-sm font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Connect on Social</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
                      darkMode ? `bg-gray-700 text-gray-400 ${color}` : `bg-gray-100 text-gray-600 ${color}`
                    }`}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <div className={`p-5 rounded-2xl border ${
              darkMode ? 'from-indigo-900/30 to-purple-900/20 border-indigo-700/30 bg-gradient-to-br' : 'from-indigo-50 to-purple-50 border-indigo-100 bg-gradient-to-br'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 pulse-dot" />
                <span className={`text-sm font-semibold ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>Open to Full-Time Roles</span>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Currently at Cognizant and actively open to exciting full-time opportunities. Response within 24 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className={`p-8 rounded-2xl border ${
              darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Send Me a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your Name *</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" required className={inputClass} />
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Email Address *</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="yourname@gmail.com" required className={inputClass} />
                </div>
              </div>

              <div className="mb-4">
                <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Job opportunity / Collaboration" className={inputClass} />
              </div>

              <div className="mb-6">
                <label className={`block text-xs font-medium mb-1.5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Message *</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the opportunity or project..." required rows={5} className={`${inputClass} resize-none`} />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-500/10 text-green-500 border border-green-500/20 mb-4 text-sm">
                  <CheckCircle size={16} /> Message sent! I'll get back to you soon.
                </div>
              )}

              <button type="submit" disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
                {status === 'sending' ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : (
                  <><Send size={16} /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
