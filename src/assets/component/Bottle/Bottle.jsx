import PropTypes from 'prop-types';
import './Bottle.css';

const Bottle = ({props,handleAddToCart}) => {
    // console.log(props)

    const {name , img, price}=props;
    return (
        <div className='card'>
            <h3>{name}</h3>
            <img className='chobi' src={img} alt="" />
            <p>{price} $$</p>
            <button onClick={()=>handleAddToCart(props)}>purchase</button>
        </div>
    );
};
Bottle.propTypes = {
    props: PropTypes.object.isRequired,
    handleAddToCart:PropTypes.func.isRequired,
    name: PropTypes.any,
    
   img: PropTypes.any,
    
    price: PropTypes.any,
    

    
}
export default Bottle;