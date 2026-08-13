/* =====================================================
   AI ENGINEER PORTFOLIO JAVASCRIPT
   ===================================================== */


/* ================= TYPING EFFECT ================= */

const roles = [
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI Developer",
    "LLM Developer",
    "AI Enthusiast"
];

const typingElement = document.getElementById("typing");

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    if (!typingElement) {
        return;
    }

    const currentRole = roles[roleIndex];


    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex);

        charIndex++;

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex);

        charIndex--;

    }


    let speed = deleting ? 55 : 100;


    /* Finished typing */

    if (!deleting && charIndex > currentRole.length) {

        deleting = true;

        speed = 1500;

    }


    /* Finished deleting */

    if (deleting && charIndex < 0) {

        deleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        charIndex = 0;

        speed = 300;

    }


    setTimeout(typeEffect, speed);
}


typeEffect();



/* ================= NAVBAR SCROLL ================= */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", function () {

    if (!navbar) {
        return;
    }


    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(6, 10, 19, 0.95)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.2)";

    } else {

        navbar.style.background =
            "rgba(6, 10, 19, 0.75)";

        navbar.style.boxShadow = "none";

    }

});



/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .stat, .contact-box"
);


const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});



/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".nav-link");


function updateActiveLink() {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop + section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        const target =
            link.getAttribute("href");


        if (target === "#" + currentSection) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveLink
);


updateActiveLink();



/* ================= SMOOTH NAVIGATION ================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            link.getAttribute("href");


        if (
            targetId &&
            targetId.startsWith("#")
        ) {

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});



/* ================= CV BUTTON ================= */

const cvLinks =
    document.querySelectorAll(
        'a[href="CV.pdf"]'
    );


cvLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        console.log(
            "CV download started."
        );

    });

});



/* ================= PROJECT HOVER ================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(function (card) {

    card.addEventListener(
        "mouseenter",
        function () {

            card.style.transform =
                "translateY(-8px)";

        }
    );


    card.addEventListener(
        "mouseleave",
        function () {

            card.style.transform =
                "translateY(0)";

        }
    );

});



/* ================= CURRENT YEAR ================= */

const yearElements =
    document.querySelectorAll(
        "[data-year]"
    );


yearElements.forEach(function (element) {

    element.textContent =
        new Date().getFullYear();

});