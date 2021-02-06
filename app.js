



document.getElementById('search-btn').addEventListener('click', function () {
    const food = document.getElementById('food-name').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${food}`)
        .then(res => res.json())
        .then(data => displayItem(data))
})


const displayItem = foodItems => {

    const eachFood = foodItems.meals;

    console.log(eachFood);
    const foodsItemContainer = document.getElementById('foods-item');
    eachFood.map(foods => {
        const foodName = foods.strMeal;
        const foodImage = foods.strMealThumb;
        // console.log(foodName);
        const foodDiv = document.createElement('div');
        foodDiv.className = 'food-details';
        const foodsLists = `
        <img onclick="foodDetaills('${foodName}')" class="foodImg" src="${foodImage}" alt="">
        <h3>${foodName}</h3>
         
        `;
        foodDiv.innerHTML = foodsLists;
        // const foodDis = document.createElement('h3');
        // foodDis.className = 'foods-detail';
        // foodDis.innerText = foodName;
        foodsItemContainer.appendChild(foodDiv);
  
    });

}
    const foodDetaills = details =>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${details}`;
        fetch(url)
        .then(res => res.json())
        .then(data => foodsExtraDetails(data.meals[0]))
        

    }


    const foodsExtraDetails = testyFood =>{
        console.log(testyFood);
        const showDisplay = document.getElementById('main-details-bar');
        showDisplay.style.display = "block";
        const detailsBar = document.getElementById('details-bar');
        
        detailsBar.innerHTML = `
        <img src="${testyFood.strMealThumb}" alt="">
        
        `;

        const informationBar = document.getElementById('information-bar');
        informationBar.innerHTML = `
        <h2>${testyFood.strMeal}</h2>
        <h4>${testyFood.strCategory}</h4>
        <ul>
            <li>${testyFood.strIngredient13}</li>
            <li>${testyFood.strIngredient10}</li>
            <li>${testyFood.strIngredient3}</li>
            <li>${testyFood.strIngredient2}</li>
            <li>${testyFood.strIngredient12}</li>
            <li>${testyFood.strIngredient5}</li>
        </ul>
        `;

    }



// const foodsCollection = document.getElementById('foods-item');
        // const foodDiv = document.createElement('div');
        // foodDiv.className = 'food-details';
        // // console.log(strMeal)
        // const foodInfo = `
        // <h3>${foodName}</h3>
        // <p>${foods.idMeal}</p>
        // `
        // foodDiv.innerHTML = foodInfo;
        // foodsCollection.appendChild(foodDiv);

    // foodItems.foreach(foods => {
    //     const foodDiv = document.createElement('div');
    //     foodDiv.className = 'food-details';
    //     // const name = foodItems[0].strMeal;
    //     const foodInfo = `
    //     <h2>hello</h3>
    //     <p>here are you</p>
    //     `;
    //     foodDiv.innerHTML = foodInfo;
    //     foodsCollection.appendChild(foodDiv); 
    // })

