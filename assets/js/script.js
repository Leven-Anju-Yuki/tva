let history = [];
const taxRate = parseFloat(document.getElementById('taxRate').value);

// Cette fonction calcule et affiche le prix avec TVA, le prix sans TVA ou le taux de TVA
// en fonction des valeurs saisies par l'utilisateur. Elle met également à jour le résultat et l'historique.
function calculate() {
    // Récupère les valeurs saisies dans le DOM et les convertit en nombres à virgule flottante
    const priceWithTax = parseFloat(document.getElementById('priceWithTax').value);
    const priceWithoutTax = parseFloat(document.getElementById('priceWithoutTax').value);
    const taxRate = parseFloat(document.getElementById('taxRate').value);
    let result = ''; // Initialise la chaîne de résultat

    // Si le prix avec TVA et le taux de TVA sont fournis, calcule le prix sans TVA
    if (!isNaN(priceWithTax) && !isNaN(taxRate)) {
        const calculatedPriceWithoutTax = priceWithTax / (1 + taxRate / 100);
        result += `Prix sans TVA calculé : ${calculatedPriceWithoutTax.toFixed(2)} €<br>`;
    }

    // Si le prix sans TVA et le taux de TVA sont fournis, calcule le prix avec TVA
    if (!isNaN(priceWithoutTax) && !isNaN(taxRate)) {
        const calculatedPriceWithTax = priceWithoutTax * (1 + taxRate / 100);
        result += `Prix avec TVA calculé : ${calculatedPriceWithTax.toFixed(2)} €<br>`;
    }

    // Si le prix avec TVA et le prix sans TVA sont fournis, calcule le taux de TVA
    if (!isNaN(priceWithTax) && !isNaN(priceWithoutTax)) {
        const calculatedTaxRate = ((priceWithTax - priceWithoutTax) / priceWithoutTax) * 100;
        result += `Pourcentage de TVA calculé : ${calculatedTaxRate.toFixed(2)} %<br>`;
    }

    // S'il y a un résultat, l'ajoute à l'historique et met à jour l'affichage de l'historique
    if (result) {
        history.push(result);
        updateHistory();
    }

    // Affiche le résultat dans l'élément `result` ou un message si les données sont insuffisantes
    document.getElementById('result').innerHTML = result || 'Veuillez remplir au moins deux champs.';
}

// Cette fonction met à jour l'affichage de l'historique en affichant tous les résultats précédents
function updateHistory() {
    const historyElement = document.getElementById('history'); // Récupère l'élément de l'historique
    // Transforme chaque entrée de l'historique en div et les joint en une seule chaîne
    historyElement.innerHTML = history.map(entry => `<div>${entry}</div>`).join('');
}

// Efface l'historique et met à jour l'affichage
function clearHistory() {
    history = []; // Réinitialise l'historique
    updateHistory(); // Met à jour l'affichage de l'historique
}