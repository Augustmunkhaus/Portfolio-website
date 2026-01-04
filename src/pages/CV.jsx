import { Briefcase, GraduationCap, Code, FolderGit2 } from 'lucide-react';

const CV = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Curriculum Vitae</h1>
          <p className="text-gray-600">Fullstack developer & IT-Architect</p>
        </div>

        {/* Work Experience */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          </div>

          <div className="space-y-6">
            {/* Experience Item - Add your own */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">Student worker</h3>
              <p className="text-gray-600 mb-2">Wexo A/S | May 2025 - December 2025</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>E-commerce development using the Shopware platform</li>
                <li>Developed a custom checkout validation system</li>
                <li>Updated various plugins</li>
              </ul>
            </div>

            {/* Add more experience items here */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">Internship</h3>
              <p className="text-gray-600 mb-2">JP|Politikens hus | August 2024 - December 2024</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Backend development using Scala, AWS, terraform</li>
                <li>Performance optimization through caching, bootstrap and DB queries</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Education</h2>
          </div>

          <div className="space-y-6">
            {/* Education Item - Add your own */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">Bachelor's degree in IT-architecture</h3>
              <p className="text-gray-600 mb-2">Business Academy Aarhus | January 2026</p>
              <p className="text-gray-700">
              </p>
            </div>

            {/* Add more education items here */}
          </div>
        </section>

        {/* Skills */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Skill Category */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Backend Development</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">.NET</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PHP</span>
                {/* Add your skills here */}
              </div>
            </div>
            
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Typescript</span>
                  {/* Add your skills here */}
                </div>
              </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Databases</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PostgreSQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">MongoDB</span>
                {/* Add your skills here */}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Architecture</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Microservices</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Modular Monolith</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Architecture principles</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Microsoft Azure</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Data modelling</span>
                {/* Add your skills here */}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">DevOps & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Kubernetes</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Git</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">IaC</span>
                {/* Add your skills here */}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Other skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">BI data analysis</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Scrum / agile methods</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Basic machine learning</span>
                {/* Add your skills here */}
              </div>
            </div>
            
          </div>
        </section>

        {/* Projects */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FolderGit2 className="text-blue-600" size={28} />
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          </div>

          <div className="space-y-6">
            {/* Project Item - Add your own */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">Bachelor assignment</h3>
              <p className="text-gray-600 mb-2">Custom time registration system made for a larger business</p>
              <p className="text-gray-700 mb-2">
                A fullstack project involving a layered architecture backend using C# and postgres, a React frontend,
                and infrastructure utilizing Microsoft Azure.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">.NET</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">React</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">Azure</span>
              </div>
            </div>

            {/* Add more projects here */}
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">Architectural principles in practice</h3>
              <p className="text-gray-600 mb-2">6th semester exam project, scaling a console application</p>
              <p className="text-gray-700 mb-2">
                Working with various principles, we upgraded a simple search program to scale both on the X and Y axis.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">Kubernetes</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">Redis</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">Grafana Loki</span>
                <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm">Load balancing</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;
