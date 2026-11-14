(() => {
    const root = document.documentElement;
    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector(".main-nav");
    const year = document.getElementById("year");

    const savedTheme = localStorage.getItem("bilal-portfolio-theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = savedTheme || (prefersDark ? "dark" : "light");

    function updateThemeButton() {
        const isDark = root.dataset.theme === "dark";
        themeToggle.querySelector(".theme-icon").textContent = isDark ? "☀" : "☾";
        themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
        document.querySelector('meta[name="theme-color"]').setAttribute("content", isDark ? "#0d1020" : "#f7f8fc");
    }

    updateThemeButton();
    themeToggle.addEventListener("click", () => {
        root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
        localStorage.setItem("bilal-portfolio-theme", root.dataset.theme);
        updateThemeButton();
    });

    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    }));
    year.textContent = new Date().getFullYear();

    const revealItems = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revealItems.forEach(item => observer.observe(item));
    } else {
        revealItems.forEach(item => item.classList.add("is-visible"));
    }
})();
