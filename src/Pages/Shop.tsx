import React, { useEffect, useState } from 'react';
import { Category, ShopCategoryProps } from '../types';
import ShopCategory from '../components/ShopCategory';
import { RouteComponentProps } from 'react-router';
import { Header } from '../components/Header';
import { Link } from 'react-router-dom';

const Shop: React.FC<RouteComponentProps> = (props) => {
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

  const headerLinks: JSX.Element[] = [];
  headerLinks.push(
    <Link
      key={`shop${Math.random()}`}
      className='link breadcrumb-link'
      to='/shop'>
      Shop
    </Link>
  );

  return (
    <React.Fragment>
      <Header links={headerLinks} />

      <div className='shop-wrapper'>
        {isLoading ? (
          <div>Loading</div>
        ) : (
          <div className='shop-container'>{shopCategories}</div>
        )}
      </div>
    </React.Fragment>
  );
};

export default Shop;
