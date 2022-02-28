// create a ten element class object

class desh{
    constructor(people, name, division, flag, president, proverty, rich, internationalAirport, population, river){
        this.people = people;
        this.name = name;
        this.division = division;
        this.flag = flag;
        this.president = president;
        this.proverty = proverty;
        this.rich = rich;
        this.internationalAirport = internationalAirport;
        this.population = population;
        this.river = river;
    }
}


const deshDetails = new desh('good', 'multi', 'eight', 'blue and red', 'hamid', 'medium', 'some people', 'shahajalal airport', '17 crore', 'Jomuna');
//console.log(deshDetails);


// create an object

const name2 = Object.create(deshDetails);

console.log(name2);