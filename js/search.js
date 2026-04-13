// Requirement: DOM Selection
const searchInput = document.getElementById("gameSearch");
const productCards = document.querySelectorAll(".product-card");
const feedback = document.getElementById("searchFeedback");

// Requirement: Event Handling (Input Event)
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  let foundCount = 0;

  // Requirement: Logic & Conditionals
  productCards.forEach((card) => {
    const name = card.getAttribute("data-name").toLowerCase();

    if (name.includes(value)) {
      card.style.display = "block"; // Requirement: Modify Elements
      foundCount++;
    } else {
      card.style.display = "none";
    }
  });

  // Requirement: Immediate Feedback
  if (value === "") {
    feedback.textContent = "";
  } else {
    feedback.textContent = `Found ${foundCount} results for "${value}"`;
  }
});
