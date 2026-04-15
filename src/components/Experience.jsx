import { useEffect, useRef, useState } from 'react'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const timeline = [
  {
    type: 'work',
    title: 'Programmer Analyst Trainee (PAT)',
    company: 'Cognizant Technology Solutions',
    period: 'Jul 2025 – Present',
    location: 'Bangalore, India',
    description: [
      'Promoted to full-time Programmer Analyst Trainee after successful internship.',
      'Building and maintaining Java Spring Boot microservices and RESTful APIs.',
      'Contributing to frontend development using React.js.',
      'Collaborating in Agile sprints, code reviews, and cross-functional team discussions.',
      'Validating workflows and API integrations using Postman and API Gateway.',
    ],
    icon: Briefcase,
    color: 'from-indigo-500 to-purple-500',
  },
  {
    type: 'work',
    title: 'Intern — Full Stack Developer',
    company: 'Cognizant Technology Solutions',
    period: 'Feb 2025 – Jul 2025',
    location: 'Bangalore, India',
    description: [
      'Completed 6-month internship at Cognizant before converting to full-time.',
      'Worked on Java Spring Boot backend services and RESTful API development.',
      'Gained hands-on experience with microservices architecture and Spring Security.',
      'Contributed to React.js frontend tasks and integrated with backend APIs using Axios.',
    ],
    icon: Briefcase,
    color: 'from-violet-500 to-indigo-500',
  },
  {
    type: 'work',
    title: 'Web Development Intern',
    company: 'Octanet Pvt Ltd',
    period: 'Jul 2024 – Aug 2024',
    location: 'Bangalore, India',
    description: [
      'Built a responsive landing page using HTML5 & CSS3 with cross-browser compatibility.',
      'Developed a feature-rich To-Do List app using React with efficient state management and reusable components.',
    ],
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    type: 'work',
    title: 'Software Development Intern',
    company: 'Codsoft',
    period: 'Sep 2023 – Oct 2023',
    location: 'Bangalore, India',
    description: [
      'Developed and maintained scalable Java applications following OOP principles.',
      'Designed complex system modules with clean, maintainable code.',
      'Participated in code reviews and Agile processes, improving team collaboration and code quality.',
    ],
    icon: Briefcase,
    color: 'from-green-500 to-emerald-500',
  },
  {
    type: 'education',
    title: 'B.Tech — Computer Science & Engineering',
    company: 'Presidency University',
    period: 'Dec 2021 – Nov 2025',
    location: 'Bangalore, India',
    description: [
      'Cumulative GPA: 9.47 / 10',
      'Core focus on Software Engineering, Data Structures, DBMS, and Operating Systems.',
      'Filed and published a patent for an AI-assisted EV Smart Charging App (Jan 2025).',
      'Built a full-stack Vehicle Service Booking System as final year project.',
    ],
    icon: GraduationCap,
    color: 'from-purple-500 to-pink-500',
  },
  {
    type: 'education',
    title: 'Pre-University (Science)',
    company: 'Presidency PU College',
    period: 'Jun 2019 – May 2021',
    location: 'Sira, India',
    description: [
      'Percentage: 98.64%',
      'Physics, Chemistry, Mathematics & Computer Science stream.',
    ],
    icon: GraduationCap,
    color: 'from-yellow-500 to-orange-500',
  },
]

const certifications = [
  { name: 'Patent — Smart Charging App for EV', issuer: 'Indian Patent Office', year: '2025', emoji: '🏆' },
  { name: 'Web Development Intern Certificate', issuer: 'Octanet Pvt Ltd', year: '2024', emoji: '🌐' },
  { name: 'Software Development Intern Certificate', issuer: 'Codsoft', year: '2023', emoji: '☕' },
  { name: 'B.Tech CSE — 9.47 CGPA', issuer: 'Presidency University', year: '2025', emoji: '🎓' },
]

export default function Experience({ darkMode }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref} className={`py-24 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`text-center mb-16 section-hidden ${visible ? 'section-visible' : ''}`}>
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
          }`}>My Journey</span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className={`absolute left-5 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />
              <div className="space-y-8">
                {timeline.map(({ title, company, period, location, description, icon: Icon, color }, idx) => (
                  <div
                    key={title}
                    className={`relative pl-12 sm:pl-14 section-hidden ${visible ? 'section-visible' : ''}`}
                    style={{ transitionDelay: `${idx * 0.12}s` }}
                  >
                    <div className={`absolute left-0 w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg z-10`}>
                      <Icon size={16} className="text-white" />
                    </div>
                    <div className={`p-4 sm:p-6 rounded-2xl border glow-card ${
                      darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                          <p className="text-indigo-500 font-semibold text-sm">{company}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                          }`}>{period}</span>
                          <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{location}</p>
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {description.map((item, i) => (
                          <li key={i} className={`flex gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <span className="text-indigo-500 mt-0.5 flex-shrink-0">▸</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className={`section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className={`p-6 rounded-2xl border h-fit sticky top-24 ${
              darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Award size={18} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Achievements</h3>
              </div>
              <div className="space-y-4">
                {certifications.map(({ name, issuer, year, emoji }) => (
                  <div key={name} className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${
                    darkMode ? 'bg-gray-700/50 border-gray-600 hover:border-indigo-500/50' : 'bg-gray-50 border-gray-100 hover:border-indigo-200'
                  }`}>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{emoji}</span>
                      <div>
                        <p className={`text-sm font-semibold leading-tight mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{name}</p>
                        <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{issuer} · {year}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* SSLC highlight */}
              <div className={`mt-4 p-4 rounded-xl border ${
                darkMode ? 'bg-green-900/20 border-green-700/30' : 'bg-green-50 border-green-200'
              }`}>
                <p className={`text-xs font-semibold mb-1 ${darkMode ? 'text-green-400' : 'text-green-700'}`}>Academic Excellence</p>
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  PUC: <strong>98.64%</strong> &nbsp;|&nbsp; SSLC: <strong>93.92%</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
