// DOM Selection
const track = document.getElementById("carouselTrack");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const items = document.querySelectorAll(".carousel-item");

let currentIndex = 0; // Logic & Syntax: Variable usage

function updateCarousel() {
  // DOM Manipulation: Modifying the transform style dynamically
  const amountToMove = currentIndex * -100;
  track.style.transform = `translateX(${amountToMove}%)`;
}

// Event Handling: Click Listeners
nextBtn.addEventListener("click", () => {
  // Logic: Conditional check for carousel boundaries
  if (currentIndex < items.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // Loop back to start
  }
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = items.length - 1; // Loop back to end
  }
  updateCarousel();
});
