document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    const themeToggle =
        document.getElementById("themeToggle");

    const menuToggle =
        document.getElementById("menuToggle");

    const navMenu =
        document.getElementById("navMenu");

    const navLinks =
        document.querySelectorAll(".nav-link");

    const sections =
        document.querySelectorAll("section[id]");


    /* =====================================================
       DEFAULT THEME = LIGHT
    ===================================================== */

    const savedTheme =
        localStorage.getItem("itantra-theme");

    if (savedTheme === "dark") {

        body.classList.add("dark");

        themeToggle.textContent = "☀";

    } else {

        body.classList.remove("dark");

        themeToggle.textContent = "☾";
    }


    /* =====================================================
       THEME TOGGLE
    ===================================================== */

    themeToggle.addEventListener("click", () => {

        body.classList.toggle("dark");

        const darkMode =
            body.classList.contains("dark");

        themeToggle.textContent =
            darkMode ? "☀" : "☾";

        localStorage.setItem(
            "itantra-theme",
            darkMode ? "dark" : "light"
        );

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

    });


    /* =====================================================
       CLOSE MOBILE MENU
    ===================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });


    const navDownload =
        document.querySelector(".nav-download");

    if (navDownload) {

        navDownload.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    }


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });


    /* =====================================================
       ACTIVE NAV
    ===================================================== */

    function updateActiveNavigation() {

        let current = "home";

        sections.forEach(section => {

            const top =
                section.offsetTop - 220;

            if (
                window.scrollY >= top
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${current}`) {

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


    /* =====================================================
       DOWNLOAD BUTTON FEEDBACK
    ===================================================== */

    const downloadButtons =
        document.querySelectorAll(
            ".prototype-button, .cta-download"
        );


    downloadButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.add("downloading");

            setTimeout(() => {

                button.classList.remove(
                    "downloading"
                );

            }, 1000);

        });

    });

});
