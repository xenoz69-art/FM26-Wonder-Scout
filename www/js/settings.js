// ===============================
// settings.js
// ===============================

const body = document.body;

const darkBtn =
document.getElementById("darkTheme");

const lightBtn =
document.getElementById("lightTheme");

// Terapkan tema
function applyTheme(theme){

    if(theme==="light"){

        body.classList.add("light-theme");

        darkBtn.classList.remove("active");

        lightBtn.classList.add("active");

    }else{

        body.classList.remove("light-theme");

        lightBtn.classList.remove("active");

        darkBtn.classList.add("active");

    }

    localStorage.setItem("theme", theme);

}

// Muat tema saat aplikasi dibuka
const savedTheme =
localStorage.getItem("theme") || "dark";

applyTheme(savedTheme);

// Tombol
darkBtn.addEventListener("click",()=>{

    applyTheme("dark");

});

lightBtn.addEventListener("click",()=>{

    applyTheme("light");

});
// ===============================
// HAPUS SEMUA FAVORIT
// ===============================

// ===============================
// MODAL HAPUS FAVORIT
// ===============================

const modal = document.getElementById("confirmModal");

const clearBtn = document.getElementById("clearFavorites");

const cancelBtn = document.getElementById("cancelDelete");

const confirmBtn = document.getElementById("confirmDelete");

// Buka modal
clearBtn.addEventListener("click", () => {

    modal.classList.add("show");

});

// Tutup modal
cancelBtn.addEventListener("click", () => {

    modal.classList.remove("show");

});

// Klik tombol Hapus
confirmBtn.addEventListener("click", () => {

    localStorage.setItem("favorites", JSON.stringify([]));

    modal.classList.remove("show");

    setTimeout(() => {

        location.reload();

    }, 200);

});

// Klik area luar modal
modal.addEventListener("click", (e) => {

    if(e.target === modal){

        modal.classList.remove("show");

    }

});