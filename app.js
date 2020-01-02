// console.log('it works')
document.addEventListener("DOMContentLoaded", function(event) {
    // initialising keys
    var k1 = document.getElementById('1');
    var k2 = document.getElementById('2');
    var k3 = document.getElementById('3');
    var k4 = document.getElementById('4');
    var k5 = document.getElementById('5');
    var k6 = document.getElementById('6');
    var k7 = document.getElementById('7');
    var k8 = document.getElementById('8');
    var k9 = document.getElementById('9');
    var k0 = document.getElementById('0');

    // function keys
    var eq = document.getElementById('=');
    var pl = document.getElementById('+');
    var mi = document.getElementById('-');
    var ce = document.getElementById('ce');
    var mu = document.getElementById('*');
    var mp = document.getElementById('m+');

    // display
    var screen = document.getElementById('display');

    // variables
    var output, runtotal;

    // binding keys to events
    k1.addEventListener('click', function(){
        screen.textContent += 1;
    });
    k2.addEventListener('click', function(){
        screen.textContent += 2;
    });
    k3.addEventListener('click', function(){
        screen.textContent += 3;
    });
    k4.addEventListener('click', function(){
        screen.textContent += 4;
    });
    k5.addEventListener('click', function(){
        screen.textContent += 5;
    });
    k6.addEventListener('click', function(){
        screen.textContent += 6;
    });
    k7.addEventListener('click', function(){
        screen.textContent += 7;
    });
    k8.addEventListener('click', function(){
        screen.textContent += 8;
    });
    k9.addEventListener('click', function(){
        screen.textContent += 9;
    });
    k0.addEventListener('click', function(){
        screen.textContent += 0;
    });

});