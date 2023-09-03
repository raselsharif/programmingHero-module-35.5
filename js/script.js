

const addProduct = () => {
    const productName = document.getElementById('product-name');
    const product = productName.value;

    const productQuantity = document.getElementById('product-quantity');
    const quantity = productQuantity.value;
    productName.value = ''
    productQuantity.value = ''
    productDisplay(product, quantity)
    saveToLocal(product, quantity)
}

const productDisplay = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td class="border">${product}</td>
    <td class="border">${quantity}</td>
    `

    productContainer.appendChild(tr)

}

const getLocalData = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveToLocal = (product, quantity) => {
    const cart = getLocalData()
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringify)
    // console.log(cart);
}

const displayProductFromLocal = ()=>{
    const saveCart = getLocalData();

    for(const product in saveCart){
        const quantity = saveCart[product]
        console.log(product , quantity);
        productDisplay(product, quantity)
    }
}

displayProductFromLocal()