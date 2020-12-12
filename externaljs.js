var btnTranslate = document.querySelector('#btn-translate');
var txtTranslate = document.querySelector('#text-Input');
var outputDiv = document.querySelector('#output');

var serverUrl = "https://api.funtranslations.com/translate/minion.json";


function getTranslation(text) {
    return serverUrl + "?text=" + text;
}

function errorHandler(error) {
    alert(error.message);
}

function clickHandler() {
    var inputText = txtTranslate.value;

    fetch(getTranslation(inputText))
        .then(response => response.json())
        .then(json => {
            outputDiv.innerText = json.contents.translated;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener('click', clickHandler);