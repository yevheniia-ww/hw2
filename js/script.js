const langBtn = document.getElementById("langBtn");

const uaResume = document.getElementById("ua");
const enResume = document.getElementById("en");

let currentLang = "ua";

langBtn.addEventListener("click", function () {

    if (currentLang === "ua") {

        uaResume.classList.remove("active");
        enResume.classList.add("active");

        document.documentElement.lang = "en";

        langBtn.textContent = "Українська";

        currentLang = "en";

    } else {

        enResume.classList.remove("active");
        uaResume.classList.add("active");

        document.documentElement.lang = "uk";

        langBtn.textContent = "English";

        currentLang = "ua";
    }

});