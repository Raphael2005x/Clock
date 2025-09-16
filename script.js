const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hour = dateToday.getHours().toString().padStart(2, '0');
    let minuts = dateToday.getMinutes().toString().padStart(2, '0');
    let seconds = dateToday.getSeconds().toString().padStart(2, '0');


    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');

    horas.textContent = hour;
    minutos.textContent = minuts;
    segundos.textContent = seconds;
})