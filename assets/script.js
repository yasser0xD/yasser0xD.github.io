document.addEventListener("DOMContentLoaded", () => {

  const htmlTag = document.documentElement;
  const bodyTag = document.body;
  const btnEn = document.getElementById("btn-en");
  const btnAr = document.getElementById("btn-ar");
  const themeToggle = document.getElementById("themeToggle");
  const yearSpan = document.getElementById("year");
  const preloader = document.getElementById("preloader");
  const navbar = document.querySelector(".glass-nav");
  const backToTop = document.getElementById("toTop");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => preloader.remove(), 500);
    }, 300);
  }

  const translations = {
    en: {
      "nav.cv": "CV",
      "hero.ctaCV": "Download CV",
      "contact.form.nameLabel": "Your name",
      "contact.form.emailLabel": "Your email",
      "contact.form.msgLabel": "Message",
      "contact.form.send": "Send message",
      "contact.form.orEmail": "or email me directly",
      "contact.form.namePh": "Full name",
      "contact.form.emailPh": "you@example.com",
      "contact.form.msgPh": "Tell me about your opportunity or project…",
      "stats.projects": "Projects", "stats.rank": "Master's rank", "stats.langs": "Languages", "a11y.skip": "Skip to content",
      "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
      "nav.experience": "Experience", "nav.security": "Security", "nav.contact": "Contact",

      "hero.badge": "Open to study-abroad & software opportunities",
      "hero.hi": "Hi, I'm",
      "hero.title": "Software Developer",
      "hero.subtitle": "Computer Science & Networks graduate and software developer. I build practical web tools and Python applications \u2014 from a complete management system for a travel agency to academic and side projects.",
      "hero.ctaProjects": "Explore My Work",
      "hero.ctaContact": "Let's Talk",
      "hero.ctaCV": "Download Resume",

      "section.about": "Who I Am", "about.title": "Building Useful Software.",
      "about.badge": "Graduate", "about.years": "CS & Networks",
      "about.p1": "I'm a Computer Science & Networks graduate from the University of M'Sila and a software developer. I enjoy turning real problems into clean, working tools \u2014 mostly with Python and modern web technologies.",
      "about.p2": "I currently work at a travel agency, where I built a complete internal system to manage clients and invoices. I value careful planning before writing code, and I'm now preparing to continue my studies abroad.",
      "about.locationLabel": "Location", "about.location": "M'Sila, Algeria",
      "about.fieldLabel": "Field", "about.degree": "Computer Science & Networks",

      "section.expertise": "My Skills", "skills.title": "What I Work With ",
      "skills.cat.programming": "Programming", "skills.cat.web": "Web Development", "skills.cat.approach": "Approach",
      "skills.tag.planning": "Planning & analysis", "skills.tag.ai": "AI-assisted development", "skills.tag.problem": "Problem solving",

      "section.work": "Selected Work", "projects.title": "My Projects ", "projects.viewGithub": "View all on GitHub",
      "projects.techStack": "Tech Stack", "projects.source": "GitHub", "projects.viewCode": "View Code", "projects.private": "Private repo",
      "edu.master.rank": "Ranked 12 of 55",
      "projects.p1.tag": "Work \u00b7 Real Product",
      "projects.p1.title": "Travel Agency Management System",
      "projects.p1.desc": "A complete internal system I built for the travel agency where I work, to manage clients, invoices, and records. It runs on the office's local network so every PC shares the same up-to-date data.",

      "projects.p2.tag": "Automation",
      "projects.p2.title": "Visa Appointment Alert Bot",
      "projects.p2.desc": "A Python script that checks for available visa appointments and instantly notifies staff via Telegram, so no slot is missed.",

      "projects.p3.tag": "Master's Project \u00b7 Team",
      "projects.p3.title": "Face-Recognition Attendance",
      "projects.p3.desc": "A team graduation project on face-recognition student attendance. I was responsible for the development and implementation of the system.",

      "projects.p4.tag": "Bachelor's Project \u00b7 Team",
      "projects.p4.title": "Hotel Website + Admin Dashboard",
      "projects.p4.desc": "A team Bachelor's graduation project: a hotel website with an admin dashboard to manage rooms and bookings.",

      "projects.p5.tag": "Web \u00b7 Flask",
      "projects.p5.title": "Pinson Travel Website",
      "projects.p5.desc": "A public-facing travel website built with Flask, presenting the agency's services and offers online.",

      "research.title": "Academic coursework",
      "research.desc": "Course projects & reports during my Networks studies, including 802.11s mesh networks, SDN, a Nessus security audit, and an IEEE 802.11 mini-project.",

      "section.security": "Security & Web Defense",
      "security.title": "Security ",
      "security.subtitle": "Hands-on labs where I recreate a real web vulnerability and then implement the secure fix \u2014 to understand attacks from both sides.",
      "sec.idor.title": "IDOR Vulnerability Demo",
      "sec.idor.desc": "An Express/EJS app demonstrating Insecure Direct Object Reference (OWASP A01:2021) \u2014 showing how missing authorization checks expose other users' records, and how to fix them.",
      "sec.cookie.tag": "Auth & Sessions",
      "sec.cookie.title": "CookieBrute",
      "sec.cookie.desc": "An Express/EJS lab that demonstrates how weak, predictable session cookies can be brute-forced \u2014 and the hardening steps that stop it.",

      "section.journey": "My Journey", "journey.title": "Experience & Education ",

      "exp.travel.role": "Software Developer", "exp.travel.company": "Travel & Tourism Agency", "exp.travel.time": "2025 \u2013 Present",
      "exp.travel.l1": "Built a complete internal management system (Python + MySQL) for clients, invoices, and records.",
      "exp.travel.l2": "Hosted it on the local network so every PC in the agency shares the same data.",
      "exp.travel.l3": "Created a Python script that checks visa-appointment availability and sends instant Telegram alerts.",

      "edu.master.title": "Master's in Networks & ICT", "edu.uni": "University of M'Sila",
      "edu.master.meta": "Graduated 2026", "edu.master.desc": "Graduation project (team): a face-recognition student-attendance system, where I was responsible for development and implementation.",
      "edu.bsc.title": "Bachelor's in Information Systems & Software Engineering", "edu.bsc.meta": "2024",
      "edu.bsc.desc": "Graduation project (team): a hotel website with an admin dashboard. Foundation in programming, databases, web development, and networks.",

      "contact.title": "Let's Get In Touch",
      "contact.hireText": "I'm open to study-abroad opportunities and software work. Feel free to reach out \u2014 I'd be happy to talk.",
      "contact.button": "Say Hello", "contact.location": "M'Sila, Algeria",

      "footer.rights": "Crafted with care."
    },

    ar: {
      "nav.cv": "السيرة الذاتية",
      "hero.ctaCV": "تحميل السيرة",
      "contact.form.nameLabel": "اسمك",
      "contact.form.emailLabel": "بريدك الإلكتروني",
      "contact.form.msgLabel": "رسالتك",
      "contact.form.send": "إرسال الرسالة",
      "contact.form.orEmail": "أو راسلني على البريد مباشرة",
      "contact.form.namePh": "الاسم الكامل",
      "contact.form.emailPh": "you@example.com",
      "contact.form.msgPh": "أخبرني عن الفرصة أو المشروع…",
      "stats.projects": "المشاريع", "stats.rank": "ترتيب الماجستير", "stats.langs": "اللغات", "a11y.skip": "تخطَّ إلى المحتوى",
      "nav.about": "\u0645\u0646 \u0623\u0646\u0627", "nav.skills": "\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062a", "nav.projects": "\u0627\u0644\u0645\u0634\u0627\u0631\u064a\u0639",
      "nav.experience": "\u0627\u0644\u062e\u0628\u0631\u0627\u062a", "nav.security": "\u0627\u0644\u0623\u0645\u0646", "nav.contact": "\u062a\u0648\u0627\u0635\u0644",

      "hero.badge": "\u0645\u0646\u0641\u062a\u062d \u0644\u0641\u0631\u0635 \u0627\u0644\u062f\u0631\u0627\u0633\u0629 \u0628\u0627\u0644\u062e\u0627\u0631\u062c \u0648\u0627\u0644\u0639\u0645\u0644 \u0627\u0644\u0628\u0631\u0645\u062c\u064a",
      "hero.hi": "\u0645\u0631\u062d\u0628\u0627\u064b\u060c \u0623\u0646\u0627",
      "hero.title": "\u0645\u0637\u0648\u0651\u0631 \u0628\u0631\u0645\u062c\u064a\u0627\u062a",
      "hero.subtitle": "\u062e\u0631\u0651\u064a\u062c \u0639\u0644\u0648\u0645 \u062d\u0627\u0633\u0648\u0628 \u0648\u0634\u0628\u0643\u0627\u062a \u0648\u0645\u0637\u0648\u0651\u0631 \u0628\u0631\u0645\u062c\u064a\u0627\u062a. \u0623\u0628\u0646\u064a \u0623\u062f\u0648\u0627\u062a \u0648\u064a\u0628 \u0639\u0645\u0644\u064a\u0629 \u0648\u062a\u0637\u0628\u064a\u0642\u0627\u062a Python \u2014 \u0645\u0646 \u0646\u0638\u0627\u0645 \u0625\u062f\u0627\u0631\u0629 \u0645\u062a\u0643\u0627\u0645\u0644 \u0644\u0648\u0643\u0627\u0644\u0629 \u0633\u0641\u0631 \u0625\u0644\u0649 \u0645\u0634\u0627\u0631\u064a\u0639 \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629 \u0648\u062c\u0627\u0646\u0628\u064a\u0629.",
      "hero.ctaProjects": "\u0627\u0633\u062a\u0643\u0634\u0641 \u0623\u0639\u0645\u0627\u0644\u064a",
      "hero.ctaContact": "\u0644\u0646\u062a\u0648\u0627\u0635\u0644",
      "hero.ctaCV": "\u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0633\u064a\u0631\u0629 \u0627\u0644\u0630\u0627\u062a\u064a\u0629",

      "section.about": "\u0645\u0646 \u0623\u0646\u0627", "about.title": "\u0623\u0628\u0646\u064a \u0628\u0631\u0645\u062c\u064a\u0627\u062a \u0645\u0641\u064a\u062f\u0629.",
      "about.badge": "\u062e\u0631\u0651\u064a\u062c", "about.years": "\u0639\u0644\u0648\u0645 \u062d\u0627\u0633\u0648\u0628 \u0648\u0634\u0628\u0643\u0627\u062a",
      "about.p1": "\u0623\u0646\u0627 \u062e\u0631\u0651\u064a\u062c \u0639\u0644\u0648\u0645 \u062d\u0627\u0633\u0648\u0628 \u0648\u0634\u0628\u0643\u0627\u062a \u0645\u0646 \u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u0645\u0633\u064a\u0644\u0629 \u0648\u0645\u0637\u0648\u0651\u0631 \u0628\u0631\u0645\u062c\u064a\u0627\u062a. \u0623\u0633\u062a\u0645\u062a\u0639 \u0628\u062a\u062d\u0648\u064a\u0644 \u0627\u0644\u0645\u0634\u0627\u0643\u0644 \u0627\u0644\u0648\u0627\u0642\u0639\u064a\u0629 \u0625\u0644\u0649 \u0623\u062f\u0648\u0627\u062a \u0646\u0638\u064a\u0641\u0629 \u062a\u0639\u0645\u0644 \u0628\u0643\u0641\u0627\u0621\u0629 \u2014 \u063a\u0627\u0644\u0628\u0627\u064b \u0628\u0640 Python \u0648\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0648\u064a\u0628 \u0627\u0644\u062d\u062f\u064a\u062b\u0629.",
      "about.p2": "\u0623\u0639\u0645\u0644 \u062d\u0627\u0644\u064a\u0627\u064b \u0641\u064a \u0648\u0643\u0627\u0644\u0629 \u0633\u0641\u0631\u060c \u062d\u064a\u062b \u0628\u0646\u064a\u062a \u0646\u0638\u0627\u0645\u0627\u064b \u062f\u0627\u062e\u0644\u064a\u0627\u064b \u0643\u0627\u0645\u0644\u0627\u064b \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631. \u0623\u0624\u0645\u0646 \u0628\u0627\u0644\u062a\u062e\u0637\u064a\u0637 \u0627\u0644\u062c\u064a\u062f \u0642\u0628\u0644 \u0643\u062a\u0627\u0628\u0629 \u0627\u0644\u0643\u0648\u062f\u060c \u0648\u0623\u0633\u062a\u0639\u062f \u0627\u0644\u0622\u0646 \u0644\u0645\u0648\u0627\u0635\u0644\u0629 \u062f\u0631\u0627\u0633\u062a\u064a \u0628\u0627\u0644\u062e\u0627\u0631\u062c.",
      "about.locationLabel": "\u0627\u0644\u0645\u0648\u0642\u0639", "about.location": "\u0627\u0644\u0645\u0633\u064a\u0644\u0629\u060c \u0627\u0644\u062c\u0632\u0627\u0626\u0631",
      "about.fieldLabel": "\u0627\u0644\u062a\u062e\u0635\u0635", "about.degree": "\u0639\u0644\u0648\u0645 \u062d\u0627\u0633\u0648\u0628 \u0648\u0634\u0628\u0643\u0627\u062a",
      "edu.master.rank": "\u0627\u0644\u062a\u0631\u062a\u064a\u0628 12 \u0645\u0646 55",
      "section.expertise": "\u0645\u0647\u0627\u0631\u0627\u062a\u064a", "skills.title": "\u0645\u0627 \u0623\u0639\u0645\u0644 \u0628\u0647 ",
      "skills.cat.programming": "\u0627\u0644\u0628\u0631\u0645\u062c\u0629", "skills.cat.web": "\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628", "skills.cat.approach": "\u0623\u0633\u0644\u0648\u0628 \u0627\u0644\u0639\u0645\u0644",
      "skills.tag.planning": "\u062a\u062e\u0637\u064a\u0637 \u0648\u062a\u062d\u0644\u064a\u0644", "skills.tag.ai": "\u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0628\u0645\u0633\u0627\u0639\u062f\u0629 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a", "skills.tag.problem": "\u062d\u0644 \u0627\u0644\u0645\u0634\u0643\u0644\u0627\u062a",

      "section.work": "\u0623\u0639\u0645\u0627\u0644 \u0645\u062e\u062a\u0627\u0631\u0629", "projects.title": " \u0645\u0634\u0627\u0631\u064a\u0639\u064a ", "projects.viewGithub": "\u0639\u0631\u0636 \u0627\u0644\u0643\u0644 \u0639\u0644\u0649 GitHub",
      "projects.techStack": "\u0627\u0644\u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629", "projects.source": "GitHub", "projects.viewCode": "\u0639\u0631\u0636 \u0627\u0644\u0643\u0648\u062f", "projects.private": "\u0645\u0633\u062a\u0648\u062f\u0639 \u062e\u0627\u0635",

      "projects.p1.tag": "\u0639\u0645\u0644 \u00b7 \u0645\u0646\u062a\u062c \u062d\u0642\u064a\u0642\u064a",
      "projects.p1.title": "\u0646\u0638\u0627\u0645 \u0625\u062f\u0627\u0631\u0629 \u0648\u0643\u0627\u0644\u0629 \u0633\u0641\u0631",
      "projects.p1.desc": "\u0646\u0638\u0627\u0645 \u062f\u0627\u062e\u0644\u064a \u0645\u062a\u0643\u0627\u0645\u0644 \u0628\u0646\u064a\u062a\u0647 \u0644\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u062a\u064a \u0623\u0639\u0645\u0644 \u0628\u0647\u0627\u060c \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u0627\u0644\u0633\u062c\u0644\u0627\u062a. \u064a\u0639\u0645\u0644 \u0639\u0644\u0649 \u0627\u0644\u0634\u0628\u0643\u0629 \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0644\u0644\u0645\u0643\u062a\u0628 \u0644\u062a\u062a\u0634\u0627\u0631\u0643 \u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u062c\u0647\u0632\u0629 \u0646\u0641\u0633 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0645\u062d\u062f\u0651\u062b\u0629.",

      "projects.p2.tag": "\u0623\u062a\u0645\u062a\u0629",
      "projects.p2.title": "\u0628\u0648\u062a \u062a\u0646\u0628\u064a\u0647 \u0645\u0648\u0627\u0639\u064a\u062f \u0627\u0644\u0641\u064a\u0632\u0627",
      "projects.p2.desc": "\u0633\u0643\u0631\u064a\u0628\u062a Python \u064a\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u062a\u0648\u0641\u0651\u0631 \u0645\u0648\u0627\u0639\u064a\u062f \u0627\u0644\u0641\u064a\u0632\u0627 \u0648\u064a\u0631\u0633\u0644 \u062a\u0646\u0628\u064a\u0647\u0627\u064b \u0641\u0648\u0631\u064a\u0627\u064b \u0639\u0628\u0631 \u062a\u064a\u0644\u064a\u063a\u0631\u0627\u0645 \u062d\u062a\u0649 \u0644\u0627 \u064a\u0641\u0648\u062a \u0623\u064a \u0645\u0648\u0639\u062f.",

      "projects.p3.tag": "\u0645\u0634\u0631\u0648\u0639 \u0645\u0627\u0633\u062a\u0631 \u00b7 \u062c\u0645\u0627\u0639\u064a",
      "projects.p3.title": "\u062d\u0636\u0648\u0631 \u0628\u0627\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0648\u062c\u0648\u0647",
      "projects.p3.desc": "\u0645\u0634\u0631\u0648\u0639 \u062a\u062e\u0631\u062c \u062c\u0645\u0627\u0639\u064a \u062d\u0648\u0644 \u062d\u0636\u0648\u0631 \u0627\u0644\u0637\u0644\u0627\u0628 \u0628\u0627\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0648\u062c\u0648\u0647. \u0643\u0646\u062a \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646 \u062a\u0637\u0648\u064a\u0631 \u0648\u062a\u0646\u0641\u064a\u0630 \u0627\u0644\u0646\u0638\u0627\u0645.",

      "projects.p4.tag": "\u0645\u0634\u0631\u0648\u0639 \u0644\u064a\u0633\u0627\u0646\u0633 \u00b7 \u062c\u0645\u0627\u0639\u064a",
      "projects.p4.title": "\u0645\u0648\u0642\u0639 \u0641\u0646\u062f\u0642 + \u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645",
      "projects.p4.desc": "\u0645\u0634\u0631\u0648\u0639 \u062a\u062e\u0631\u062c \u0644\u064a\u0633\u0627\u0646\u0633 \u062c\u0645\u0627\u0639\u064a: \u0645\u0648\u0642\u0639 \u0641\u0646\u062f\u0642 \u0645\u0639 \u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645 \u0644\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u063a\u0631\u0641 \u0648\u0627\u0644\u062d\u062c\u0648\u0632\u0627\u062a.",

      "projects.p5.tag": "\u0648\u064a\u0628 \u00b7 Flask",
      "projects.p5.title": "\u0645\u0648\u0642\u0639 Pinson \u0644\u0644\u0633\u0641\u0631",
      "projects.p5.desc": "\u0645\u0648\u0642\u0639 \u0633\u0641\u0631 \u0645\u0648\u062c\u0651\u0647 \u0644\u0644\u062c\u0645\u0647\u0648\u0631 \u0645\u0628\u0646\u064a \u0628\u0640 Flask\u060c \u064a\u0639\u0631\u0636 \u062e\u062f\u0645\u0627\u062a \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0648\u0639\u0631\u0648\u0636\u0647\u0627 \u0639\u0628\u0631 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a.",

      "research.title": "\u062f\u0631\u0627\u0633\u0627\u062a \u0623\u0643\u0627\u062f\u064a\u0645\u064a\u0629",
      "research.desc": "\u0645\u0634\u0627\u0631\u064a\u0639 \u0648\u062a\u0642\u0627\u0631\u064a\u0631 \u062f\u0631\u0627\u0633\u064a\u0629 \u0636\u0645\u0646 \u062a\u062e\u0635\u0635 \u0627\u0644\u0634\u0628\u0643\u0627\u062a\u060c \u062a\u0634\u0645\u0644 \u0634\u0628\u0643\u0627\u062a 802.11s\u060c \u0648 SDN\u060c \u0648\u062a\u062f\u0642\u064a\u0642\u0627\u064b \u0623\u0645\u0646\u064a\u0627\u064b \u0628\u0640 Nessus\u060c \u0648\u0645\u0634\u0631\u0648\u0639\u0627\u064b \u0645\u0635\u063a\u0631\u0627\u064b \u0644\u0640 IEEE 802.11.",

      "section.security": "\u0627\u0644\u0623\u0645\u0646 \u0648\u0627\u0644\u062f\u0641\u0627\u0639 \u0639\u0646 \u0627\u0644\u0648\u064a\u0628",
      "security.title": "\u0627\u0644\u0623\u0645\u0646 ",
      "security.subtitle": "\u0645\u062e\u062a\u0628\u0631\u0627\u062a \u0639\u0645\u0644\u064a\u0629 \u0623\u0639\u064a\u062f \u0641\u064a\u0647\u0627 \u0625\u0646\u0634\u0627\u0621 \u062b\u063a\u0631\u0629 \u0648\u064a\u0628 \u062d\u0642\u064a\u0642\u064a\u0629 \u062b\u0645 \u0623\u0637\u0628\u0651\u0642 \u0627\u0644\u0625\u0635\u0644\u0627\u062d \u0627\u0644\u0622\u0645\u0646 \u2014 \u0644\u0641\u0647\u0645 \u0627\u0644\u0647\u062c\u0645\u0627\u062a \u0645\u0646 \u0627\u0644\u062c\u0627\u0646\u0628\u064a\u0646.",
      "sec.idor.title": "\u0639\u0631\u0636 \u062b\u063a\u0631\u0629 IDOR",
      "sec.idor.desc": "\u062a\u0637\u0628\u064a\u0642 Express/EJS \u064a\u0648\u0636\u0651\u062d \u062b\u063a\u0631\u0629 \u0627\u0644\u0648\u0635\u0648\u0644 \u063a\u064a\u0631 \u0627\u0644\u0645\u0628\u0627\u0634\u0631 \u0644\u0644\u0643\u0627\u0626\u0646\u0627\u062a (OWASP A01:2021) \u2014 \u0648\u0643\u064a\u0641 \u064a\u0643\u0634\u0641 \u063a\u064a\u0627\u0628 \u0627\u0644\u062a\u062d\u0642\u0642 \u0645\u0646 \u0627\u0644\u0635\u0644\u0627\u062d\u064a\u0627\u062a \u0633\u062c\u0644\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u064a\u0646 \u0627\u0644\u0622\u062e\u0631\u064a\u0646\u060c \u0648\u0637\u0631\u064a\u0642\u0629 \u0625\u0635\u0644\u0627\u062d\u0647\u0627.",
      "sec.cookie.tag": "\u0627\u0644\u0645\u0635\u0627\u062f\u0642\u0629 \u0648\u0627\u0644\u062c\u0644\u0633\u0627\u062a",
      "sec.cookie.title": "CookieBrute",
      "sec.cookie.desc": "\u0645\u062e\u062a\u0628\u0631 Express/EJS \u064a\u0648\u0636\u0651\u062d \u0643\u064a\u0641 \u064a\u0645\u0643\u0646 \u0627\u062e\u062a\u0631\u0627\u0642 \u0643\u0648\u0643\u064a\u0632 \u0627\u0644\u062c\u0644\u0633\u0627\u062a \u0627\u0644\u0636\u0639\u064a\u0641\u0629 \u0648\u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062a\u0646\u0628\u0624 \u0628\u0627\u0644\u062a\u062e\u0645\u064a\u0646 \u2014 \u0648\u062e\u0637\u0648\u0627\u062a \u0627\u0644\u062a\u0623\u0645\u064a\u0646 \u0627\u0644\u062a\u064a \u062a\u0648\u0642\u0641\u0647.",

      "section.journey": "\u0645\u0633\u064a\u0631\u062a\u064a", "journey.title": "\u0627\u0644\u062e\u0628\u0631\u0627\u062a \u0648\u0627\u0644\u062a\u0639\u0644\u064a\u0645 ",

      "exp.travel.role": "\u0645\u0637\u0648\u0651\u0631 \u0628\u0631\u0645\u062c\u064a\u0627\u062a", "exp.travel.company": "\u0648\u0643\u0627\u0644\u0629 \u0633\u064a\u0627\u062d\u0629 \u0648\u0633\u0641\u0631", "exp.travel.time": "2025 \u2013 \u0627\u0644\u0622\u0646",
      "exp.travel.l1": "\u0628\u0646\u064a\u062a \u0646\u0638\u0627\u0645 \u0625\u062f\u0627\u0631\u0629 \u062f\u0627\u062e\u0644\u064a \u0645\u062a\u0643\u0627\u0645\u0644 (Python + MySQL) \u0644\u0644\u0639\u0645\u0644\u0627\u0621 \u0648\u0627\u0644\u0641\u0648\u0627\u062a\u064a\u0631 \u0648\u0627\u0644\u0633\u062c\u0644\u0627\u062a.",
      "exp.travel.l2": "\u0627\u0633\u062a\u0636\u0641\u062a\u0647 \u0639\u0644\u0649 \u0627\u0644\u0634\u0628\u0643\u0629 \u0627\u0644\u0645\u062d\u0644\u064a\u0629 \u0644\u062a\u062a\u0634\u0627\u0631\u0643 \u062c\u0645\u064a\u0639 \u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0648\u0643\u0627\u0644\u0629 \u0646\u0641\u0633 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a.",
      "exp.travel.l3": "\u0623\u0646\u0634\u0623\u062a \u0633\u0643\u0631\u064a\u0628\u062a Python \u064a\u062a\u062d\u0642\u0651\u0642 \u0645\u0646 \u062a\u0648\u0641\u0651\u0631 \u0645\u0648\u0627\u0639\u064a\u062f \u0627\u0644\u0641\u064a\u0632\u0627 \u0648\u064a\u0631\u0633\u0644 \u062a\u0646\u0628\u064a\u0647\u0627\u062a \u0641\u0648\u0631\u064a\u0629 \u0639\u0628\u0631 \u062a\u064a\u0644\u064a\u063a\u0631\u0627\u0645.",

      "edu.master.title": "\u0645\u0627\u0633\u062a\u0631 \u0641\u064a \u0627\u0644\u0634\u0628\u0643\u0627\u062a \u0648\u062a\u0643\u0646\u0648\u0644\u0648\u062c\u064a\u0627 \u0627\u0644\u0625\u0639\u0644\u0627\u0645 \u0648\u0627\u0644\u0627\u062a\u0635\u0627\u0644", "edu.uni": "\u062c\u0627\u0645\u0639\u0629 \u0627\u0644\u0645\u0633\u064a\u0644\u0629",
      "edu.master.meta": "\u062a\u062e\u0631\u062c 2026", "edu.master.desc": "\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u062a\u062e\u0631\u062c (\u062c\u0645\u0627\u0639\u064a): \u0646\u0638\u0627\u0645 \u062d\u0636\u0648\u0631 \u0644\u0644\u0637\u0644\u0627\u0628 \u0628\u0627\u0644\u062a\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0648\u062c\u0648\u0647\u060c \u0643\u0646\u062a \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0641\u064a\u0647 \u0639\u0646 \u0627\u0644\u062a\u0637\u0648\u064a\u0631 \u0648\u0627\u0644\u062a\u0646\u0641\u064a\u0630.",
      "edu.bsc.title": "\u0644\u064a\u0633\u0627\u0646\u0633 \u0641\u064a \u0646\u0638\u0645 \u0627\u0644\u0645\u0639\u0644\u0648\u0645\u0627\u062a \u0648\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u0628\u0631\u0645\u062c\u064a\u0627\u062a", "edu.bsc.meta": "2024",
      "edu.bsc.desc": "\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u062a\u062e\u0631\u062c (\u062c\u0645\u0627\u0639\u064a): \u0645\u0648\u0642\u0639 \u0641\u0646\u062f\u0642 \u0645\u0639 \u0644\u0648\u062d\u0629 \u062a\u062d\u0643\u0645. \u0623\u0633\u0627\u0633 \u0641\u064a \u0627\u0644\u0628\u0631\u0645\u062c\u0629 \u0648\u0642\u0648\u0627\u0639\u062f \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0648\u062a\u0637\u0648\u064a\u0631 \u0627\u0644\u0648\u064a\u0628 \u0648\u0627\u0644\u0634\u0628\u0643\u0627\u062a.",

      "contact.title": "\u0644\u0646\u062a\u0648\u0627\u0635\u0644",
      "contact.hireText": "\u0623\u0646\u0627 \u0645\u0646\u0641\u062a\u062d \u0644\u0641\u0631\u0635 \u0627\u0644\u062f\u0631\u0627\u0633\u0629 \u0628\u0627\u0644\u062e\u0627\u0631\u062c \u0648\u0644\u0644\u0639\u0645\u0644 \u0627\u0644\u0628\u0631\u0645\u062c\u064a. \u0644\u0627 \u062a\u062a\u0631\u062f\u062f \u0641\u064a \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u2014 \u064a\u0633\u0639\u062f\u0646\u064a \u0627\u0644\u062d\u062f\u064a\u062b \u0645\u0639\u0643.",
      "contact.button": "\u0623\u0631\u0633\u0644 \u0631\u0633\u0627\u0644\u0629", "contact.location": "\u0627\u0644\u0645\u0633\u064a\u0644\u0629\u060c \u0627\u0644\u062c\u0632\u0627\u0626\u0631",

      "footer.rights": "\u0635\u064f\u0646\u0639 \u0628\u0639\u0646\u0627\u064a\u0629."
    }
  };

  let typingTimeout;
  function startTypingEffect(text) {
    const typingSpan = document.getElementById("typing-text");
    if (!typingSpan) return;
    if (prefersReducedMotion) { typingSpan.textContent = text; return; }
    clearTimeout(typingTimeout);
    typingSpan.textContent = "";
    let i = 0;
    function typeChar() {
      if (i < text.length) {
        typingSpan.textContent += text.charAt(i);
        i++;
        typingTimeout = setTimeout(typeChar, 45);
      }
    }
    typeChar();
  }

  function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key] !== undefined) {
        if (el.id === "typing-text") {
          startTypingEffect(translations[lang][key]);
        } else {
          el.innerHTML = translations[lang][key];
        }
      }
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const phKey = el.getAttribute("data-i18n-ph");
      if (translations[lang] && translations[lang][phKey] !== undefined) {
        el.setAttribute("placeholder", translations[lang][phKey]);
      }
    });
    htmlTag.lang = lang;
    bodyTag.dir = lang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", lang);
    if (btnEn && btnAr) {
      btnEn.classList.toggle("active", lang === "en");
      btnAr.classList.toggle("active", lang === "ar");
    }
  }

  if (btnEn && btnAr) {
    btnEn.addEventListener("click", () => setLanguage("en"));
    btnAr.addEventListener("click", () => setLanguage("ar"));
  }
  setLanguage(localStorage.getItem("lang") || "en");

  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlTag.setAttribute("data-theme", savedTheme);
  if (themeToggle) {
    const updateThemeIcon = (theme) => {
      themeToggle.innerHTML = theme === "dark"
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    };
    updateThemeIcon(savedTheme);
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlTag.getAttribute("data-theme");
      const newTheme = currentTheme === "light" ? "dark" : "light";
      htmlTag.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  const revealElements = document.querySelectorAll("[data-reveal]");
  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add("revealed"));
  } else {
    const revealOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute("data-reveal-delay");
          if (delay) entry.target.style.transitionDelay = `${delay}ms`;
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);
    revealElements.forEach(el => revealOnScroll.observe(el));
  }

  window.addEventListener("scroll", () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "var(--shadow-sm)";
      navbar.style.background = "var(--bg-glass)";
      if (backToTop) backToTop.classList.add("show");
    } else {
      navbar.style.boxShadow = "none";
      if (backToTop) backToTop.classList.remove("show");
    }
  });
  if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Active nav link highlighting on scroll (scrollspy)
  const navLinks = Array.from(document.querySelectorAll(".navbar-nav .nav-link"));
  const spySections = navLinks
    .map(link => {
      const href = link.getAttribute("href");
      return href && href.startsWith("#") && href.length > 1 ? document.querySelector(href) : null;
    })
    .filter(Boolean);
  if (spySections.length) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = "#" + entry.target.id;
          navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === id));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    spySections.forEach(sec => spy.observe(sec));
  }

  // Mobile: auto-close the collapsed navbar menu after tapping a link
  const navCollapse = document.getElementById("navContent");
  if (navCollapse) {
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (!navCollapse.classList.contains("show")) return;
        if (window.bootstrap && window.bootstrap.Collapse) {
          window.bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
        } else {
          navCollapse.classList.remove("show");
        }
      });
    });
  }

});


// Progressive Web App: register the service worker for offline support.
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("sw.js").catch(function () {});
  });
}

/* ============================================================
   Contact form (Web3Forms, AJAX) — self-contained
   ============================================================ */
(function () {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const statusEl = document.getElementById("cf-status");
  const submitBtn = document.getElementById("cf-submit");
  const keyInput = form.querySelector('[name="access_key"]');
  const honeypot = form.querySelector('[name="botcheck"]');

  const MSG = {
    en: {
      sending: "Sending\u2026",
      success: "\u2713 Thanks! Your message has been sent \u2014 I'll get back to you soon.",
      error: "Something went wrong. Please try again, or email me directly.",
      invalid: "Please fill in all fields correctly.",
      nokey: "The contact form isn't configured yet. Please email me directly for now."
    },
    ar: {
      sending: "\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644\u2026",
      success: "\u2713 \u0634\u0643\u0631\u0627\u064b! \u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0631\u0633\u0627\u0644\u062a\u0643 \u2014 \u0633\u0623\u0631\u062f\u0651 \u0639\u0644\u064a\u0643 \u0642\u0631\u064a\u0628\u0627\u064b.",
      error: "\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627. \u062d\u0627\u0648\u0644 \u0645\u062c\u062f\u062f\u0627\u064b \u0623\u0648 \u0631\u0627\u0633\u0644\u0646\u064a \u0639\u0644\u0649 \u0627\u0644\u0628\u0631\u064a\u062f \u0645\u0628\u0627\u0634\u0631\u0629.",
      invalid: "\u064a\u0631\u062c\u0649 \u062a\u0639\u0628\u0626\u0629 \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0644 \u0628\u0634\u0643\u0644 \u0635\u062d\u064a\u062d.",
      nokey: "\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u063a\u064a\u0631 \u0645\u0647\u064a\u0651\u0623 \u0628\u0639\u062f. \u0631\u0627\u0633\u0644\u0646\u064a \u0639\u0644\u0649 \u0627\u0644\u0628\u0631\u064a\u062f \u0645\u0628\u0627\u0634\u0631\u0629 \u062d\u0627\u0644\u064a\u0627\u064b."
    }
  };
  const t = (k) => (MSG[localStorage.getItem("lang") || "en"] || MSG.en)[k];

  function setStatus(msg, kind) {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.className = "cf-status mt-3 mb-0" + (kind ? " cf-" + kind : "");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (honeypot && honeypot.checked) return; // bot trap
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus(t("invalid"), "error");
      return;
    }
    const key = keyInput ? keyInput.value.trim() : "";
    if (!key || key.indexOf("YOUR_") === 0) {
      setStatus(t("nokey"), "error");
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    if (submitBtn) submitBtn.disabled = true;
    setStatus(t("sending"), "sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (json.success) {
        form.reset();
        setStatus(t("success"), "success");
      } else {
        setStatus(t("error"), "error");
      }
    } catch (err) {
      setStatus(t("error"), "error");
    } finally {
      if (submitBtn) submitBtn.disabled = false;
    }
  });
})();
