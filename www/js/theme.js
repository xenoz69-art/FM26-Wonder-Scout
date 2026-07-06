// ===============================
// theme.js
// ===============================

(function(){

    const theme = localStorage.getItem("theme") || "dark";

    if(theme === "light"){

        document.body.classList.add("light-theme");

    }

})();