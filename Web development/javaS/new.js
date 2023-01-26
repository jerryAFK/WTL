//hello world
console.log('hello world');

// printing collective
let boyfriend ='otis';
let girlfriend ='ola';
console.log(boyfriend+' is currently dateing '+ girlfriend);


//assigning collective properties for one variable
let person1 ={
    name : 'prakhar',
    age : 19,
    hobbies : 'football'
};
console.log(person1);

person1.hobbies = {
    name : 'prakhar',
    age : 19,
    hobbies : 'coding'
};

console.log(person1.hobbies)

//arrays
let requredColours = ['red', 'blue','green','yellow'];
console.log(requredColours);
console.log(requredColours[3]);
console.log(requredColours.length)

//function

function first(){
    console.log('hello world')
}

first();

function greet(name, followupQ){
    console.log('hello ' + name +', '+ followupQ)
}

greet('Prakhar', 'how are you my friend');

// calculating function

function square(number){
    return number*number;
}

let result = square(4);
console.log( 'square of the' + ' is '+ result); 

// If else statement 

var marks1 = parseInt(prompt("Enter marks1", "enter"));
var marks2 = parseInt(prompt("Enter marks2", "enter"));
var marks3 = parseInt(prompt("Enter marks3", "enter"));
var marks4 = parseInt(prompt("Enter marks4", "enter"));
var marks5 = parseInt(prompt("Enter marks5", "enter"));

var total = marks1+ marks2+ marks3+ marks4+ marks5;
var percent = total*100/500;
alert(percent);

if (percent<= 50){
    alert("Grade D");
}
else if(percent<=60){
    alert("Grade C");
}
else if(percent<80){
    alert("Grade B");
}
else if(percent>=80){
    alert("Grade A");
}
else if(percent>90){
    alert("Grade A+");
}
else{
    alert("fail Grade F");
}