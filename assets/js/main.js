/**
 * Zey Brow & Wax - Main JavaScript
 */

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
      const isActive = navMenu.classList.contains('active');
      mobileMenuToggle.querySelector('span').textContent = isActive ? '✕' : '☰';
    });
  }

  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 968) {
        navMenu.classList.remove('active');
        if (mobileMenuToggle) {
          mobileMenuToggle.querySelector('span').textContent = '☰';
        }
      }
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80; // Navigation height offset
        const targetPosition = target.offsetTop - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Active navigation link on scroll
  const sections = document.querySelectorAll('section[id]');

  function setActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        navLink.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveNavLink);
  setActiveNavLink(); // Set initial active link

  // Add scroll effect to navigation
  const navigation = document.querySelector('.navigation');
  let lastScroll = 0;

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navigation.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      navigation.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    }

    lastScroll = currentScroll;
  });

  // Fade in animations on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, observerOptions);

  // Observe all service categories and contact items
  document.querySelectorAll('.service-category, .contact-item, .about-content').forEach(el => {
    observer.observe(el);
  });

  // Vagaro booking widget integration
  // If you have a Vagaro widget script, initialize it here
  if (typeof VagaroWidget !== 'undefined') {
    // Example initialization - adjust based on your Vagaro settings
    // VagaroWidget.init({
    //   merchantId: 'YOUR_MERCHANT_ID',
    //   containerId: 'vagaro-booking-widget'
    // });
  }
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});
