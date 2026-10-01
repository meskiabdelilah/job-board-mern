import { fetchOffres } from "./data.js";
import { filterByContract , filterByCity, 
         filterByTechnology, filterBySearch, sortByDate} from "./filters.js";
import { renderCards, renderError, renderLoading } from "./render.js";

async function init () {
 const filtersState = {
    contracts: [],
    city: "",
    technologies: [],
    search: "",
    sort: ""
 };
 
 const container = document.getElementById("offres-container");
 const contractFilters  = document.querySelectorAll(".filter-contract");
 const cityFilters = document.getElementById("city-filter");
 const technologieFilters = document.querySelectorAll(".filter-technology");
 const searchInput  = document.getElementById("search-input");
 const sortDate = document.getElementById("sort-date");
 const resetButton = document.getElementById("reset-filters");


 renderLoading(container);
 const {data:allOffres, error} = await fetchOffres();

 if (error) {
    renderError(container,error)
    console.log("Error Detecte", error);
    return;    

 } else {
     renderCards(allOffres,container)

     // filter par contrats
    contractFilters.forEach(filter => {
        filter.addEventListener("change", () => {
            // Récupérer uniquement les contrats cochés
            const checkedBoxes = document.querySelectorAll(".filter-contract:checked");
            
            // Transformer la NodeList en tableau de valeurs : ["Stage", "Alternance"]
            const selectedContracts = Array.from(checkedBoxes).map(box => box.value);
                filtersState.contracts = selectedContracts;   
                applyFilters();
      
        });
    });

    // filter par ville
    cityFilters.addEventListener("change", () => {
        const selectedCity = cityFilters.value
            filtersState.city = selectedCity;  
            applyFilters();

        
    });

    // filter par technologies
    technologieFilters.forEach(filter => {
        filter.addEventListener("change", ()=> {
            // Récupérer uniquement les technologie cochés
            const checkedBoxes = document.querySelectorAll(".filter-technology:checked");
            const selectedTechnologies = Array.from(checkedBoxes).map(box => box.value);
                filtersState.technologies = selectedTechnologies;  
                applyFilters();

        });
    });

    // filter par search
    searchInput.addEventListener("input", () =>{
        const searchText = searchInput.value ;
        filtersState.search = searchText;
        applyFilters();        
    });

    // filter par date
    sortDate.addEventListener("change", ()=> {
            const selectedSort = sortDate.value ;
            filtersState.sort = selectedSort;
            applyFilters();
    });

    resetButton.addEventListener("click", () => {
       filtersState.contracts = [];
       filtersState.city = "";
       filtersState.technologies = [];
       filtersState.search = "";
       filtersState.sort = "";

       contractFilters.forEach(contract => contract.checked = false);
       cityFilters.value = "";
       technologieFilters.forEach(tech => tech.checked = false);
       searchInput.value = "";
       sortDate.value = "";

        
        applyFilters()
    });

 }

function applyFilters() {
    let result = allOffres;

    result = filterByContract(result, filtersState.contracts);

    result = filterByCity(result, filtersState.city);

    result = filterByTechnology(result, filtersState.technologies);

    result = filterBySearch(result, filtersState.search);

    result = sortByDate(result, filtersState.sort);

    renderCards(result, container);
}

}

init();