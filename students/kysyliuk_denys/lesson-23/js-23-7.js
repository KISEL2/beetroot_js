let sum = prompt('Сумма- от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.')

let message = ( sum >= 200 && sum <= 300 ) ? 'Сумма со скидкой:' + (sum - sum * 0.03) :
    (sum > 300 && sum <= 500 ) ? 'Сумма со скидкой:' + (sum - sum * 0.05) :
    (sum > 500 ) ? 'Сумма со скидкой:' + (sum - sum * 0.07) :
    'Сумма без скидки:' + ' ' + sum  ;

alert( message )