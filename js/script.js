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

// Accordion functionality
document.querySelectorAll(".accordion-header").forEach((header) => {
  header.addEventListener("click", (e) => {
    const item = header.parentElement;
    const wasActive = item.classList.contains("active");

    // Close all items
    document.querySelectorAll(".accordion-item").forEach((el) => {
      el.classList.remove("active");
    });

    // Open clicked item if it wasn't active
    if (!wasActive) {
      item.classList.add("active");

      // Smooth scroll to ensure visibility
      setTimeout(() => {
        item.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 300);
    }
  });
});

// Auto-update copyright year
document.getElementById("current-year").textContent = new Date().getFullYear();

// FAQ Accordion Functionality
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    const isOpen = faqItem.classList.contains("active");

    // Close all items first
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Open current if it wasn't open
    if (!isOpen) {
      faqItem.classList.add("active");
    }
  });
});
