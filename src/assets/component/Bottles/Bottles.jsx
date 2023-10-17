import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../../utilites/localStorage";
import Cart from "../cart/Cart";


const Bottles = () => {
    const [bottles, setbottles] = useState([]);
    const [cart, setCart] = useState([]);
    // (localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')): [])
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setbottles(data))
    }, []);

    //checking stored cart 

  useEffect(()=>{
    console.log(bottles.length)
if(bottles.length>0){    
    const storedCart=getStoredCart();
    const saveCart=[];
    
for(const id of storedCart){
    // console.log(id)
   
    // console.log(storedCart)
    const bottle= bottles.find(bottle=> bottle.id === id);
    if(bottle){
 saveCart.push(bottle);
 
   }
    
}
console.log(saveCart)
setCart(saveCart)
}
  },[bottles])


    const handleAddToCart = (props) => {
        //         let  newCart;
        //     if(cart.includes(props)=== false){
        //     newCart= [...cart,props];
        //     setCart(newCart);
        // localStorage.setItem('cart',JSON.stringify(newCart))}
        // console.log(props)
        const newCart = [...cart, props];
        setCart(newCart);
        addToLS(props.id)


    }
    const handleRemoveFromCart=(id)=>{
        const remaingCart = cart.filter(bottle=>bottle.id !== id);
        setCart(remaingCart);
 removeFromLS(id);
    }

    return (
        <div>

            <p>first react project</p>
             <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} ></Cart>
            <div className="container">{
                bottles.map((bottle, idx) => <Bottle props={bottle} key={idx} handleAddToCart={handleAddToCart}></Bottle>)
            }</div>
        </div>
    );
};

export default Bottles;