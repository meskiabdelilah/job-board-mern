/**
 * Filtrer les offres selon les types de contrat sélectionnés.
 * @param {Array} offres
 * @param {Array} selectedContracts
 * @returns {Array} Les offres filtrées
 */
export function filterByContract(offres, selectedContracts) {

    if (selectedContracts.length === 0) {
       return offres;
    } 
     return offres.filter(offre =>selectedContracts.includes(offre.typeContrat));
        
}