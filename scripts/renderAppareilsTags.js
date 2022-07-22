
////////////////////////////////////////////////////////////////////////////////  VARIABLES
const filterAppareils                   = document.querySelectorAll(".filter__container")[1];
const inputAppareils                    = document.querySelector(".researchAppareils");
const titleAppareils                    = document.querySelectorAll(".filter__container__text")[1];
const dropUpAppareils                   = document.querySelectorAll(".dropup-logo")[1];
const dropdownAppareils                 = document.querySelectorAll(".dropdown-logo")[1];
const contenairResultAppareils          = document.createElement("div");
contenairResultAppareils.className      = "contenair-result-appareils";
filterAppareils.style.backgroundColor   = "#68D9A4";

//////////////////////////////////////////////////////////////////////////////// FILTRE APPAREILS 
function displayAppareils() {

    filterAppareils.style.display                      = "flex";
    filterAppareils.style.borderRadius                 = "5px";
    filterAppareils.style.backgroundColor              = "#68D9A4";
    let openFilter = false;
    
        dropdownAppareils.addEventListener('click', () => {
  
          if (openFilter) {
  
            titleAppareils.style.display                       = "none";
            filterAppareils.style.flexWrap                     = "wrap";
            filterAppareils.style.justifyContent               = "flex-start";
            filterAppareils.style.width                        = "60%";
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
            contenairResultAppareils.style.position            = "relative";
            filterAppareils.appendChild(dropUpAppareils);     
            filterAppareils.appendChild(contenairResultAppareils);
           
          } else {
  
            dropUpAppareils.addEventListener('click', () => {
  
              dropdownAppareils.style.display        = "block";
              dropUpAppareils.style.display          = "none";
              filterAppareils.style.display          = "flex";
              filterAppareils.style.justifyContent   = "space-around"
              filterAppareils.style.width            = "170px";
              filterAppareils.style.borderRadius     = "5px";
              filterAppareils.style.backgroundColor  = "#68D9A4";
              inputAppareils.style.display           = "none";
              titleAppareils.style.display           = "block";
              contenairResultAppareils.style.display = "none";
              
            }); 
          }
          openFilter = !openFilter;  
        });                     
}


function getAppareilsToDisplayInTag(recipesToDisplay) {

    const resultAppareils   = []; // tableau pour le bouton appareils
     
    for (const result of recipesToDisplay) {
        resultAppareils.push(result.appliance); 
    }
    
    /************* supprime les doublons *************/ 
    const tabResultAppareils = new Set(resultAppareils);
    for (const resultAppareil of tabResultAppareils) {
    
      const listOfResultAppareil       = document.createElement("p");
      listOfResultAppareil.className   = "allappareils-result";
      listOfResultAppareil.textContent = resultAppareil
      contenairResultAppareils.appendChild(listOfResultAppareil);
      
       /** à chaque click sur un appareil, on ajoute son tag dans la section tag **/
       listOfResultAppareil.addEventListener('click' ,() => {
     
         searchInput.style.marginBottom               = "0px";
         sectionTag.style.display                     = "flex";
         sectionTag.style.flexWrap                    = "wrap";
         sectionTag.style.margin                      = "20px 0px 0px 0px";
         sectionTag.style.height                      = "auto";
         const tagContenairAppareils                  = document.createElement("div");
         tagContenairAppareils.className              = "tags__contenair-appareils";
         tagContenairAppareils.style.display          = "flex";
         tagContenairAppareils.style.justifyContent   = "space-around";
         tagContenairAppareils.style.alignItems       = "center";
         tagContenairAppareils.style.width            = "15%";
         tagContenairAppareils.style.backgroundColor  = "#68D9A4";
         tagContenairAppareils.style.borderRadius     = "5px";
         tagContenairAppareils.style.color            = "white";
         tagContenairAppareils.style.margin           = "0px 15px 20px 0px";
         const tagsAppareils                          = document.createElement("p");
         tagsAppareils.className                      = "tags__container__text";
         const divLogo                                = document.createElement("div");
         divLogo.className                            = "tags__container__circle-logo";
         divLogo.style.width                          = "15px";
         divLogo.style.paddingTop                     = "5px";
         divLogo.style.cursor                         = "pointer";
         const imgCloseLogo                           = document.createElement("img");
         imgCloseLogo.src                             = "images/circlexmark.svg";
         divLogo.appendChild(imgCloseLogo);
         tagContenairAppareils.appendChild(listOfResultAppareil);
         tagContenairAppareils.appendChild(divLogo);
         sectionTag.appendChild(tagContenairAppareils);
     
           /** au click sur (x), on enlève le tag dans la section tag **/
          divLogo.addEventListener('click', () => {
            sectionTag.removeChild(tagContenairAppareils);  
          });
      });
    }
}

const allAppareils   = getAppareilsToDisplayInTag(recipes);
displayAppareils(allAppareils);