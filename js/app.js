import { fetchOffres } from "./data.js";
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
            const checkedBoxes = document.querySelectorAll(".filter-contract:checked");
            const selectedContracts = Array.from(checkedBoxes).map(box => box.value);

            if (selectedContracts.length === 0) {
                renderCards(allOffres,container)
            } else {
              const filteredOffres = allOffres.filter(offre => selectedContracts.includes(offre.typeContrat));
                renderCards(filteredOffres, container);
            }
            
        });
    });
 }

}

init();