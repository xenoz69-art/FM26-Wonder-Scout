// ===============================
// ui.js
// ===============================

function renderPlayers(data){

    const container =
    document.getElementById("players");

    const resultCount =
    document.getElementById("resultCount");

    resultCount.textContent =
    `${data.length} pemain ditemukan`;

    if(data.length===0){

        container.innerHTML=
        `<div class="empty">
            Tidak ada pemain ditemukan.
        </div>`;

        return;

    }

    container.innerHTML = data.map((player,index)=>`

<div class="card"
style="animation-delay:${index*0.05}s">

<div class="card-header">

<h2>${player.name}</h2>

<button
class="favorite-btn"
data-id="${player.id}">

${isFavorite(player.id) ? "★" : "☆"}

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

}