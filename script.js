// 
class Guitar {
    constructor(
        someMake, 
        someModel, 
        someColor, 
        someTuning, 
        someType, 
        someStrings
    ) {
        this.make = someMake;
        this.model = someModel;
        this.Color = someColor;
        this.tuning = someTuning;
        this.type = someType;
        this.strings = someStrings;
    }
    play() {
        console.log("I am playing the guitar!");
    }
    admire() {
        console.log("i am mirin'");
}
}
const guitar1 = new Guitar("Fender", "Telecaster", "Green", "Standard", "Electric", 6);
const guitar2 = new Guitar("Squier", "Jaguar", "Green", "Standard", "Electric", 6);
const guitar3 = new Guitar("Gibson", "Les Paul", "Green", "Standard", "Electric", 6);
const guitar4 = new Guitar("Epiphone", "SG", "Green", "Standard", "Electric", 6);




// const guitar1 = {
//     make: 'Fender',
//     model: 'Jaguar',
//     color: 'Seafoam Green',
//     tuning: "Drop D",
//     type: "Electric",
//     strings: 6,
//     play: function() {
//         console.log("I am playing the guitar!");
//     },
//     admire: function() {
//         console.log("i am mirin'");
//     },
//     tune: function(newTuning) {
//         this.tuning = newTuning;
//         console.log(`The guitar is now in ${this.tuning} tuning.`);
//     }
// };
// const guitar2 = {
//     make: 'squier',
//     model: 'stratocaster',
//     color: 'black',
//     tuning: "standard",
//     strings: 6,
//     play: function() {
//         console.log("I am playing the guitar!");
//     },
//     admire: function() {
//         console.log("i am mirin'");
//     },
//     tune: function(newTuning) {
//         this.tuning = newTuning;
//         console.log(`The guitar is now in ${this.tuning} tuning.`);
//     }
// };
