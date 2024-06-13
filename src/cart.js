async function addItem(userCart, item) {
    userCart.push(item);
    console.log(`Um ${item.name} adcionado! ➕`);

}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, index) {
    const deleteIndex = index - 1;
    
    if (index>= 0 && index <= userCart.length ) {
        if (userCart[deleteIndex].quantity > 1) {
            userCart[deleteIndex].quantity -= 1;
            console.log(`Um(a) ${userCart[deleteIndex].name} removido! ✖️`);
        } else if (userCart[deleteIndex].quantity = 1) {
            userCart.splice(deleteIndex, 1);
            console.log(`Item excluido do carrinho! ❌`);
        }
    } else {
        console.log("Item não encontrado!");
    }
}

async function calculateTotal(userCart) {
    console.log("Shopee Cart total is!");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nTotal: ${result}`);
}

async function displayCart(userCart) {
    console.log("Shopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal()}`);
    })
}

export {addItem, calculateTotal, deleteItem, removeItem, displayCart}