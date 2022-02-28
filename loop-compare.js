const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};


/*
1. for(let i = 0; i< 10; i++){
}
2. for(const num of numbers){} //array
3. for (const prop in student){}// object

*/

for (const prop in bottle){
   // console.log(prop,":", bottle[prop]);
}

const keys = Object.keys(bottle);

const entries = Object.entries(bottle); // normally it show the array but when we throw a loop inside array like below it will shoow normal output

for(const [key, value] of entries){
    console.log(key, value);
}
