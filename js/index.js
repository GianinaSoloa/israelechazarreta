
const buttonHome = document.querySelector('#search__home');
const kind = document.querySelector('#kind');
const city = document.querySelector('#city');
const type = document.querySelector('#type');
const rooms = document.querySelector('#rooms');
const min = document.querySelector('#min');
const max = document.querySelector('#max');


buttonHome.addEventListener("submit", (e) => {
    e.preventDefault();
    if(kind.value === 'Venta'){
        window.location.href = 'html/venta.html';
        filterProperties(kind.value, city.value, type.value, rooms.value, min.value, max.value);
    } else if (kind.value === 'Alquiler'){
        window.location.href = 'html/alquiler.html';
        filterProperties(kind.value, city.value, type.value, rooms.value, min.value, max.value);
    } else {
        console.log('alquiler temporal')
        window.location.href = 'html/alquilertemporal.html';
        filterProperties(kind.value, city.value, type.value, rooms.value, min.value, max.value);
    }
})
