import createItem from "../services/item.js";
import * as cartServices from "../services/cart.js"

export const myCart = [];
const myWhishList = [];

const item1 = await createItem("Camisa verde👕", 45.70, 4)
const item2 = await createItem("Oculos🕶️", 70.00, 6)
const item3 = await createItem("Tenis👟", 120.10, 2)
const item4 = await createItem("Cadeira🪑", 350.20, 5)
const item5 = await createItem("Camisa rosa👚",40.50, 6)

console.log("Welcome to the shopee Cart!");

cartServices.addItem(myCart, item1);
await cartServices.displayCart(myCart);

cartServices.addItem(myCart, item2);
await cartServices.displayCart(myCart);

cartServices.addItem(myCart, item3);
await cartServices.displayCart(myCart);

await cartServices.removeItem(myCart, 3);

await cartServices.displayCart(myCart);

await cartServices.removeItem(myCart, 3);

await cartServices.displayCart(myCart);

cartServices.addItem(myCart, item4);
await cartServices.displayCart(myCart);

await cartServices.removeItem(myCart, 3);
await cartServices.displayCart(myCart);

cartServices.addItem(myCart, item5);
await cartServices.displayCart(myCart);

await cartServices.displayCart(myCart);

await cartServices.removeItem(myCart, 4);
await cartServices.displayCart(myCart);

await cartServices.removeItem(myCart, 4);
await cartServices.displayCart(myCart);

await cartServices.deleteItem(myCart, item1.name);
await cartServices.displayCart(myCart);
await cartServices.calculateTotal(myCart);





//await cartServices.deleteItem(myCart, item1.name);

//await cartServices.calculateTotal(myCart);
