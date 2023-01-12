//Start of IIFE
(function () {
    "use strict"

// Start of Function for Dropdown in Search Coffee
    function renderCoffee(coffee) {
        let html = '<div class="coffee col-6 d-inline-flex d-flex justify-content-center">';
        html += '<h3>' + coffee.name + '</h3>';
        html += '<p>' + coffee.roast + '</p>';
        html += '</div>';

        return html;
    }

    function renderCoffees(coffees) {
        let html = '';
        for (let i = coffees.length - 1; i >= 0; i--) {
            html += renderCoffee(coffees[i]);
        }
        return html;
    }
// End of Function for Dropdown in Search Coffee

// Start of Function for Search Coffee
    function updateCoffeesSearch() {
        let coffeeRoast = roastSelection.value;
        let coffeeSearchInput = searchCoffee.value.toLowerCase();
        let searchedCoffees = [];
        if ((coffeeRoast === "all") && (coffeeSearchInput === "")) {
            coffees.forEach(function (coffee) {
                searchedCoffees.push(coffee);

            });
        } else if ((coffeeRoast === "all") && (coffeeSearchInput !== "")) {
            coffees.forEach(function (coffee) {
                if (coffee.name.toLowerCase().includes(coffeeSearchInput)) {
                    searchedCoffees.push(coffee)
                }
            });
        } else if (coffeeRoast !== "all") {
            coffees.forEach(function (coffee) {
                if (coffee.roast === coffeeRoast && coffeeSearchInput === '') {
                    searchedCoffees.push(coffee);
                } else if (coffee.roast === coffeeRoast && coffeeSearchInput !== '') {
                    if (coffee.name.toLowerCase().includes(coffeeSearchInput)) {
                        searchedCoffees.push(coffee)
                    }
                }
            });
        }
        tbody.innerHTML = (renderCoffees(searchedCoffees));
    }
// End of Function for Search Coffee

// Start of Function for Add Coffee
    function updateCoffeeSelection(e) {
        e.preventDefault()
        let selectedRoast = addRoast.value;
        let newCoffee = addCoffee.value;
        let coffeeID = coffees.length + 1;
        let filteredCoffees = {
            id: coffeeID,
            name: newCoffee,
            roast: selectedRoast
        }
        if (newCoffee === "") {
            return;
        }
        coffees.push(filteredCoffees)
        updateCoffeesSearch()
    }
// End of Function for Add Coffee

// Start of Array with Objects
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
// End of Array with Objects

//Variables Start
    let tbody = document.querySelector("#coffees");
    let roastSelection = document.querySelector("#roast-selection")
    let searchCoffee = document.querySelector("#search-coffee")
    let addCoffee = document.querySelector("#add-coffee")
    let addRoast = document.querySelector("#add-roast-selection")
    let submitCoffeeForm = document.querySelector('.coffee-form-new')
//Variables End

//Query Selectors Start
    searchCoffee.addEventListener("keyup", updateCoffeesSearch);
    roastSelection.addEventListener("change", updateCoffeesSearch)
    submitCoffeeForm.addEventListener("submit", updateCoffeeSelection)
    tbody.innerHTML = renderCoffees(coffees);
//Query Selectors End

})();
//End of IIFE