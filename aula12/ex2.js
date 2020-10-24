var now = new Date();
var hora = now.getHours();
if (hora == 1) {
    var singular = 'hora'
    console.log(`Agora é exatamente ${hora} hora.`);
}
else {
    var plural = 'horas'
    console.log(`Agora são exatamente ${hora} horas.`);
}
if (hora < 12) {
    console.log('Bom dia!');
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!');
}
else if (hora > 18) {
    console.log('Boa noite!');
}