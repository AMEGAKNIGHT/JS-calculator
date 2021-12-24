function plus() {
    var num1, num2, result;

    num1 = document.getElementById('n1').value;//Получение значения числа 1
    num1 = parseInt(num1);//Принимает строку в кач-ве аргумента и возвращает целое число. Преобразует строку в число

    num2 = document.getElementById('n2').value;//Получение значения числа 2
    num2 = parseInt(num2);
    
    result = num1 + num2;//складывание переменных

    document.getElementById('out').innerHTML = result;//Вывод ответа
    
}

function minus() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;

    document.getElementById('out').innerHTML = result;
}

function multiply() {
    var num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;

    document.getElementById('out').innerHTML = result;
}