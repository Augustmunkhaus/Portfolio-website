import { Mail, Github, Linkedin } from 'lucide-react';
import Profile from '../assets/Profile.png';
const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="w-48 h-48 sm:w-56 sm:h-56 mb-8">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full rounded-full object-cover shadow-xl"
            />
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
            August Munkhaus Stender
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-3xl">
            Fullstack development & IT-Architecture
          </p>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="https://github.com/Augustmunkhaus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors shadow-md"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/august-munkhaus-stender-4342911a4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:Munkhausaugust@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-white text-gray-800 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors shadow-md"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>
          </div>

          {/* Quick About Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to my website!</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Hello! August here. I'm a passionate software developer graduate, with interests in
              designing and implementing scalable, high-performance systems. I love solving
              complex technical challenges and building elegant solutions that make a difference.
              I am also interested in data analysis, project management and the fast evolving world of AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
