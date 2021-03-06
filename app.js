


// fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`)



document.getElementById('search-btn').addEventListener('click', function () {
    const food = document.getElementById('food-name').value;

    if (food.length <= 1) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${food}`)
            .then(res => res.json())
            .then(data => displayItem(data))
            .catch(Error => errorMassage())
            hideDetailsAuto()
            
    }
    else {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`)
            .then(res => res.json())
            .then(data => displayItem(data))
            .catch(Error => errorMassage(), hideDetailsAuto())
            hideDetailsAuto()
            
    }
})

// **********Main Body section***************

const displayItem = foodItems => {
    const eachFood = foodItems.meals;

    // console.log(eachFood);
    const foodsItemContainer = document.getElementById('foods-item');
    foodsItemContainer.innerHTML = "";

    // ****this is for hide error massage*****

    document.getElementById('error-message').style.display = 'none';


    eachFood.map(foods => {
        const foodName = foods.strMeal;
        const foodImage = foods.strMealThumb;
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food-details';
        const foodsLists = `
        <img onclick="foodDetaills('${foodName}')" class="foodImg" src="${foodImage}" alt="">
        <h3>${foodName}</h3>`;
        foodDiv.innerHTML = foodsLists;
        foodsItemContainer.append(foodDiv);
    });

}

// ************Food Details Section*************

const foodDetaills = details => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`;
    fetch(url)
        .then(res => res.json())
        .then(data => foodsExtraDetails(data.meals[0]))
}

const foodsExtraDetails = testyFood => {
    console.log(testyFood);
    const showDisplay = document.getElementById('main-details-bar');
    showDisplay.style.display = "block";
    const detailsBar = document.getElementById('details-bar');
    detailsBar.innerHTML = `
        <img src="${testyFood.strMealThumb}" alt="">
        <p><i onclick="closeDetail()" class="far fa-times-circle"></i></p>
        `;
    const informationBar = document.getElementById('information-bar');
    informationBar.innerHTML = `
        <h2>${testyFood.strMeal}</h2>
        <h4>${testyFood.strCategory}</h4>
        <ul>
            <li><i class="fas fa-check-square"></i> ${testyFood.strIngredient13}</li>
            <li><i class="fas fa-check-square"></i> ${testyFood.strIngredient10}</li>
            <li><i class="fas fa-check-square"></i> ${testyFood.strIngredient2}</li>
            <li><i class="fas fa-check-square"></i> ${testyFood.strIngredient3}</li>
            <li><i class="fas fa-check-square"></i> ${testyFood.strIngredient12}</li>
            <li><i class="fas fa-check-square"></i> ${testyFood.strIngredient5}</li>
        </ul>
        `;
}

function closeDetail() {
    const displayDetail = document.getElementById('main-details-bar');
    displayDetail.style.display = 'none';
}

// *********hide Food Details when search again************

const hideDetailsAuto = () => {
    document.getElementById('main-details-bar').style.display = 'none';
}

const errorMassage = () => {
    document.getElementById('error-message').style.display = 'block';
    document.getElementById('foods-item').innerHTML = "";
}
