
const results = document.querySelector('#results');

/* document.addEventListener('DOMContentLoaded', () => {
    showProperties(properties);
}) */

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


// Función que filtra en base a la búsqueda

function filterProperties(kind, city, type, rooms, min, max) {
    const results = properties.filter(kindFilter(kind)).filter(cityFilter(city)).filter(typeFilter(type)).filter(roomsFilter(rooms)).filter(minFilter(min)).filter(maxFilter(max))
    console.log(results)
    if(results.length){
        showProperties(results);  
    }else{
    noResults();
    }
}

// Función de cada búsqueda


function kindFilter(kind) {
    if(kind){
        return properties.kind === kind;
    }
    console.log(kind)
    return kind;

} 

function cityFilter(city) {
    if(city){
        return properties.city === city;
    }
    return city;

} 

function typeFilter(type) {
    if(type){
        return properties.type === type;
    }
    return type;
}

function roomsFilter(rooms) {
    if(rooms){
        return properties.rooms === rooms;
    }
    return rooms;
}

function minFilter(min) {
    if(min){
        return properties.budget >= min;
    }
    return min;
}

function maxFilter(max) {
    if(max){
        return properties.budget <= max;
    }
    return max;
}


// Función cuando no hay resultados

function noResults(){
    deleteHTML();
    const noResults = document.createElement('div');
    noResults.classList.add('no__results');
    noResults.textContent = 'Lo sentimos. No tenemos ninguna propiedad que coincide con su búsqueda.'
    results.appendChild(noResults);
}


// Función que limpia el HTML

function deleteHTML() {
    while(results.firstChild){
        results.removeChild(results.firstChild);
    }
}
