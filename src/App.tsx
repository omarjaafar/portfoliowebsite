import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Play, User, MessageCircle, Github, Linkedin, Mail, ExternalLink, CheckCircle, Monitor, Smartphone, Database } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'project', 'process', 'demo', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl text-slate-800">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'project', label: 'GT Movies Store' },
                { id: 'process', label: 'Process' },
                { id: 'demo', label: 'Demo' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fadeInUp">
            <div className="mb-6">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-emerald-200 bg-clip-text text-transparent">
              Omar Jaafar
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Hi, I'm Omar Jaafar, a student at Georgia Tech with a strong interest in engineering and technology. I enjoy applying my skills to hands-on projects and problem-solving challenges. Outside of academics, I'm passionate about community service and making a positive impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection('project')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 transform hover:scale-105"
              >
                View GT Movies Store <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-blue-400 text-blue-100 hover:bg-blue-400 hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Hi, I'm Omar Jaafar, a student at Georgia Tech with a strong interest in engineering and technology. I enjoy applying my skills to hands-on projects and problem-solving challenges. Outside of academics, I'm passionate about community service and making a positive impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Code size={48} className="text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Frontend Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Expert in React, TypeScript, and modern CSS frameworks. Creating responsive, interactive user interfaces.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Database size={48} className="text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Backend Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Proficient in Node.js, database design, and API development. Building scalable server-side solutions.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <Monitor size={48} className="text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">Full-Stack Integration</h3>
              <p className="text-slate-600 leading-relaxed">
                Seamlessly connecting frontend and backend systems for complete, end-to-end web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GT Movies Store Project Section */}
      <section id="project" className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">GT Movies Store</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The GT Movies Store web app was a project where I used Django to create a simple movie store with basic functionality. The app includes a homepage displaying all available movies, a detailed page for each movie, a cart feature, and an admin panel for managing the movies.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
              <p className="text-blue-100 text-lg leading-relaxed">
                Here is the website for the GT Movies Store. https://ojaafar3.pythonanywhere.com/movies/ The GT Movies Store web app was a project where I used Django to create a simple movie store with basic functionality. The app includes a homepage displaying all available movies, a detailed page for each movie, a cart feature, and an admin panel for managing the movies. On the homepage, users can see a list of movies that are pulled dynamically from the database. Clicking on a movie takes you to a details page, and there, users can add the movie to their cart. I also set up a basic cart system using Django sessions to temporarily store the selected items. The admin panel allows me to manage movie data easily by adding, editing, or deleting movies.
              </p>
            </div>
            
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Monitor className="text-blue-600" size={24} />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Homepage displaying all available movies',
                      'Detailed movie pages with information',
                      'Shopping cart functionality using Django sessions',
                      'Admin panel for movie management',
                      'Dynamic database-driven content',
                      'Add to cart feature on movie detail pages'
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <Code className="text-blue-600" size={24} />
                    Technical Stack
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-slate-700 mb-2">Frontend:</p>
                      <div className="flex flex-wrap gap-2">
                        {['Django', 'Python', 'HTML/CSS', 'SQLite'].map((tech) => (
                          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-slate-700 mb-2">Backend:</p>
                      <div className="flex flex-wrap gap-2">
                        {['Django Models', 'Django Views', 'Templates', 'Sessions'].map((tech) => (
                          <span key={tech} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="text-xl font-bold text-slate-800 mb-4">User Story Implementation</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-3">Homepage & Movie Display</h5>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      On the homepage, users can see a list of movies that are pulled dynamically from the database. 
                      Each movie is displayed with relevant information and links to detailed pages.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-3">Movie Details & Cart System</h5>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      Clicking on a movie takes you to a details page, and there, users can add the movie to their cart. 
                      I set up a basic cart system using Django sessions to temporarily store the selected items.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-3">Admin Panel Management</h5>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      The admin panel allows me to manage movie data easily by adding, editing, or deleting movies. 
                      This provides full control over the movie inventory and content management.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-700 mb-3">Database Integration</h5>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      Used Django models to structure and store movie data in the database, ensuring dynamic content 
                      delivery and efficient data management throughout the application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Development Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              For the process, I mostly followed the tutorial, starting with setting up Django and creating the necessary models to store movie data. Once the models were ready, I created views and templates to display the movie data on the site. The main challenge was passing data from views to templates and figuring out how to handle the cart feature, which I solved by using sessions. Throughout the process, I didn't follow a strict methodology, but rather worked through each feature step-by-step. Whenever I hit a roadblock, I looked up solutions online, particularly on Stack Overflow, and used the Django documentation to guide me through the issues.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Video Demonstration</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-600 mx-auto mb-6"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative">
              <video 
                className="w-full aspect-video"
                controls
                poster="/videos/demo-thumbnail.jpg"
              >
                <source src="project\public\videos\gt-movies-demo.mp4" type="video/mp4" />
                <source src="project\public\videos\gt-movies-demo.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Interested in collaborating or discussing opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="mailto:omar@gatech.edu"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <Mail size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-blue-100">omar@gatech.edu</p>
            </a>
            
            <a
              href="https://linkedin.com/in/omarjaafar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <Linkedin size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
              <p className="text-blue-100">Connect with me</p>
            </a>
            
            <a
              href="https://github.com/omarjaafar"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <Github size={48} className="text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">GitHub</h3>
              <p className="text-blue-100">View my projects</p>
            </a>
          </div>

          <div className="text-center mt-16">
            <a
              href="#demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
            >
              View Demo Video <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2025 Omar Jaafar. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;