const getStoredCart=()=>{
    const cart= localStorage.getItem('cart');
    if(cart){
        return JSON.parse(cart);
    }
    return [];

}
const addToLS=id=>{
    const cart = getStoredCart();
cart.push(id);
saveToLS(cart);
}
const saveToLS=(info)=>{
    const stirngified =JSON.stringify(info)
    localStorage.setItem('cart',stirngified)
}
const removeFromLS=(id)=>{
    const cart = getStoredCart();
    const remaining =cart.filter(idx=> idx!==id);
    saveToLS(remaining)
}
export {addToLS , getStoredCart,removeFromLS }