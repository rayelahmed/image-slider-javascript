const sliderFunc = () => {
  const sliderContent = document.getElementById("slider-content");
  const arrowLeft = document.getElementById("fa-arrow-left");
  const arrowRight = document.getElementById("fa-arrow-right");

  let currentIndex = 0; // Start with the first image
  const intervalTime = 5000;

  // Function to show the current set of images
  function showImage() {
    const images = sliderContent.querySelectorAll(".image-container");
    images.forEach((img, index) => {
      img.style.transition = "transform 2s ease";
      img.style.transform = `translateX(-${currentIndex * 100}%) `;
    });
  }

  // Function to navigate to the next image
  function nextImage() {
    currentIndex = (currentIndex + 1) % sliderContent.children.length;
    showImage();
  }

  // Function to navigate to the previous image
  function prevImage() {
    currentIndex =
      (currentIndex - 1 + sliderContent.children.length) %
      sliderContent.children.length;
    showImage();
  }

  showImage();
  // Event listeners for arrow navigation
  arrowLeft.addEventListener("click", prevImage);
  arrowRight.addEventListener("click", nextImage);

  // Automatic slider
  setInterval(() => {
    nextImage();
  }, intervalTime);
};

// Call the sliderFunc when the DOM is loaded
document.addEventListener("DOMContentLoaded", sliderFunc);
