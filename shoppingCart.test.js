const { expect } = require('chai');
const ShoppingCart = require('./ShoppingCart');

describe('Shopping Cart', () => {
  it('should add a product with regular price for a regular user', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('I', 'R', 'RU');
    expect(result).to.equal('Product added to cart. Total Price: $50');
  });

  it('should add a product with sale price for a regular user', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('I', 'S', 'RU');
    expect(result).to.equal('Product added to cart. Total Price: $40');
  });

  it('should add a product with regular price for a premium user', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('I', 'R', 'PU');
    expect(result).to.equal('Product added to cart. Total Price: $45');
  });

  it('should add a product with sale price and premium user discount', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('I', 'S', 'PU');
    expect(result).to.equal('Product added to cart. Total Price: $35');
  });

  it('should not add a product that is out of stock for a regular user with regular price', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('O', 'R', 'RU');
    expect(result).to.equal('Product is out of stock. Cannot be added to the cart.');
  });

  it('should not add a product that is out of stock for a regular user with sale price', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('O', 'S', 'RU');
    expect(result).to.equal('Product is out of stock. Cannot be added to the cart.');
  });

  it('should not add a product that is out of stock for a premium user', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('O', 'R', 'PU');
    expect(result).to.equal('Product is out of stock. Cannot be added to the cart.');
  });

  it('should not add a product that is out of stock for a premium user with sale price', () => {
    const cart = new ShoppingCart();
    const result = cart.addProduct('O', 'S', 'PU');
    expect(result).to.equal('Product is out of stock. Cannot be added to the cart.');
  });
});