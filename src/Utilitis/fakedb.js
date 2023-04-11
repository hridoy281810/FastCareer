// use local storage to manage cart data
const addToDb = id => {
    let shoppingCart = {}
    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
      shoppingCart = JSON.parse(storedCart)
    }
      shoppingCart[id] = 1
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
  }
const getStoredCart = () => {
  let shoppingCart = {}

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart)
  }
  return shoppingCart
}

export {
    addToDb,
    getStoredCart,
}

