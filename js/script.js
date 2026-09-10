```javascript
/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTS
    ========================================= */

    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("main section");
    const header = document.querySelector(".header");
    const currentYear = document.getElementById("current-year");


    /* =========================================
       MOBILE NAVIGATION
    ========================================= */

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuToggle.textContent = isOpen ? "✕" : "☰";
        });


        /* Close menu after clicking a navigation link */

        navItems.forEach((link) => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";
            });

        });

    }


    /* =========================================
       CURRENT YEAR
    ========================================= */

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }


    /* =========================================
       NAVBAR SCROLL EFFECT
    ========================================= */

    function handleNavbarScroll() {

        if (!header) return;

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }

    window.addEventListener(
        "scroll",
        handleNavbarScroll,
        { passive: true }
    );

    handleNavbarScroll();


    /* =========================================
       ACTIVE NAVIGATION LINK
    ========================================= */

    function updateActiveNavigation() {

        let currentSection = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection = section.getAttribute("id");

            }

        });


        navItems.forEach((link) => {

            link.classList.remove("active");

            const target =
                link.getAttribute("href");

            if (target === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".section-title, " +
        ".about-text, " +
        ".skill-category, " +
        ".experience-item, " +
        ".project-card, " +
        ".certification-card, " +
        ".education-item, " +
        ".contact-description"
    );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


    revealElements.forEach((element) => {

        revealObserver.observe(element);

    });


    /* =========================================
       PROJECT CARD HOVER EFFECT
    ========================================= */

    const projectCards =
        document.querySelectorAll(".project-card");


    projectCards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.transform =
                "translateY(-8px)";

        });


        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "";

        });

    });


    /* =========================================
       CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
    ========================================= */

    document.addEventListener("click", (event) => {

        if (!navLinks || !menuToggle) return;

        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);


        if (
            !clickedInsideMenu &&
            !clickedMenuButton &&
            navLinks.classList.contains("active")
        ) {

            navLinks.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        }

    });


    /* =========================================
       ESCAPE KEY CLOSES MOBILE MENU
    ========================================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (
                navLinks &&
                navLinks.classList.contains("active")
            ) {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            }

        }

    });


    /* =========================================
       UPDATE EXTERNAL LINKS
       Prevent placeholder "#" links
       from jumping to the top of the page.
    ========================================= */

    const placeholderLinks =
        document.querySelectorAll('a[href="#"]');


    placeholderLinks.forEach((link) => {

        link.addEventListener("click", (event) => {

            event.preventDefault();

        });

    });

});
```
