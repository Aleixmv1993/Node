var Flight=require("./vols");//serveix per utilitzar les funcions de vols.

var pl_data1={
	number:847,
	origin:'BCN',
	destination:'MAD'
};

var pl_data2={
	number:848,
	origin:'MAD',
	destination:'BCN'
};
//crear avió
var pl1=new Flight();
pl1.fill(pl_data1);
//sortida de l'avió
pl1.triggerDepart();

var pl2=new Flight();
pl2.fill(pl_data2);
pl2.triggerArrive();

console.log(pl1.getInformation());
console.log(pl2.getInformation());