let currentIndex = 0;
const images = document.querySelectorAll('.clickable-image');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

images.forEach((image, index) => {
    image.addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = index;
        lightboxImg.src = this.href; // Sets the src of lightbox-img
        lightbox.style.display = 'block';
    });
});

document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

function changeSlide(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    lightboxImg.src = images[currentIndex].href; // Updates the src of lightbox-img
}


