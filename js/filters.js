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

/**
 * Filter les offres selon les villes coches
 * @param {Array} offres 
 * @param {string} selectedCity 
 * @returns {Array}
 */
export function filterByCity(offres, selectedCity) {
   if (selectedCity === "") {
      return offres;
   }
   
   return offres.filter(offre => offre.ville === selectedCity);
}

/**
 * filter les offres selon les technologies coches
 * @param {Array} offres 
 * @param {Array} selectedTechnologies 
 * @returns {Array}
 */
export function filterByTechnology (offres, selectedTechnologies) {
   if (selectedTechnologies.length === 0) {
      return offres
   }

   return offres.filter(offre => selectedTechnologies.some(tech => offre.technologies.includes(tech)));

}

/**
 * filter les offres selon les search 
 * @param {Array} offres 
 * @param {string} searchText 
 * @returns {Array}
 */
export function filterBySearch(offres, searchText) {
   const query = searchText.toLowerCase().trim();
   if (query === "") {
      return offres ;
   }

   return offres.filter(offre => offre.titre.toLowerCase().includes(query)|| 
                        offre.entreprise.toLowerCase().includes(query) || 
                        offre.descriptionCourte.toLowerCase().includes(query)
                        );
}