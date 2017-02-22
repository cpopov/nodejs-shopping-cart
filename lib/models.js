'use strict';

var priceService = require('./price.service');

class Item {
    constructor(name) {
        this.name = name;
        this.price = priceService.priceOf(name);
    }
}

class Basket {
    constructor() {
        this.items = [];
    }

    getItems() {
        return this.items;
    }

    getTotalCost() {
        let cost = 0;

        this.items.forEach(item=>{
            cost+=item.price;
        });

        return cost;
    }

    addItem(item) {
        this.items.push(item);
    }
}

exports.Item = Item;
exports.Basket = Basket;