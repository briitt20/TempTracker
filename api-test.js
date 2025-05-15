const claveApi = '0f45fa65e08c44979d915246251505';
const idioma = 'es';
const ciudad = 'Huancayo';

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${claveApi}`;

const reponse = await fetch(apiClimaActual)
let data = await reponse.json();

console.log(data.location.localtime);