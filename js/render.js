/**
 * Afficher des cartes d'offres dynamique (succes / empty state)
 * @param {Array} offres 
 * @param {HTMLElement} container 
 */
export function renderCards (offres, container) {
    if (!offres || offres.length === 0 )
    {
        container.innerHTML = `
        <div> <p> Aucun offres dans le moment </p> </div>`;

        return ;
    }

    const cardsHTML = offres.map(offre => {
        const badgeClass  = offre.typeContrat.toLowerCase().includes("stage") ? 'badge-stage' :  'badge-alternance';
        return `
            <article class="job-card">
                <div class="card-header">
                    <div>
                        <span class = "badge ${badgeClass}" >${offre.typeContrat}</span>
                        <h2>${offre.titre}</h2>
                        <p class="company">${offre.entreprise} • ${offre.ville}</p>
                    </div>
                </div>
                
                <div class="tags">
                        ${offre.technologies.map(tech => `<span class = "tag" > ${tech} </span>`).join("")}
                </div>
                <div>
                    <p>
                        ${offre.descriptionCourte}
                    </p>
                </div>

                <div class="card-footer">
                    <small>${offre.datePublication || "Récemment"}</small>
                    <a href="offre-detail.html?id=${offre.id}" class="btn btn-outline">Voir détails</a>
                </div>
            </article>
        `
    }).join("");

    container.innerHTML = cardsHTML ;
}