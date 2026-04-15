import { useEffect, useRef, useState } from 'react'
import { Briefcase, GraduationCap, Award } from 'lucide-react'

const experiences = [
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'Tech Solutions Pvt Ltd',
    period: '2022 – Present',
    location: 'Bangalore, India',
    description: [
      'Developed and maintained microservices-based backend using Java Spring Boot, reducing API response time by 40%.',
      'Built responsive React frontends with reusable component libraries, improving UI consistency across 5+ products.',
      'Collaborated with cross-functional teams in Agile sprints, participating in code reviews and architecture discussions.',
      'Implemented CI/CD pipelines using Jenkins and Docker, cutting deployment time by 60%.',
    ],
    icon: Briefcase,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    type: 'work',
    title: 'Junior Developer',
    company: 'StartUp Hub',
    period: '2021 – 2022',
    location: 'Chennai, India',
    description: [
      'Built REST APIs with Node.js and Express, integrating with MongoDB for data persistence.',
      'Developed UI components using React and contributed to design system documentation.',
      'Wrote unit and integration tests achieving 80%+ code coverage.',
    ],
    icon: Briefcase,
    color: 'from-purple-500 to-pink-500',
  },
  {
    type: 'education',
    title: 'B.E. Computer Science',
    company: 'Anna University',
    period: '2017 – 2021',
    location: 'Tamil Nadu, India',
    description: [
      'CGPA: 8.2/10 — specialized in Software Engineering and Distributed Systems.',
      'Final year project: Real-time collaborative coding platform using WebSockets.',
      'Active member of the coding club, organized 3 national-level hackathons.',
    ],
    icon: GraduationCap,
    color: 'from-green-500 to-emerald-500',
  },
]

const certifications = [
  { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', year: '2023', emoji: '☁️' },
  { name: 'Oracle Certified Java Professional', issuer: 'Oracle', year: '2022', emoji: '☕' },
  { name: 'MongoDB Developer Certification', issuer: 'MongoDB University', year: '2022', emoji: '🍃' },
  { name: 'React Advanced Patterns', issuer: 'Frontend Masters', year: '2021', emoji: '⚛️' },
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
    <section
      id="experience"
      ref={ref}
      className={`py-24 ${darkMode ? 'bg-gray-950' : 'bg-white'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 section-hidden ${visible ? 'section-visible' : ''}`}>
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
          }`}>
            My Journey
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical line */}
              <div className={`absolute left-5 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />

              <div className="space-y-8">
                {experiences.map(({ title, company, period, location, description, icon: Icon, color, type }, idx) => (
                  <div
                    key={title}
                    className={`relative pl-14 section-hidden ${visible ? 'section-visible' : ''}`}
                    style={{ transitionDelay: `${idx * 0.15}s` }}
                  >
                    {/* Icon dot */}
                    <div className={`absolute left-0 w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg z-10`}>
                      <Icon size={16} className="text-white" />
                    </div>

                    {/* Card */}
                    <div className={`p-6 rounded-2xl border glow-card ${
                      darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
                    }`}>
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
                          <p className="text-indigo-500 font-semibold text-sm">{company}</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                            darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                          }`}>
                            {period}
                          </span>
                          <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{location}</p>
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {description.map((item, i) => (
                          <li key={i} className={`flex gap-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <span className="text-indigo-500 mt-0.5 flex-shrink-0">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className={`section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
            <div className={`p-6 rounded-2xl border h-fit ${
              darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
            }`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Award size={18} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {certifications.map(({ name, issuer, year, emoji }) => (
                  <div
                    key={name}
                    className={`p-4 rounded-xl border transition-all hover:scale-[1.02] ${
                      darkMode
                        ? 'bg-gray-700/50 border-gray-600 hover:border-indigo-500/50'
                        : 'bg-gray-50 border-gray-100 hover:border-indigo-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{emoji}</span>
                      <div>
                        <p className={`text-sm font-semibold leading-tight mb-1 ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          {name}
                        </p>
                        <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                          {issuer} · {year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
