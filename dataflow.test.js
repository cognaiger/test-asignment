const { expect } = require('chai');
const ShoppingCart = require('./ShoppingCart');

describe('Shopping Cart', () => {
  it('product with regular price for a premium user should cost $45', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('I', 'R', 'PU');
    expect(result).to.equal('Product added to cart. Total Price: $45');
  });

  it('product with regular price for a regular user should cost $50', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('I', 'R', 'RU');
    expect(result).to.equal('Product added to cart. Total Price: $50');
  });
  
  it('product with sale price for a premium user should cost $35', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('I', 'S', 'PU');
    expect(result).to.equal('Product added to cart. Total Price: $35');
  });

  it('product with sale price for a regular user should cost $45', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('I', 'S', 'RU');
    expect(result).to.equal('Product added to cart. Total Price: $40');
  });
});