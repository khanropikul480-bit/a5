/* IvorySatchelRidge Master Interactive Script */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Switcher (Dark / Light)
  const themeToggleBtn = document.getElementById('themeToggle');
  const currentTheme = localStorage.getItem('ivorysatchel_theme') || 'light';
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '☀️';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggleBtn) themeToggleBtn.innerHTML = '🌙';
  }
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('ivorysatchel_theme', 'light');
        themeToggleBtn.innerHTML = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('ivorysatchel_theme', 'dark');
        themeToggleBtn.innerHTML = '☀️';
      }
    });
  }

  // 2. Mobile Navigation Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      mobileToggle.innerHTML = navMenu.classList.contains('open') ? '✕' : '☰';
    });
  }

  // 3. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(el => el.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. Interactive Leather Atelier Studio Configurator
  const leatherData = {
    boxcalf: {
      title: "French Box Calfskin (Veau Box)",
      desc: "Chrome-tanned fine-grain calfskin famous for its smooth, mirror-like gloss and structured temper. Ideal for formal satchels and structured heritage flap bags.",
      origin: "Tanneries d'Annonay & Puy, France",
      temper: "Firm & Structured (Tempered)",
      thickness: "1.4mm – 1.6mm Full Thickness",
      patina: "Subtle Gloss Deepening with Age",
      image: "images/bag-cognac-briefcase-classic.jpg"
    },
    epsom: {
      title: "Embossed Epsom Veau Calfskin",
      desc: "Rigid, scratch-resistant pressed grain calfskin with exceptional water resilience and vibrant colorfastness across daily urban commutes.",
      origin: "Tannerie Haas, Alsace, France",
      temper: "Rigid & Scratch-Resistant",
      thickness: "1.6mm – 1.8mm Embossed",
      patina: "Maintains Architectural Geometry",
      image: "images/bag-luxury-tote-minimalist.jpg"
    },
    bridle: {
      title: "English Bridle Leather (Oak Bark Tanned)",
      desc: "Traditional pit-tanned full-grain bridle hide impregnated with tallow and beeswax for supreme tensile strength and rich pulling pull-up patina.",
      origin: "J&FJ Baker & Co, Devon, England",
      temper: "Heavy Harness & Supple Core",
      thickness: "3.5mm – 4.0mm Solid Hide",
      patina: "Deep Mahogany Glaze Evolution",
      image: "images/bag-full-grain-leather-hides.jpg"
    }
  };

  const leatherTabs = document.querySelectorAll('.leather-tab-btn');
  const leatherTitle = document.getElementById('leatherTitle');
  const leatherDesc = document.getElementById('leatherDesc');
  const leatherOrigin = document.getElementById('leatherOrigin');
  const leatherTemper = document.getElementById('leatherTemper');
  const leatherThickness = document.getElementById('leatherThickness');
  const leatherPatina = document.getElementById('leatherPatina');
  const leatherImg = document.getElementById('leatherImg');

  if (leatherTabs.length > 0) {
    leatherTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        leatherTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const lKey = tab.getAttribute('data-leather');
        const data = leatherData[lKey];
        if (data) {
          if (leatherTitle) leatherTitle.textContent = data.title;
          if (leatherDesc) leatherDesc.textContent = data.desc;
          if (leatherOrigin) leatherOrigin.textContent = data.origin;
          if (leatherTemper) leatherTemper.textContent = data.temper;
          if (leatherThickness) leatherThickness.textContent = data.thickness;
          if (leatherPatina) leatherPatina.textContent = data.patina;
          if (leatherImg) leatherImg.src = data.image;
        }
      });
    });
  }

  // 5. Sticky Header Shadow on Scroll
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });
});
