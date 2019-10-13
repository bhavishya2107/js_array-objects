var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };

  var myPenguin = {
    name : "Whiteblack",
    origin: "Whiteblack the Penguin Sees the World",
    author: "H. A. Rey and Margret Rey",
    notes:"Children's book about a travelling penguin"
}

//new variable penguins with objects inside 
  var penguins = [gunter, ramon, fred];

//print first object
  console.log(penguins[0]);

//assign second obj to variable
  var secondPenguin = penguins[1];

//print the last obj name key
  console.log(penguins[2].name);

//push mypenguin to array
penguins.push(myPenguin);

//printing the length of the array
console.log(penguins.length);

//change the canFly value to true
penguins[0].canFly = true;

//call sayhello function from the array first element
penguins[0].sayHello();

//iterate the values name
for(i = 0 ; i < penguins.length ; i++) {
  console.log(penguins[i].name);
}

penguins.forEach((penguinName)=>{
  console.log(penguinName.name);
})

//iterate the values sayHello
for(i = 0 ; i < penguins.length ; i++) {
  console.log(penguins[i].sayHello());
}

//add new property numberOfFeet to array objs
for(i = 0 ; i < penguins.length ; i++) {
  penguins[i].numberOfFeet = 2;
  console.log(penguins);
}

//12.
for(i = 0 ; i < penguins.length ; i++) {

  if(penguins[i].canFly == true){
    console.log(`${penguins[i].name} can fly`)
  } 
  // penguins[i].canFly ? console.log(`${penguins[i].name} can fly`) : null
}




  