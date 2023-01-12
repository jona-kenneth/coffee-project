(function () {
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


//We Need a Function to add coffee to the array
// Jona's below
function updateCoffeesSearch(e) {
    e.preventDefault()
    let coffeeRoast = roastSelection.value;
    let coffeeSearchInput = searchCoffee.value.toLowerCase();
    let searchedCoffees = [];
    if ((coffeeRoast === "all") && (coffeeSearchInput === "")) {
            coffees.forEach(function (coffee){
                    searchedCoffees.push(coffee);

                });
    }else if((coffeeRoast === "all") && (coffeeSearchInput !== "")){
        coffees.forEach(function (coffee){
            if(coffee.name.toLowerCase().includes(coffeeSearchInput)){
                searchedCoffees.push(coffee)
            }
        });
    }else if(coffeeRoast !== "all"){
        coffees.forEach(function(coffee){
            if(coffee.roast === coffeeRoast && coffeeSearchInput === ''){
                searchedCoffees.push(coffee);
            }else if(coffee.roast === coffeeRoast && coffeeSearchInput !== ''){
                if(coffee.name.toLowerCase().includes(coffeeSearchInput)){
                    searchedCoffees.push(coffee)
                }
            }
        });
    }

    tbody.innerHTML = (renderCoffees(searchedCoffees));
}

// Jona's above ^

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

//Variables
let tbody = document.querySelector('#coffees');
let searchCoffee = document.querySelector("#search-coffee")
let roastSelection = document.querySelector('#roast-selection')

//Query Selectors
searchCoffee.addEventListener('keyup', updateCoffeesSearch );
roastSelection.addEventListener('change', updateCoffeesSearch)
tbody.innerHTML = renderCoffees(coffees);

})();