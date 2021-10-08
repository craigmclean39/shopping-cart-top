import React, { useEffect, useState } from 'react';

interface HeroImage {
  color: string;
  image: string;
}

interface Product {
  category: string;
  name: string;
  description: string[];
  colors: string[];
  heroImages: HeroImage[];
  detailImages: string[];
  price: number;
  sizes: string[];
  activities: string[];
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

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
    }

    getData();
  }, []);

  return isLoading ? <div>Loading</div> : <div>Loaded</div>;
}

export default App;
