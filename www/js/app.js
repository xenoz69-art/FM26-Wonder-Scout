// ===============================
// FM26 Wonderkids Database
// app.js
// Part 1
// ===============================

// ===== DATA =====
let players = [];
let filtered = [];

let selectedPosition = "";
let selectedRating = "";

// Posisi utama
const mainPositions = [
    "GK",
    "DC",
    "DL",
    "DR",
    "DM",
    "MC",
    "AMC",
    "AML",
    "AMR",
    "ST"
];

// ===============================
// LOAD DATABASE
// ===============================

async function loadPlayers(){

    try{

        const response = await fetch("assets/players.json");

        if(!response.ok){

            throw new Error("Gagal membaca players.json");

        }

        players = await response.json();

        filtered = [...players];

        updateStats();

        createFilters();

        renderPlayers(filtered);

    }catch(error){

        console.error(error);

        document.getElementById("players").innerHTML = `
        <div class="empty">
            Gagal memuat database pemain.
        </div>`;

    }

}

// ===============================
// STATISTIK
// ===============================

function updateStats(){

    document.getElementById("totalPlayers").textContent =
    players.length;

    document.getElementById("totalCountries").textContent =
    [...new Set(players.map(p=>p.nation))].length;

    document.getElementById("totalClubs").textContent =
    [...new Set(players.map(p=>p.club))].length;

}

// ===============================
// MEMBUAT FILTER
// ===============================

function createFilters(){

    // Posisi
    const positionBox =
    document.getElementById("positionFilter");

    positionBox.innerHTML = "";

    const allBtn =
    document.createElement("button");

    allBtn.className = "chip active";
    allBtn.dataset.position = "";
    allBtn.textContent = "Semua";

    positionBox.appendChild(allBtn);

    mainPositions.forEach(position=>{

        const btn =
        document.createElement("button");

        btn.className = "chip";

        btn.dataset.position = position;

        btn.textContent = position;

        positionBox.appendChild(btn);

    });

    // Negara
    const nation =
    document.getElementById("nation");

    nation.innerHTML =
    `<option value="">Semua Negara</option>`;

    [...new Set(players.map(p=>p.nation))]
    .sort()
    .forEach(item=>{

        const option =
        document.createElement("option");

        option.value = item;

        option.textContent = item;

        nation.appendChild(option);

    });

}
// ===============================
// EVENT LISTENER
// ===============================

// Search
$("search").addEventListener("input", searchPlayers);

// Negara
$("nation").addEventListener("change", searchPlayers);

// Posisi
$("positionFilter").addEventListener("click", function(e){

    if(!e.target.classList.contains("chip")) return;

    document
    .querySelectorAll("#positionFilter .chip")
    .forEach(chip=>chip.classList.remove("active"));

    e.target.classList.add("active");

    selectedPosition =
    e.target.dataset.position;

    searchPlayers();

});

// Rating
$("ratingFilter").addEventListener("click", function(e){

    if(!e.target.classList.contains("chip")) return;

    document
    .querySelectorAll("#ratingFilter .chip")
    .forEach(chip=>chip.classList.remove("active"));

    e.target.classList.add("active");

    selectedRating =
    e.target.dataset.rating;

    searchPlayers();

});

// Favorit
document.addEventListener("click", function(e){

    if(!e.target.classList.contains("favorite-btn"))
        return;

    toggleFavorite(e.target.dataset.id);

searchPlayers();

});

// ===============================
// TOGGLE FILTER
// ===============================

const toggle =
$("toggleFilter");

const filterBox =
$("filterBox");

if(toggle && filterBox){

    filterBox.classList.add("hide");

    toggle.addEventListener("click", ()=>{

        filterBox.classList.toggle("hide");

        toggle.textContent =
        filterBox.classList.contains("hide")
        ? "Filter ▼"
        : "Sembunyikan Filter ▲";

    });

}

// ===============================
// BACK TO TOP
// ===============================

const backTop =
$("backTop");

if(backTop){

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 400){

            backTop.classList.add("show");

        }else{

            backTop.classList.remove("show");

        }

    });

    backTop.addEventListener("click", ()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}
// ===============================
// INISIALISASI
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    loadPlayers();

});