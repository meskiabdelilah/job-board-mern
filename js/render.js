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

/**
 * affichage de l'etat de chargement 
 * @param {HTMLElement} container 
 */

export function renderLoading (container){
    container.innerHTML = `
        <div> 
            <p> Chargement des offres en cours... </p>
        </div>
    `;
}

/**
 * affichage de l'error message
 * @param {HTMLElement} container 
 * @param {string} message
 */
export function renderError(container, message)
{
    container.textContent = '' ;
    const divError = document.createElement('div');
        divError.classList.add('error-message');    
        divError.textContent = message ;

    container.appendChild(divError);
}

/**
 * Afficher les détails d'une offre
 * @param {Object} offre
 * @param {HTMLElement} container
 */
export function renderDetailsCard(offre, container) {
    const badgeClass = offre.typeContrat.toLowerCase().includes("stage")? "badge-stage": "badge-alternance";

    container.innerHTML = `
        <article class="job-card job-card-lg">

            <div class="card-header">
                <div>
                    <span class="badge ${badgeClass}">
                        ${offre.typeContrat}
                    </span>

                    <h1 class="card-header-title">
                        ${offre.titre}
                    </h1>

                    <p class="company company-lg">
                        ${offre.entreprise} • ${offre.ville}
                    </p>
                </div>

                <div>
                    <button class="btn btn-outline">
                        Sauvegarder
                    </button>
                </div>
            </div>


            <hr class="divider">


            <div class="job-details-content">

                <h3>Description du poste</h3>
                <p>
                    ${offre.descriptionLongue}
                </p>

                <h3>Profil recherché</h3>
                <p>
                    ${offre.profilRecherche}
                </p>

                <h3>Technologies requises</h3>

                <div class="tags">
                    ${offre.technologies
                        .map(tech => `
                            <span class="tag">${tech}</span>
                        `)
                        .join("")}
                </div>

            </div>


            <hr class="divider">


            <div class="card-footer card-footer-clean">

                <small>
                    Publié le ${offre.datePublication}
                </small>

                ${
                    offre.emailContact
                        ? `
                            <a
                                href="mailto:${offre.emailContact}"
                                class="btn btn-primary btn-lg"
                            >
                                Postuler par Email
                            </a>
                        `
                        : `
                            <a
                                href="${offre.lienCandidature}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btn btn-primary btn-lg"
                            >
                                Postuler
                            </a>
                        `
                }

            </div>

        </article>
    `;
}