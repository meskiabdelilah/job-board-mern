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

/**
 * Trier les offres selon la date de publication.
 * @param {Array} offres 
 * @param {string} selectedSort 
 * @returns {Array}
 */
export function sortByDate(offres, selectedSort) {
   if (selectedSort === "") {
      return offres;
   }
   const sortedOffres  = [...offres];

   if (selectedSort === "recent") {
      return sortedOffres .sort((offreA, offreB) => {
         const dateOffreA =  new Date(offreA.datePublication);
         const dateOffreB =  new Date(offreB.datePublication);
         return (dateOffreB - dateOffreA)
      });
   }

   if (selectedSort === "old") {
      return sortedOffres.sort((offreA, offreB) => {
         const dateOffreA = new Date(offreA.datePublication);
         const dateOffreB = new Date(offreB.datePublication);
         return (dateOffreA - dateOffreB);
      });
   }
   
   return offres;
}

/**
 * returner les offres suivies par utulisateur
 * @param {Array} offres 
 * @param {Array} followedIds 
 * @returns {Array}
 */
export function filterFollowedOffers(offres, followedIds) {
   if (followedIds.length === 0) {
      return []
   }

   return offres.filter(offre => followedIds.includes(offre.id));
}

/**
 * Compter les offres par type de contrat
 * @param {Array} offres 
 * @returns {object}
 */
export function countOffersByContract(offres) {
   return offres.reduce((counts, offre) => {

      if (offre.typeContrat === "Stage") {
            counts.stage++;
      }

      if (offre.typeContrat === "Alternance") {
         counts.alternance++;
      }

      return counts;

    }, {
        stage: 0,
        alternance: 0
    });
}