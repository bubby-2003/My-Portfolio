import { useEffect, useRef, useState } from 'react'
import { User, MapPin, Calendar, Briefcase, GraduationCap, Heart } from 'lucide-react'

const stats = [
  { value: '1+', label: 'Year at Cognizant', icon: Briefcase },
  { value: '2', label: 'Projects Built', icon: GraduationCap },
  { value: '1', label: 'Patent Filed', icon: Heart },
  { value: '9.47', label: 'CGPA (B.Tech)', icon: User },
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
    <section id="about" ref={ref} className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`text-center mb-16 section-hidden ${visible ? 'section-visible' : ''}`}>
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
          }`}>About Me</span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className={`space-y-6 section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <div className={`p-6 rounded-2xl border glow-card ${
              darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
            }`}>
              <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>A bit about myself</h3>
              <p className={`leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm <span className="font-semibold text-indigo-500">Venkat B M</span>, a passionate Full Stack Developer
                currently working as a <span className="font-semibold">Programmer Analyst Trainee (FTE) at Cognizant</span> since July 31, 2025.
                Prior to this, I was a Full Stack Developer Intern at <span className="font-semibold">Capgemini</span> (Feb 2025 – Jul 2025),
                giving me 1+ year of combined industry experience.
                I specialise in Java, Spring Boot, and microservices — building secure, scalable RESTful APIs.
              </p>
              <p className={`leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm also a <span className="font-semibold text-purple-500">Patent Holder</span> — I filed and published a patent for an
                AI-assisted Smart Charging App for Electric Vehicles in Jan 2025. I'm passionate about clean architecture,
                continuous learning, and delivering quality software.
              </p>
            </div>

            {[
              { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
              { icon: Briefcase, label: 'Current Role', value: 'Programmer Analyst Trainee @ Cognizant' },
              { icon: Briefcase, label: 'Previous Company', value: 'Ex-Intern @ Capgemini (Feb – Jul 2025)' },
              { icon: Calendar, label: 'Experience', value: '1+ Year Industry Experience' },
              { icon: GraduationCap, label: 'Education', value: 'B.Tech CSE — Presidency University (9.47 CGPA)' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 ${
                darkMode ? 'bg-gray-800/30 border-gray-700/50 hover:border-indigo-500/30' : 'bg-white border-gray-100 shadow-sm hover:border-indigo-200'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className={`text-xs font-medium mb-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{label}</div>
                  <div className={`font-semibold text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div className={`section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {stats.map(({ value, label, icon: Icon }) => (
                <div key={label} className={`p-6 rounded-2xl text-center glow-card border ${
                  darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
                }`}>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{label}</div>
                </div>
              ))}
            </div>

            {/* Patent highlight */}
            <div className={`p-5 rounded-2xl border mb-4 ${
              darkMode ? 'bg-purple-900/20 border-purple-700/40' : 'bg-purple-50 border-purple-200'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🏆</span>
                <span className={`font-bold text-sm ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>Patent Holder</span>
              </div>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="font-semibold">Smart Charging App for EV</span> — Patent No. 202541004791 A<br />
                Filed: 21 Jan 2025 | Published: 31 Jan 2025
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
            }`}>
              <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>What I love</h3>
              <div className="flex flex-wrap gap-2">
                {['Clean Code', 'Spring Boot', 'REST APIs', 'Microservices', 'React', 'Problem Solving', 'Learning', 'Agile/Scrum'].map(tag => (
                  <span key={tag} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                    darkMode ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border border-indigo-100'
                  }`}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
