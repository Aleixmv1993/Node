var flight=require("./vols");//serveix per utilitzar les funcions de vols.

flight.setOrigin('Barcelona');
flight.setDestination('London');
flight.setNumber(12);

console.log(flight.getInfo());