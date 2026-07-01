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

  if (preloader) {
    setTimeout(() => {
      preloader.style.opacity = "0";
      setTimeout(() => preloader.remove(), 500);
    }, 300);
  }

  const translations = {
    en: {
      "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
      "nav.experience": "Experience", "nav.contact": "Contact",

      "hero.badge": "Open to study-abroad & software opportunities",
      "hero.hi": "Hi, I'm",
      "hero.title": "Software Developer",
      "hero.subtitle": "Computer Science & Networks graduate and software developer. I build practical web tools and Python applications — from a complete management system for a travel agency to academic and side projects.",
      "hero.ctaProjects": "Explore My Work",
      "hero.ctaContact": "Let's Talk",
      "hero.ctaCV": "Download Resume",

      "section.about": "Who I Am", "about.title": "Building Useful <span class='brand-accent'>Software</span>.",
      "about.badge": "Graduate", "about.years": "CS & Networks",
      "about.p1": "I'm a Computer Science & Networks graduate from the University of M'Sila and a software developer. I enjoy turning real problems into clean, working tools — mostly with Python and modern web technologies.",
      "about.p2": "I currently work at a travel agency, where I built a complete internal system to manage clients and invoices. I value careful planning before writing code, and I'm now preparing to continue my studies abroad.",
      "about.locationLabel": "Location", "about.location": "M'Sila, Algeria",
      "about.fieldLabel": "Field", "about.degree": "Computer Science & Networks",

      "section.expertise": "My Skills", "skills.title": "What I <span class='brand-accent'>Work With</span>",
      "skills.cat.programming": "Programming", "skills.cat.web": "Web Development", "skills.cat.approach": "Approach",
      "skills.tag.planning": "Planning & analysis", "skills.tag.ai": "AI-assisted development", "skills.tag.problem": "Problem solving",

      "section.work": "Selected Work", "projects.title": "My <span class='brand-accent'>Projects</span>", "projects.viewGithub": "View all on GitHub",
      "projects.techStack": "Tech Stack", "projects.source": "GitHub",
      "edu.master.rank": "Ranked 12 of 55",
      "projects.p1.tag": "Work · Real Product",
      "projects.p1.title": "Travel Agency Management System",
      "projects.p1.desc": "A complete internal system I built for the travel agency where I work, to manage clients, invoices, and records. It runs on the office's local network so every PC shares the same up-to-date data.",

      "projects.p2.tag": "Automation",
      "projects.p2.title": "Visa Appointment Alert Bot",
      "projects.p2.desc": "A Python script that checks for available visa appointments and instantly notifies staff via Telegram, so no slot is missed.",

      "projects.p3.tag": "Master's Project · Team",
      "projects.p3.title": "Face-Recognition Attendance",
      "projects.p3.desc": "A team graduation project on face-recognition student attendance. I was responsible for the development and implementation of the system.",

      "projects.p4.tag": "Bachelor's Project · Team",
      "projects.p4.title": "Hotel Website + Admin Dashboard",
      "projects.p4.desc": "A team Bachelor's graduation project: a hotel website with an admin dashboard to manage rooms and bookings.",

      "research.title": "Academic coursework",
      "research.desc": "Course projects & reports during my Networks studies, including 802.11s mesh networks, SDN, a Nessus security audit, and an IEEE 802.11 mini-project.",

      "section.journey": "My Journey", "journey.title": "Experience & <span class='brand-accent'>Education</span>",

      "exp.travel.role": "Software Developer", "exp.travel.company": "Travel & Tourism Agency", "exp.travel.time": "2025 – Present",
      "exp.travel.l1": "Built a complete internal management system (Python + MySQL) for clients, invoices, and records.",
      "exp.travel.l2": "Hosted it on the local network so every PC in the agency shares the same data.",
      "exp.travel.l3": "Created a Python script that checks visa-appointment availability and sends instant Telegram alerts.",

      "edu.master.title": "Master's in Networks & ICT", "edu.uni": "University of M'Sila",
      "edu.master.meta": "Graduated 2026", "edu.master.desc": "Graduation project (team): a face-recognition student-attendance system, where I was responsible for development and implementation.",
      "edu.bsc.title": "Bachelor's in Information Systems & Software Engineering", "edu.bsc.meta": "2024",
      "edu.bsc.desc": "Graduation project (team): a hotel website with an admin dashboard. Foundation in programming, databases, web development, and networks.",

      "contact.title": "Let's Get In Touch",
      "contact.hireText": "I'm open to study-abroad opportunities and software work. Feel free to reach out — I'd be happy to talk.",
      "contact.button": "Say Hello", "contact.location": "M'Sila, Algeria",

      "footer.rights": "Crafted with care."
    },

    ar: {
      "nav.about": "من أنا", "nav.skills": "المهارات", "nav.projects": "المشاريع",
      "nav.experience": "الخبرات", "nav.contact": "تواصل",

      "hero.badge": "منفتح لفرص الدراسة بالخارج والعمل البرمجي",
      "hero.hi": "مرحباً، أنا",
      "hero.title": "مطوّر برمجيات",
      "hero.subtitle": "خرّيج علوم حاسوب وشبكات ومطوّر برمجيات. أبني أدوات ويب عملية وتطبيقات Python — من نظام إدارة متكامل لوكالة سفر إلى مشاريع أكاديمية وجانبية.",
      "hero.ctaProjects": "استكشف أعمالي",
      "hero.ctaContact": "لنتواصل",
      "hero.ctaCV": "تحميل السيرة الذاتية",

      "section.about": "من أنا", "about.title": "أبني <span class='brand-accent'>برمجيات مفيدة</span>.",
      "about.badge": "خرّيج", "about.years": "علوم حاسوب وشبكات",
      "about.p1": "أنا خرّيج علوم حاسوب وشبكات من جامعة المسيلة ومطوّر برمجيات. أستمتع بتحويل المشاكل الواقعية إلى أدوات نظيفة تعمل بكفاءة — غالباً بـ Python وتقنيات الويب الحديثة.",
      "about.p2": "أعمل حالياً في وكالة سفر، حيث بنيت نظاماً داخلياً كاملاً لإدارة العملاء والفواتير. أؤمن بالتخطيط الجيد قبل كتابة الكود، وأستعد الآن لمواصلة دراستي بالخارج.",
      "about.locationLabel": "الموقع", "about.location": "المسيلة، الجزائر",
      "about.fieldLabel": "التخصص", "about.degree": "علوم حاسوب وشبكات",
      "edu.master.rank": "الترتيب 12 من 55",
      "section.expertise": "مهاراتي", "skills.title": "ما <span class='brand-accent'>أعمل به</span>",
      "skills.cat.programming": "البرمجة", "skills.cat.web": "تطوير الويب", "skills.cat.approach": "أسلوب العمل",
      "skills.tag.planning": "تخطيط وتحليل", "skills.tag.ai": "التطوير بمساعدة الذكاء الاصطناعي", "skills.tag.problem": "حل المشكلات",

      "section.work": "أعمال مختارة", "projects.title": "<span class='brand-accent'>مشاريعي</span>", "projects.viewGithub": "عرض الكل على GitHub",
      "projects.techStack": "التقنيات المستخدمة", "projects.source": "GitHub",

      "projects.p1.tag": "عمل · منتج حقيقي",
      "projects.p1.title": "نظام إدارة وكالة سفر",
      "projects.p1.desc": "نظام داخلي متكامل بنيته لوكالة السفر التي أعمل بها، لإدارة العملاء والفواتير والسجلات. يعمل على الشبكة المحلية للمكتب لتتشارك جميع الأجهزة نفس البيانات المحدّثة.",

      "projects.p2.tag": "أتمتة",
      "projects.p2.title": "بوت تنبيه مواعيد الفيزا",
      "projects.p2.desc": "سكريبت Python يتحقّق من توفّر مواعيد الفيزا ويرسل تنبيهاً فورياً عبر تيليغرام حتى لا يفوت أي موعد.",

      "projects.p3.tag": "مشروع ماستر · جماعي",
      "projects.p3.title": "حضور بالتعرف على الوجوه",
      "projects.p3.desc": "مشروع تخرج جماعي حول حضور الطلاب بالتعرف على الوجوه. كنت المسؤول عن تطوير وتنفيذ النظام.",

      "projects.p4.tag": "مشروع ليسانس · جماعي",
      "projects.p4.title": "موقع فندق + لوحة تحكم",
      "projects.p4.desc": "مشروع تخرج ليسانس جماعي: موقع فندق مع لوحة تحكم لإدارة الغرف والحجوزات.",

      "research.title": "دراسات أكاديمية",
      "research.desc": "مشاريع وتقارير دراسية ضمن تخصص الشبكات، تشمل شبكات 802.11s، و SDN، وتدقيقاً أمنياً بـ Nessus، ومشروعاً مصغراً لـ IEEE 802.11.",

      "section.journey": "مسيرتي", "journey.title": "الخبرات <span class='brand-accent'>والتعليم</span>",

      "exp.travel.role": "مطوّر برمجيات", "exp.travel.company": "وكالة سياحة وسفر", "exp.travel.time": "2025 – الآن",
      "exp.travel.l1": "بنيت نظام إدارة داخلي متكامل (Python + MySQL) للعملاء والفواتير والسجلات.",
      "exp.travel.l2": "استضفته على الشبكة المحلية لتتشارك جميع أجهزة الوكالة نفس البيانات.",
      "exp.travel.l3": "أنشأت سكريبت Python يتحقّق من توفّر مواعيد الفيزا ويرسل تنبيهات فورية عبر تيليغرام.",

      "edu.master.title": "ماستر في الشبكات وتكنولوجيا الإعلام والاتصال", "edu.uni": "جامعة المسيلة",
      "edu.master.meta": "تخرج 2026", "edu.master.desc": "مشروع التخرج (جماعي): نظام حضور للطلاب بالتعرف على الوجوه، كنت المسؤول فيه عن التطوير والتنفيذ.",
      "edu.bsc.title": "ليسانس في نظم المعلومات وهندسة البرمجيات", "edu.bsc.meta": "2024",
      "edu.bsc.desc": "مشروع التخرج (جماعي): موقع فندق مع لوحة تحكم. أساس في البرمجة وقواعد البيانات وتطوير الويب والشبكات.",

      "contact.title": "لنتواصل",
      "contact.hireText": "أنا منفتح لفرص الدراسة بالخارج وللعمل البرمجي. لا تتردد في التواصل — يسعدني الحديث معك.",
      "contact.button": "أرسل رسالة", "contact.location": "المسيلة، الجزائر",

      "footer.rights": "صُنع بعناية."
    }
  };

  let typingTimeout;
  function startTypingEffect(text) {
    const typingSpan = document.getElementById("typing-text");
    if (!typingSpan) return;
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
      themeToggle.innerHTML = theme === "dark" ? '<i class="fa-solid fa-sun text-warning"></i>' : '<i class="fa-solid fa-moon"></i>';
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

});
