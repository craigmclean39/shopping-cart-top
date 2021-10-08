import React, { useEffect, useState } from 'react';
import { Product } from './types';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[] | null>(null);

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
      const products: Product[] = [];
      for (let i = 0; i < data.length; i++) {
        products.push(data[i]);
      }
      setProducts(products);
    }

    getData();
  }, []);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div>
      {products?.map((product) => {
        const imageName = require(`../src/images/${product?.directory}/${product?.heroImages[0]}`);
        console.log(imageName);
        return (
          <div>
            <div>{product?.name}</div>
            <img src={imageName.default} alt={product.name}></img>
          </div>
        );
      })}
    </div>
  );
}

export default App;
