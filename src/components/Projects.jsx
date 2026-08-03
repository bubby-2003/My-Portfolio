import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Star, GitFork, Award } from 'lucide-react'

const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const projects = [
  {
    title: 'CIB Client Resource Onboarding Portal',
    subtitle: 'Cognizant — Live Production Project',
    description:
      'An enterprise-grade, end-to-end automated workflow portal built at Cognizant for the CIB Line of Business. Replaced manual email/Excel-based onboarding with a centralized platform supporting a 15-stage lifecycle, role-based access control, document generation, PII masking, and real-time analytics.',
    tags: ['Java', 'Spring Boot', 'React.js', 'Spring Security', 'MySQL', 'REST APIs', 'AWS CloudFront', 'Role-Based Access'],
    github: null,
    live: 'https://d1eb83n0xdtkkc.cloudfront.net/',
    emoji: '🏢',
    gradient: 'from-emerald-500 to-teal-500',
    featured: true,
    production: true,
    period: '2025 – Present · Cognizant',
    highlights: [
      '15-stage onboarding lifecycle with multi-role workflow automation (PMO, SL Lead, SL PM, MDU Lead, IDRF Team)',
      'Role-based PII masking — sensitive data hidden/masked based on user role and lifecycle stage',
      'Excel upload engine with reconciliation, duplicate conflict resolution, and data validation',
      'Auto-generates IDRF, ESA & Resource forms; custom Query Builder with bar/pie analytics dashboard',
    ],
  },
  {
    title: 'Vehicle Service Booking System',
    subtitle: 'VSBS — Full Stack Project',
    description:
      'A full-stack vehicle service booking platform with a React frontend and Spring Boot REST API backend. Features secure user login, booking management, admin operations with role-based access control (RBAC), and MySQL persistence via Hibernate/JPA.',
    tags: ['React', 'Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'MySQL', 'Axios', 'Postman'],
    github: 'https://github.com/bubby-2003',
    live: null,
    emoji: '🚗',
    gradient: 'from-blue-500 to-indigo-500',
    featured: true,
    period: 'Aug 2025 – Nov 2025',
    highlights: [
      'Role-based access control with Spring Security',
      'React UI connected to backend via Axios',
      'Hibernate/JPA for persistent data handling',
      'All endpoints tested thoroughly with Postman',
    ],
  },
  {
    title: 'Smart Charging App for EV',
    subtitle: '🏆 Patent No. 202541004791 A',
    description:
      'An AI-assisted smart charging system for electric vehicles. Built a mobile application using Android Studio integrating AI-driven predictive algorithms for optimised charging, real-time slot booking, UPI payment gateways, and dynamic pricing based on usage patterns.',
    tags: ['Android Studio', 'AI/ML', 'UPI Payment', 'Real-time Booking', 'Dynamic Pricing'],
    github: null,
    live: null,
    emoji: '⚡',
    gradient: 'from-yellow-500 to-orange-500',
    featured: true,
    period: 'Filed: 21 Jan 2025 | Published: 31 Jan 2025',
    patent: true,
    highlights: [
      'AI-driven predictive algorithms for charging optimisation',
      'Real-time charging slot booking system',
      'UPI-enabled payment gateway integration',
      'Dynamic pricing models based on usage patterns',
    ],
  },
  {
    title: 'Responsive Landing Page',
    subtitle: 'Octanet Internship Project',
    description:
      'A responsive, cross-browser-compatible landing page built during the Web Development internship at Octanet Pvt Ltd using HTML5 and CSS3 best practices.',
    tags: ['HTML5', 'CSS3', 'Responsive Design', 'Cross-browser'],
    github: 'https://github.com/bubby-2003',
    live: null,
    emoji: '🌐',
    gradient: 'from-cyan-500 to-blue-500',
    featured: false,
    period: 'Jul 2024 – Aug 2024',
    highlights: [
      'Cross-browser compatibility',
      'Responsive layout for all screen sizes',
      'Clean, semantic HTML structure',
    ],
  },
  {
    title: 'To-Do List App',
    subtitle: 'React State Management',
    description:
      'A feature-rich To-Do List application built with React, demonstrating efficient state management, reusable component architecture, and a clean modern UI.',
    tags: ['React', 'State Management', 'Components', 'JavaScript'],
    github: 'https://github.com/bubby-2003',
    live: null,
    emoji: '📋',
    gradient: 'from-purple-500 to-pink-500',
    featured: false,
    period: 'Jul 2024 – Aug 2024',
    highlights: [
      'Efficient React state management',
      'Reusable component architecture',
      'Clean, intuitive UI/UX',
    ],
  },
]

export default function Projects({ darkMode }) {
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
    <section id="projects" ref={ref} className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className={`text-center mb-12 section-hidden ${visible ? 'section-visible' : ''}`}>
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
          }`}>My Work</span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`max-w-2xl mx-auto mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Real projects I've built — from a patented EV app to full-stack enterprise systems.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl border overflow-hidden glow-card section-hidden ${visible ? 'section-visible' : ''} ${
                darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
              } ${project.featured ? 'ring-2 ring-indigo-500/30' : ''}`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              {/* Featured / Patent / Production badge */}
              <div className="absolute top-3 right-3 z-10 flex gap-2">
                {project.patent && (
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg flex items-center gap-1">
                    <Award size={10} /> Patent
                  </span>
                )}
                {project.production && (
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Live
                  </span>
                )}
                {project.featured && !project.patent && !project.production && (
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
                    Featured
                  </span>
                )}
              </div>

              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                    {project.emoji}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold group-hover:text-indigo-500 transition-colors ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-xs font-medium mt-0.5 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      {project.subtitle}
                    </p>
                    <p className={`text-xs mt-0.5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{project.period}</p>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1 mb-4">
                  {project.highlights.map((h, i) => (
                    <li key={i} className={`flex gap-2 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <span className="text-indigo-500 flex-shrink-0 mt-0.5">▸</span>{h}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                      darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                    }`}>{tag}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className={`flex items-center justify-end pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
                  <div className="flex items-center gap-2">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 transition-all hover:scale-105 shadow-sm">
                        <ExternalLink size={12} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105 ${
                          darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                        }`}>
                        <GithubIcon size={14} /> GitHub
                      </a>
                    )}
                    {project.patent && (
                      <span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${
                        darkMode ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                      }`}>
                        <Award size={12} /> Patent Filed
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <a href="https://github.com/bubby-2003" target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5 ${
              darkMode ? 'border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10' : 'border-indigo-300 text-indigo-600 hover:bg-indigo-50'
            }`}>
            <GithubIcon size={18} /> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  )
}
