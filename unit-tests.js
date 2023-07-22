
// This test checks that the shopping cart can remove an item.
test('Can remove item from shopping cart', () => {
  const shoppingCart = new ShoppingCart();
  const item = {
    id: 1,
    name: 'T-shirt',
    price: 10,
  };
  shoppingCart.addItem(item);
  shoppingCart.removeItem(item);
  expect(shoppingCart.items).toEqual([]);
});

// This test checks that the shopping cart can clear all items.
test('Can clear shopping cart', () => {
  const shoppingCart = new ShoppingCart();
  const item1 = {
    id: 1,
    name: 'T-shirt',
    price: 10,
  };
  const item2 = {
    id: 2,
    name: 'Jeans',
    price: 20,
  };
  shoppingCart.addItem(item1);
  shoppingCart.addItem(item2);
  shoppingCart.clear();
  expect(shoppingCart.items).toEqual([]);
});

// This test checks that the shopping cart can update the quantity of an item.
test('Can update quantity of item in shopping cart', () => {
  const shoppingCart = new ShoppingCart();
  const item = {
    id: 1,
    name: 'T-shirt',
    price: 10,
  };
  shoppingCart.addItem(item, 2);
  expect(shoppingCart.items[0].quantity).toEqual(2);
});

// This test checks that the shopping cart throws an error if you try to add an item that already exists.
test('Throws error if you try to add duplicate item to shopping cart', () => {
  const shoppingCart = new ShoppingCart();
  const item = {
    id: 1,
    name: 'T-shirt',
    price: 10,
  };
  shoppingCart.addItem(item);
  expect(() => shoppingCart.addItem(item)).toThrowError('Item already exists');
});
