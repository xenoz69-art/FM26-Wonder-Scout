// ===============================
// utils.js
// ===============================

// Membuat bintang rating
function stars(rating){

    return "⭐".repeat(Number(rating));

}

// Mengecek apakah elemen ada
function $(id){

    return document.getElementById(id);

}

// Mengambil data LocalStorage
function getStorage(key, defaultValue = []){

    try{

        return JSON.parse(localStorage.getItem(key)) ?? defaultValue;

    }catch(e){

        return defaultValue;

    }

}

// Menyimpan data LocalStorage
function setStorage(key, value){

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );

}

// Mengambil data unik
function unique(array){

    return [...new Set(array)];

}