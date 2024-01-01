/**
    * Enum is a way of giving more friendly names to sets of numeric values. 
 */

enum SeatChoice {
    Aisle = "aisle",
    Middle = 2,
    Window
}
let hc1 = SeatChoice.Aisle
//js
// var SeatChoice;
// (function (SeatChoice) {
//     SeatChoice[SeatChoice["Aisle"] = 0] = "Aisle";
//     SeatChoice[SeatChoice["Middle"] = 1] = "Middle";
//     SeatChoice[SeatChoice["Window"] = 2] = "Window";
// })(SeatChoice || (SeatChoice = {}));
// var hc1 = SeatChoice.Aisle;

const enum lessSeatChoice {
    Aisle,
    Middle,
    Window
}
let hc = lessSeatChoice.Aisle
//js
// const hc = 0 /* Aisle */;
