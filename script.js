// =============================
// LOADER
// =============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
        }, 800);
    }

});

// =============================
// TYPING EFFECT
// =============================

const typing = document.getElementById("typing");

const words = [
    "Frontend Web Developer",
    "JavaScript Developer",
    "React Developer",
    "UI Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
    }

    else {

        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 50 : 120;

    if (!deleting && charIndex === current.length + 1) {

        deleting = true;
        speed = 1200;
    }

    if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// =============================
// SCROLL PROGRESS BAR
// =============================

window.addEventListener("scroll", () => {

    const progress = document.getElementById("progress-bar");

    if (!progress) return;

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    // Guard against divide-by-zero on short pages
    const percent = height > 0 ? (scroll / height) * 100 : 0;

    progress.style.width = percent + "%";

});

// =============================
// SCROLL REVEAL
// =============================

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", reveal);

function reveal() {

    reveals.forEach(item => {

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.classList.add("active");
        }

    });

}

reveal();

// =============================
// ACTIVE NAVBAR
// =============================

const sections = document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});

// =============================
// HAMBURGER / MOBILE MENU
// =============================

const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("navLinks");

if (hamburger && navList) {

    hamburger.addEventListener("click", () => {

        hamburger.classList.toggle("active");
        navList.classList.toggle("show");

    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            hamburger.classList.remove("active");
            navList.classList.remove("show");

        });

    });

}

// =============================
// SMOOTH HOVER
// =============================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";
    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";
    });

});

// =============================
// PROJECT HOVER
// =============================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// =============================
// CONSOLE MESSAGE
// =============================

console.log("Welcome to Amna Ishaq Portfolio 🚀");
