var n = 100;
function happynumber(n) {
    var val = n;
    while (val) {
        val = second(val);
        if (val == 1) {
            return true;
        };
        if (val==89){
           return false;
        }
    }
};

function second(val) {
    var sum=0;
    while (val>0) {
       var dig = val % 10;
       sum += dig*dig;
       val = (val-dig)/10;
    }
    return sum;
}
var number = happynumber(n);
console.log(number);
