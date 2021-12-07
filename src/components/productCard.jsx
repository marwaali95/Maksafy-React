import React from 'react';
import InfoIcon from '../assets/jsxIcons/info-icon';
import RunIcon from '../assets/jsxIcons/run-icon';
import AddIcon from '../assets/jsxIcons/add-icon';
const ProductCard = (props) => {
    return ( <React.Fragment>
  <div className="ProductCard ">
        <div className="InfoContainer">
                <span className="InfoIcon">   <InfoIcon/></span>
              <div className="CaloriesContainer">  <span>200K cal</span>
                <span> <RunIcon/> </span></div>

        </div>
        
      <img src={props.ProductImage} className="ProductImage" alt="..."/>
      <div className="CardBody">
        <h6 className="CardTitle">عصير تفاح 250مل</h6>
        <p className="CardQuantityText"> الكمية بالمخزون:</p> <label className="CardQuantityLabel">5</label>
        <div className="CardFooter">        <span><AddIcon/></span>
 <label className="Price">7.50</label><p className="PriceCurrency">ريال</p>
        </div>
      </div>
  </div>
    </React.Fragment> );
}
 
export default ProductCard;