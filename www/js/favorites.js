// ===============================
// favorites.js
// ===============================

let favorites = getStorage("favorites", []);

function saveFavorites(){

    setStorage("favorites", favorites);

}

function isFavorite(id){

    return favorites.includes(Number(id));

}

function toggleFavorite(id){

    id = Number(id);

    if(isFavorite(id)){

        favorites = favorites.filter(item => item !== id);

    }else{

        favorites.push(id);

    }

    saveFavorites();

    renderPlayers(filtered);

}