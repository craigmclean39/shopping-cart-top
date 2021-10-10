import { useEffect, useState } from 'react';
import { Category, ShopCategoryProps } from '../types';
import ShopCategory from '../components/ShopCategory';

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

  let shopCategories: any | undefined = [];
  if (!isLoading) {
    shopCategories = categories?.map((category) => {
      const sProps: ShopCategoryProps = {
        category: category,
      };
      sProps.category = category;
      return <ShopCategory key={category.category} {...sProps} />;
    });
  }

  return isLoading ? <div>Loading</div> : <div>{shopCategories}</div>;
};

export default Shop;