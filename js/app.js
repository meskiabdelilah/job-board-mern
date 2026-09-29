import { fetchOffres } from "./data.js";
import { renderCards, renderLoading } from "./render.js";

async function init () {
 const container = document.getElementById("offres-container")

 renderLoading(container);
 const {data:allOffres, error} = await fetchOffres();

 if (error) {
    console.log("Error Detecte", error);

} else {
    renderCards(allOffres,container);
    // console.log("Offres charge avec succes", allOffres);
    
 }

}

init();