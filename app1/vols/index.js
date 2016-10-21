var number, origin, destination;


//el export es per poder utilitzar aquestes funcions fora.
exports.setNumber=function(num){
	number=num;
};

exports.setOrigin=function(o){
	origin=o;
};

exports.setDestination=function(d){
	destination=d;
};

exports.getInfo=function(){
	return{
		//primera columna son els camps, la segona son els valors.
		number: number,
		origin: origin,
		destination: destination
	};
};