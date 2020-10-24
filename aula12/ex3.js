var now = new Date();
var weekday = now.getDay();

console.log(weekday);

switch (weekday) {
    case 0:
        console.log('Hojé é domingo!');
        break
    case 1:
        console.log('Hojé é segunda-feira!');
        break
    case 2:
        console.log('Hojé é terça-feira!');
break
    case 3:
        console.log('Hojé é quarta-feira!');
break
    case 4:
        console.log('Hojé é quinta-feira!');
break
    case 5:
        console.log('Hojé é sexta-feira!');
break
    case 6:
        console.log('Hojé é sabado!');
break
default:
    console.log('ERRO! Dia inválido')
    break  
}