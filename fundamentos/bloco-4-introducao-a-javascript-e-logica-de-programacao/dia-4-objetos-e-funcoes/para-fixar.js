let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

let player = {
    name,
    lastName,
    age,
    medals,
    bestInTheWorld
}

console.log('A jogadora '+ player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes');
