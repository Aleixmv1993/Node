module.exports=function(info){
	var values={
		number:null,
		origin:null,
		destination:null,
		departs:null,
		arrives:null,
		actualDepart:null,
		actualArrive:null
	};
	//omplir objectes
	for(var prop in values){
		if(values[prop]!=='undefined'){
			values[prop]=info[prop];
		}
	};
	var functions={
		triggerDepart:function(){
			values.actualDepart=Date.now();
		},
		triggerArrive:function(){
			values.actualArrive=Date.now();
		},
		getInformation:function(){
			return values;
		}
	};
	return functions;
};
