import { useEffect, useRef, useState } from 'react'
import { User, MapPin, Calendar, Briefcase, GraduationCap, Heart } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Years Experience', icon: Briefcase },
  { value: '20+', label: 'Projects Done', icon: GraduationCap },
  { value: '10+', label: 'Technologies', icon: Heart },
  { value: '5+', label: 'Happy Clients', icon: User },
]

export default function About({ darkMode }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className={`text-center mb-16 section-hidden ${visible ? 'section-visible' : ''}`}>
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
          }`}>
            About Me
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info cards */}
          <div className={`space-y-6 section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className={`p-6 rounded-2xl border glow-card ${
              darkMode
                ? 'bg-gray-800/50 border-gray-700'
                : 'bg-white border-gray-100 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                A bit about myself
              </h3>
              <p className={`leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm a passionate Full Stack Developer with a knack for building
                scalable, performant web applications. I love turning ideas into
                reality with clean, maintainable code.
              </p>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                When I'm not coding, I explore new technologies, contribute to open-source
                projects, and enjoy sharing knowledge with the developer community.
              </p>
            </div>

            {/* Quick info */}
            {[
              { icon: MapPin, label: 'Location', value: 'India' },
              { icon: Calendar, label: 'Experience', value: '3+ Years' },
              { icon: Briefcase, label: 'Status', value: 'Open to Opportunities' },
              { icon: GraduationCap, label: 'Education', value: 'B.E. Computer Science' },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
                  darkMode
                    ? 'bg-gray-800/30 border-gray-700/50 hover:border-indigo-500/30'
                    : 'bg-white border-gray-100 shadow-sm hover:border-indigo-200'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className={`text-xs font-medium mb-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
                  <div className={`font-semibold ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Stats + Image */}
          <div className={`section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className={`p-6 rounded-2xl text-center glow-card border ${
                    darkMode
                      ? 'bg-gray-800/50 border-gray-700'
                      : 'bg-white border-gray-100 shadow-sm'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}</div>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                What I love
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Clean Code', 'UI/UX Design', 'Performance', 'Open Source', 'Problem Solving', 'Learning', 'Mentoring', 'Coffee ☕'].map(tag => (
                  <span
                    key={tag}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                      darkMode
                        ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                        : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
