function openModal(id){

    document.getElementById(id).style.display = "block";

}

function closeModal(id){

    document.getElementById(id).style.display = "none";

}

// SERVICES

document
.getElementById("openDepot")
.addEventListener("click", () => {

    openModal("depotModal");

});

document
.getElementById("openTransport")
.addEventListener("click", () => {

    openModal("transportModal");

});

document
.getElementById("openFinance")
.addEventListener("click", () => {

    openModal("financeModal");

});

// RESULTATS

document
.getElementById("warehouseReserve")
.addEventListener("click", () => {

    openModal("transportModal");

});

document
.getElementById("transcamButton")
.addEventListener("click", () => {

    openModal("transportModal");

});

document
.getElementById("finabankButton")
.addEventListener("click", () => {

    openModal("financeModal");

});

// RECHERCHE

document
.getElementById("searchButton")
.addEventListener("click", () => {

    const type =
    document.getElementById("typeSelect").value;

    const zone =
    document.getElementById("zoneSelect").value;

    alert(
        "Recherche effectuée : " +
        type +
        " vers " +
        zone
    );

});

// FORMULAIRE

const transportForm =
document.getElementById("transportForm");

transportForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Votre réservation a été envoyée avec succès !"
    );

});

// FERMER MODAL

window.onclick = function(event){

    const modals =
    document.querySelectorAll(".modal");

    modals.forEach(modal => {

        if(event.target == modal){

            modal.style.display = "none";

        }

    });

};