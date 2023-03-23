const keyPress = document.querySelector('#insert')


function showKeysCodes(e) {
    console.log(e.key.value)
    console.log(e.keyCode.value)
    console.log(e.code.value)
}

keyPress.addEventListener('onkeydown', showKeysCodes)