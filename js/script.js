// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

// Highlight active page
const currentPage = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// FAQ Accordion Functionality
document.querySelectorAll(".fq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);

    const answer = document.getElementById(
      button.getAttribute("aria-controls")
    );
    answer.style.maxHeight = isExpanded ? "0" : `${answer.scrollHeight}px`;
  });
});

// Auto-update copyright year
document.getElementById("current-year").textContent = new Date().getFullYear();

// FAQ Accordion Functionality
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", toggleFaq);
  button.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFaq(e);
    }
  });
});

function toggleFaq(e) {
  const button = e.currentTarget;
  const faqItem = button.parentElement;
  const isOpen = faqItem.classList.contains("active");

  // Close all items first
  document.querySelectorAll(".faq-item").forEach((item) => {
    if (item !== faqItem) {
      item.classList.remove("active");
      item
        .querySelector(".faq-question")
        .setAttribute("aria-expanded", "false");
    }
  });

  // Toggle current item
  faqItem.classList.toggle("active");
  button.setAttribute("aria-expanded", isOpen ? "false" : "true");
}
