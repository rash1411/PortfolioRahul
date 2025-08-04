import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Calendar,
  MapPin,
  Code,
  Database,
  Palette,
  Brain,
  Award,
  GraduationCap,
  Briefcase,
  ChevronRight,
  Menu,
  X,
  ArrowUp,
  Sparkles,
  Zap,
  Globe,
  Star,
  TrendingUp,
  Users,
  Target,
  Layers
} from 'lucide-react';
import Testimonials from "./components/Testimonials";

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowScrollTop(window.scrollY > 400);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const experiences = [
    {
      title: "UI/UX Designer",
      company: "Pratigyogita Setu",
      period: "Feb 2025 – Present",
      location: "Remote",
      description: "Designed user experience for NCERT-based chatbot platform for students (Classes 6–12). Created responsive UI components with multilingual support.",
      link: "https://psetu.com",
      skills: ["UI/UX Design", "Figma", "User Research", "Prototyping"],
      type: "current"
    },
    {
      title: "Product Designer",
      company: "BudgetPay (FixKart)",
      period: "Jan 2025 – July 2025",
      location: "New Delhi, IND",
      description: "Designed mobile-first UI for quick-commerce platform. Created high-fidelity prototypes for Customer, Technician, and Admin apps.",
      skills: ["Figma", "Flutter", "ReactJS", "Mobile Design"],
      type: "design"
    },
    {
      title: "Web Developer Intern",
      company: "CFEES, DRDO",
      period: "May 2024 - July 2024",
      location: "New Delhi, IND",
      description: "Developed secure web portals with stringent security protocols. Implemented robust authentication and database management.",
      skills: ["PHP", "MySQL", "Security", "Apache"],
      type: "development"
    },
    {
      title: "Web Developer",
      company: "DeepLogicAI",
      period: "Oct 2023 - Dec 2023",
      location: "New Delhi, IND",
      description: "Designed unified web application for PDF data extraction using Python and Flask.",
      skills: ["Python", "Flask", "Data Processing", "Web Development"],
      type: "development"
    },
    {
      title: "Data Analyst",
      company: "JindalX",
      period: "May 2023 - Aug 2023",
      location: "New Delhi, India",
      description: "Analyzed global healthcare insurance plans using Python and Pandas. Generated strategic insights through data-driven models.",
      skills: ["Python", "Pandas", "Data Analysis", "Visualization"],
      type: "data"
    },
    {
      title: "Web Developer",
      company: "Beyond Exams",
      period: "Jun 2022 - Nov 2022",
      location: "New Delhi, India",
      description: "Developed ML-powered website for YouTube content assessment using Python, Django, and scikit-learn.",
      skills: ["Python", "Django", "Machine Learning", "scikit-learn"],
      type: "development"
    }
  ];

  const projects = [
    {
      title: "Trip Recommendation App",
      period: "Aug 2024 - Present",
      description: "Bilingual trip recommendation app with responsive interface, advanced filters, and OTP-based authentication.",
      tech: ["Flutter", "AWS", "MongoDB", "Firebase"],
      status: "In Development",
      category: "Mobile App"
    },
    {
      title: "UPI Market Analysis Model",
      period: "May 2024",
      description: "Predicted market shares of UPI companies using fractional calculus and prey-predator growth models.",
      tech: ["Python", "NumPy", "SciPy", "Matplotlib"],
      status: "Completed",
      category: "Data Science"
    }
  ];

  const skills = {
    "Programming Languages": {
      items: ["JavaScript", "TypeScript", "Python", "C", "SQL", "MATLAB", "R"],
      icon: Code,
      color: "from-blue-500 to-cyan-500"
    },
    "Frontend Development": {
      items: ["React", "Angular", "HTML", "CSS", "Tailwind CSS"],
      icon: Palette,
      color: "from-purple-500 to-pink-500"
    },
    "Backend Development": {
      items: ["Node.js", "Express.js", "PHP", "MySQL", "Firebase", "MongoDB"],
      icon: Database,
      color: "from-green-500 to-emerald-500"
    },
    "Cloud & Deployment": {
      items: ["AWS", "Cloud Deployment", "Git"],
      icon: Globe,
      color: "from-orange-500 to-red-500"
    },
    "Machine Learning": {
      items: ["PyTorch", "scikit-learn", "TensorFlow", "NLP", "Deep Learning"],
      icon: Brain,
      color: "from-indigo-500 to-purple-500"
    },
    "Data Science": {
      items: ["Pandas", "NumPy", "SciPy", "Matplotlib", "Seaborn", "Data Visualization"],
      icon: TrendingUp,
      color: "from-teal-500 to-blue-500"
    }
  };

  const certifications = [
    { name: "Python Problem Solving", issuer: "HackerRank", date: "Oct 2022" },
    { name: "Introduction to Programming with Python", issuer: "Coursera", date: "Mar 2023" },
    { name: "Data Visualisation: Empowering Business", issuer: "TATA", date: "July 2023" },
    { name: "Machine Learning and Data Science Bootcamp", issuer: "Udemy", date: "Aug 2023" }
  ];

  return (
    <div className="bg-black min-h-screen text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-teal-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/5 to-rose-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              RKM
            </div>
            
            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full ${
                    activeSection === item.toLowerCase()
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-white/10 backdrop-blur-xl">
              {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5 transition-all rounded-lg mx-2"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <div className="mb-12">
              <div className="relative inline-block mb-8">
                <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-teal-500 rounded-full p-1 animate-pulse">
                  <img
                    src="/Rahul.jpg"
                    alt="Rahul Kumar Mishra"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles size={16} className="text-white" />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent leading-tight">
                Rahul Kumar Mishra
              </h1>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-medium border border-blue-500/30 backdrop-blur-sm">
                  Full-Stack Developer
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm font-medium border border-purple-500/30 backdrop-blur-sm">
                  UI/UX Designer
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full text-sm font-medium border border-teal-500/30 backdrop-blur-sm">
                  Data Scientist
                </span>
              </div>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Crafting exceptional digital experiences through innovative development, 
                thoughtful design, and data-driven solutions
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <a
                href="mailto:mishrakrahul2003@gmail.com"
                className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Mail size={20} />
                <span className="font-medium">Get In Touch</span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:9122861051"
                className="group flex items-center gap-3 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={20} />
                <span className="font-medium">Call Me</span>
              </a>
            </div>

            <div className="flex justify-center gap-8">
              <a href="#" className="group p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={24} className="text-gray-300 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="group p-4 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110">
                <Github size={24} className="text-gray-300 group-hover:text-purple-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about creating exceptional digital experiences through innovative technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white mb-8">My Expertise</h3>
              <div className="space-y-6">
                {[
                  { icon: Code, text: "Frontend & Backend Development", color: "from-blue-500 to-cyan-500" },
                  { icon: Palette, text: "UI/UX Design & Prototyping", color: "from-purple-500 to-pink-500" },
                  { icon: Database, text: "Database Management & APIs", color: "from-green-500 to-emerald-500" },
                  { icon: Brain, text: "Machine Learning & Data Science", color: "from-orange-500 to-red-500" }
                ].map((item, index) => (
                  <div key={index} className="group flex items-center gap-6 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="text-white" size={28} />
                    </div>
                    <span className="text-lg text-gray-200 group-hover:text-white transition-colors">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="text-white" size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">Education</h4>
                    <p className="text-gray-400">2021 - 2025</p>
                  </div>
                </div>
                
                <h5 className="text-xl font-semibold text-white mb-3">
                  Bachelor of Technology
                </h5>
                <p className="text-gray-300 mb-4">
                  Cluster Innovation Centre, University of Delhi
                </p>
                <p className="text-gray-400 mb-6">
                  Major in Information Technology and Mathematical Innovation with Minor in Management
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                    CGPA: 8.7/10
                  </div>
                  <div className="flex items-center gap-2 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm">High Achiever</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-400">
              My professional journey across cutting-edge technologies
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02]">
                  <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                        {exp.type === 'current' && (
                          <div className="flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            Current
                          </div>
                        )}
                      </div>
                      <p className="text-xl text-blue-400 font-semibold mb-3">{exp.company}</p>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        View Project
                      </a>
                    )}
                  </div>

                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white/10 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400">
              Innovative solutions showcasing technical excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-3xl p-8 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      </div>
                      <p className="text-sm text-gray-400 mb-2">{project.period}</p>
                      <span className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                        {project.category}
                      </span>
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium border ${
                      project.status === 'Completed' 
                        ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                        : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/10 backdrop-blur-sm text-gray-200 px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400">
              Comprehensive expertise across the modern tech stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {Object.entries(skills).map(([category, data], index) => (
              <div key={index} className="group relative">
                <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-[1.02] h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${data.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <data.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white/10 backdrop-blur-sm text-gray-200 px-3 py-2 rounded-full text-sm border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Award className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                      <p className="text-sm text-gray-400">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-400">
              Ready to collaborate on your next innovative project
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <a
                href="mailto:mishrakrahul2003@gmail.com"
                className="group bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl p-8 text-center border border-blue-500/20 hover:border-blue-500/40 hover:bg-blue-500/20 transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                <p className="text-gray-300">mishrakrahul2003@gmail.com</p>
              </a>

              <a
                href="tel:9122861051"
                className="group bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl p-8 text-center border border-green-500/20 hover:border-green-500/40 hover:bg-green-500/20 transition-all duration-500 transform hover:scale-[1.02]"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Phone</h3>
                <p className="text-gray-300">+91 9122861051</p>
              </a>

              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 text-center border border-purple-500/20">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-6">Social Links</h3>
                <div className="flex justify-center gap-4">
                  <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110">
                    <Linkedin size={20} className="text-gray-300 hover:text-blue-400 transition-colors" />
                  </a>
                  <a href="#" className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110">
                    <Github size={20} className="text-gray-300 hover:text-purple-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Rahul Kumar Mishra
            </h3>
            <p className="text-gray-400 mb-8">
              Full-Stack Developer • UI/UX Designer • Data Scientist
            </p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={20} className="text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110">
                <Github size={20} className="text-gray-400 hover:text-purple-400 transition-colors" />
              </a>
              <a href="mailto:mishrakrahul2003@gmail.com" className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 transform hover:scale-110">
                <Mail size={20} className="text-gray-400 hover:text-green-400 transition-colors" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2025 Rahul Kumar Mishra. Crafted with passion and precision.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 z-50 flex items-center justify-center transform hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}
      <Testimonials />
    </div>
  );
}

export default App;