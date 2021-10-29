function bitcoin(){
    let text = document.getElementById('cantidad').value;
    let text1 = document.getElementById('dolar').value;
    let text2 = document.getElementById('bitcoin').value;
    let i= parseFloat(text);
    let f= parseFloat(text1);
    let g= parseFloat(text2);
    let calculo_peso = i*f*g; // cantidad de bitcoin, precio dolar, precio bitcoin
    let calculo_dolar = i*g; // cantidad de bitcoin y precio bitcoin

    document.getElementById('calculo_peso').innerHTML= calculo_peso + ' ARS';
    document.getElementById('calculo_dolar').innerHTML= calculo_dolar + ' USD';

}