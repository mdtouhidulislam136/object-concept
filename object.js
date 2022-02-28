
// 1. using  object literal

let myFriend = {
    name1: 'robin',
    name2: 'sadaf',
    name3: 'mahmud',
    name4: 'sajal',
    name5: 'hasan'
}

// 2 constructor
const person = new Object();

// 3. object
const human = Object.create(myFriend);

// 4. class 

class People {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

const peop = new People('manush', 12)


function name(name){
    this.name = name;
}

const pname = new name('sheikh');
console.log(pname);