import { ExternalLink } from 'lucide-react';
import DevDectiveImage from "../Images/Dev Detective Project.png";
import PortfolioImage from "../Images/PortfolioWebsite.png"
import NovaTalkImage from "../Images/NovaTalk.png"
import MovieFlix from "../Images/Movie Flix.png"
import BlogApplication from "../Images/Blog Application.png"
export default function Projects() {
  const projects = [
    
    {
      title: 'NovaTalk(Your AI Personal Assistant)',
      description: 'AI-powered personal assistant that helps users manage tasks, set reminders, and get personalized recommendations.',
      image: NovaTalkImage,
      tags: ['JavaScript', 'React-Js', 'Tailwind CSS','Node-Js','MongoDB','Express-Js'],
      github: 'https://github.com/Saksham903/NovaTalk-Your-AI-Personal-AI-Assistant-Is-Here-',
      demo: 'https://example.com'
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      tags: ['React', 'TypeScript', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with smooth animations, contact form integration, and responsive design. Showcases projects and skills in an elegant interface.',
      image: PortfolioImage,
      tags: ['React', 'Tailwind CSS', 'EmailJS'],
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Blog Application Using Mern Stack',
      description: 'A MERN stack blog application with user authentication, allowing users to create, update, and delete their blogs. Features include secure login/signup, responsive design, and a seamless user experience.',
      image: BlogApplication,
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Saksham903/Blog-Application',
    },
    {
      title: 'Movie Flix',
      description: 'A movie streaming platform built with the MERN stack, featuring user authentication, movie search, trailers, and personalized recommendations.',
      image: MovieFlix,
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/Saksham903/MovieFlix',
      demo: 'https://example.com'
    },
    {
      title: 'Dev Detective Project',
      description: 'A web app built with HTML, CSS, and JavaScript that lets users search GitHub profiles and view detailed user information',
      image: DevDectiveImage,
      tags: ['Html ', 'CSS', 'JavaScript'],
      github: 'https://github.com/Saksham903',
      demo: 'https://saksham903.github.io/Dev-Detective/'
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A collection of my recent work, showcasing my skills in web development and design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                    >
                      {/* Inline GitHub SVG to avoid deprecated lucide icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.295-1.23 3.295-1.23.656 1.653.244 2.874.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .319.216.692.825.575C20.565 22.092 24 17.592 24 12.297 24 5.67 18.63.297 12 .297z" />
                      </svg>
                      <span>Code</span>
                    </a>

                    {/* Changed: show Demo link only if project.demo exists; otherwise show disabled button */}
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      >
                        <ExternalLink size={20} />
                        <span>Demo</span>
                      </a>
                    ) : (
                      <button
                        disabled
                        aria-disabled="true"
                        title="Demo not available"
                        className="flex items-center gap-2 text-gray-400 cursor-not-allowed opacity-60 font-medium"
                      >
                        <ExternalLink size={20} />
                        <span>Demo</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
