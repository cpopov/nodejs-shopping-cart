'use strict';

var priceService = require('./price.service');

/**
 * A basket item
 */
class Item {
    constructor(name) {
        this.name = name;
        this.price = priceService.priceOf(name);
    }
}

/**
 * Discount element to be added in a basket
 */
class Discount {
    constructor(name, description, discount) {
        this.name = name;
        this.description = description;
        this.discount = discount;
    }
}

class Basket {
    constructor() {
        this.items = [];
        this.discounts = [];
    }

    getItems() {
        return this.items;
    }

    countItems(name) {
        var count = 0;
        this.items.forEach(item => {
            if (item.name === name) {
                count++;
            }
        });
        return count;
    }

    countDiscounts(name) {
        var count = 0;
        this.discounts.forEach(item => {
            if (item.name === name) {
                count++;
            }
        });
        return count;
    }

    /**
     * Calculates a possible discount for an item
     * rules are hardcoded for now:
     * - Buy 2 Butter and get a Bread at 50% off
     * - Buy 3 Milk and get the 4th milk for free
     * @param item
     */
    getDiscount(item) {
        if (item.name === 'Bread' && this.countItems('Butter') - 2 * this.countDiscounts('Bread') >= 2) {
            return new Discount(item.name, 'Buy 2 Butter and get a Bread at 50% off', 0.5 * item.price);
        }

        if (item.name === 'Milk' && this.countItems('Milk') - 3 * this.countDiscounts('Milk') >= 3) {
            return new Discount(item.name, 'Buy 3 Milk and get the 4th milk for free', item.price);
        }
    }

    getTotalCost() {
        var cost = 0;

        this.items.forEach(item => {
            cost += item.price;
        });

        this.discounts.forEach(discount => {
            cost -= discount.discount;
        });

        return cost;
    }

    addItem(item) {
        this.items.push(item);
        var discount = this.getDiscount(item);
        if (discount) {
            this.discounts.push(discount);
        }
    }
}

exports.Item = Item;
exports.Basket = Basket;