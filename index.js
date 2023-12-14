
const containerElement = document.querySelector('.container')
getRandomRecipe();




async function getRandomRecipe() {
    const response = await fetch('https://retseptid-full.onrender.com/random');
    const recipe  = await response.json();
    const recipeName = recipe.recipe.recipename;
    const imageUrl = recipe.recipe.imageurl;
    const recipeInstructions = recipe.recipe.instructions;
    const ingredientsArray = recipe.ingredients;

    
    const recipeNameTitle = document.createElement('h2');
    const recipeimage = document.createElement('img');
    const instrcutionsBlock = document.createElement('p')
    const ingredientsList = document.createElement('ul');

    ingredientsArray.forEach(ingredient => {
        const ingredientElement = document.createElement('li')
        ingredientElement.innerHTML = ingredient;
        ingredientsList.appendChild(ingredientElement)
        
    });

        recipeimage.src = imageUrl;
    recipeNameTitle.innerHTML = recipeName;
    instrcutionsBlock.innerHTML = recipeInstructions;

    const footer = document.createElement('footer');
    footer.innerHTML = '&#169 CHR'

    containerElement.appendChild(recipeNameTitle)
    containerElement.appendChild(recipeimage)
    containerElement.appendChild(ingredientsList)
    containerElement.appendChild(instrcutionsBlock);
    containerElement.appendChild(footer)
    
    

    console.log(recipeName);
    console.log(imageUrl);


}