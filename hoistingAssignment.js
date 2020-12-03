// This assignment is to see how hoisting affects the js interpreter (is this the correct way to word this?)

// 1) 
console.log(hello);                                   
var hello = 'world';

// Seen as:
var hello;
console.log(hello);
hello = 'world';
// What does it produce? undefined 
// CORRECT!!!

// 2)
var needle = 'haystack';
test();
functioncopy test(){
    var needle = 'magnet';
    console.log(needle);
}

// Seen as:
var needle = 'haystack';
test();
functioncopy test(){
    var needle ='magnet';
    console.log(needle); 
}

// 3)
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// Shown as: Exactly as it is
// Answer: super cool, because the function is not returned nor called

// 4)
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// Shown as: 
var food
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
// Answer: chicken, half-chicken

// 5)
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

// shown as:
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food);
// Answer is: chicken, fish, food is not logged apparently because it is not defined

// 6)
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// read as:
var genre;
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
genre = "disco";
rewind();
console.log(genre);
console.log(genre);
// answers: rock, r&b, disco, disco CORRECT

// 7)
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// Shown as:
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose"; 
console.log(dojo);
learn();
console.log(dojo);
// answered: variables dont need to instantiated soooo...
// san jose, seattle, burbank, san jose

// 8)
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// shown as:
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
// NO IDEA