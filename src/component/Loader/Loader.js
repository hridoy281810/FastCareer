import {  getStoredCart } from "../../Utilitis/fakedb";

// // const loadedInformation = await fetch(`featuredJob.json`);
// const applyJObsInformationLoader = async ()=>{
//     const loaderProducts = await fetch(`featuredJob.json`);
//     const products = await loaderProducts.json();
//     console.log(products)
//     const storeCart = getShoppingCart();
//     const saveCart = [];
// for(const id in storeCart){
//     const addedProduct = products.find(pd => pd.id === id);
//     if(addedProduct){
// const quantity = storeCart[id];
// addedProduct.quantity = quantity;
// saveCart.push(addedProduct);

//     }
// }
// // if you need to send tow thinks
// // return  [products,saveCart]
// // another option 
// // return {products,saveCart}

//     return saveCart;

// }

// export default applyJObsInformationLoader ;

export const productsAndCartData = async () => {
  const productsData = await fetch('/featuredJob.json')
  const products = await productsData.json()

  const savedCart = getStoredCart()
  const initialCart = []
  for (const id in savedCart) {
    const foundProduct = products.find(product => product.id === id)
    if (foundProduct) {
      // const quantity = savedCart[id]
      savedCart[id] = 1
      // foundProduct.quantity = quantity
      initialCart.push(foundProduct)
    }
    
  }

  return { products, initialCart }
}
