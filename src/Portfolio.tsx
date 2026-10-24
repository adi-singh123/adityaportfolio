import { useEffect, useState, type ReactNode } from 'react';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Menu, Moon, Sun, X } from 'lucide-react';

const links = {
  github: 'https://github.com/adi-singh123',
  linkedin: 'https://www.linkedin.com/in/aditya-singh-03bb48257',
  email: 'mailto:adityasingh35052@gmail.com',
  resume: 'https://drive.google.com/file/d/1Z-XrxLF5l2IU5ebcL0rEO3kqGFg6ZDxT/view?usp=sharing',
};

const skills = [
  ['FE', 'Frontend Development', 'blue', ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS']],
  ['BE', 'Backend & APIs', 'lavender', ['Node.js', 'Go', 'Express.js', 'REST APIs', 'SQL', 'MongoDB', 'Sequelize']],
  ['AUT', 'Automation', 'green', ['Selenium', 'Playwright', 'Python', 'Browser Automation', 'Workflow Tools']],
  ['DEV', 'Tools & Workflow', 'pink', ['Git', 'GitHub', 'Postman', 'SEO', 'Performance', 'Agile']],
] as const;

const experience = [
  {
    company: 'Phoenix Advanced Softwares Private Limited', role: 'Software Developer', date: '27 March 2026 — Present', current: true,
    points: [
      'Contributing to V3Cars, a high-ranking automotive website, across user-facing modules and production features.',
      'Improving technical SEO, page performance, and reusable React and Next.js modules while preserving a consistent user experience.',
      'Building internal automation tools with Selenium and Playwright to reduce repetitive manual effort and make team workflows faster.',
    ],
  },
  {
    company: 'Bilvaleaf Private Limited', role: 'Full Stack Developer', date: 'July 2025 — January 2026',
    points: ['Developed scalable full-stack features using React.js, Next.js, Node.js, Express.js, Redux, and SQL.', 'Worked across frontend and backend delivery in a collaborative product team.'],
  },
  {
    company: 'EasySoft Services', role: 'Frontend Developer', date: 'March 2025 — July 2025',
    points: ['Built and maintained React interfaces, admin dashboard flows, and a tourism application with Next.js.', 'Focused on responsive UI, usability, and frontend performance improvements.'],
  },
];

const projects = [
  ['2026', 'DevCalc', 'An SEO-focused utility platform with 100+ calculators across 8+ categories and an automated blog publishing workflow powered by the NVIDIA API.', ['Next.js', 'TypeScript', 'SEO', 'NVIDIA API', 'Automation'], 'https://devcalc.in'],
  ['2025', 'Smart HR System', 'A full-stack employee workspace with separate user, HR, and admin experiences for attendance, projects, tasks, and workforce operations.', ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'], ''],
  ['2025', 'Video Meeting Platform', 'A real-time video meeting experience designed for simple online calls and collaboration with a clean, responsive interface.', ['React', 'WebRTC', 'Socket.io', 'Node.js'], ''],
  ['2026', 'Mobile Proxy Network', 'A distributed proxy system where an app installed across multiple phones connects each device to a central server. A proxy API manages device availability and routes authorized network traffic through SOCKS5 endpoints.', ['Android', 'Node.js', 'Proxy API', 'SOCKS5', 'WebSocket'], ''],
] as const;

function Heading({ number, children }: { number: string; children: ReactNode }) {
  return <div className="section-heading reveal"><span>{number}</span><h2>{children}</h2><i /></div>;
}

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('portfolio-theme') === 'dark' || (!localStorage.getItem('portfolio-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches));
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: .12 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#home"><span /> Aditya Singh</a>
      <div className="header-actions">
        <button className="theme-button" onClick={() => setDark(!dark)} aria-label={dark ? 'Use light mode' : 'Use dark mode'}>{dark ? <Sun /> : <Moon />}</button>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
      <nav className={open ? 'nav-links open' : 'nav-links'}>
        {['Skills', 'Experience', 'Projects', 'Education', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>)}
      </nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy reveal visible">
          <div className="availability"><span /> Software Developer at Phoenix</div>
          <h1><span>Aditya</span><strong>Singh</strong></h1>
          <p className="role">Full Stack Developer · Automation Builder · Problem Solver</p>
          <p className="intro">I build reliable web products with <b>React, Next.js, Node.js and TypeScript</b>. At Phoenix Advanced Softwares, I contribute to V3Cars, SEO-focused modules, and automation tools that reduce repetitive human effort.</p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">View Projects <ArrowRight /></a>
            <a className="button secondary" href={links.resume} target="_blank" rel="noreferrer"><Download /> Resume</a>
          </div>
          <div className="hero-stats"><div><strong>3</strong><span>Professional roles</span></div><div><strong>40+</strong><span>Projects built</span></div><div><strong>3</strong><span>Core specialties</span></div></div>
        </div>

        <div className="hero-visual reveal visible">
          <div className="glow" /><div className="code-window">
            <div className="window-bar"><i /><i /><i /><span>developer.ts</span><b>TYPESCRIPT</b></div>
            <div className="code-body">
              <p><em>01</em><span className="purple">type</span> <span className="blue">Developer</span> = {'{'}</p>
              <p><em>02</em>&nbsp;&nbsp;name: <span className="green">'Aditya Singh'</span>,</p>
              <p><em>03</em>&nbsp;&nbsp;role: <span className="green">'Software Developer'</span>,</p>
              <p><em>04</em>&nbsp;&nbsp;stack: [</p><p><em>05</em>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">'React'</span>, <span className="green">'Next.js'</span>,</p>
              <p><em>06</em>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">'Node.js'</span>, <span className="green">'TypeScript'</span></p>
              <p><em>07</em>&nbsp;&nbsp;],</p><p><em>08</em>&nbsp;&nbsp;focus: <span className="green">'useful products'</span>,</p>
              <p><em>09</em>&nbsp;&nbsp;automates: <span className="pink">true</span></p><p><em>10</em>{'}'};</p>
            </div><div className="code-status"><span /> building thoughtfully <b>ready to ship ✓</b></div>
          </div>
        </div>
      </section>

      <section className="section alternate" id="skills"><Heading number="01">Technical Stack</Heading>
        <div className="skills-grid">{skills.map(([code, title, tone, items], index) => <article className={`skill-card reveal delay-${index + 1}`} key={title}><span className={`skill-icon ${tone}`}>{code}</span><h3>{title}</h3><div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
      </section>

      <section className="section" id="experience"><Heading number="02">Experience</Heading>
        <div className="timeline">{experience.map((item, index) => <article className="experience-item reveal" key={item.company}><span className={`timeline-dot dot-${index + 1}`} /><div className="experience-heading"><h3>{item.company}</h3>{item.current && <span className="present">● Present</span>}</div><div className="experience-meta"><strong>{item.role}</strong><span>{item.date}</span></div><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div>
      </section>

      <section className="section alternate" id="projects"><Heading number="03">Selected Projects</Heading>
        <div className="projects-grid">{projects.map(([year, title, description, tags, url], index) => <article className={`project-card reveal delay-${Math.min(index + 1, 4)}`} key={title}><i />{url && <a className="project-link" href={url} target="_blank" rel="noreferrer">Live website <ArrowRight /></a>}<small>{year}</small><h3>{title}</h3><p>{description}</p><div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="section" id="education"><Heading number="04">Education</Heading><div className="education-grid">
        <article className="education-card reveal"><small>2022 — 2026</small><h3>Bachelor of Technology</h3><strong>Rajkiya Engineering College, Banda</strong><p>Computer Science · 7.6 CGPA</p></article>
        <article className="education-card reveal delay-2"><small>2020 — 2021</small><h3>Senior Secondary — PCM</h3><strong>Kendriya Vidyalaya No. 3</strong><p>Physics, Chemistry and Mathematics · 81%</p></article>
      </div></section>

      <section className="contact" id="contact"><p>Have a project or opportunity?</p><h2>Let’s build something <span>useful.</span></h2><div className="contact-links">
        <a href={links.email}><Mail /> Email me</a><a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a><a href={links.github} target="_blank" rel="noreferrer"><Github /> GitHub</a><span><MapPin /> Jaunpur, India</span>
      </div></section>
    </main>
    <footer><span>© {new Date().getFullYear()} Aditya Singh</span><span>Built with React + TypeScript</span></footer>
  </div>;
}
