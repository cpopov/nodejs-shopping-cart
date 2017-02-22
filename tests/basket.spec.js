'use strict';

var expect = require('chai').expect;
var Basket = require('../lib/models').Basket;
var Item = require('../lib/models').Item;


// This is an integration test to test Basket model
describe('Basket', function () {

    it('Given the basket has 1 bread, 1 butter and 1 milk when I total the basket then the total should be £2.95', function () {
        let basket = new Basket();
        basket.addItem(new Item('Bread'));
        basket.addItem(new Item('Butter'));
        basket.addItem(new Item('Milk'));

        expect(basket.getTotalCost()).to.equal(2.95);
    });

});
