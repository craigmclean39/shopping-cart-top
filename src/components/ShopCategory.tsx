import React from 'react';
import { ShopCategoryProps } from '../types';
import ProductPreviewCard from './ProductPreviewCard';

const ShopCategory: React.FC<ShopCategoryProps> = (props) => {
  console.log(props);

  const products = props.category.items.map((product) => {
    const previewProps = {
      product: product,
    };
    return <ProductPreviewCard key={product.directory} {...previewProps} />;
  });

  return (
    <section className='shop-category'>
      <h3 className='shop-category--title'>{props.category.category}</h3>
      <div className='shop-category--products-wrapper'>{products}</div>
    </section>
  );
};
export default ShopCategory;
