import { Download, Briefcase, GraduationCap, Award, Code } from 'lucide-react';

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1kaMHh0FZeBKMAX50McMyC-I6eGpHY8o3/view?usp=sharing';
    link.download = 'Saksham Sharma (3).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Connecting Points Tech',
      period: 'Aug 2024 - October 2025',
      description: 'Worked as a Software Engineer at Connecting Points Tech, focusing on front-end development using React and Next.js to build responsive, dynamic, and user-friendly web interfaces and applications.'
    },
    {
      title: 'Frontend Developer',
      company: 'Infowiz',
      period: 'January 2024-June 2024',
      description: 'Developed responsive web applications, collaborated with designers, and optimized performance for client projects.'
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'Chitkara University',
      period: '2020 - 2024',
      description: 'Completed B.Tech in Computer Science with a strong foundation in programming, web development, and software engineering, focusing on building efficient, scalable, and user-centric applications.'
    },
    {
      degree: '12 th Standard',
      institution: 'Government Model Sr. Sec. School',
      period: '2018-2020',
      description: 'Completed 12th standard with a focus on Science and Mathematics, achieving high academic performance and developing analytical and problem-solving skills.'
    }
  ];

  const certifications = [
    'Mern Stack Development(Code Help)',
    'Java Programming (Hackerrank)',
    'Advanced Web Development (Coding Ninjas)',
    'Python(Coding Ninjas)'
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-gray-50 to-white">
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              My professional journey and qualifications
            </p>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download CV
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-gray-100">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-blue-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
              </div>

              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-blue-200">
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-0"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                      <p className="text-blue-600 font-medium">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.period}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="text-cyan-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Education</h2>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-8 border-l-2 border-cyan-200">
                    <div className="absolute w-4 h-4 bg-cyan-600 rounded-full -left-[9px] top-0"></div>
                    <div className="mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-cyan-600 font-medium">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="text-blue-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Certifications</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100"
                  >
                    <Award className="text-blue-600 flex-shrink-0" size={20} />
                    <span className="text-gray-800 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <Code className="text-cyan-600" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Technical Skills</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-3">Backend & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'MongoDB', 'Git', 'Github', 'Vite','Express-Js'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}
