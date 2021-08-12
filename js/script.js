//--------------------------------------------------------------------вычесление факториала

function factorial() {

    var n = parseInt(prompt('Введите  число для вычесления факториала'));
    var fac = 1

    while (n > 1) {
        fac *= n;
        n -= 1;
    }
    alert(fac);
}

var btnFactorial = document.querySelector('.factorial');
btnFactorial.addEventListener('click', factorial);

//--------------------------------------------------------------------результат возведения 


function degree() {

    var number = parseInt(prompt('Введите  число '));
    var degree = parseInt(prompt('Введите  степень'));
    var result = 1;
    var i = 0;
    for (i; i < degree; i++) {
        result = result * number;
    }
    alert(result);
}

var btnDegree = document.querySelector('.degree');
btnDegree.addEventListener('click', degree);


//--------------------------------------------------------------------вывода числа "задом на перед"

function reverse() {

    var number = parseInt(prompt('Введите  число ')) + '';
    var result = number[number.length - 1];
    for (var i = number.length - 2; i >= 0; i--) {
        result += number[i];
    }
    alert(result);
}

var btnReverse = document.querySelector('.reverse');
btnReverse.addEventListener('click', reverse);


//--------------------------------------------------------------------наименьшее общее кратное

function nok() {

    var num = prompt('Введите цифры через запятую');
    var arr = num.split(','), n = arr.length, a = Math.abs(arr[0]);
    for (var i = 1; i < n; i++) {
        var b = Math.abs(arr[i]), c = a;
        while (a && b) { a > b ? a %= b : b %= a; }
        a = Math.abs(c * arr[i]) / (a + b);
    }
    alert(a);
}

var btnNok = document.querySelector('.nok');
btnNok.addEventListener('click', nok);




















