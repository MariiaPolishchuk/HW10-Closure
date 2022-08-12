console.log('--- # 1. реализовать функции sum через замыкание');
function sum(x) {
    return function (y) {
        return x + y;
    }
}

const sum1 = sum(1);
console.log(sum1(2));
console.log(sum(1)(2));


console.log('--- # 2. исправить код');
    for (let i = 1; i <= 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 0);
}


// document.getElementById('.counter').innerHTML = i;



