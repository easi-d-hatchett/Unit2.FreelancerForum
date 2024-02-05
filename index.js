// === Type Definitions ===
/**
* @typedef {Object} freelancer
* @property {string} name
* @property {string} occupation
* @property {number} price
*/ 

// === State ===

const names = [
    "Si", 
    "Flint",
    "Dooskey",
    "Dee-Money",
    "Sheem", 
    "Soulja", 
    "D.Bibb"
];

const occupations = [
    "Godfather",
    "Boss", 
    "Underboss", 
    "Consigliere", 
    "Capo",
    "hitman",
    "hitman"
];
const prices = [
    10000000, 
    9000000, 
    8000000, 
    7000000, 
    7000000, 
    6000000, 
    6000000
];

function selectRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function addRandomFreelancer(freelancer) {
    const name = selectRandomElement(names);
    const occupation = selectRandomElement(occupations);
    const price = selectRandomElement (prices);
    const newfreelancer = {name, occupation, price};
    freelancer.push(newfreelancer);
}
const allFreelancers = [{name: "Alice", occupation: "Writer", price:30},
    {name: "Bob", occupation: "Teacher", price: 50},];

function calcAvg() {
    let total = allFreelancers.reduce(
        (acc, allFreelancers) => (
        acc+=allFreelancers.price),0);
    return (total/allFreelancers.length).toFixed(2);
}

// === Render ===

function renderFreelancer (allFreelancers) {
    const $freelancers = allFreelancers.map((freelancer) => {
        const $freelancers = document.createElement("li");
        freelancer.textContent = `${freelancer.name}
        ${freelancer.occupation} $${freelancer.price}`;
        return $freelancers;
    });
    const ulNames = document.querySelector("span.table");
    ulNames.replaceChildren(...$freelancers);
}

function render (allFreelancers) {
    renderFreelancer (allFreelancers);
}

function renderAverage(allFreelancers) {
    const $average = document.createElement("p");
    $average.textContent = `The average price is $${calcAvg()}`;
    const pAverage = document.querySelector("p.average");
    pAverage.textContent = $average.textContent;
    pAverage.textContent = `The averageprice is $${calcAvg()}.`;

}

// === Script ===

render(allFreelancers);
renderAverage(allFreelancers);
setInterval(() => {
    addRandomFreelancer(allFreelancers);
    render(allFreelancers);
    renderAverage(allFreelancers);
}, 2000);