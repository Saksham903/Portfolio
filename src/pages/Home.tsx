import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer crafting beautiful digital experiences
              that combine elegant design with powerful functionality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="group px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Building robust and scalable web applications using modern technologies
                and best practices to deliver exceptional user experiences.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-cyan-100">
              <div className="w-14 h-14 bg-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Palette size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating beautiful and intuitive interfaces that prioritize user experience
                and bring visual concepts to life with attention to detail.
              </p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Performance</h3>
              <p className="text-gray-600 leading-relaxed">
                Optimizing applications for speed and efficiency to ensure fast load times
                and smooth interactions across all devices and platforms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
