/**
 * returner les id's dans localstorage
 * @returns {Array}
 */
export function getFollowedOffers() {
    const storedOffers = localStorage.getItem("followedOffers");
    if (!storedOffers) {
        return []
    } 
        return JSON.parse(storedOffers);
}

/**
 * ajouter id de offre dans localstorage
 * @param {number} id 
 * @returns {Array}
 */
export function addFollowedOffer(id) {
    const followedOffers = getFollowedOffers();
    if (!followedOffers.includes(id)) {
        followedOffers.push(id);
    }

    const followedOffersString = JSON.stringify(followedOffers);
    localStorage.setItem("followedOffers",followedOffersString);

    return followedOffers;
}