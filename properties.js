const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

// get keys
const keys= Object.keys(bottle);
//console.log(keys);
// get values
const values = Object.values(bottle);

//console.log(values);

// get entire keys and values together
const pairs = Object.entries(bottle);

// delete object element 

//Object.seal(bottle);

Object.freeze(bottle);
delete bottle. hold;



console.log(bottle);