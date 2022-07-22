
/////////////////////////////////////////////////////////////// VARIABLES 
const filterIngredients                 = document.querySelectorAll(".filter__container")[0];
const inputIngredients                  = document.querySelector(".researchIngredients");
const titleIngredients                  = document.querySelectorAll(".filter__container__text")[0];
const dropdownIngredients               = document.querySelectorAll(".dropdown-logo")[0];
const dropUpIngredients                 = document.querySelectorAll(".dropup-logo")[0];
const contenairResultIngredients        = document.createElement("div");
filterIngredients.style.backgroundColor = "#3282F7";

///////////////////////////////////////////////////////////// FILTRE INGREDIENTS 
function displayIngredients() {

    filterIngredients.style.display                      = "flex";
    filterIngredients.style.borderRadius                 = "5px";
    filterIngredients.style.backgroundColor              = "#3282F7";
    let openFilter = false;
    
    dropdownIngredients.addEventListener('click', () => {
  
      if (openFilter) {
            
        titleIngredients.style.display                       = "none";
        filterIngredients.style.flexWrap                     = "wrap";
        filterIngredients.style.justifyContent               = "flex-start";
        filterIngredients.style.width                        = "60%";
        inputIngredients.style.display                       = "block";
        dropdownIngredients.style.display                    = "none";
        dropUpIngredients.style.display                      = "block";
        dropUpIngredients.style.paddingTop                   = "18px";
        dropUpIngredients.style.height                       = "40";
        contenairResultIngredients.style.display             = "grid";
        contenairResultIngredients.style.gridTemplateColumns = "1fr 1fr 1fr";
        contenairResultIngredients.style.gap                 = "2px";
        contenairResultIngredients.style.padding             = "0px 15px 15px";
        contenairResultIngredients.style.width               = "100%";
        contenairResultIngredients.style.backgroundColor     = "#3282F7";
        contenairResultIngredients.style.borderRadius        = "5px";
        contenairResultIngredients.style.position            = "relative";
        filterIngredients.appendChild(dropUpIngredients);
        filterIngredients.appendChild(contenairResultIngredients); 
  
        /**** recherche dans l'input des ingrédients *****/
        inputIngredients.addEventListener('keyup', () => {
          if (inputIngredients.value.length >= 3) {
        
            for (const listIngredientResultInFilter of contenairResultIngredients.children) {
  
              const researchInputIngredient   = inputIngredients.value.toLowerCase();                          // convertie en minuscule la recherche utilisateur
              const ingredientResultInFilter  = listIngredientResultInFilter.textContent.toLowerCase();        // convertie en minuscule les ingredients
              const goodResearchIngredients   = ingredientResultInFilter.startsWith(researchInputIngredient);  // la recherche commence par ...
  
              if (goodResearchIngredients) {
  
                console.log(ingredientResultInFilter)
        
                // toDo : afficher les recettes
               
  
                // toDo : faire les inputs appareils et ustensiles
    
              } 
              // else {
              // console.log('rien')
              // }
              
            }
            
          }
        })
  
      } else {
  
        dropUpIngredients.addEventListener('click', () => {
  
          dropdownIngredients.style.display        = "block";
          dropUpIngredients.style.display          = "none";
          filterIngredients.style.display          = "flex";
          filterIngredients.style.borderRadius     = "5px";
          filterIngredients.style.backgroundColor  = "#3282F7";
          filterIngredients.style.justifyContent   = "space-around"
          filterIngredients.style.width            = "170px";
          inputIngredients.style.display           = "none";
          titleIngredients.style.display           = "block";
          contenairResultIngredients.style.display = "none";
  
        }); 
      }
        openFilter = !openFilter;
    });           
}

function getIngredientsToDisplayInTag(recipesToDisplay) {

    const resultIngredients = []; 
    
    /** boucle sur les bons résultats du tableau de recherche **/
    for (const result of recipesToDisplay) {
      /** et ensuite boucle sur la liste des résultats des ingredients **/
      for (const listOfIngredient of result.ingredients){
        resultIngredients.push(listOfIngredient.ingredient);  
      } 
    }
    
    /*************** supprime les doublons  ****************/ 
    const tabResultIngredients = new Set(resultIngredients);
    for (const resultIngredient of tabResultIngredients) {
    
     const listOfResultIngredient       = document.createElement("p");
     listOfResultIngredient.className   = "allIngredient-result";
     listOfResultIngredient.textContent = resultIngredient
     contenairResultIngredients.appendChild(listOfResultIngredient);

      /** à chaque click sur un ingredient, on ajoute son tag dans la section tag **/
      listOfResultIngredient.addEventListener('click' ,() => {
    
        searchInput.style.marginBottom               = "0px";
        sectionTag.style.display                     = "flex";
        sectionTag.style.flexWrap                    = "wrap";
        sectionTag.style.margin                      = "20px 0px 0px 0px";
        sectionTag.style.height                      = "auto";
        const tagContenairIngredients                = document.createElement("div");
        tagContenairIngredients.className            = "tags__contenair-ingredients";
        tagContenairIngredients.style.display        = "flex";
        tagContenairIngredients.style.justifyContent = "space-around";
        tagContenairIngredients.style.alignItems     = "center";
        tagContenairIngredients.style.width          = "15%";
        tagContenairIngredients.style.backgroundColor= "#3282F7";
        tagContenairIngredients.style.borderRadius   = "5px";
        tagContenairIngredients.style.color          = "white";
        tagContenairIngredients.style.margin         = "0px 15px 20px 0px";
        const tagsIngredients                        = document.createElement("p");
        tagsIngredients.className                    = "tags__container__text";
        const divLogo                                = document.createElement("div");
        divLogo.className                            = "tags__container__circle-logo";
        divLogo.style.width                          = "15px";
        divLogo.style.paddingTop                     = "5px";
        divLogo.style.cursor                         = "pointer";
        const imgCloseLogo                           = document.createElement("img");
        imgCloseLogo.src                             = "images/circlexmark.svg";
        divLogo.appendChild(imgCloseLogo);
        tagContenairIngredients.appendChild(listOfResultIngredient);
        tagContenairIngredients.appendChild(divLogo);
        sectionTag.appendChild(tagContenairIngredients);

          /** au click sur (x), on enlève le tag dans la section tag **/
          divLogo.addEventListener('click', () => {
            sectionTag.removeChild(tagContenairIngredients);  
          });
      });
    }  
}

const allIngredients = getIngredientsToDisplayInTag(recipes);
displayIngredients(allIngredients);
