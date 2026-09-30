import { fetchOffres } from "./data.js";
import { renderError, renderDetailsCard ,renderLoading } from "./render.js";

async function initDetails () {
    const params = new URLSearchParams(window.location.search);
    const id = Number (params.get("id"));
 const container = document.getElementById("offre-detail-container")

    renderLoading(container);


    const { data: allOffres, error} = await fetchOffres();
    if (error) {
        renderError(container, error)
        console.log("Error Detecte", error);
        return;
    }

    const offre = allOffres.find(offre => offre.id === id);

    if (!offre) {
   
        renderError(container,"Cette offre n'existe pas ou n'est plus disponible.");
    return;

    }
    renderDetailsCard(offre, container);

}

initDetails();
