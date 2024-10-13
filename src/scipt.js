// Array of background images
const images = [
    'url("./assets/images/hero/hero1.jpg")',
    'url("./assets/images/hero/hero2.jpg")',
    'url("./assets/images/hero/hero3.jpg")',
    'url("./assets/images/hero/hero4.jpg")'
];

let currentIndex = 0;
const backgroundContainer = document.querySelector('.background-container');

// Function to change background image
function changeBackground() {
    currentIndex = (currentIndex + 1) % images.length;
    backgroundContainer.style.backgroundImage = images[currentIndex];
}

// Change the background every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);

// Set the initial background image
backgroundContainer.style.backgroundImage = images[0];




