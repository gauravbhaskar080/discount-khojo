import React from 'react';
import Card from '../Card/Card';
import products from '../../../../constants/productsData';

const Item = () => {
  return (
    <div className='product-container'>
      {products.map((product, index) => (
        <Card
          key={index}
          imageSrc={product.imageSrc}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Item;
