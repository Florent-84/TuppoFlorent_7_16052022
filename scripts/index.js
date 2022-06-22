
/////////////////////////////////////////////////////////////////////////  AFFICHER TOUTES LES RECETTES  ////////////////////////////////////////////////////////
const errorSearch         = document.querySelector(".error-message");
const searchInput         = document.querySelector(".search__input");
const recipesContent      = document.querySelector(".recipes__content");
const recipesCard         = document.querySelectorAll(".recipes__card");
const main                = document.querySelector("main");
const contentArticle      = document.createElement("section");
contentArticle.className  = "recipes__content";

function displayAllRecipes(recipesToDisplay) { 
 
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
displayAllRecipes(recipes);

///////////////////////////////////////////////////////////////////////// BARRE DE RECHERCHE PRINCIPALE /////////////////////////////////////////////////////////
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
      //console.log("afficher erreur");

    } else {
        //recipesContent.removeChild(recipesCard)
        displayAllRecipes(recipesResult) // !!! probléme affiche les bons résultats mais il faut enlever les cartes non recherchées !!!!
        errorSearch.style.display = "none";
        recipesContent.style.display = "flex";
       
        console.log("afficher les recherches", recipesResult)
    }

  /** sinon on affiche toutes les recettes **/ 
  } else {
   //displayAllRecipes(recipes);  // probleme !!! répétition de fonction a chaque touche enfoncée !!!!
  }

  
});


 ////// ToDo : actualisation de l'interface + les champs de recherches avancées sont actualisées avec INGREDIENT / USTENSILES / APPAREIL

////////////////////////////////////////////////////////////////// FILTRES DE RECHERCHES AVANCEES  ////////////////////////////////////////////////
// filtre des ingredients
const allFilter     = document.querySelectorAll(".filter__container");

allFilter[0].style.backgroundColor = "#3282F7";
allFilter[1].style.backgroundColor = "#68D9A4";
allFilter[2].style.backgroundColor = "#ED6454"; 

allFilter.forEach((item) => {

  let openFilter = false;

  item.addEventListener("click", () => {

    openFilter = !openFilter;

    if (openFilter) {
      const dropUp = item.lastElementChild;
      dropUp.style.display = "block";
      const dropdown = item.children[1];
      dropdown.style.display = "none";
      console.log("ouvre la div et rajoute du contenu change la flèche");

    } else {
      const dropUp = item.lastElementChild;
      dropUp.style.display = "none";
      const dropdown = item.children[1];
      dropdown.style.display = "block";
      console.log("fermer la div en position de départ et cache son contenu et rechange la flèche");
    }
  });
})


  



