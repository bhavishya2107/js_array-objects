var myPenguin = {
    name : "Whiteblack",
    origin: "Whiteblack the Penguin Sees the World",
    author: "H. A. Rey and Margret Rey",
    notes:"Children's book about a travelling penguin",
    favoriteFood:[
        "fish","crabs","cherry"
    ]
}

console.log(myPenguin.favoriteFood[1]);

var firstFavFood = myPenguin.favoriteFood[0];

myPenguin.favoriteFood.push("banana");

myPenguin.favoriteFood.length;

myPenguin.favoriteFood.splice(4,1,"pineapples");

lastFavFood = myPenguin.favoriteFood[myPenguin.favoriteFood.length - 1];

for(var i = 0; i < myPenguin.favoriteFood.length; i++){
    console.log(myPenguin.favoriteFood[i]);
}


// 1. Add a new property to your penguin called favoriteFoods and set it equal to an array containing a list of three strings.

// 2. Access your penguin's second favorite food and print it to the console using console.log()

// 3. Create a new variable called firstFavFood and set it equal to the first item in your penguin's array of favorite foods.

// 4. Add another food to the end of the list.

// 5. Print the length of your penguin's favoriteFoods array to the console with console.log()

// 6. Without modifying any of your previous code, write a new line of code that changes the value of the last item in the list to "pineapples" (overwriting the previous value).

// 7. Create a new variable named lastFavFood that will always point to the last element of your penguin's favoriteFoods array, no matter how many items are in the list.

// 8. Write a for loop to iterate through every food in your penguin's favoriteFood property and print each one to the console. (Hint: This loop will look exactly the same as the one you wrote for step 16 above, except now you're accessing the array as a property of an object.)