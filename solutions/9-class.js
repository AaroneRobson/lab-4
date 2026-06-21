import _ from 'lodash';

class Cart {
  constructor() {
    this.items = [];
  }
  
  addItem(product, quantity) {
    this.items.push({ item: product, count: quantity });
  }
  
  getItems() {
    return this.items;
  }
  
  getCost() {
    return this.items.reduce((sum, { item, count }) => {
      return sum + item.price * count;
    }, 0);
  }
  
  getCount() {
    return this.items.reduce((sum, { count }) => sum + count, 0);
  }
}

export default Cart;