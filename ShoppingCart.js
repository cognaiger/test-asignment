class ShoppingCart {
    constructor() {
      this.cart = [];
    }
  
    addProduct(productAvailability, productPrice, userMembership) {
      // Condition 1: Product Availability
      if (productAvailability === 'O') {
        return 'Product is out of stock. Cannot be added to the cart.';
      }
  
      let totalPrice;
  
      // Condition 2: Product Price
      if (productPrice === 'R') {
        totalPrice = 50; // Regular price
      } else if (productPrice === 'S') {
        totalPrice = 40; // Sale price
      }
  
      // Condition 3: User Membership
      if (userMembership === 'PU') {
        totalPrice -= 5; // Premium user discount
      }
  
      return `Product added to cart. Total Price: $${totalPrice}`;
    }
  }
  
  module.exports = ShoppingCart;