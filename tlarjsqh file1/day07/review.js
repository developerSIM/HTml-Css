const fn1 = (x) => {
    return x ** 2;
};
const before1 = [1,2,3,4];
const after1 = before1.map(fn1)


// const  = [85, 42, 77]
const before5 = [{x}]=>{
    return x.name;
}

const starbucks = [
    { name:"아메리카노", price: 4500, shots: 2, ingredients: ["water","caffeine"]},
    { name:"라떼", price: 5500, shots: 2, ingredients: ["water","milk","caffeine"]},
    { name:"돌체라떼", price: 6500, shots: 3, ingredients: ["water","milk","caffeine", "condensed milk"]},
    { },
    { },
];



//5. caffeine -> decaffeine
const fn6 = (y) => {
    return y == "caffeine" ? "decaffeine" : y;
};

const fn5 = (x) => {
    x.ingredients.map(fn6)
};

const answer5 = starbucks.map(fn5);
window.console.log(answer5);