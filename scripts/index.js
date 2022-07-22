
//////////////////////////////////////////////////////////////////////////////////  VARIABLES  
const errorSearch                       = document.querySelector(".error-message");
const searchInput                       = document.querySelector(".search__input");
const recipesContent                    = document.querySelector(".recipes__content");
const sectionTag                        = document.querySelector(".tags");
const allFilter                         = document.querySelectorAll(".filter__container");

////////////////////////////////////////////////////////////////////////////////// CREATION DES CARTES DE RECETTES  
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

displayAllRecipes(recipes);

////////////////////////////////////////////////////////////////// RECHERCHE PRINCIPALE 
searchInput.addEventListener("keyup", () => {
 
  /** si value supérieur ou égale à 3 caractères **/
  if (searchInput.value.length >= 3) {

    contenairResultIngredients.innerHTML  = '';
    contenairResultAppareils.innerHTML    = '';
    contenairResultUstensiles.innerHTML   = '';
    const recipesResult = [];
    
    /** boucle sur le tableau des recettes **/
    for (const eachRecipe of recipes) {

      let research                 = searchInput.value;                     // variable de la "value"
      let recipeName               = eachRecipe.name;
      let recipeDescription        = eachRecipe.description;
      recipeName                   = recipeName.toLowerCase();              // convertir le nom des recettes en minuscule
      recipeDescription            = recipeDescription.toLowerCase();
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
      errorSearch.style.display    = "none";
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