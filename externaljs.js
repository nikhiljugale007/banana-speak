var btnTranslate = document.querySelector('#btn-Translate');
var txtTranslate= document.querySelector('#text-Input');
var outputDiv = document.querySelector('#output');


console.log(txtTranslate);

function clickHandler(){
    outputDiv.innerHTML = txtTranslate.value;
}   

btnTranslate.addEventListener('click', clickHandler);


