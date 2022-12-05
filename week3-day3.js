//const prompt = require("prompt")({sigint: true});

const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"]
}

adventurer.companion={};
adventurer.companion.name = 'Velma';
adventurer.companion.type = 'Bat';
let origin = 'Tree';
adventurer.companion.origin = origin;
adventurer.companion.companion = {};
adventurer.companion.companion.name = 'Tim'; 
adventurer.companion.companion.type = 'Parasite'; 
adventurer.companion.companion.belongings = [];
let arr = ["SCUBA tank", "Rogan josh", "health insurance"];
adventurer.companion.companion.belongings.push(arr)//["SCUBA tank", "Rogan josh", "health insurance"];


//console.log(adventurer);
//console.log(companion);

const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
//console.log(movies[0].title);
for(let i=0;i<movies.length;i++){
    //console.log(movies[i].title);
}
class Character {
    constructor (name, age, eyes, hair) {
      this.legs = 2;
      this.arms = 2;
      this.name = name;
      this.age = age;
      this.eyes = eyes;
      this.hair = hair;
    }
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!');
    }
    smite () {
      console.log('I smite thee you vile person');
    }
  }
  
  const me = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown');
  //console.log(me.greet('sing'));
  //console.log(me);

  const abc = {
    a: 12,
    b: 44,
    c: () => {
      return (abc.a);
    },
  };
  
  console.log(abc.c());

  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function()  {
      console.log(this.firstName + " " + this.lastName);
    }
  };
  person.fullName();
  
