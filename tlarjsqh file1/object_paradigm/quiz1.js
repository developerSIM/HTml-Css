const baskinrabbins = {
    icecream: [{ name: "딸기", price: 1500},
               { name: "초코", price: 2000},
               { name: "메론", price: 3000},
    ],
    sales: 0,
    sellcecream: function (X) {
        this.sales = this.sales + this.icecream[X].price;
    },
};


baskinrabbins.sellcecream(1);
baskinrabbins.sellcecream(2);
baskinrabbins.sellcecream(2);

window.console.log(baskinrabbins.sales)
