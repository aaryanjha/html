console.log("CONNECTED");
function printReverse(arr){
	for(var j=arr.length-1;j>=0;j--){
		console.log(arr[j]);
	}
}
function isUniform(arr){
	var one=arr[0];
	for(i=0;i<arr.length;i++){
		if (arr[i]!==one){
			return false;
		}
	}
	return true;
}
function sumArray(arr){
	var count=0;
	arr.forEach(function(one){
		count=count+one;
	});
	console.log(count);
}
function maxi(arr){
	max=0;
	arr.forEach(function(voi, i){
		if (max<voi){
			max=voi;
		}
	});
	return max;
}