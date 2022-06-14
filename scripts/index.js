
// /////////////////////////////////////////////////////////////////////////  AFFICHER TOUTES LES RECETTES  ////////////////////////////////////////////////////////
// const errorSearch         = document.querySelector(".error-message");
// const searchInput         = document.querySelector(".search__input");
// const recipesContent      = document.querySelector(".recipes__content");
// const recipesCard         = document.querySelectorAll(".recipes__card");
// const main                = document.querySelector("main");
// const contentArticle      = document.createElement("section");
// contentArticle.className  = "recipes__content";

// function displayAllRecipes() {  
//   /** boucle sur toutes les recettes **/
//   for (let elt of recipes) {
//     const recipesCard = document.createElement("article");
//     recipesCard.setAttribute("tabindex", "0");
//     recipesCard.className = "recipes__card ";
//     recipesCard.innerHTML = `<div class="recipes__image"></div>
//                                 <div class="recipes__title__content">
//                                 <h1 class="recipes__title">${elt.name}</h1>                              
//                                   <p class="recipes__times"><img src="images/clock.svg" alt="logo temps de recette" class="logo__horloge-recette">${elt.time} min</p>
//                                 </div>
//                                   <div class="contenair__desciption-recipes">                              
//                                     <div class="recipes__description">
//                                      <p class= "description-text">${elt.description}</p>
//                                     </div>  
//                                   </div>  
//                                 </div>`;

//     /** boucle dans liste des ingredients **/                            
//     for (let ingredientList of elt.ingredients){
//         const contenairIngredients = document.createElement("div");
//         contenairIngredients.className = "contenair-ingredients";
//         contenairIngredients.innerHTML = `<p class="list-ingredient"><strong>${ingredientList.ingredient} :</strong></p>
//                                           <p class="list-ingredient">${ingredientList.quantity}</p>
//                                           <p class="list-ingredient">${ingredientList.unit}</p>`                    
//         recipesCard.appendChild(contenairIngredients);
//     }                           
//     recipesContent.appendChild(recipesCard);
//   } 

//   const listIngredient = document.querySelectorAll(".list-ingredient");
//   /** boucle dans dans toutes les balises d'ingredients et condition pour supprimer les "undefined" affichés **/
//   for (let eachIngredient of listIngredient) {
//     eachIngredient.textContent === 'undefined' ? eachIngredient.textContent = ' ' : eachIngredient.textContent;
//   }
// }
// displayAllRecipes();


// ///////////////////////////////////////////////////////////////////////// BARRE DE RECHERCHE PRINCIPALE /////////////////////////////////////////////////////////
// searchInput.addEventListener("keyup", research);

// errorSearch.style.display = "none";
// function research() {
//   /** si value supérieur ou égale à 3 caractères **/
//   if (searchInput.value.length >= 3) {

//     /** on boucle sur le tableau des recettes **/
//     for (let eachRecipe of recipes) {

//       let research          = searchInput.value;                         // variable de la "value"
//       let recipeName        = eachRecipe.name;
//       let recipeDescription = eachRecipe.description;
//       recipeName            = recipeName.toLowerCase();                  // convertir le nom des recettes en minuscule
//       recipeDescription     = recipeDescription.toLowerCase();

//       //research              = research.toLowerCase();                    // convertie la value en minuscule
//       recipeName.startsWith(research);                                   // verifie l'input si les mot ecrit commence bien par le nom d'une recette
//       recipeDescription.startsWith(research);

//       let researchPerName       = recipeName.startsWith(research);       // variable recherche par nom 
//       let researchPerDescription = recipeDescription.includes(research);

//        //si recherche par "NAME" ou "DESCRIPTION" ou "INGREDIENTS"
//        if (researchPerName || researchPerDescription){
              
//          const article = document.createElement("article");
//                article.setAttribute("tabindex", "0");
//                article.className = "recipes__card";
//                article.innerHTML = `<div class="recipes__image"></div>
//                                          <div class="recipes__title__content">
//                                            <h1 class="recipes__title">${eachRecipe.name}</h1>                              
//                                            <p class="recipes__times"><img src="images/clock.svg" alt="logo temps de recette" class="logo__horloge-recette">${eachRecipe.time} min</p>
//                                        </div>
//                                        <div class="contenair__desciption-recipes">                              
//                                           <div class="recipes__description">
//                                             <p class= "description-text">${eachRecipe.description}</p>
//                                           </div>  
//                                        </div>  
//                                       </div>`;

//             /** boucle dans liste des ingredients **/                            
//             for (let ingredientList of eachRecipe.ingredients){

//               const contenairIngredients = document.createElement("div");
//               contenairIngredients.className = "contenair-ingredients";
//               contenairIngredients.innerHTML = `<p class="list-ingredient"><strong>${ingredientList.ingredient} :</strong></p>
//                                                 <p class="list-ingredient">${ingredientList.quantity}</p>
//                                                 <p class="list-ingredient">${ingredientList.unit}</p>`
                                        
//               article.appendChild(contenairIngredients);

//           }
 
//            recipesContent.remove(recipesCard);
//            main.appendChild(contentArticle)
//            contentArticle.appendChild(article)
//            const listIngredient = document.querySelectorAll(".list-ingredient");

//            /** boucle dans dans toutes les balises d'ingredients et condition pour supprimer les "undefined" affichés **/
//            for (let eachIngredient of listIngredient) {
//              eachIngredient.textContent === 'undefined' ? eachIngredient.textContent = ' ' : eachIngredient.textContent;
//            }
 
//       /** sinon message d'erreur **/ 
//        } else {
//           recipesContent.style.display = "none";
//           errorSearch.style.display = "none";
//        }
//     }

//   /** sinon on affiche toutes les recettes **/ 
//   } else {
//     //displayAllRecipes();
//     //errorSearch.style.display = "none";
//   }
 
// }

//  // ToDo : actualisation de l'interface + les champs de recherches avancées sont actualisées avec INGREDIENT / USTENSILES / APPAREIL

// ////////////////////////////////////////////////////////////////// FILTRES DE RECHERCHES AVANCEES  ////////////////////////////////////////////////
// // filtre des ingredients
// const filterIngredient = document.querySelector(".filter__container-ingredient");

// filterIngredient.addEventListener("click", openIngredientList);
// let openFilter = false;
// function openIngredientList() {
//   //const filterIngredient = document.querySelector('.filter__container-ingredient');
//   const dropUp = document.querySelector(".dropup-logo-ingredient");
//   const dropDown = document.querySelector(".dropdown-logo-ingredient");
//   openFilter = !openFilter;

//   if (openFilter) {
//     console.log("ouvre la div et rajoute du contenu");
//     //recupere la div dropup et l'afficher
//     dropUp.style.display = "block";
//     // cacher la div dropdown
//     dropDown.style.display = "none";
//   } else {
//     console.log("fermer la div en position de départ et cache son contenu");
//     // remettre dropdown
//     dropDown.style.display = "block";
//     //cacher dropup
//     dropUp.style.display = "none";
//   }
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////  AFFICHER TOUTES LES RECETTES  ////////////////////////////////////////////////////////
const errorSearch         = document.querySelector(".error-message");
const searchInput         = document.querySelector(".search__input");
const recipesContent      = document.querySelector(".recipes__content");
const recipesCard         = document.querySelectorAll(".recipes__card");
const main                = document.querySelector("main");
const contentArticle      = document.createElement("section");
contentArticle.className  = "recipes__content";

function displayAllRecipes() {  
  /** boucle sur toutes les recettes **/
  for (let elt of recipes) {
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
displayAllRecipes();


///////////////////////////////////////////////////////////////////////// BARRE DE RECHERCHE PRINCIPALE /////////////////////////////////////////////////////////
searchInput.addEventListener("keyup", research);

errorSearch.style.display = "none";
function research() {
  /** si value supérieur ou égale à 3 caractères **/
  if (searchInput.value.length >= 3) {

    /** on boucle sur le tableau des recettes **/
    for (let eachRecipe of recipes) {

      let research          = searchInput.value;                         // variable de la "value"
      let recipeName        = eachRecipe.name;
      let recipeDescription = eachRecipe.description;
      recipeName            = recipeName.toLowerCase();                  // convertir le nom des recettes en minuscule
      recipeDescription     = recipeDescription.toLowerCase();

      //research              = research.toLowerCase();                    // convertie la value en minuscule
      recipeName.startsWith(research);                                   // verifie l'input si les mot ecrit commence bien par le nom d'une recette
      recipeDescription.startsWith(research);

      let researchPerName       = recipeName.startsWith(research);       // variable recherche par nom 
      let researchPerDescription = recipeDescription.includes(research);

       //si recherche par "NAME" ou "DESCRIPTION" ou "INGREDIENTS"
       if (researchPerName || researchPerDescription){
              
         const article = document.createElement("article");
               article.setAttribute("tabindex", "0");
               article.className = "recipes__card";
               article.innerHTML = `<div class="recipes__image"></div>
                                         <div class="recipes__title__content">
                                           <h1 class="recipes__title">${eachRecipe.name}</h1>                              
                                           <p class="recipes__times"><img src="images/clock.svg" alt="logo temps de recette" class="logo__horloge-recette">${eachRecipe.time} min</p>
                                       </div>
                                       <div class="contenair__desciption-recipes">                              
                                          <div class="recipes__description">
                                            <p class= "description-text">${eachRecipe.description}</p>
                                          </div>  
                                       </div>  
                                      </div>`;

            /** boucle dans liste des ingredients **/                            
            for (let ingredientList of eachRecipe.ingredients){

              const contenairIngredients = document.createElement("div");
              contenairIngredients.className = "contenair-ingredients";
              contenairIngredients.innerHTML = `<p class="list-ingredient"><strong>${ingredientList.ingredient} :</strong></p>
                                                <p class="list-ingredient">${ingredientList.quantity}</p>
                                                <p class="list-ingredient">${ingredientList.unit}</p>`
                                        
              article.appendChild(contenairIngredients);

          }
 
           recipesContent.remove(recipesCard);
           main.appendChild(contentArticle)
           contentArticle.appendChild(article)
           const listIngredient = document.querySelectorAll(".list-ingredient");

           /** boucle dans dans toutes les balises d'ingredients et condition pour supprimer les "undefined" affichés **/
           for (let eachIngredient of listIngredient) {
             eachIngredient.textContent === 'undefined' ? eachIngredient.textContent = ' ' : eachIngredient.textContent;
           }
 
      /** sinon message d'erreur **/ 
       } else {
          recipesContent.style.display = "none";
          errorSearch.style.display = "none";
       }
    }

  /** sinon on affiche toutes les recettes **/ 
  } else {
    //displayAllRecipes();
    //errorSearch.style.display = "none";
  }
 
}

 // ToDo : actualisation de l'interface + les champs de recherches avancées sont actualisées avec INGREDIENT / USTENSILES / APPAREIL

////////////////////////////////////////////////////////////////// FILTRES DE RECHERCHES AVANCEES  ////////////////////////////////////////////////
// filtre des ingredients
const filterIngredient = document.querySelector(".filter__container-ingredient");

filterIngredient.addEventListener("click", openIngredientList);
let openFilter = false;
function openIngredientList() {
  //const filterIngredient = document.querySelector('.filter__container-ingredient');
  const dropUp = document.querySelector(".dropup-logo-ingredient");
  const dropDown = document.querySelector(".dropdown-logo-ingredient");
  openFilter = !openFilter;

  if (openFilter) {
    console.log("ouvre la div et rajoute du contenu");
    //recupere la div dropup et l'afficher
    dropUp.style.display = "block";
    // cacher la div dropdown
    dropDown.style.display = "none";
  } else {
    console.log("fermer la div en position de départ et cache son contenu");
    // remettre dropdown
    dropDown.style.display = "block";
    //cacher dropup
    dropUp.style.display = "none";
  }
}