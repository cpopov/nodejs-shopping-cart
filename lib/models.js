'use strict';

class Item {
    constructor(name) {
        this.name = name;
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
        return;
    }

    addItem(item) {
        this.items.push(item);
    }
}

exports.Item = Item;
exports.Basket = Basket;