// Requirement: Select elements via DOM
const contactForm = document.getElementById("contactForm");
const emailField = document.getElementById("email");
const messageField = document.getElementById("message");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop page refresh

  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  let hasError = false;

  if (!emailField.value.includes("@") || emailField.value.length < 5) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    hasError = true;
  }

  if (messageField.value.trim() === "") {
    document.getElementById("messageError").textContent =
      "Please enter a message.";
    hasError = true;
  }

  if (!hasError) {
    showConfirmationModal();
  }
});

function showConfirmationModal() {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  overlay.innerHTML = `
        <div class="modal-content">
            <h2 style="color: #bb86fc;">Message Received!</h2>
            <p>Thank you for contacting GameBlitz. We will get back to you soon.</p>
            <p style="font-size: 0.9rem; color: #888;">Returning to Home in 3 seconds...</p>
        </div>
    `;

  document.body.appendChild(overlay);

  setTimeout(() => {
    window.location.href = "index.html";
  }, 3000);
}
