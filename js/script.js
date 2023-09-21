const segundos = document.getElementById('segundos')
const minutos = document.getElementById('minutos')
const horas = document.getElementById('horas')

const relogio = setInterval(function time(){
    let date = new Date()
    let hora = date.getHours()
    let min = date.getMinutes()
    let seg = date.getSeconds()

    horas.textContent = hora < 10 ? '0' + hora : hora;
    minutos.textContent = min < 10 ? '0' + min : min;
    segundos.textContent = seg < 10 ? '0' + seg : seg;

})