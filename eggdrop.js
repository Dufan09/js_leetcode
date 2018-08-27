var k=50;
var n=100;
function eggdrop(k,n){
	var smax=n;
	var smin=0;
	var s=n/2;
	var step=0;
	for (var i = 0; i <= k; i++) {
        if (s<=k) {
            smin=s;
            s=s+1;
            step+=1;
        }
		else{
            smax=s;
            s=s-1;
            step+=1;
        }
        while(smax==smin) {
        	return i+" "+step;
            break;
        }
	}
}
var number=eggdrop(k,n);
console.log(number);