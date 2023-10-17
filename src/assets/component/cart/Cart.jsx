import PropTypes from 'prop-types';
import './cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    console.log(cart)
    return (
        <div>
            <p>cart: {cart.length}</p>
            <div className='cart-img'>
                {cart.map(bottle => <div key={bottle.names}><img  src={bottle.img}></img> <button onClick={()=>handleRemoveFromCart(bottle.id)}>Remove</button></div>)}
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;