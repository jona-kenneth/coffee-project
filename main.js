"use strict"

function renderCoffee(coffee) {
    let html = '<div class="coffee col-6 d-inline-flex d-flex justify-content-center">';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    let html = '';
    for(let i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees() {
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === "all" || selectedRoast === coffee.roast) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}
//We Need a Function to add coffee to the array
// Jona's below

function addCoffee(name,e) {
    e.preventDefault();
    let newCoffee = {
        name: name,
        roast: roastAdd,
    }
    coffees.push(newCoffee);
    tbody.innerHTML = renderCoffees(newCoffee);
}
    console.log(addCoffee)


// Jona's above'

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


//appendChild to below DOM to coffees.name as a h3 and coffees.roast to p tag
let tbody = document.querySelector('#coffees');

// Needs to be the DOM manipulation with a function that can push an object to the the array.
// Jona's edit's below
let roastAdd = document.querySelector("#add-coffee-selection")
let newCoffee = document.querySelector("#add-coffee")
newCoffee.addEventListener('submit', addCoffee)
// Jona's edits above ^

let selectCoffee = document.querySelector('#roast-selection');
let roastSelection = document.querySelector('#roast-selection');
tbody.innerHTML = renderCoffees(coffees);

selectCoffee.addEventListener('change', updateCoffees);

