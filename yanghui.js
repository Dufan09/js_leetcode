var n=7;
var array;
console.log(n + "行" + n + "列的杨辉三角如下："+"\n");
y(n);

function first(m) {
    for (var i = 0; i < m; i++) {
        array[i] = new Array();
        for (var j = 0; j < m; j++) {
            if (j == 0)
                array[i][j] = 1;
            else if (i == j)
                array[i][j] = 1;
            else if (j > i)
                array[i][j] = 0;
            else
                array[i][j] = array[i - 1][j - 1] + array[i - 1][j];
        }
    }
}

function second(m) {
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < m; j++) {
            if (array[i][j] == 0)
                continue;
            else
                console.log(array[i][j]);
        }
        console.log("\n");
    }
}
function y(n) {
    array = new Array();
    first(n);
    second(n);
  }
