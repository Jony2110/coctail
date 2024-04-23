let input = document.querySelector("#input");

let coctailCenter = document.querySelector("#coctailCenter");
let loader = document.querySelector(".loader");

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((data) => {
    loader.classList.add("hidden")
    createDrinks(data.drinks)});

function createDrinks(drinks) {
  drinks.forEach(({idDrink ,strDrinkThumb , strDrink  ,  strGlass , strAlcoholic  }) => {
    let article = document.createElement("article");
    article.classList.add("coctail");

    article.innerHTML = `
    
    <div class="img-container">
    <img src=${strDrinkThumb} alt="${strDrink}">
    </div>
    <div class="cocktail-footer">
    <h3>${strDrink}</h3>
    <h4>${strGlass}</h4>
    <p>${strAlcoholic}</p>
    <a class="btn btn-primary btn-details" href="./about.html?id=${idDrink}">details</a></div>
    `;

    coctailCenter.appendChild(article);
    
  });
  
}




 