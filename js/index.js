
const results = document.querySelector('#results');

// Variables buscador
const search = document.querySelector('#searchButton');
const kind = document.querySelector('#kind');
const city = document.querySelector('#city');
const type = document.querySelector('#type');
const rooms = document.querySelector('#rooms');
const min = document.querySelector('#min');
const max = document.querySelector('#max');


const datosBusqueda = {
    kind:'',
    city:'',
    type:'',
    rooms:'',
    min:'',
    max:'',
}


// Event Listener de todos los select del formulario de búsqueda

    kind.addEventListener('change', e => {
        datosBusqueda.kind = e.target.value;
        filterProperties();
    })

    city.addEventListener('change', e => {
        datosBusqueda.city = e.target.value;
        filterProperties();
    })
    
    type.addEventListener('change', e => {
        datosBusqueda.type = e.target.value;
        filterProperties();
    })
    
    rooms.addEventListener('change', e => {
        datosBusqueda.rooms = parseInt(e.target.value);
        filterProperties();
    })
    
    min.addEventListener('change', e => {
        datosBusqueda.min = parseInt(e.target.value);
        filterProperties();
    })
    
    max.addEventListener('change', e => {
        datosBusqueda.max = parseInt(e.target.value);
        filterProperties();
    })
    
    document.addEventListener('DOMContentLoaded', () => {
        showProperties(properties);
    })

// Función que muestra las propiedades

function showProperties(properties) {
    deleteHTML();

    properties.forEach( property =>{

        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('card', 'col-md-4');

        const kindSign = document.createElement('p');
        kindSign.classList.add('sign');
        kindSign.textContent = `${property.kind}`;

        const propertyImg = document.createElement('img');
        propertyImg.classList.add('card-img-top');
        propertyImg.src = `${property.img}`;

        const propertyDivBody = document.createElement('div');
        propertyDivBody.classList.add('card-body');

        const propertyTitle = document.createElement('h5');
        propertyTitle.classList.add('card-title');
        propertyTitle.textContent = `${property.id}`;

        const propertyDescription = document.createElement('p');
        propertyDescription.classList.add('card-text');
        propertyDescription.textContent = `${property.description}`;

        const propertyDivInfo = document.createElement('div');
        propertyDivInfo.classList.add('card-info');

        const propertyIconBed = document.createElement('i');
        propertyIconBed.classList.add('fa-solid', 'fa-bed');

        const propertyRoom = document.createElement('p');
        propertyRoom.textContent = `${property.rooms}`;

        const propertyIconBath = document.createElement('i');
        propertyIconBath.classList.add('fa-solid', 'fa-bath');

        const propertyBath = document.createElement('p');
        propertyBath.textContent = `${property.baths}`;

        const propertyIconDollar = document.createElement('i');
        propertyIconDollar.classList.add('fa-solid', 'fa-dollar-sign');
    
        const propertyBudget = document.createElement('p');
        propertyBudget.textContent = `${property.budget} USD`;

        results.appendChild(propertyDiv);
        propertyDiv.appendChild(kindSign);
        propertyDiv.appendChild(propertyImg);
        propertyDiv.appendChild(propertyDivBody);
        propertyDivBody.appendChild(propertyTitle);
        propertyDivBody.appendChild(propertyDescription);
        propertyDivBody.appendChild(propertyDivInfo);
        propertyDivInfo.appendChild(propertyIconBed);
        propertyDivInfo.appendChild(propertyRoom);
        propertyDivInfo.appendChild(propertyIconBath);
        propertyDivInfo.appendChild(propertyBath);
        propertyDivInfo.appendChild(propertyIconDollar);
        propertyDivInfo.appendChild(propertyBudget);
    })
}


// Función que limpia el HTML

function deleteHTML() {
    while(results.firstChild){
        results.removeChild(results.firstChild);
    }
}

// Función que filtra en base a la búsqueda

function filterProperties() {
    const results = properties.filter(kindFilter).filter(cityFilter).filter(typeFilter).filter(roomsFilter).filter(minFilter).filter(maxFilter)

    search.addEventListener('click', (e) => {
        e.preventDefault();
        if(results.length){
            showProperties(results);   
        }else{
        noResults();
        }
    })
}


// Función cuando no hay resultados

function noResults(){
    deleteHTML();
    const noResults = document.createElement('div');
    noResults.classList.add('no__results');
    noResults.textContent = 'Lo sentimos. No tenemos ninguna propiedad que coincide con su búsqueda.'
    results.appendChild(noResults);
}

// Función de cada búsqueda

function kindFilter(property) {
    if(datosBusqueda.kind){
        return property.kind === datosBusqueda.kind;
    }
    return property;

}


function cityFilter(property) {
    if(datosBusqueda.city){
        return property.city === datosBusqueda.city;
    }
    return property;
}

function typeFilter(property) {
    if(datosBusqueda.type){
        return property.type === datosBusqueda.type;
    }
    return property;
}

function roomsFilter(property) {
    if(datosBusqueda.rooms){
        return property.rooms === datosBusqueda.rooms;
    }
    return property;
}

function minFilter(property) {
    if(datosBusqueda.min){
        return property.budget >= datosBusqueda.min;
    }
    return property;
}

function maxFilter(property) {
    if(datosBusqueda.max){
        return property.budget <= datosBusqueda.max;
    }
    return property;
}
