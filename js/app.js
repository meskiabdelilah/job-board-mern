import { fetchOffres } from "./data.js";
import { filterByContract } from "./filters.js";
import { renderCards, renderError, renderLoading } from "./render.js";

async function init () {
 const container = document.getElementById("offres-container");
 const contractFilters  = document.querySelectorAll(".filter-contract");


 renderLoading(container);
 const {data:allOffres, error} = await fetchOffres();

 if (error) {
    renderError(container,error)
    console.log("Error Detecte", error);
    return;    

 } else {
     renderCards(allOffres,container)

    contractFilters.forEach(filter => {
        filter.addEventListener("change", () => {
            // Récupérer uniquement les contrats cochés
            const checkedBoxes = document.querySelectorAll(".filter-contract:checked");
            
            // Transformer la NodeList en tableau de valeurs : ["Stage", "Alternance"]
            const selectedContracts = Array.from(checkedBoxes).map(box => box.value);
            
            // Filtrer les offres selon les contrats sélectionnés
            const filteredOffres = filterByContract(allOffres,selectedContracts);
                renderCards(filteredOffres, container);
            
        });
    });
 }

}

init();