
////////////////////////////////////////////////////////////////////////////////  VARIABLES  ////////////////////////////////////////////////////////////////////////////
const errorSearch                       = document.querySelector(".error-message");
const searchInput                       = document.querySelector(".search__input");
const recipesContent                    = document.querySelector(".recipes__content");
const main                              = document.querySelector("main");
const contentArticle                    = document.createElement("section");
const inputIngredients                  = document.querySelector(".researchIngredients");
const inputAppareils                    = document.querySelector(".researchAppareils");
const inputUstensiles                   = document.querySelector(".researchUstensiles");
const sectionTag                        = document.querySelector(".tags");
const allFilter                         = document.querySelectorAll(".filter__container");
const filterIngredients                 = document.querySelectorAll(".filter__container")[0];
const filterAppareils                   = document.querySelectorAll(".filter__container")[1];
const filterUstensiles                  = document.querySelectorAll(".filter__container")[2];
const titleIngredients                  = document.querySelectorAll(".filter__container__text")[0];
const titleAppareils                    = document.querySelectorAll(".filter__container__text")[1];
const titleUstensiles                   = document.querySelectorAll(".filter__container__text")[2];
const dropdownIngredients               = document.querySelectorAll(".dropdown-logo")[0];
const dropdownAppareils                 = document.querySelectorAll(".dropdown-logo")[1];
const dropdownUstensiles                = document.querySelectorAll(".dropdown-logo")[2];
const dropUpIngredients                 = document.querySelectorAll(".dropup-logo")[0];
const dropUpAppareils                   = document.querySelectorAll(".dropup-logo")[1];
const dropUpUstensiles                  = document.querySelectorAll(".dropup-logo")[2];
const contenairResultIngredients        = document.createElement("div");
const contenairResultAppareils          = document.createElement("div");
const contenairResultUstensiles         = document.createElement("div");
contentArticle.className                = "recipes__content";
filterIngredients.style.backgroundColor = "#3282F7";
filterAppareils.style.backgroundColor   = "#68D9A4";
filterUstensiles.style.backgroundColor  = "#ED6454"; 
inputIngredients .style.display         = "none";
inputAppareils.style.display            = "none";
inputUstensiles.style.display           = "none";
contenairResultIngredients.className    = "contenair-result-ingredients";
contenairResultAppareils.className      = "contenair-result-appareils";
contenairResultUstensiles.className     = "contenair-result-ustensiles";

/////////////////////////////////////////////////////////////////////////////  AFFICHER TOUTES LES RECETTES  /////////////////////////////////////////////////////////////////
/** fonction pour crée les cartes des recettes **/
function displayAllRecipes(recipesToDisplay) {
   
  recipesContent.innerHTML = '';
  /** boucle sur toutes les recettes **/
  for (let elt of recipesToDisplay) {
    const recipesCard = document.createElement("article");
    recipesCard.setAttribute("tabindex", "0");
    recipesCard.className = "recipes__card ";
    recipesCard.innerHTML = `<div class="recipes__image"></div>
                                <div class="recipes__title__content">
                                <h1 class="recipes__title">${elt.name}</h1>                              
                                  <p class="recipes__times"><img src="images/clock.svg" alt="logo temps de recette" class="logo__horloge-recette">${elt.time} min</p>
                                </div>
                                  <div class="contenair__desciption-recipes">                              
                                    <div class="recipes__description">
                                     <p class= "description-text">${elt.description}</p>
                                    </div>  
                                  </div>  
                                </div>`;

    /** boucle dans liste des ingredients **/                            
    for (let ingredientList of elt.ingredients){
        const contenairIngredients = document.createElement("div");
        contenairIngredients.className = "contenair-ingredients";
        contenairIngredients.innerHTML = `<p class="list-ingredient"><strong>${ingredientList.ingredient} :</strong></p>
                                          <p class="list-ingredient">${ingredientList.quantity}</p>
                                          <p class="list-ingredient">${ingredientList.unit}</p>`                    
        recipesCard.appendChild(contenairIngredients);
    }                           
    recipesContent.appendChild(recipesCard);
  } 

  const listIngredient = document.querySelectorAll(".list-ingredient");
  /** boucle dans dans toutes les balises d'ingredients et condition pour supprimer les "undefined" affichés **/
  for (let eachIngredient of listIngredient) {
    eachIngredient.textContent === 'undefined' ? eachIngredient.textContent = ' ' : eachIngredient.textContent;
  }
}

//////////////////////////////////////////////////////////////////////////////// FILTRE INGREDIENTS //////////////////////////////////////////////////////////////////////////////////
function displayIngredients(ingredientsToDisplay) {
   
  //console.log(contenairResultIngredients)
  //contenairResultIngredients.innerHTML = '';
  ingredientsToDisplay.forEach((ingredientsResult) => {
   
    const listOfResultIngredient = document.createElement("p");

      dropdownIngredients.addEventListener('click', displayFilterIngredient); 
      let openFilter = false;
  
      function displayFilterIngredient() {
       
        if (openFilter) {

          titleIngredients.style.display                       = "none";
          listOfResultIngredient.className                     = "allIngredient-result";
          listOfResultIngredient.textContent                   = ingredientsResult;
          filterIngredients.style.display                      = "flex";
          filterIngredients.style.flexWrap                     = "wrap";
          filterIngredients.style.justifyContent               = "flex-start";
          filterIngredients.style.width                        = "60%";
          filterIngredients.style.borderRadius                 = "5px";
          filterIngredients.style.backgroundColor              = "#3282F7";
          inputIngredients.style.display                       = "block";
          dropdownIngredients.style.display                    = "none";
          dropUpIngredients.style.display                      = "block";
          dropUpIngredients.style.paddingTop                   = "18px";
          dropUpIngredients.style.height                       = "40";
          contenairResultIngredients.style.display             = "grid";
          contenairResultIngredients.style.gridTemplateColumns = "1fr 1fr 1fr";
          contenairResultIngredients.style.padding             = "0px 15px 15px";
          contenairResultIngredients.style.width               = "100%";
          contenairResultIngredients.style.backgroundColor     = "#3282F7";
          contenairResultIngredients.style.borderRadius        = "5px";
          filterIngredients.appendChild(dropUpIngredients);     
          contenairResultIngredients.appendChild(listOfResultIngredient);
          filterIngredients.appendChild(contenairResultIngredients);
         
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
              tagsIngredients.textContent                  = ingredientsResult;
              const divLogo                                = document.createElement("div");
              divLogo.className                            = "tags__container__circle-logo";
              divLogo.style.width                          = "15px";
              divLogo.style.paddingTop                     = "5px";
              divLogo.style.cursor                         = "pointer";
              const imgCloseLogo                           = document.createElement("img");
              imgCloseLogo.src                             = "images/circlexmark.svg";
              tagContenairIngredients.appendChild(tagsIngredients);
              tagContenairIngredients.appendChild(divLogo);
              divLogo.appendChild(imgCloseLogo);
              sectionTag.appendChild(tagContenairIngredients);

                /** au click sur (x), on enlève le tag dans la section tag **/
                divLogo.addEventListener('click', () => {
                  sectionTag.removeChild(tagContenairIngredients);  
                });
              
            });
          
        } else {

          dropUpIngredients.addEventListener('click', () => {

            dropdownIngredients.style.display        = "block";
            dropUpIngredients.style.display          = "none";
            filterIngredients.style.display          = "flex";
            filterIngredients.style.justifyContent   = "space-around"
            filterIngredients.style.width            = "170px";
            inputIngredients.style.display           = "none";
            titleIngredients.style.display           = "block";
            contenairResultIngredients.style.display = "none";
 
          }); 
        }
          openFilter = !openFilter;              
      }        
    });
}

//////////////////////////////////////////////////////////////////////////////// FILTRE APPAREILS //////////////////////////////////////////////////////////////////////////////////
function displayAppareils(appareilToDisplay) {
  
  appareilToDisplay.forEach((applianceResult) => {

    const listOfResultAppareils = document.createElement("p");

      dropdownAppareils.addEventListener('click', displayFilterAppareil); 
      let openFilter = false;

      function displayFilterAppareil() {
       
        if (openFilter) {

          titleAppareils.style.display                       = "none";
          listOfResultAppareils.className                    = "allappareils-result";
          listOfResultAppareils.textContent                  = applianceResult;
          filterAppareils.style.display                      = "flex";
          filterAppareils.style.flexWrap                     = "wrap";
          filterAppareils.style.justifyContent               = "flex-start";
          filterAppareils.style.width                        = "60%";
          filterAppareils.style.borderRadius                 = "5px";
          filterAppareils.style.backgroundColor              = "#68D9A4";
          inputAppareils.style.display                       = "block";
          dropdownAppareils.style.display                    = "none";
          dropUpAppareils.style.display                      = "block";
          dropUpAppareils.style.paddingTop                   = "18px";
          dropUpAppareils.style.height                       = "40px";
          contenairResultAppareils.style.display             = "grid";
          contenairResultAppareils.style.gridTemplateColumns = "1fr 1fr 1fr";
          contenairResultAppareils.style.padding             = "0px 15px 15px";
          contenairResultAppareils.style.width               = "100%";
          contenairResultAppareils.style.backgroundColor     = "#68D9A4";
          contenairResultAppareils.style.borderRadius        = "5px";
          filterAppareils.appendChild(dropUpAppareils);     
          contenairResultAppareils.appendChild(listOfResultAppareils);
          filterAppareils.appendChild(contenairResultAppareils);
         
            /** à chaque click sur un appareil, on ajoute un tag dans la section tag **/
            listOfResultAppareils.addEventListener('click' ,() => {

              searchInput.style.marginBottom             = "0px";
              sectionTag.style.display                   = "flex";
              sectionTag.style.flexWrap                  = "wrap";
              sectionTag.style.margin                    = "20px 0px 0px 0px";
              sectionTag.style.height                    = "auto";
              const tagContenairAppareils                = document.createElement("div");
              tagContenairAppareils.className            = "tags__contenair-appareils";
              tagContenairAppareils.style.display        = "flex";
              tagContenairAppareils.style.justifyContent = "space-around";
              tagContenairAppareils.style.alignItems     = "center";
              tagContenairAppareils.style.width          = "15%";
              tagContenairAppareils.style.backgroundColor= "#68D9A4";
              tagContenairAppareils.style.borderRadius   = "5px";
              tagContenairAppareils.style.color          = "white";
              tagContenairAppareils.style.margin         = "0px 15px 20px 0px";
              const tagsAppareils                        = document.createElement("p");
              tagsAppareils.className                    = "tags__container__text";
              tagsAppareils.textContent                  = applianceResult;
              const divLogo                              = document.createElement("div");
              divLogo.className                          = "tags__container__circle-logo";
              divLogo.style.width                        = "15px";
              divLogo.style.paddingTop                   = "5px";
              divLogo.style.cursor                       = "pointer";
              const imgCloseLogo                         = document.createElement("img");
              imgCloseLogo.src                           = "images/circlexmark.svg";
              tagContenairAppareils.appendChild(tagsAppareils);
              tagContenairAppareils.appendChild(divLogo);
              divLogo.appendChild(imgCloseLogo);
              sectionTag.appendChild(tagContenairAppareils);

                /** au click sur (x), on enlève le tag dans la section tag **/
                divLogo.addEventListener('click', () => {
                sectionTag.removeChild(tagContenairAppareils);  
                });
              
            });

        } else {

          dropUpAppareils.addEventListener('click', () => {

            dropdownAppareils.style.display        = "block";
            dropUpAppareils.style.display          = "none";
            filterAppareils.style.display          = "flex";
            filterAppareils.style.justifyContent   = "space-around"
            filterAppareils.style.width            = "170px";
            inputAppareils.style.display           = "none";
            titleAppareils.style.display           = "block";
            contenairResultAppareils.style.display = "none";
            
          }); 
        }
          openFilter = !openFilter;              
      }        
    });
}

//////////////////////////////////////////////////////////////////////////////// FILTRE USTENSILES //////////////////////////////////////////////////////////////////////////////////
function displayUstensiles(ustensilesToDisplay) {
  
  ustensilesToDisplay.forEach((ustensilsResult) => {

    const listOfResultUstensiles = document.createElement("p");

      dropdownUstensiles.addEventListener('click', displayFilterUstensiles); 
      let openFilter = false;

      function displayFilterUstensiles() {
       
        if (openFilter) {

          titleUstensiles.style.display                       = "none";
          listOfResultUstensiles.className                    = "allustensiles-result";
          listOfResultUstensiles.textContent                  = ustensilsResult;
          filterUstensiles.style.display                      = "flex";
          filterUstensiles.style.flexWrap                     = "wrap";
          filterUstensiles.style.justifyContent               = "flex-start";
          filterUstensiles.style.width                        = "60%";
          filterUstensiles.style.borderRadius                 = "5px";
          filterUstensiles.style.backgroundColor              = "#ED6454";
          inputUstensiles.style.display                       = "block";
          dropdownUstensiles.style.display                    = "none";
          dropUpUstensiles.style.display                      = "block";
          dropUpUstensiles.style.paddingTop                   = "18px";
          dropUpUstensiles.style.height                       = "40px";
          contenairResultUstensiles.style.display             = "grid";
          contenairResultUstensiles.style.gridTemplateColumns = "1fr 1fr 1fr";
          contenairResultUstensiles.style.padding             = "0px 15px 15px";
          contenairResultUstensiles.style.width               = "100%";
          contenairResultUstensiles.style.backgroundColor     = "#ED6454";
          contenairResultUstensiles.style.borderRadius        = "5px";

          filterUstensiles.appendChild(dropUpUstensiles);     
          contenairResultUstensiles.appendChild(listOfResultUstensiles);
          filterUstensiles.appendChild(contenairResultUstensiles);
         
            /** à chaque click sur un ustensile, on ajoute son tag dans la section tag **/
            listOfResultUstensiles.addEventListener('click' ,() => {

              searchInput.style.marginBottom    = "0px";
              sectionTag.style.display          = "flex";
              sectionTag.style.flexWrap         = "wrap";
              sectionTag.style.margin           = "20px 0px 0px 0px";
              sectionTag.style.height           = "auto";

              const tagContenairUstensiles                = document.createElement("div");
              tagContenairUstensiles.className            = "tags__contenair-ustensils";
              tagContenairUstensiles.style.display        = "flex";
              tagContenairUstensiles.style.justifyContent = "space-around";
              tagContenairUstensiles.style.alignItems     = "center";
              tagContenairUstensiles.style.width          = "15%";
              tagContenairUstensiles.style.backgroundColor= "#ED6454";
              tagContenairUstensiles.style.borderRadius   = "5px";
              tagContenairUstensiles.style.color          = "white";
              tagContenairUstensiles.style.margin         = "0px 15px 20px 0px";

              const tagsUstensiles              = document.createElement("p");
              tagsUstensiles.className          = "tags__container__text";
              tagsUstensiles.textContent        = ustensilsResult;
              
              const divLogo                     = document.createElement("div");
              divLogo.className                 = "tags__container__circle-logo";
              divLogo.style.width               = "15px";
              divLogo.style.paddingTop          = "5px";
              divLogo.style.cursor              = "pointer";

              const imgCloseLogo                = document.createElement("img");
              imgCloseLogo.src                  = "images/circlexmark.svg";
           
              tagContenairUstensiles.appendChild(tagsUstensiles);
              tagContenairUstensiles.appendChild(divLogo);
              divLogo.appendChild(imgCloseLogo);
              sectionTag.appendChild(tagContenairUstensiles);

              divLogo.addEventListener('click', () => {
              sectionTag.removeChild(tagContenairUstensiles);  
              });
              
            });
   
        } else {

          dropUpUstensiles.addEventListener('click', () => {

            dropdownUstensiles.style.display        = "block";
            dropUpUstensiles.style.display          = "none";
            filterUstensiles.style.display          = "flex";
            filterUstensiles.style.justifyContent   = "space-around"
            filterUstensiles.style.width            = "170px";
            inputUstensiles.style.display           = "none";
            titleUstensiles.style.display           = "block";
            contenairResultUstensiles.style.display = "none";
            
          }); 
        }
          openFilter = !openFilter;              
      }        
    });
}

///////////////////////////////////////////////////////////////////////// TRI DES TAGS DANS LEUR FILTRE //////////////////////////////////////////////////////////////////////
function getIngredientsToDisplayInTag(recipesToDisplay) {

const resultIngredients = []; // tableau pour le bouton ingredient
 /** boucle sur les bons résultats du tableau de recherche **/
 for (const result of recipesToDisplay) {
  /** et ensuite boucle sur la liste des résultats des ingredients **/
  for (const listOfIngredient of result.ingredients){
    resultIngredients.push(listOfIngredient.ingredient);  
  }
 }
 /**** on retire les doublons ****/
//  console.log(resultIngredients)
 return new Set(resultIngredients);
}


function getAppareilsToDisplayInTag(recipesToDisplay) {

const resultAppareils   = []; // tableau pour le bouton appareils
 
 for (const result of recipesToDisplay) {
    resultAppareils.push(result.appliance); 
 }
 /*** on retire les doublons ***/
 return new Set(resultAppareils);
}


function getUstensilesToDisplayInTag(recipesToDisplay) {

const resultUstensils   = []; // tableau pour le bouton ustensiles

 for (const result of recipesToDisplay) {
  for (const listOfUstensils of result.ustensils){
    resultUstensils.push(listOfUstensils);  
  }
 }
 /*** on retire les doublons ***/
 return new Set(resultUstensils);
}


displayAllRecipes(recipes);
// const allIngredients = getIngredientsToDisplayInTag(recipes);
// displayIngredients(allIngredients);
// const allAppareils   = getAppareilsToDisplayInTag(recipes);
// displayAppareils(allAppareils);
// const allUstensils   = getUstensilesToDisplayInTag(recipes);
// displayUstensiles(allUstensils);

///////////////////////////////////////////////////////////////////////////// BARRE DE RECHERCHE PRINCIPALE ///////////////////////////////////////////////////////////////////////////
searchInput.addEventListener("keyup", () => {
 
  /** si value supérieur ou égale à 3 caractères **/
  if (searchInput.value.length >= 3) {
    const recipesResult = [];
    
    /** boucle sur le tableau des recettes **/
    for (const eachRecipe of recipes) {

      let research          = searchInput.value;                            // variable de la "value"
      let recipeName        = eachRecipe.name;
      let recipeDescription = eachRecipe.description;
      recipeName            = recipeName.toLowerCase();                     // convertir le nom des recettes en minuscule
      recipeDescription     = recipeDescription.toLowerCase();
      research                     = research.toLowerCase();                // convertie la value en minuscule
      const researchPerName        = recipeName.startsWith(research);       // variable recherche par nom 
      const researchPerDescription = recipeDescription.includes(research);  // variable recherche par description

      /*** si recherche par "NAME" ou "DESCRIPTION" ***/ 
      if (researchPerName || researchPerDescription ) {
       recipesResult.push(eachRecipe);
      } else {

        /*** sinon parcours tableau ingredient ***/
        for (const listOfIngredient of eachRecipe.ingredients) {  
          let recipesIngredient       = listOfIngredient.ingredient;
          recipesIngredient           = recipesIngredient.toLowerCase();
          const researchPerIngredient = recipesIngredient.startsWith(research);

          /** si recherche par "INGREDIENTS" **/
          if (researchPerIngredient) {
            recipesResult.push(eachRecipe);
          }    
        } 
      } 
    }
    
    /** si la recherche tombe dans tableau vide (rien trouvé) affiche message d'erreur **/
    if (recipesResult.length == 0) {
      recipesContent.style.display = "none";
      errorSearch.style.display    = "flex";
  
    /** sinon on affiche les bons résultats **/
    } else {

      displayAllRecipes(recipesResult);
      errorSearch.style.display = "none";
      recipesContent.style.display = "flex";

      const allResultIngredient = getIngredientsToDisplayInTag(recipesResult);
      displayIngredients(allResultIngredient);
      const allResultAppareil   = getAppareilsToDisplayInTag(recipesResult);
      displayAppareils(allResultAppareil);
      const allResultUstensils   = getUstensilesToDisplayInTag(recipesResult);
      displayUstensiles(allResultUstensils);
      
    }
    
  /** sinon on affiche toutes les recettes **/ 
  } else {
   displayAllRecipes(recipes);
  } 
});