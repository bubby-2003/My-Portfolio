import { useEffect, useRef, useState } from 'react'

const skillCategories = [
  {
    title: 'Backend',
    icon: '⚙️',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Java', level: 88 },
      { name: 'Spring Boot', level: 85 },
      { name: 'RESTful APIs', level: 87 },
      { name: 'Microservices', level: 78 },
      { name: 'Spring Security', level: 75 },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 80 },
      { name: 'HTML5 / CSS3', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'Axios', level: 78 },
    ],
  },
  {
    title: 'Database & ORM',
    icon: '🗄️',
    color: 'from-purple-500 to-indigo-500',
    skills: [
      { name: 'MySQL', level: 82 },
      { name: 'Spring Data JPA', level: 80 },
      { name: 'Hibernate', level: 78 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Postman', level: 90 },
      { name: 'Git & GitHub', level: 82 },
      { name: 'VS Code', level: 88 },
      { name: 'Spring Tool Suite', level: 85 },
      { name: 'Eclipse', level: 80 },
    ],
  },
]

const techStack = [
  { name: 'Java', emoji: '☕' },
  { name: 'Spring Boot', emoji: '🌱' },
  { name: 'Spring Security', emoji: '🔒' },
  { name: 'Microservices', emoji: '🔧' },
  { name: 'REST API', emoji: '🌐' },
  { name: 'React', emoji: '⚛️' },
  { name: 'MySQL', emoji: '🐬' },
  { name: 'Hibernate/JPA', emoji: '🗃️' },
  { name: 'Postman', emoji: '📬' },
  { name: 'Git', emoji: '🔀' },
  { name: 'VS Code', emoji: '💻' },
  { name: 'Android Studio', emoji: '📱' },
]

function SkillBar({ name, level, darkMode, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{name}</span>
        <span className={`text-xs font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{level}%</span>
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills({ darkMode }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          setTimeout(() => setAnimate(true), 300)
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref} className={`py-24 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`text-center mb-16 section-hidden ${visible ? 'section-visible' : ''}`}>
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
          }`}>My Skills</span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Tech pills */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          {techStack.map(({ name, emoji }) => (
            <div key={name} className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default ${
              darkMode ? 'bg-gray-800 border-gray-700 text-gray-300 hover:border-indigo-500/50 hover:bg-gray-700' : 'bg-gray-50 border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50'
            }`}>
              <span>{emoji}</span><span>{name}</span>
            </div>
          ))}
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map(({ title, icon, color, skills }, idx) => (
            <div
              key={title}
              className={`p-6 rounded-2xl border glow-card section-hidden ${visible ? 'section-visible' : ''} ${
                darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
              }`}
              style={{ transitionDelay: `${0.1 + idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-lg shadow-lg`}>{icon}</div>
                <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
              </div>
              {skills.map(({ name, level }) => (
                <SkillBar key={name} name={name} level={level} darkMode={darkMode} animate={animate} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
