const languageButtton = document.getElementById("language-btn");
let currentLanguage = "en";
languageButtton,addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "ru" : "en";

    document.querySelectorAll("[data-en][data-ru]").forEach((element) => {
        element.textContent = element.dataset[currentLanguage];
    });

    document.documentElement.lang = currentLanguage;
    languageButtton.textContent = currentLanguage === "en" ? "RU" : "EN";
});

document.getElementById("year").textContent = new Date().getFullYear();