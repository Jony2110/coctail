const urlParams = new URLSearchParams(window.location.search);
const cocktailId = urlParams.get('id');
const cocktailSection = document.querySelector(".cocktail-section")
const loader = document.querySelector(".loader");



fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
  .then((res) => res.json())
  .then((data) => {
    loader.classList.add("hidden")
    createDrink(data.drinks[0])});
    
    
    
  function createDrink(data ) {
    const  {
        idDrink ,strDrinkThumb ,strCategory , strDrink  ,  strGlass , strAlcoholic
    } = data
     
    cocktailSection.innerHTML = `
    <a class="btn btn-primary" href="./index.html">back home</a>
    <h2 class="section-title">${strDrink}</h2>
    <div class="drink">
        <img
            src=${strDrinkThumb}
            alt=${strDrink}
        />
        <div class="drink-info">
            <p><span class="drink-data">name :</span>${strDrink}</p>
            <p>
                <span class="drink-data">category :</span>${strCategory}
            </p>
            <p><span class="drink-data">info :</span> ${strAlcoholic}</p>
            <p>
                <span class="drink-data">glass :</span> ${strGlass}
            </p>
            <p>
                <span class="drink-data">instructons :</span> Pour
                all ingredients into a cocktail shaker, mix and
                serve over ice into a chilled glass.
            </p>
            <p>
                <span class="drink-data">ingredients :</span
                ><span> Gin</span><span> Grand Marnier</span
                ><span> Lemon Juice</span><span> Grenadine</span>
            </p>
        </div>
    </div>
    `
  }


