import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GlowingCursor } from '../components/ui/GlowingCursor';

import {
  Mail, Phone, MapPin, Linkedin, ExternalLink, Github,
  Code2, Brain, Database, Users, GraduationCap, Briefcase,
  Award, FolderGit2, Send, ArrowRight, Sparkles, BookOpen,
  Cpu, BarChart3, MessageSquare, Cog, Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayesha Shakeel" },
      { name: "description", content: "A motivated Data Analyst and machine learning engineer with hands-on experience in working on data projects and by using machine learning to solve real-world problems." },
      { property: "og:title", content: "Ayesha Shakeel as an AI/ML & Data Analyst" },
      { property: "og:description", content: "Portfolio of Ayesha Shakeel — AI/ML & Data Analyst." },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/AS_turquoise_navy_round.png" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

function Portfolio() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen text-foreground relative cursor-none">
      <GlowingCursor />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#home" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-gradient-silver">
          <img 
            src="/AS_turquoise_navy.png" 
            alt="AS Logo" 
            className="h-14 w-14 rounded-full object-cover ring-1 ring-silver-muted/30 sm:h-16 sm:w-16" 
          />
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className="relative rounded-full border border-transparent px-3 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:border-silver-muted/40 hover:bg-secondary/40 hover:text-foreground hover:shadow-[0_0_12px_-2px_rgba(148,163,184,0.35)] active:scale-[0.97] active:border-silver-muted/60"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-medium text-foreground transition-all hover:border-silver-muted hover:bg-secondary md:inline-flex"
        >
          Let's talk
        </a>
        <button onClick={() => setOpen((v) => !v)} className="md:hidden text-foreground" aria-label="Toggle menu">
          <span className="block h-0.5 w-6 bg-current mb-1.5" />
          <span className="block h-0.5 w-6 bg-current mb-1.5" />
          <span className="block h-0.5 w-6 bg-current" />
        </button>
      </nav>
      {open && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <ul className="space-y-2 px-6 py-4">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      style={{ backgroundImage: "var(--gradient-hero)" }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-navy/40 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-6xl text-center animate-fade-in">
        <h1 className="whitespace-nowrap text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-gradient-silver">AYESHA SHAKEEL</span>
        </h1>
        <p className="mx-auto mt-6 text-base font-medium uppercase tracking-[0.3em] text-silver-muted sm:text-lg">
          AI & Machine Learning <span className="mx-3 text-border">|</span> Data Analyst
        </p>
        <p className="mx-auto mt-8 max-w-4xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          A motivated Data Analyst and machine learning engineer with hands-on experience in working on data projects and by using machine learning to solve real-world problems. I like to collaborate with multiple teams to learn about data and uncover valuable information that can support decision making. I am interested in using Python to automate tasks, to make them easy to understand by using graphs for reporting. I am always eager to learn new things by getting familiar with artificial intelligence and machine learning methodologies. In future, I wish to contribute my expertise in Data Science, Machine learning and Artificial Intelligence to organizations to empower them with better decisions.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_oklch(0.75_0.04_255_/_0.6)]"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-silver-muted hover:bg-card"
          >
            Contact Me
          </a>
          <div className="ml-2 flex items-center gap-2">
            <IconLink href="https://github.com/aye-sha2213" label="GitHub">
              <Github className="h-4 w-4" />
            </IconLink>
            <IconLink href="https://www.linkedin.com/in/ayeshashk/" label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </IconLink>
            <IconLink href="mailto:ayeshashk@zohomail.com" label="Email">
              <Mail className="h-4 w-4" />
            </IconLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:border-silver-muted hover:text-foreground"
    >
      {children}
    </a>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative px-6 py-24 sm:py-32" style={{ backgroundImage: "var(--gradient-section)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="reveal mb-12 sm:mb-16">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-silver-muted">{eyebrow}</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-gradient-silver">{title}</h2>
        </div>
        <div className="reveal reveal-delay-1">{children}</div>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-12 lg:grid-cols-5 items-center">
        {/* Left Side: Bio Text & Quick Stats */}
        <div className="lg:col-span-3">
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            Motivated AI, Machine Learning, and Data Analyst professional with hands-on experience in data analysis,
            machine learning, and AI-based document systems. Skilled at collaborating with cross-functional teams to
            uncover insights that support smarter decisions. Confident in using Python to automate tasks and create
            clear data visualizations for reporting.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Currently exploring Retrieval-Augmented Generation (RAG), graph databases, and knowledge representation,
            with a goal of contributing to organizations through Data Science, Machine Learning, and AI.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "Internships", v: "2+" },
              { k: "Projects", v: "8+" },
              { k: "Certifications", v: "6" },
              { k: "Languages", v: "6" },
            ].map((s) => (
              <div key={s.k} className="card-glow rounded-xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-gradient-silver">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.k}</div>
              </div>
            ))}
          </div>
        </div>

       {/* Right Side: Clean Glowing Circular Portrait */}
        <div className="flex items-center justify-center self-center lg:col-span-2">
          <div className="mx-auto flex h-72 w-72 items-center justify-center rounded-full border-2 border-primary bg-background p-1 sm:h-80 sm:w-80 shadow-[0_0_35px_-5px_oklch(0.75_0.04_255_/_0.4)]">
            <img
              src="/portrait_no_background.png"
              alt="Ayesha Shakeel"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Education() {
  const education = [
    { title: "BS Artificial Intelligence", org: "University of Management and Technology, Lahore", date: "Expected 2027" },
    { title: "Artificial Intelligence (2-month course)", org: "Arfa Karim Technology Incubator, Bahria Campus, Lahore", date: "09/2024" },
    { title: "FSc Pre-Engineering", org: "Unique College Bahria Campus, Lahore", date: "2023" },
    { title: "Matric (Biology)", org: "Unique Group of Institutions, Lahore", date: "2021" },
  ];

  return (
    <Section id="education" eyebrow="ACADEMICS" title="Education">
      <div className="grid gap-5 sm:grid-cols-2">
        {education.map((e) => (
          <div key={e.title} className="card-glow rounded-2xl p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-secondary/60">
                <GraduationCap className="h-5 w-5 text-silver" />
              </div>
              <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs font-mono text-silver-muted">
                {e.date}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground">{e.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{e.org}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  const groups = [
    {
      icon: Code2, title: "Languages",
      items: ["Python", "C++", "Java", "Prolog", "HTML", "CSS"],
    },
    {
      icon: Brain, title: "AI / ML",
      items: ["Machine Learning", "AIML", "Knowledge Representation & Reasoning", "RAG / Retrieval-Augmented LLMs"],
    },
    {
      icon: Database, title: "Data",
      items: ["SQL", "Pandas", "NumPy", "Matplotlib", "PostgreSQL", "pgvector", "Embedding lifecycle"],
    },
    {
      icon: Users, title: "Other",
      items: ["Problem Solving", "Communication", "Teamwork", "English (Conversational)", "Urdu (Fluent)"],
    },
  ];
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & technologies">
      <div className="grid gap-5 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={g.title} className="card-glow rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-secondary/60">
                <g.icon className="h-5 w-5 text-silver" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-silver-muted hover:text-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  const jobs = [
    {
      role: "Machine Learning Intern",
      company: "ProjekteX Engineering",
      location: "Remote · NYC, US",
      date: "Feb 2026 – Apr 2026",
      bullets: [
        "Assisted in building an AI-based project to manage and analyze technical documents.",
        "Worked on document processing and information organization so users could easily locate information.",
        "Gained production experience with Python and RAG/retrieval-augmented LLM systems — chunking, retrieval quality, reranking, grounding.",
        "Worked with PostgreSQL, vector search (pgvector), full-text search, and embedding lifecycle management.",
        "Tested features, fixed bugs, and ensured overall system quality through close team collaboration.",
      ],
    },
    {
      role: "Data Analyst Intern",
      company: "Arch Technologies",
      location: "Remote · Islamabad, Pakistan",
      date: "Jun 2025 – Aug 2025",
      bullets: [
        "Analyzed library management system data using SQL queries, presenting findings in clear tabular format.",
        "Developed Python code to analyze Spotify music data, uncovering trends in musical preferences.",
        "Performed data analysis and database operations using SQL on retail sales data.",
        "Extracted, transformed, and loaded (ETL) data into databases using SQL queries.",
      ],
    },
  ];
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className="relative">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-border via-silver-muted/40 to-transparent sm:left-6" />
        <div className="space-y-8">
          {jobs.map((j) => (
            <div key={j.role + j.company} className="relative pl-12 sm:pl-16">
              <div className="absolute left-2 top-3 h-5 w-5 rounded-full border border-silver-muted/60 bg-background sm:left-4">
                <Briefcase className="absolute inset-0 m-auto h-3 w-3 text-silver" />
              </div>
              <div className="card-glow rounded-2xl p-6">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground">{j.role}</h3>
                    <p className="mt-1 text-sm text-silver-muted">{j.company} · {j.location}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground">
                    {j.date}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {j.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-silver-muted" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Projects() {
  const projects = [
    { icon: Brain, title: "Brain Tumor Detection", tag: "ML · Python", desc: "Built a machine learning model to detect brain tumors from 100 MRI images, achieving high classification accuracy." },
    { icon: BarChart3, title: "Student Exam Score Analysis", tag: "Python", desc: "Data preprocessing and visualization (graphs, heatmaps) to classify student performance." },
    { icon: Database, title: "Retail Sales Analysis", tag: "SQL", desc: "Designed database structures and queries to present retail sales data in structured tables." },
    { icon: BookOpen, title: "Library Management Analysis", tag: "SQL", desc: "Performed data analysis and presented results in clean tabular format." },
    { icon: BarChart3, title: "Spotify Music Data Analysis", tag: "Python", desc: "Analyzed music data to uncover trends and listener patterns." },
    { icon: Code2, title: "Java MVC Database Project", tag: "Java · MVC", desc: "Built a data frame using Java with the MVC framework for database connectivity." },
    { icon: MessageSquare, title: "AI Chatbot", tag: "Prolog · AIML · Python", desc: "Created a chatbot using knowledge representation with 30 family relationships in Prolog." },
    { icon: Cpu, title: "Arduino Robot", tag: "Hardware", desc: "Designed and programmed a wall-following and line-following robot, with video documentation." },
  ];
  return (
    <Section id="projects" eyebrow="Selected work" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article key={p.title} className="card-glow group flex flex-col rounded-2xl p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary/60">
                <p.icon className="h-5 w-5 text-silver" />
              </div>
              <FolderGit2 className="h-4 w-4 text-silver-muted opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="mt-1 text-xs uppercase tracking-wider text-silver-muted">{p.tag}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </article>
        ))}
      </div>
      <div className="mt-10 card-glow rounded-2xl p-6">
        <div className="flex items-start gap-3">
          <BookOpen className="mt-1 h-5 w-5 shrink-0 text-silver" />
          <div>
            <p className="text-xs uppercase tracking-wider text-silver-muted">Academic publication</p>
            <p className="mt-1 text-sm font-medium text-foreground">
              Utilizing Deep Learning for Intrusion Detection in Healthcare Environment and Blockchain Technology
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Certifications() {
  const certs = [
    { title: "Advanced Learning Algorithms", issuer: "Coursera with Standford, Deep Learning.ai", date: "August 25, 2026", desc: "learned the advanced learning of machine learning, including regression, classification, by visualizing graphs and finding entropy of algorithms in such cases to build and evaluate models, including Linear Regression & Logistic Regression, Jupyter, Data Preprocessing, Algorithms, Feature Engineering", url: "https://coursera.org/share/360b2f9864ac8839a843c821c3f304a0" },
    { title: "Supervised Machine Learning: Regression and Classification", issuer: "Coursera with Standford, Deep Learning.ai", date: "August 6, 2026", desc: "Build and train supervised machine learning models for prediction, Performed binary classification tasks including Linear Regression & Logistic Regression, Jupyter, Data Preprocessing, Algorithms, Feature Engineering", url: "https://coursera.org/share/a349191565a1830a73d21ca912f819dc" },
    { title: "Neo4j Fundamentals", issuer: "Neo4j GraphAcademy", date: "Jun 22, 2026", desc: "Graph theory, structures, reading/writing data in Neo4j, Cypher patterns.", url: "https://graphacademy.neo4j.com/c/22f513ac-024b-4dd9-ac8e-f7882d2b39fa/" },
    { title: "Cypher Fundamentals", issuer: "Neo4j GraphAcademy", date: "Jun 22, 2026", desc: "Cypher patterns, reading and writing data to a graph.", url: "https://graphacademy.neo4j.com/c/ab483b3f-618b-4eb8-8e20-108ef0dfda62/" },
    { title: "Artificial Intelligence (Cohort 06)", issuer: "Arfa Karim Technology Incubator, Bahria Campus", date: "2024", desc: "Certified in Artificial Intelligence — 2-month course.", url: "https://www.linkedin.com/in/ayesha-shakeel-b69a49293/overlay/Certifications/1926449821/treasury/?profileId=ACoAAEcq70EB7bSljXppesV0mxPdN5NZuGGhA2E&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BW5kGXObeRcqXC6HZWp351A%3D%3D" },
    { title: "CyberFest Event", issuer: "Lahore Garrison University, Lahore", date: "2025", desc: "Attended as an AI student.", url: "https://www.linkedin.com/posts/ayesha-shakeel-b69a49293_a-memorable-event-attended-as-an-ai-student-share-7452382164266102786-LV33" },
    { title: "English Immersion — Certificate of Achievement", issuer: "University of Management and Technology", date: "2025", desc: "Recognized for achievement in English Immersion programme.", url: "https://www.linkedin.com/posts/ayesha-shakeel-b69a49293_a-certificate-of-achievement-highlighting-share-7438476994650177536-nvdu" },
    { title: "Data Analyst Internship Completion", issuer: "Arch Technologies, Islamabad", date: "Aug 2025", desc: "Completed remote Data Analyst internship.", url: "https://www.linkedin.com/in/ayesha-shakeel-b69a49293/overlay/Certifications/80266871/treasury/?profileId=ACoAAEcq70EB7bSljXppesV0mxPdN5NZuGGhA2E&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BjIzipqWFT%2BWe918ii9sVCA%3D%3D" },
  ];
  return (
    <Section id="certifications" eyebrow="Achievements" title="Certifications">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => {
          const inner = (
            <div className="badge-glow flex h-full flex-col rounded-2xl p-6">
              <div className="mb-4 flex items-start justify-between">
                <div className="relative grid h-12 w-12 place-items-center rounded-full border border-silver-muted/50 bg-navy-deep">
                  <Award className="h-6 w-6 text-silver" />
                  <span className="absolute -inset-1 rounded-full border border-silver-muted/20" />
                </div>
                {c.url && <ExternalLink className="h-4 w-4 text-silver-muted" />}
              </div>
              <h3 className="text-base font-semibold leading-tight text-foreground">{c.title}</h3>
              <p className="mt-1 text-xs text-silver-muted">{c.issuer}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{c.desc}</p>
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-silver-muted">{c.date}</p>
            </div>
          );
          return c.url ? (
            <a key={c.title} href={c.url} target="_blank" rel="noopener noreferrer" className="block transition-transform hover:-translate-y-1">
              {inner}
            </a>
          ) : (
            <div key={c.title}>{inner}</div>
          );
        })}
      </div>
    </Section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const email = fd.get("email") as string;
    const message = fd.get("message") as string;
    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:ayeshashk@zohomail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      (e.target as HTMLFormElement).reset();
    }, 400);
  };
  return (
    <Section id="contact" eyebrow="Get in touch" title="Let's build something">
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          <ContactRow icon={Mail} label="Email" value="ayeshashk@zohomail.com" href="mailto:ayeshashk@zohomail.com" />
          <ContactRow icon={Phone} label="Phone" value="+92 307 9423662" href="tel:+923079423662" />
          <ContactRow icon={Linkedin} label="LinkedIn" value="ayesha-shakeel" href="https://www.linkedin.com/in/ayeshashk/" />
          <ContactRow icon={MapPin} label="Location" value="Lahore, Punjab, Pakistan" />
          <div className="card-glow mt-6 rounded-2xl p-5">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-foreground">
              <Heart className="h-4 w-4 text-silver" /> Interests
            </div>
            <p className="text-sm text-muted-foreground">Social work · Drawing · Reading books · Teamwork</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="card-glow space-y-4 rounded-2xl p-6 lg:col-span-3">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div>
            <label className="mb-1.5 block text-xs uppercase tracking-wider text-silver-muted">Message</label>
            <textarea
              name="message"
              required
              rows={6}
              className="w-full resize-none rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-silver-muted"
              placeholder="Tell me about your project or opportunity…"
            />
          </div>
          <Button type="submit" disabled={sending} className="group w-full gap-2 rounded-full">
            <Send className="h-4 w-4" /> {sending ? "Sending…" : "Send message"}
          </Button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-wider text-silver-muted">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-silver-muted"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href?: string }) {
  const inner = (
    <div className="card-glow flex items-center gap-4 rounded-xl p-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-secondary/60">
        <Icon className="h-4 w-4 text-silver" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.2em] text-silver-muted">{label}</p>
        <p className="truncate text-sm text-foreground">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-navy-deep/80 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="font-display text-lg font-bold text-gradient-silver">Ayesha Shakeel</p>
        </div>
        <div className="flex items-center gap-3">
          <IconLink href="https://github.com/aye-sha2213" label="GitHub">
            <Github className="h-4 w-4" />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/ayeshashk/" label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </IconLink>
          <IconLink href="mailto:ayeshashk@zohomail.com" label="Email">
            <Mail className="h-4 w-4" />
          </IconLink>
        </div>
      </div>
    </footer>
  );
}
