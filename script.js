// Génère un nombre aléatoire à quatre chiffres entre 1000 et 9999
x = Math.floor(Math.random() * 9000) + 1000;
console.log(x);

// Appelle la fonction generertab pour créer un tableau à partir du nombre généré
tab1 = generertab(Number(x));

// Initialise le compteur max à 10
max = 10;

// Ajoute un écouteur d'événements au bouton avec l'ID "btn"
btn = document.getElementById("btn").addEventListener("click", () => {
    // Décrémente le compteur max à chaque clic
    max--;

    // Met à jour l'affichage du compteur
    document.getElementById("res3").innerHTML = max;

    // Initialise les compteurs pour les positions correctes et les chiffres corrects mais mal placés
    posjuste = 0;
    justepresent = 0;

    // Vérifie s'il reste des essais
    if (max > 0) {
        // Fonction qui génère un tableau à partir d'un nombre
        function generertab(num) {
            let tab = [];
            tab[0] = Math.floor(num / 1000);
            tab[1] = Math.floor((num % 1000) / 100);
            tab[2] = Math.floor((num % 100) / 10);
            tab[3] = (num % 100) % 10;
            return tab;
        }

        // Récupère la valeur du champ de saisie
        nb = document.getElementById("number").value;

        // Génère un tableau à partir du nombre saisi
        tab2 = generertab(Number(nb));

        // Efface le champ de saisie
        document.getElementById("number").value = "";

        // Copie le tableau initial pour le comparer
        tab3 = Array.from(tab1);

        // Boucle pour vérifier les positions correctes
        for (let index = 0; index < 4; index++) {
            if (tab3[index] === tab2[index]) {
                posjuste++;
                tab3[index] = -1;
                tab2[index] = -1;
            }
        }

        // Crée un ensemble à partir du tableau tab2 pour vérifier les chiffres corrects mais mal placés
        checkSet = new Set(tab2);
        for (let index = 0; index < 4; index++) {
            if (tab3[index] !== -1) {
                if (checkSet.has(tab3[index])) {
                    justepresent++;
                }
            }
        }

        // Met à jour l'affichage des résultats
        res1 = document.getElementById("res1").innerHTML = posjuste;
        res1 = document.getElementById("res2").innerHTML = justepresent;

        // Vérifie si le joueur a gagné
        if (posjuste == 4) {
            // Met en forme l'affichage en cas de victoire
            document.getElementById("div1").style.backgroundColor = "rgb(84, 192, 192)";
            document.getElementById("h5").innerHTML = "vous avez gagné";
            document.getElementById("titre1").innerHTML = "";
            document.getElementById("titre2").innerHTML = "";
            document.getElementById("titre3").innerHTML = "";
            document.getElementById("btn").disabled = true;
            // Active le bouton "Play Again"
            enablePlayAgainButton();
        }
    } else {
        // Met en forme l'affichage en cas de défaite
        document.getElementById("btn").disabled = true;
        document.getElementById("h5").innerHTML = "vous avez échoué";
        document.getElementById("titre1").innerHTML = "";
        document.getElementById("titre2").innerHTML = "";
        document.getElementById("titre3").innerHTML = "";
        document.getElementById("btn").disabled = true;
        // Active le bouton "Play Again"
        enablePlayAgainButton();
    }
});

// Ajoute un écouteur d'événements au bouton "Play Again" pour recharger la page
document.getElementById("playAgain").addEventListener("click", () => {
    window.location.reload();
});

// Fonction pour activer le bouton "Play Again"
function enablePlayAgainButton() {
    document.getElementById("playAgain").style.display = "block";
}
