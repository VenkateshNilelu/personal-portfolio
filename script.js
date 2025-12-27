/* ============================================
   THEME TOGGLE BUTTON (Light / Dark Mode)
============================================ */

const toggles = [
    document.getElementById("themeToggle"),
    document.getElementById("themeToggleMobile")
];

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggles.forEach(t => t?.classList.add("active"));
}

// Add click event
toggles.forEach(toggle => {
    if (!toggle) return;

    toggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");

        toggles.forEach(t => t?.classList.toggle("active"));

        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
});
// =========================
// Certificate Click Popup
// =========================

const certImages = document.querySelectorAll(".cert-img");
const popup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closePopup = document.querySelector(".close-popup");

certImages.forEach(img => {
    img.addEventListener("click", () => {
        popup.style.display = "flex";
        popupImage.src = img.src;
    });
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
});
// ========== GO TO TOP BUTTON ==========
const goTopBtn = document.getElementById("goTopBtn");

// Show/hide button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        goTopBtn.classList.add("show");
    } else {
        goTopBtn.classList.remove("show");
    }
});

// Scroll to top on click
goTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
