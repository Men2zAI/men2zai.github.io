
document.getElementById("lang-toggle").addEventListener("click", () => {
    const lang = document.getElementById("lang-toggle").innerText === "ES" ? "es" : "en";
    document.querySelectorAll("[data-en]").forEach(el => {
        el.innerText = el.getAttribute(`data-${lang}`);
    });
    document.getElementById("lang-toggle").innerText = lang === "es" ? "EN" : "ES";
});
