import { useEffect, useRef, useState } from 'react'

const categories = [
  {
    id: 'backend',
    title: 'Backend',
    icon: '⚙️',
    gradient: 'from-green-500 to-emerald-400',
    shadowColor: 'shadow-green-500/30',
    ringColor: '#10b981',
    skills: [
      { name: 'Java', level: 88, icon: '☕' },
      { name: 'Spring Boot', level: 85, icon: '🌱' },
      { name: 'RESTful APIs', level: 87, icon: '🌐' },
      { name: 'Microservices', level: 78, icon: '🔧' },
      { name: 'Spring Security', level: 75, icon: '🔒' },
      { name: 'Spring MVC', level: 80, icon: '🏗️' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '🎨',
    gradient: 'from-blue-500 to-cyan-400',
    shadowColor: 'shadow-blue-500/30',
    ringColor: '#3b82f6',
    skills: [
      { name: 'React.js', level: 80, icon: '⚛️' },
      { name: 'HTML5', level: 88, icon: '📄' },
      { name: 'CSS3', level: 85, icon: '🎨' },
      { name: 'JavaScript', level: 75, icon: '✨' },
      { name: 'Axios', level: 78, icon: '📡' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: '🗄️',
    gradient: 'from-purple-500 to-violet-400',
    shadowColor: 'shadow-purple-500/30',
    ringColor: '#8b5cf6',
    skills: [
      { name: 'MySQL', level: 82, icon: '🐬' },
      { name: 'Spring Data JPA', level: 80, icon: '🗃️' },
      { name: 'Hibernate', level: 78, icon: '🔄' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: '🛠️',
    gradient: 'from-orange-500 to-amber-400',
    shadowColor: 'shadow-orange-500/30',
    ringColor: '#f59e0b',
    skills: [
      { name: 'Postman', level: 90, icon: '📬' },
      { name: 'Git & GitHub', level: 82, icon: '🔀' },
      { name: 'VS Code', level: 88, icon: '💻' },
      { name: 'Spring Tool Suite', level: 85, icon: '🌿' },
      { name: 'Eclipse', level: 80, icon: '🌑' },
      { name: 'Android Studio', level: 70, icon: '📱' },
    ],
  },
]

const techWall = [
  { name: 'Java', bg: 'bg-orange-500', text: 'text-white' },
  { name: 'Spring Boot', bg: 'bg-green-500', text: 'text-white' },
  { name: 'Spring Security', bg: 'bg-green-700', text: 'text-white' },
  { name: 'Microservices', bg: 'bg-teal-500', text: 'text-white' },
  { name: 'REST API', bg: 'bg-blue-500', text: 'text-white' },
  { name: 'React.js', bg: 'bg-cyan-500', text: 'text-white' },
  { name: 'JavaScript', bg: 'bg-yellow-400', text: 'text-gray-900' },
  { name: 'HTML5', bg: 'bg-red-500', text: 'text-white' },
  { name: 'CSS3', bg: 'bg-blue-600', text: 'text-white' },
  { name: 'MySQL', bg: 'bg-indigo-500', text: 'text-white' },
  { name: 'Hibernate/JPA', bg: 'bg-purple-500', text: 'text-white' },
  { name: 'Postman', bg: 'bg-orange-600', text: 'text-white' },
  { name: 'Git', bg: 'bg-gray-700', text: 'text-white' },
  { name: 'VS Code', bg: 'bg-blue-700', text: 'text-white' },
  { name: 'Android Studio', bg: 'bg-lime-500', text: 'text-white' },
  { name: 'Agile/Scrum', bg: 'bg-pink-500', text: 'text-white' },
]

// Circular SVG ring
function CircularRing({ level, animate, color, darkMode }) {
  const radius = 34
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (animate ? level / 100 : 0) * circumference

  return (
    <svg width="90" height="90" viewBox="0 0 90 90" className="transform -rotate-90">
      <defs>
        <linearGradient id={`ring-${color.replace('#','')}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0.4" />
        </linearGradient>
      </defs>
      {/* Track */}
      <circle
        cx="45" cy="45" r={radius}
        fill="none"
        stroke={darkMode ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'}
        strokeWidth="7"
      />
      {/* Progress */}
      <circle
        cx="45" cy="45" r={radius}
        fill="none"
        stroke={color}
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1.3s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      />
    </svg>
  )
}

function SkillRingCard({ name, level, icon, color, animate, darkMode }) {
  return (
    <div className={`flex flex-col items-center p-4 rounded-2xl border group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
      darkMode
        ? 'bg-gray-800/60 border-gray-700/60 hover:border-gray-500'
        : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'
    }`}>
      <div className="relative w-[90px] h-[90px] mb-3">
        <CircularRing level={level} animate={animate} color={color} darkMode={darkMode} />
        {/* Centre icon + % */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl mb-0.5">{icon}</span>
          <span className="text-xs font-bold" style={{ color }}>{level}%</span>
        </div>
      </div>
      <span className={`text-xs font-semibold text-center leading-tight ${
        darkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>{name}</span>
    </div>
  )
}

export default function Skills({ darkMode }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [animate, setAnimate] = useState(false)
  const [activeTab, setActiveTab] = useState('backend')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          setTimeout(() => setAnimate(true), 200)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const active = categories.find(c => c.id === activeTab)

  return (
    <section id="skills" ref={ref} className={`py-24 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-14 section-hidden ${visible ? 'section-visible' : ''}`}>
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
          }`}>
            My Skills
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className={`max-w-xl mx-auto text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Click a category to explore my proficiency in each technology
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Category tabs */}
        <div className={`flex flex-wrap justify-center gap-3 mb-10 section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          {categories.map(({ id, title, icon, gradient, shadowColor }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeTab === id
                  ? `bg-gradient-to-r ${gradient} text-white shadow-lg ${shadowColor} scale-105`
                  : darkMode
                  ? 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-gray-500 hover:text-gray-200'
                  : 'bg-gray-100 text-gray-600 border border-gray-200 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              <span className="text-base">{icon}</span>
              {title}
            </button>
          ))}
        </div>

        {/* Active category panel */}
        <div className={`section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.15s' }}>
          <div className={`relative rounded-3xl border p-8 mb-10 overflow-hidden ${
            darkMode ? 'bg-gray-800/40 border-gray-700' : 'bg-gray-50 border-gray-100'
          }`}>
            {/* Subtle gradient bg corner */}
            <div className={`absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${active.gradient}`} />
            <div className={`absolute -bottom-12 -left-12 w-32 h-32 rounded-full blur-3xl opacity-10 bg-gradient-to-br ${active.gradient}`} />

            {/* Panel header */}
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${active.gradient} flex items-center justify-center text-xl shadow-lg`}>
                {active.icon}
              </div>
              <div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {active.title} Skills
                </h3>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {active.skills.length} technologies
                </p>
              </div>
            </div>

            {/* Ring cards grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {active.skills.map(({ name, level, icon }) => (
                <SkillRingCard
                  key={name}
                  name={name}
                  level={level}
                  icon={icon}
                  color={active.ringColor}
                  animate={animate}
                  darkMode={darkMode}
                />
              ))}
            </div>

            {/* Overall proficiency bar at bottom */}
            <div className="mt-8 pt-6 border-t border-opacity-20" style={{ borderColor: darkMode ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.07)' }}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Average proficiency in {active.title}
                </span>
                <span className="text-xs font-bold" style={{ color: active.ringColor }}>
                  {Math.round(active.skills.reduce((s, sk) => s + sk.level, 0) / active.skills.length)}%
                </span>
              </div>
              <div className={`h-2.5 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${active.gradient} transition-all duration-1000 ease-out`}
                  style={{ width: animate ? `${Math.round(active.skills.reduce((s, sk) => s + sk.level, 0) / active.skills.length)}%` : '0%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech wall */}
        <div className={`section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.25s' }}>
          <p className={`text-center text-sm font-semibold mb-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            FULL TECH STACK
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {techWall.map(({ name, bg, text }, idx) => (
              <span
                key={name}
                className={`${bg} ${text} px-4 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm transition-all duration-300 hover:scale-110 hover:shadow-md cursor-default`}
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
