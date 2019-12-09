import store from './store.js';
import item from './item.js';

import shoppingList from './shopping-list.js';

const main = function () {
  // const itemNames = ['', 'apples', 'pears'];
  // itemNames.forEach(name => {
  //   try {
  //     item.validateName(name);
  //     // create a new item if name is valid
  //     store.items.push(item.create(name));
  //   } catch (error) {
  //     console.log(`Cannot add item: ${error.message}`);
  //   }
  // });
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);

// store.addItem('bananas');
// store.addItem('apples');
// store.addItem('rice');
// // grab the id of the first store item (bananas)
// let id = store.items[0].id;
// // delete this item from the store
// store.findAndDelete(id);
// shoppingList.render();