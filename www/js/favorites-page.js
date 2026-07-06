// ===============================
// favorites-page.js
// ===============================

async function loadFavorites(){

    try{

        const response = await fetch("assets/players.json");

        const players = await response.json();

        const favorites =
        getStorage("favorites", []);

        const favoritePlayers =
        players.filter(player =>
            favorites.includes(Number(player.id))
        );

        const container =
        document.getElementById("favoritePlayers");

        if(favoritePlayers.length===0){

            container.innerHTML=`
                <div class="empty">
                    Belum ada pemain favorit.
                </div>
            `;

            return;

        }

        container.innerHTML =
        favoritePlayers.map(player=>`

<div class="card">

<div class="card-header">

<h2>${player.name}</h2>

<button
class="favorite-btn"
data-id="${player.id}">

★

</button>

</div>

<div class="rating">
${stars(player.rating)}
</div>

<div class="info">
<span class="label">Umur</span>
<span class="value">${player.age}</span>
</div>

<div class="info">
<span class="label">Negara</span>
<span class="value">${player.nation}</span>
</div>

<div class="info">
<span class="label">Klub</span>
<span class="value">${player.club}</span>
</div>

<div class="info">
<span class="label">Posisi</span>
<span class="value">${player.position}</span>
</div>

</div>

`).join("");

    }catch(err){

        console.error(err);

    }

}

document.addEventListener("click",function(e){

    if(!e.target.classList.contains("favorite-btn"))
        return;

    toggleFavorite(e.target.dataset.id);

location.reload();

});

loadFavorites();