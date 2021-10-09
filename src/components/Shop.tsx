import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Category } from '../types';

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<Category[] | null>(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch('products.json', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      setIsLoading(false);
      const category: Category[] = [];
      for (let i = 0; i < data.length; i++) {
        category.push(data[i]);
        console.log(data[i]);
      }
      setCategories(category);
    }

    getData();
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      {categories?.map((category) => {
        const products = category.items.map((product) => {
          const imageName = require(`../images/${product?.directory}/${product?.heroImages[0]}`);
          return (
            <div>
              <div>
                <Link
                  to={{
                    pathname: `shop/${product?.directory}`,
                    state: { product: product },
                  }}>
                  {product?.name}
                </Link>
              </div>
              <img src={imageName.default} alt={product.name}></img>
            </div>
          );
        });

        return (
          <React.Fragment>
            <div>{category.category}</div>
            {products}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Shop;
