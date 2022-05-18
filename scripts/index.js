
//recupère l'input de recherche
const searchInput = document.querySelector(".search__input"); 
//console.log(searchInput);


//ecoute l'évènement 
searchInput.addEventListener('keyup',testInput);
function testInput() {

  if (searchInput.value.length >= 3) {
 
    //  1 . recupère les recettes
    console.log(recipes);
    //  2 . on boucle sur le tableau de recettes

    //  3 . pour chaque recette on verifie si les 3 premieres lettres correspondent ,soit la recette, soit la liste des ingrédients, soit la description de la recette

  } else if (searchInput.value.length < 3) {

    console.log('message erreur');
  }

}