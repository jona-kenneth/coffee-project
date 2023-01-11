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
function updateCoffeesSearch() {
    tbody.innerHTML = '';
    const selectedRoast = roastSelection.value;
    const filterText = searchCoffee.value.toLowerCase();
    // console.log(filterText);
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.roast.toLowerCase().includes(filterText) === selectedRoast || selectedRoast === 'all') &&
            coffee.name.toLowerCase().includes(filterText)) {
            tbody.innerHTML = (renderCoffee(coffee));
        }
    });
}
//We Need a Function to add coffee to the array
// Jona's below

// function addCoffee(name,e) {
//     e.preventDefault();
//     let newCoffee = {
//         name: name,
//         roast: roastAdd,
//     }
//     roastSelection.push(newCoffee);
//     tbody.innerHTML = renderCoffees(newCoffee);
// }
//     console.log(addCoffee)

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

// Needs to be the DOM manipulation with a function that can push an object to  the array.
// Jona's Search Coffee edit's below

let searchCoffee = document.querySelector("#coffee-selection")
// console.log(searchCoffee)
searchCoffee.addEventListener('keyup', updateCoffeesSearch )
// Jona's edits above ^


let tbody = document.querySelector('#coffees');


let selectCoffee = document.querySelector('#roast-selection');
let roastSelection = document.querySelector('#roast-selection')
tbody.innerHTML = renderCoffees(coffees);

selectCoffee.addEventListener('change', updateCoffees);

