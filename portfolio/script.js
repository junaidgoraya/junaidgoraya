document.addEventListener("scroll", () => {
    document.querySelector("header").style.background =
        window.scrollY > 50 ? "#000" : "transparent";
});
