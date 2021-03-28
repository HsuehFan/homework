let BreadRecipe = {
    Ingredients: ["高筯麵粉","牛奶","酵母","糖","鹽","奶油"],
    BakeTime: 30,
    Difficulty: "簡單",
    Seasoning: {
        sugar: "22g",
        salt: "10g",
        pepper: "10g"
    }
}

//取值測試：
console.log(BreadRecipe.Ingredients);
console.log(BreadRecipe.Ingredients.length);
console.log(BreadRecipe.Ingredients[1]);
console.log(BreadRecipe.Seasoning.salt);