const claveApi = '0f45fa65e08c44979d915246251505';
const idioma = 'es';
const inpCiudad  = document.getElementById('input-ciudad');

async function obtenerClima() {

    const ciudad = inpCiudad.value;

    if(!ciudad) {
        alert('Por favor, ingresa una ciudad');
        return;
    }

    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

    const response = await fetch(apiClimaActual);
    const data = await response.json();

    mostrarClima(data);
}
function mostrarClima(data) {

    document.querySelector('.clima-icono').src = data.current.condition.icon;
    document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
    document.querySelector('.temp').innerHTML = data.current.temp_c + 'ºc';
    document.querySelector('.ciudad').innerHTML = data.location.name;
    document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
    document.querySelector('.viento').innerHTML = data.current.wind_kph + 'km/h';

    document.querySelector('.clima-contenedor').style.display = 'block';
}
    