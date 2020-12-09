var btnTranslate = document.querySelector('#btn-Translate');
var txtTranslate= document.querySelector('#text-Input');

console.log(txtTranslate);

function clickHandler(){
    console.log(txtTranslate.value);

}   

btnTranslate.addEventListener('click', clickHandler);


