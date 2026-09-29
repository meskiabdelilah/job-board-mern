/**
 * Charge la liste des offres depuis le fichier JSON.
 * @returns {Promise<{data: Array, error: string|null}>} Résultat du chargement avec gestion d'erreurs.
 */
export async function fetchOffres() {
    try {        const reponse = await fetch("data/offres.json");

        if (!reponse.ok) {
            // Si le serveur renvoie une erreur HTTP, on déclenche une exception
            throw new Error(`Error HTTP: ${reponse.status}`);
        }
        // console.log(reponse);
        
        // Conversion de la réponse brute en tableau/objet JavaScript
        const offres = await reponse.json();
        
        // Succès : On retourne les données avec 'error' à null
        return { data: offres, error: null };

    } catch (error) {
        console.error("Problème de chargement des offres:", error.message);
        
        // Échec : On retourne un tableau vide et un message lisible pour l'utilisateur
        return { data: [], error: "Impossible de charger les offres pour le moment." };
    }
}