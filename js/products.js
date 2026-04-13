/* --- Logic & Syntax: Combined Product Script --- */

// 1. DOM Selection
const searchInput = document.getElementById("gameSearch");
const feedback = document.getElementById("searchFeedback");
const allCards = document.querySelectorAll(".product-card"); // Unique name

// 2. Search Logic (Event Handling)
if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase();
    let foundCount = 0;

    allCards.forEach((card) => {
      const name = card.getAttribute("data-name").toLowerCase();
      if (name.includes(value)) {
        card.style.display = "block";
        foundCount++;
      } else {
        card.style.display = "none";
      }
    });
    feedback.textContent = value
      ? `Found ${foundCount} results for "${value}"`
      : "";
  });
}

// 3. Modal Logic (DOM Manipulation)
allCards.forEach((card) => {
  card.addEventListener("click", () => {
    const name = card.getAttribute("data-name");
    const imgSrc = card.querySelector("img").src;
    createModal(name, imgSrc);
  });
});

function createModal(name, imgSrc) {
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <img src="${imgSrc}" alt="${name}" style="width:180px; height:240px; object-fit:cover;">
            <h2>${name}</h2>
            <button class="buy-btn">Add to Cart</button>
        </div>
    `;
  document.body.appendChild(modal);

  modal.querySelector(".close-btn").onclick = () => modal.remove();
}
