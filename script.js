    // Smooth Scroll Functionality
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        });
      });
      // Get the lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxVideo = document.getElementById('lightbox-video');
const closeBtn = document.querySelector('.close');

// Show the lightbox with image or video content
document.querySelectorAll('[data-lightbox]').forEach(item => {
  item.addEventListener('click', function () {
    lightbox.style.display = 'flex';
    if (this.tagName === 'IMG') {
      lightboxImg.src = this.src;
      lightboxImg.style.display = 'block';
      lightboxVideo.style.display = 'none';
    } else if (this.tagName === 'VIDEO') {
      lightboxVideo.src = this.src;
      lightboxVideo.style.display = 'block';
      lightboxImg.style.display = 'none';
    }
  });
});

// Close lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
  lightboxVideo.src = '';
});

// Close lightbox when clicking outside content area
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
    lightboxVideo.src = '';
  }
});
