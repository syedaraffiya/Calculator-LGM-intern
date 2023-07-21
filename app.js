var a = document.getElementById('display')
function getValue(e) {
    a.value += e
}
function calculate() {
    a.value = eval(a.value)
}
function clearDisplay(){
    a.value = ''
}