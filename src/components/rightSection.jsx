import React from 'react';
import CategoryCard from './categoryCard';
import data from './data';
import productData from './product-data';
import ProductCard from './productCard';
const RightSection = () => {
    return ( <React.Fragment>
<div className="TheRightContainer">
  <div className="CategoryContainer">
  <p className="category-card-all">الكل</p>
  {data.CategorysData.map((item,index)=>{
      return (
        <CategoryCard key={index} categoryImage={item.categoryImage} categoryTitle={item.categoryTitle} />

      );
  })}
  </div>
  <div className="ProductsContainer ">
  {productData.ProductData.map((item,index)=>{
      return (
        <ProductCard key={index} ProductImage={item.ProductImage} />

      );
  })}
  </div>
</div>

    </React.Fragment> );
}
 
export default RightSection;