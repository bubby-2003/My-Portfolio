import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Star, GitFork } from 'lucide-react'

const GithubIcon = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce app with React frontend, Spring Boot backend, real-time inventory management, and Stripe payment integration.',
    tags: ['React', 'Spring Boot', 'MySQL', 'Stripe', 'Redux'],
    github: 'https://github.com/venkat',
    live: '#',
    emoji: '🛒',
    gradient: 'from-blue-500 to-cyan-500',
    featured: true,
    stars: 48,
    forks: 12,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop boards, team collaboration, and advanced analytics dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind'],
    github: 'https://github.com/venkat',
    live: '#',
    emoji: '📋',
    gradient: 'from-purple-500 to-pink-500',
    featured: true,
    stars: 35,
    forks: 8,
  },
  {
    title: 'Blog Platform',
    description: 'A modern blogging platform with markdown support, SEO optimization, user authentication, comment system, and content management.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'AWS S3'],
    github: 'https://github.com/venkat',
    live: '#',
    emoji: '📝',
    gradient: 'from-green-500 to-emerald-500',
    featured: false,
    stars: 22,
    forks: 5,
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather app with beautiful visualizations, 7-day forecasts, location search, and animated weather conditions using OpenWeather API.',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    github: 'https://github.com/venkat',
    live: '#',
    emoji: '🌦️',
    gradient: 'from-yellow-500 to-orange-500',
    featured: false,
    stars: 18,
    forks: 4,
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging app with WebSocket support, group chats, file sharing, end-to-end encryption, and message history.',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'WebRTC'],
    github: 'https://github.com/venkat',
    live: '#',
    emoji: '💬',
    gradient: 'from-indigo-500 to-violet-500',
    featured: false,
    stars: 31,
    forks: 9,
  },
  {
    title: 'Portfolio Website',
    description: 'This very portfolio — built with React, Vite, and Tailwind CSS. Features dark/light mode, smooth animations, and a fully responsive layout.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
    github: 'https://github.com/venkat',
    live: '#',
    emoji: '🌐',
    gradient: 'from-rose-500 to-pink-500',
    featured: false,
    stars: 15,
    forks: 3,
  },
]

const filters = ['All', 'React', 'Java', 'Node.js', 'MongoDB']

export default function Projects({ darkMode }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [hoveredId, setHoveredId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.some(t => t.includes(activeFilter)))

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 section-hidden ${visible ? 'section-visible' : ''}`}>
          <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4 ${
            darkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'
          }`}>
            My Work
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className={`max-w-2xl mx-auto mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A collection of projects showcasing my skills and passion for building great software.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-8" />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeFilter === f
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30'
                    : darkMode
                    ? 'bg-gray-800 text-gray-400 border border-gray-700 hover:border-indigo-500/50'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, idx) => (
            <div
              key={project.title}
              onMouseEnter={() => setHoveredId(idx)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative rounded-2xl border overflow-hidden glow-card section-hidden ${visible ? 'section-visible' : ''} ${
                darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-100 shadow-sm'
              } ${project.featured ? 'ring-2 ring-indigo-500/30' : ''}`}
              style={{ transitionDelay: `${idx * 0.07}s` }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
                    Featured
                  </span>
                </div>
              )}

              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-6">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {project.emoji}
                </div>

                <h3 className={`text-xl font-bold mb-2 group-hover:text-indigo-500 transition-colors ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-opacity-50"
                  style={{ borderColor: darkMode ? 'rgba(75,85,99,0.5)' : 'rgba(229,231,235,0.8)' }}>
                  <div className="flex items-center gap-3">
                    <span className={`flex items-center gap-1 text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      <Star size={12} /> {project.stars}
                    </span>
                    <span className={`flex items-center gap-1 text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      <GitFork size={12} /> {project.forks}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1.5 rounded-lg transition-all hover:scale-110 ${
                        darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-indigo-500 hover:bg-indigo-500/10 transition-all hover:scale-110"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more */}
        <div className={`text-center mt-12 section-hidden ${visible ? 'section-visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
          <a
            href="https://github.com/venkat"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:-translate-y-0.5 ${
              darkMode
                ? 'border-indigo-500/50 text-indigo-400 hover:bg-indigo-500/10'
                : 'border-indigo-300 text-indigo-600 hover:bg-indigo-50'
            }`}
          >
            <GithubIcon size={18} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
