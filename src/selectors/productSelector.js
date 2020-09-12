export const selectedProduct = (products , id) =>{
    return products.find(e => e._id == id)
}