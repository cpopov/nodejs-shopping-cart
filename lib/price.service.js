'use strict';

const prices = {
    'Butter' : '0.80',
    'Milk' : '1.15',
    'Bread' : '1.00'
};

/**
 * Service that returns the price in £ for a given item name
 * @param name
 * @returns {*}
 */
exports.priceOf = function(name) {
    return prices[name];
};