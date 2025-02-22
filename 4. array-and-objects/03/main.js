
var myPenguin = {
    name : "Whiteblack",
    origin: "Whiteblack the Penguin Sees the World",
    author: "H. A. Rey and Margret Rey",
    notes:"Children's book about a travelling penguin"
}

myPenguin.outfit = {
    hat:"baseball cap",
    shirt:"Hawaiian shirt",
    pants:"cargo shorts",
    shoes:"flip-flops"
}

var penguinHatType = myPenguin.outfit.hat;
console.log(penguinHatType);

myPenguin.outfit.accessory = "pocket watch";
console.log(myPenguin.outfit);

myPenguin.outfit.hat = "top hat";

delete myPenguin.outfit.pants;


for (var key in myPenguin.outfit) {
    console.log(key, myPenguin.outfit[key]);
  }




// 1. Add a new property to your penguin called outfit and set it equal to another object with the following properties: hat, shirt, pants, and shoes -- each property should have a string as its value! (I suggest you give it a baseball cap, Hawaiian shirt, cargo shorts, and flip-flops, because wouldn't that be ridiculous?)

// 2. Create a new variable called penguinHatType and set it equal to the value of the hat in your penguin's outfit! Then print your new variable to the console.

// 3. Without modifying any of your previous code, write one new line of code to add an accessory property to your penguin's outfit and set it equal to the string "pocket watch" -- because penguins are classy like that!

// 4. Write one more line of code to change the hat in your penguin's outfit to "top hat" and override the previous value. (Again, because penguins are classy!)

// 5. This penguin is a freelancer who always works from home, so it doesn't actually need to wear any pants! Let's delete the pants property from this penguin's outfit property. (Hint: see this page on the delete operator for examples.)

// 6. Write a for ... in loop to print the value of each piece of clothing in your penguin's outfit so you can see a list of clothing items in the console. (Hint: This is the same as step 31 from above, only now we're accessing values from a nested object!)