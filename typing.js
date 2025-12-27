const text = [
  "Aspiring Web Developer...",
  "Frontend Development Enthusiast...",
  "Responsive Website Designer...",
  "Tech Enthusiast & Fast Learner...",
  "Clean Code & Modern Web Design Lover...",
  "Building Websites with Passion..."
];

let index = 0;
let char = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const typing = document.querySelector(".typing-text");

  if (!typing) return;

  if (isDeleting) {
    currentText = text[index].substring(0, char--);
  } else {
    currentText = text[index].substring(0, char++);
  }

  typing.innerHTML = currentText + "<span class='cursor'>|</span>";

  if (!isDeleting && char === text[index].length) {
    setTimeout(() => (isDeleting = true), 1000);
  }

  if (isDeleting && char === 0) {
    isDeleting = false;
    index = (index + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);
