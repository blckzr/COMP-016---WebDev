// 1. Select the elements (DOM Selection)
const productCards = document.querySelectorAll(".product-card");

// 2. Add Event Listeners (Event Handling)
productCards.forEach((card) => {
  card.addEventListener("click", () => {
    const gameName = card.getAttribute("data-name");
    const gameImg = card.querySelector("img").src;

    // 3. Create elements dynamically (DOM Manipulation)
    showModal(gameName, gameImg);
  });
});

function showModal(name, imgSrc) {
  // Create the modal overlay
  const modal = document.createElement("div");
  modal.id = "gameModal";
  modal.className = "modal-overlay";

  // Set the inner content (Updating text and structure)
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img src="${imgSrc}" alt="${name}" style="width: 200px; height: 260px; object-fit: cover;">
            <h2>${name}</h2>
            <p>Ready to level up? This title is currently in stock at GameBlitz!</p>
            <button class="buy-btn">Add to Cart</button>
        </div>
    `;

  // Append to body
  document.body.appendChild(modal);

  // Close functionality (Event Handling)
  modal.querySelector(".close-btn").onclick = () => modal.remove();
  window.onclick = (event) => {
    if (event.target == modal) modal.remove();
  };
}
