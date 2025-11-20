function searchRecipe() {
    let query = document.getElementById("searchBox").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        .then(res => res.json())
        .then(data => displayResults(data.meals));
}

function displayResults(meals) {
    let resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";

    if (!meals) {
        resultDiv.innerHTML = "<h2>No Recipes Found ❌</h2>";
        return;
    }

    meals.forEach(meal => {
        let card = `
            <div class="card">
                <img src="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3>
                <button onclick="openRecipe(${meal.idMeal})">View Recipe</button>
            </div>
        `;
        resultDiv.innerHTML += card;
    });
}

function openRecipe(id) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => showDetails(data.meals[0]));
}
function showDetails(meal) {
    document.getElementById("mealTitle").innerText = meal.strMeal;
    document.getElementById("mealImg").src = meal.strMealThumb;
    let list = document.getElementById("ingredientsList");
    list.innerHTML = "";
    for (let i = 1; i <= 20; i++) {
        let ingredient = meal[`strIngredient${i}`];
        let measure = meal[`strMeasure${i}`];

        if (ingredient) {
            let li = document.createElement("li");
            li.innerText = `${ingredient} - ${measure}`;
            list.appendChild(li);
        }
    }

    document.getElementById("instructions").innerText = meal.strInstructions;

    document.getElementById("recipeDetails").style.display = "block";
}

function closeModal() {
    document.getElementById("recipeDetails").style.display = "none";
}
