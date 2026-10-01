import { getFollowedOffers, removeFollowedOffer } from "./storage.js";
import { fetchOffres } from "./data.js";
import { renderError, renderLoading, renderFollowedOffers, renderFollowedCount} from "./render.js";
import { filterFollowedOffers } from "./filters.js";


async function initFollowedOffers() {
    const container = document.getElementById("followed-offers-container"); 
    const followedCount = document.getElementById("followed-count");

    renderLoading(container);

    const { data: allOffres, error} = await fetchOffres();
    if (error) {
        renderError(container, error)
        console.log("Error Detecte", error);
        return;
    }

    const followedOffers = getFollowedOffers();
    const result = filterFollowedOffers(allOffres, followedOffers);
    renderFollowedOffers(result, container)
    renderFollowedCount(result.length, followedCount);

    const removeBtn = document.querySelectorAll(".remove-followed-btn");


    removeBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            const removeId= Number(btn.dataset.id);
            console.log(removeId);
            
            removeFollowedOffer(removeId);
            initFollowedOffers();
        })
    })

    // console.log(result);    
}

initFollowedOffers();
