function creerBinomes(liste) {
    let binomes = [];
    let taille = liste.length;

    // Mélanger le tableau aléatoirement
    for (let i = taille - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [liste[i], liste[j]] = [liste[j], liste[i]];
    }

    // Créer les binômes d'entier
    for (let i = 0; i < taille - 1; i += 2) {
        binomes.push([liste[i], liste[i+1]]);
    }

    // Si la liste est de longueur impaire, ajouter le dernier élément au dernier binôme créé
    if (taille % 2 === 1) {
        binomes[binomes.length - 1].push(liste[taille - 1]);
    }

    return binomes;
}

let liste = [1, 2, 3, 4, 5, 6, 7,8,9];
let binomes = creerBinomes(liste);