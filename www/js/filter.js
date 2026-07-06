// ===============================
// filter.js
// ===============================

function searchPlayers(){

    const keyword =
        $("search")
        .value
        .toLowerCase();

    const nation =
        $("nation")
        .value;

    filtered = players.filter(player=>{

        const matchName =
            player.name
            .toLowerCase()
            .includes(keyword);

        const matchNation =
            nation==="" ||
            player.nation===nation;

        const matchPosition =
            selectedPosition==="" ||
            player.position.includes(selectedPosition);

        const matchRating =
            selectedRating==="" ||
            player.rating==selectedRating;

        return (
            matchName &&
            matchNation &&
            matchPosition &&
            matchRating
        );

    });

    renderPlayers(filtered);

}