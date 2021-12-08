function makeCat(name, catAge, gender, color) {
    const humanAge = catAge / 9

    return {
        name,
        age: humanAge,
        // gender: gender, // is the same as the next line
        gender,
        color,
        owner: null,
        favoriteFood: null,
    }
}

const cat = makeCat("Taco", 100, "male", "white")

cat.owner = "Bob"
cat.favoriteFood = "tacos"

console.log(cat)
