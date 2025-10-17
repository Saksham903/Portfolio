import { Award, BookOpen, Coffee, Heart } from 'lucide-react';
// Import your image from the src folder (ensure file exists at this path)
import ProfilePic from "../Images/Profile Image.jpg"

export default function About() {
  const skills = [
    'React', 'TypeScript', 'Node.js', 'Tailwind CSS',
    'JavaScript', 'HTML/CSS', 'Git', 'REST APIs',
    'Responsive Design', 'UI/UX', 'Supabase', 'Vite'
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A passionate developer with a love for creating elegant solutions to complex problems
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">My Journey</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a dedicated web developer with a passion for creating beautiful, functional,
                  and user-centered digital experiences. My journey in web development started
                  with a curiosity about how things work on the web, and it has evolved into a
                  full-fledged career that I absolutely love.
                </p>
                <p>
                  Over the years, I've honed my skills in modern web technologies, focusing on
                  creating responsive, accessible, and performant applications. I believe in
                  writing clean, maintainable code and staying up-to-date with the latest industry
                  trends and best practices.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to
                  open-source projects, or sharing knowledge with the developer community. I'm
                  always eager to take on new challenges and collaborate on exciting projects.
                </p>
              </div>
            </div>

           <div className="order-1 lg:order-2">
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl transform rotate-3"></div>
    <div className="relative bg-white p-8 rounded-2xl shadow-xl">
      <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center overflow-hidden ">
        <div className="text-center">
          {/* profile image */}
          <img
            src={ProfilePic}
            alt="Saksham Sharma"
            className="w-full h-full object-cover rounded-full transition-transform duration-700 "
          />
        </div>
      </div>
    </div>
  </div>  
</div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 ">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1.2 Years</h3>
              <p className="text-gray-600">Experience</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10+ Projects</h3>
              <p className="text-gray-600">Completed</p>
            </div>

          

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="text-cyan-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100% Passion</h3>
              <p className="text-gray-600">For Coding</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Skills & Technologies
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-800 rounded-full font-medium border border-blue-200 hover:border-blue-400 hover:shadow-md transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
