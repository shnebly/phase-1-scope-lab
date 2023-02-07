var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

// function setBestCustomer() {
//     var bestCustomer = 'not bob';
//     return bestCustomer;
// }

// function setBestCustomer() {
//     var bestCustomer = 'not bob';
//     console.log(bestCustomer);
// }

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'janice';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'suzie';
}