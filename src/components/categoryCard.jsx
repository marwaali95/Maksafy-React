import React from 'react';
const CategoryCard = (props) => {
    return ( 
    <React.Fragment>
    <div className="category-card">
      <img src={props.categoryImage} className=" image-fluid "/>
        <p className="card-text">{props.categoryTitle}</p>
    </div>
  
    </React.Fragment> );
}
 
export default CategoryCard;