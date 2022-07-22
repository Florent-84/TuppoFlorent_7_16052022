
///////////////////////////////////////////////////////////////////////////////  VARIABLES
const filterUstensiles                  = document.querySelectorAll(".filter__container")[2];
const inputUstensiles                   = document.querySelector(".researchUstensiles");
const titleUstensiles                   = document.querySelectorAll(".filter__container__text")[2];
const dropdownUstensiles                = document.querySelectorAll(".dropdown-logo")[2];
const dropUpUstensiles                  = document.querySelectorAll(".dropup-logo")[2];
const contenairResultUstensiles         = document.createElement("div");
contenairResultUstensiles.className     = "contenair-result-ustensiles";
filterUstensiles.style.backgroundColor  = "#ED6454"; 

//////////////////////////////////////////////////////////////////////////////// FILTRE USTENSILES 
function displayUstensiles() {

    filterUstensiles.style.display                      = "flex";
    filterUstensiles.style.borderRadius                 = "5px";
    filterUstensiles.style.backgroundColor              = "#ED6454";
    let openFilter = false;
    
        dropdownUstensiles.addEventListener('click', () => {
  
          if (openFilter) {
  
            titleUstensiles.style.display                       = "none";
            filterUstensiles.style.flexWrap                     = "wrap";
            filterUstensiles.style.justifyContent               = "flex-start";
            filterUstensiles.style.width                        = "60%";
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
            contenairResultUstensiles.style.position            = "relative";
            filterUstensiles.appendChild(dropUpUstensiles);     
            filterUstensiles.appendChild(contenairResultUstensiles);
           
          } else {
  
            dropUpUstensiles.addEventListener('click', () => {
  
              dropdownUstensiles.style.display        = "block";
              dropUpUstensiles.style.display          = "none";
              filterUstensiles.style.display          = "flex";
              filterUstensiles.style.justifyContent   = "space-around"
              filterUstensiles.style.width            = "170px";
              filterUstensiles.style.borderRadius     = "5px";
              filterUstensiles.style.backgroundColor  = "#ED6454";
              inputUstensiles.style.display           = "none";
              titleUstensiles.style.display           = "block";
              contenairResultUstensiles.style.display = "none";
              
            }); 
          }
          openFilter = !openFilter;  
        });                     
}

function getUstensilesToDisplayInTag(recipesToDisplay) {

    const resultUstensils   = []; // tableau pour le bouton ustensiles
    
    for (const result of recipesToDisplay) {
      for (const listOfUstensils of result.ustensils){
        resultUstensils.push(listOfUstensils);  
      }
    }
     /************* supprime les doublons *************/ 
    const tabResultUstensils = new Set(resultUstensils);
    for (const resultUstensil of tabResultUstensils) {
    
      const listOfResultUstensiles       = document.createElement("p");
      listOfResultUstensiles.className   = "allustensiles-result";
      listOfResultUstensiles.textContent = resultUstensil
      contenairResultUstensiles.appendChild(listOfResultUstensiles);
      
      /** à chaque click sur un ustensile, on ajoute son tag dans la section tag **/
      listOfResultUstensiles.addEventListener('click' ,() => {
     
         searchInput.style.marginBottom               = "0px";
         sectionTag.style.display                     = "flex";
         sectionTag.style.flexWrap                    = "wrap";
         sectionTag.style.margin                      = "20px 0px 0px 0px";
         sectionTag.style.height                      = "auto";
         const tagContenairUstensiles                 = document.createElement("div");
         tagContenairUstensiles.className              = "tags__contenair-ustensiles";
         tagContenairUstensiles.style.display          = "flex";
         tagContenairUstensiles.style.justifyContent   = "space-around";
         tagContenairUstensiles.style.alignItems       = "center";
         tagContenairUstensiles.style.width            = "15%";
         tagContenairUstensiles.style.backgroundColor  = "#ED6454";
         tagContenairUstensiles.style.borderRadius     = "5px";
         tagContenairUstensiles.style.color            = "white";
         tagContenairUstensiles.style.margin           = "0px 15px 20px 0px";
         const tagsUstensiles                          = document.createElement("p");
         tagsUstensiles.className                      = "tags__container__text";
         const divLogo                                = document.createElement("div");
         divLogo.className                            = "tags__container__circle-logo";
         divLogo.style.width                          = "15px";
         divLogo.style.paddingTop                     = "5px";
         divLogo.style.cursor                         = "pointer";
         const imgCloseLogo                           = document.createElement("img");
         imgCloseLogo.src                             = "images/circlexmark.svg";
         divLogo.appendChild(imgCloseLogo);
         tagContenairUstensiles.appendChild(listOfResultUstensiles);
         tagContenairUstensiles.appendChild(divLogo);
         sectionTag.appendChild(tagContenairUstensiles);
     
           /** au click sur (x), on enlève le tag dans la section tag **/
          divLogo.addEventListener('click', () => {
            sectionTag.removeChild(tagContenairUstensiles);  
          });
      });
    }
}

const allUstensils   = getUstensilesToDisplayInTag(recipes);
displayUstensiles(allUstensils);