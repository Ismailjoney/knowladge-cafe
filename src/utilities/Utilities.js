const getLocalStoragecart = () => {
    const cart = localStorage.getItem('cart')

    if (cart) {
        return JSON.parse(cart)
    }
    return [];
}


const saveCartLocalStorage = (cart) => {
    const cartStringfiyed = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfiyed)

}

const addCartToLocalStorage = (id) => {
    const cart = getLocalStoragecart()
    cart.push(id)
    saveCartLocalStorage(cart)
}


const removeToLocalStorage = id => {
    const cart = getLocalStoragecart()
    const remaining = cart.filter(idx => idx !== id)
    saveCartLocalStorage(remaining)
}

export { addCartToLocalStorage, getLocalStoragecart, removeToLocalStorage }