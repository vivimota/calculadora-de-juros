document.getElementById('calcular').addEventListener('click',function(){

const valor = document.getElementById('valor').value
const taxa = (document.getElementById('taxa').value)/100
const tempo = document.getElementById('tempo').value

const total = valor * (1 + taxa)**tempo
document.getElementById('resultado').innerHTML = ('R$' + total.toFixed(2))
})