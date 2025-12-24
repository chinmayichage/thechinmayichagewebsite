
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Mail, MapPin, Briefcase, GraduationCap, Terminal, BarChart, Database, Award, Github, GitBranch, ShieldCheck, User, Calendar, Heart } from 'lucide-react';
import SectionWrapper from './components/SectionWrapper';
import GlassCard from './components/GlassCard';
import Background from './components/Background';
import { IntroAnimation, HandshakeAnimation } from './components/LottieAnimation';
import { SKILLS, PROJECTS, EXPERIENCE, EDUCATION, SOCIAL_LINKS, CERTIFICATIONS } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const contactEmail = "ichagechinmay@gmail.com";

  const categories = [
    'Languages & Databases',
    'Visualization & Reporting',
    'Data Engineering',
    'Soft Skills'
  ] as const;

  // Memoize floating decorations to prevent lag in certifications section
  const floatingBadges = useMemo(() => [...Array(6)].map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: 10 + Math.random() * 10,
    delay: i * 0.5
  })), []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-slate-100 selection:bg-blue-500/30 bg-[#020617]">
      {/* High-End Animated Background */}
      <Background activeSection={activeSection} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-center pointer-events-none">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-2 flex gap-2 md:gap-4 overflow-x-auto max-w-full shadow-2xl pointer-events-auto"
        >
          {['home', 'skills', 'projects', 'certifications', 'experience', 'education', 'contact'].map((id) => (
            <a 
              key={id} 
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`text-[10px] md:text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full transition-all duration-300 whitespace-nowrap ${activeSection === id ? 'text-blue-400 bg-blue-400/10' : 'text-slate-400 hover:text-white'}`}
            >
              {id === 'home' ? 'bio' : id}
            </a>
          ))}
        </motion.div>
      </nav>

      {/* Bio / Hero Section */}
      <SectionWrapper id="home" onVisible={setActiveSection}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 font-bold tracking-wider uppercase text-[10px]">Ready to deliver insights</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
              Chinmay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400">Ichage</span>
            </h1>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-blue-500/50" />
              <p className="text-blue-300 font-bold text-xl uppercase tracking-[0.2em]">Data Analyst & Engineer</p>
            </div>
            
            <p className="text-lg text-slate-300 mb-12 max-w-xl leading-relaxed">
              Detail-oriented analyst skilled in <span className="text-white border-b border-blue-500/30">SQL automation</span>, 
              <span className="text-white border-b border-blue-500/30"> data validation</span>, and 
              <span className="text-white border-b border-blue-500/30"> automated reporting systems</span>.
            </p>

            <div className="flex flex-wrap gap-6 items-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl font-black shadow-2xl transition-all"
              >
                <Download className="w-5 h-5" />
                GET RESUME
              </motion.button>
              
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={link.name}
                    whileHover={{ y: -4, scale: 1.1 }}
                    className="p-4 bg-slate-900/60 border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all"
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
          <div className="hidden md:block relative">
            <IntroAnimation />
          </div>
        </div>
      </SectionWrapper>

      {/* Skills Section - Optimized for smoothness */}
      <SectionWrapper id="skills" onVisible={setActiveSection}>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-24 relative z-10">
            <h2 className="text-5xl font-black mb-6 tracking-tight">Technical Stack</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            {categories.map((cat, catIndex) => (
              <GlassCard 
                key={cat} 
                className="p-8 group relative overflow-hidden bg-slate-900/40 hover:bg-slate-900/60 transition-all border-white/5"
                delay={catIndex * 0.1}
              >
                <h3 className="text-xl font-black mb-8 text-white flex items-center gap-4 border-b border-white/10 pb-6 uppercase tracking-widest">
                  <GitBranch className="w-6 h-6 text-blue-500" />
                  {cat}
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {SKILLS.filter(s => s.category === cat).map((skill, i) => (
                    <motion.div 
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="flex items-center gap-4 group/item"
                    >
                      <div className="p-3 bg-slate-950 rounded-xl border border-white/5 group-hover/item:border-blue-500/30 transition-all">
                        {React.cloneElement(skill.icon as React.ReactElement, { className: "w-5 h-5 text-blue-400" })}
                      </div>
                      <span className="text-sm font-bold text-slate-300 group-hover/item:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Projects Section */}
      <SectionWrapper id="projects" onVisible={setActiveSection}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-6 tracking-tight text-cyan-400">Key Projects</h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <GlassCard key={project.title} className="group overflow-hidden flex flex-col h-full bg-slate-900/40 border-white/5" delay={i * 0.1}>
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed font-medium">
                    {project.description}
                  </p>
                  <div className="mt-auto space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[9px] px-2 py-1 bg-slate-950 border border-white/10 rounded text-slate-300 uppercase font-black tracking-widest">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs font-black text-cyan-400 hover:text-cyan-300 transition-all uppercase tracking-widest"
                    >
                      EXPLORE <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Certifications Section - Optimized to remove scroll lag */}
      <SectionWrapper id="certifications" onVisible={setActiveSection}>
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
             <h2 className="text-5xl font-black mb-6 tracking-tight text-amber-500">Certifications</h2>
             <div className="w-20 h-1.5 bg-amber-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto relative">
            {/* Background decorations - Static random values to prevent re-render lag */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
               {floatingBadges.map((badge) => (
                  <motion.div
                    key={badge.id}
                    className="absolute"
                    style={{ top: badge.top, left: badge.left }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: badge.duration, repeat: Infinity, delay: badge.delay }}
                  >
                    <Award className="w-20 h-20 text-white/20" />
                  </motion.div>
               ))}
            </div>

            {CERTIFICATIONS.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative"
              >
                <GlassCard className={`p-10 group h-full flex flex-col justify-between relative overflow-hidden bg-slate-900/60 border-white/5 transition-colors ${i === 0 ? 'hover:border-lime-500/30' : 'hover:border-blue-500/30'}`}>
                  <div className="relative z-10">
                    <div className={`mb-8 inline-flex items-center justify-center p-5 rounded-2xl ${i === 0 ? 'bg-lime-500/10' : 'bg-blue-500/10'}`}>
                      <Award className={`w-10 h-10 ${i === 0 ? 'text-lime-500' : 'text-blue-400'}`} />
                    </div>
                    <h3 className="text-2xl font-black text-white mb-6 tracking-tight uppercase">
                      {cert.title.split(' - ')[0]} 
                      <span className={`block mt-2 text-lg font-bold tracking-normal normal-case ${i === 0 ? 'text-lime-400' : 'text-blue-400'}`}>
                        {cert.title.split(' - ')[1]}
                      </span>
                    </h3>
                  </div>
                  <motion.a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className={`relative z-10 w-full py-4 bg-slate-950 border border-white/10 rounded-xl text-sm font-black transition-all flex items-center justify-center gap-2 uppercase tracking-widest ${i === 0 ? 'hover:bg-lime-600 hover:text-black' : 'hover:bg-blue-600 hover:text-white'}`}
                  >
                    Verify Credential
                  </motion.a>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Experience Section */}
      <SectionWrapper id="experience" onVisible={setActiveSection}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-6 tracking-tight">Experience</h2>
            <div className="w-20 h-1.5 bg-slate-700 mx-auto rounded-full" />
          </div>
          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative pl-10 border-l-2 border-slate-800">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-slate-700 rounded-full border-4 border-slate-950" />
                <GlassCard className="p-8 bg-slate-900/40 border-white/5">
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8 gap-2">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-1 uppercase">{exp.role}</h3>
                      <p className="text-blue-400 font-bold">{exp.company}</p>
                    </div>
                    <span className="px-4 py-1 bg-slate-950 text-slate-400 rounded-xl text-[10px] font-black border border-white/5 uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-4">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="flex gap-4 text-slate-300 text-base leading-relaxed">
                        <span className="text-blue-500 font-black">▹</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Education Section */}
      <SectionWrapper id="education" onVisible={setActiveSection}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-6 tracking-tight text-emerald-500">Education</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full" />
          </div>
          <div className="grid gap-8">
            {EDUCATION.map((edu, i) => (
              <GlassCard key={i} className="p-8 bg-slate-900/40 border-white/5" delay={i * 0.1}>
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-4 gap-2">
                  <h3 className="text-xl font-black text-white uppercase tracking-tight">{edu.school}</h3>
                  <span className="px-4 py-1 bg-emerald-500/10 text-emerald-400 rounded-xl text-[10px] font-black border border-emerald-500/20 uppercase tracking-widest">
                    {edu.period}
                  </span>
                </div>
                <p className="text-emerald-400 font-bold text-lg mb-4">{edu.degree}</p>
                <div className="inline-flex items-center gap-3 text-slate-300 bg-slate-950 px-5 py-2 rounded-xl border border-white/5">
                  <span className="font-black text-emerald-400 uppercase text-[10px] tracking-widest">Result</span>
                  <span className="text-xl font-black text-white">{edu.gpa}</span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" onVisible={setActiveSection} className="pb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 mb-32 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-6xl font-black mb-10 tracking-tighter uppercase leading-[0.9]">
                  Let's <br/>
                  <span className="text-blue-400">Connect</span>.
                </h2>
                <div className="space-y-6">
                  <a href={`mailto:${contactEmail}`} className="flex items-center gap-6 group">
                    <div className="p-5 bg-slate-900 border border-white/10 rounded-3xl group-hover:border-blue-500 transition-all shadow-xl">
                      <Mail className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-black tracking-widest mb-1">Email</p>
                      <p className="text-xl font-bold text-slate-100 tracking-tight">{contactEmail}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-6">
                    <div className="p-5 bg-slate-900 border border-white/10 rounded-3xl shadow-xl">
                      <MapPin className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-black tracking-widest mb-1">Location</p>
                      <p className="text-xl font-bold text-slate-100 tracking-tight">Solapur, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <GlassCard className="p-10 bg-slate-900/40 border-white/5">
                <h3 className="text-xl font-black text-white mb-10 border-b border-white/10 pb-6 uppercase tracking-widest">Profile</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Birth Date</p>
                      <p className="text-slate-200 font-bold text-lg">29 Apr 2003</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Status</p>
                      <p className="text-slate-200 font-bold text-lg">Single</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Gender</p>
                      <p className="text-slate-200 font-bold text-lg">Male</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>

            <div className="bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-12 flex flex-col items-center shadow-2xl">
              <div className="text-center mb-12 w-full p-8 rounded-2xl bg-slate-950/50 border border-blue-500/20">
                <h3 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase">Hire Me</h3>
                <p className="text-blue-400 font-bold uppercase text-[10px] tracking-widest">Available for impact</p>
              </div>

              <HandshakeAnimation />
              
              <div className="grid grid-cols-2 gap-4 mt-16 w-full">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  href={`mailto:${contactEmail}`} 
                  className="col-span-2 flex justify-center items-center gap-4 py-5 bg-blue-600 rounded-2xl shadow-xl transition-all"
                >
                  <Mail className="w-5 h-5 text-white" />
                  <span className="text-lg font-black text-white uppercase tracking-widest">Email Me</span>
                </motion.a>
                
                {SOCIAL_LINKS.map(link => (
                  <motion.a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex justify-center items-center gap-3 py-4 bg-slate-950 border border-white/5 rounded-2xl hover:border-blue-500/30 transition-all shadow-lg"
                  >
                    {link.icon}
                    <span className="font-black text-[10px] uppercase tracking-widest">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <footer className="border-t border-white/5 py-12 flex flex-col md:flex-row justify-between items-center opacity-40">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">© 2025 Chinmay Ichage</p>
            <div className="flex gap-8">
              {SOCIAL_LINKS.map(link => (
                <a key={link.name} href={link.url} className="text-slate-400 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
                  {link.name}
                </a>
              ))}
            </div>
          </footer>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default App;
