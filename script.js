const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const section = document.querySelector(this.getAttribute('href'));

    section.scrollIntoView({
      behavior: 'smooth'
    });
  });
});