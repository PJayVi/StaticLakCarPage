document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('#mobile-menu');
  const navMenu = document.querySelector('#nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', function() {
      // Przełączamy klasy dla przycisku i menu
      menuBtn.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
      
      // Opcjonalnie: blokada przewijania strony, gdy menu jest otwarte
      document.body.style.overflow = navMenu.classList.contains('is-active') ? 'hidden' : 'auto';
    });

    // Zamykanie po kliknięciu w link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('is-active');
        navMenu.classList.remove('is-active');
        document.body.style.overflow = 'auto';
      });
    });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.slider-track');
  const slides = document.querySelectorAll('.slide');
  
  // 1. Klonujemy zawartość, aby stworzyć efekt nieskończonego pętlenia
  const trackContent = track.innerHTML;
  track.innerHTML += trackContent; 

  // 2. Dynamicznie ustawiamy czas trwania animacji na podstawie liczby zdjęć
  // Przyjmujemy ok. 3 sekundy na każde zdjęcie dla płynnego ruchu
  const totalSlides = slides.length;
  const animationDuration = totalSlides * 3; 
  track.style.animationDuration = `${animationDuration}s`;
});


function openLightbox(src) {
  const lightbox = document.getElementById('lightbox-overlay');
  const lightboxImg = document.getElementById('lightbox-img');
  
  lightboxImg.src = src;
  lightbox.classList.add('active');
  // Blokujemy przewijanie strony pod spodem
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-overlay');
  lightbox.classList.remove('active');
  // Przywracamy przewijanie
  document.body.style.overflow = 'auto';
}

// Opcjonalnie: Zamykanie klawiszem ESC
document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") closeLightbox();
});