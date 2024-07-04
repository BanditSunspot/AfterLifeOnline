document.addEventListener('DOMContentLoaded', function () {
    const TempFr = document.getElementById("AnnoncesTempFr").content;
    const TempEn = document.getElementById("AnnoncesTempEn").content;
    const AnnonceContainer = document.getElementById("AnnoncesContainer");

    const FrButton = document.getElementById("FrButton");
    const EnButton = document.getElementById("EnButton");

    const AnnoncesFr = () => {
        const annonce = TempFr.cloneNode(true);
        AnnonceContainer.innerHTML = "";
        AnnonceContainer.appendChild(annonce);
    };

    const AnnoncesEn = (a) => {
        const annonce = TempEn.cloneNode(true);
        AnnonceContainer.innerHTML = "";
        AnnonceContainer.appendChild(annonce);
    };

    FrButton.addEventListener('click', (e) => {
        e.preventDefault();
        AnnoncesFr();
    });

    EnButton.addEventListener('click', (e) => {
        e.preventDefault();
        AnnoncesEn();
    });
});