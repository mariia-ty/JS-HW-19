// Select necessary DOM elements
const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector(".backdrop");

// Function to close the modal on backdrop click
function onBackdropClick(event) {
  if (event.target === backdrop) {
    document.body.classList.remove("show-modal");
  }
}

// Add event listeners
openModalBtn.addEventListener("click", () => {
  document.body.classList.add("show-modal");
});
closeModalBtn.addEventListener("click", () => {
  document.body.classList.remove("show-modal");
});
backdrop.addEventListener("click", onBackdropClick);

// Close the modal when pressing the Escape key
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    document.body.classList.contains("show-modal")
  ) {
    document.body.classList.remove("show-modal");
  }
});
