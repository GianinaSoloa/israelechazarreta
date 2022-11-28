
const buttonHome = document.querySelector('#search__home');
const results = document.querySelector('#results');
const kind = document.querySelector('#kind').value;
const city = document.querySelector('#city').value;
const type = document.querySelector('#type').value;
const rooms = document.querySelector('#rooms').value;
const min = document.querySelector('#min').value;
const max = document.querySelector('#max').value;

buttonHome.addEventListener("submit", (e) => {
    e.preventDefault();
    if(kind === 'Venta'){
        window.location.href = 'html/venta.html';
        filterProperties();
        
    } else if (kind === 'Alquiler'){
        window.location.href = 'html/alquiler.html';
        filterProperties();
    } else if (kind === 'Alquiler temporal'){
        window.location.href = 'html/alquilertemporal.html';
        filterProperties();
    }
})


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
    if(results.length){
        showProperties(results);   
    }else{
    noResults();
    }
    
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
    if(kind){
        return property.kind === kind;
    }
    return property;

} 

function cityFilter(property) {
    if(city){
        return property.city === city;
    }
    return property;
}

function typeFilter(property) {
    if(type){
        return property.type === type;
    }
    return property;
}

function roomsFilter(property) {
    if(rooms){
        return property.rooms === rooms;
    }
    return property;
}

function minFilter(property) {
    if(min){
        return property.budget >= min;
    }
    return property;
}

function maxFilter(property) {
    if(max){
        return property.budget <= max;
    }
    return property;
}