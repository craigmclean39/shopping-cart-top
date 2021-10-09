import { ProductPreviewCardProps } from '../types';
import { Link } from 'react-router-dom';

const ProductPreviewCard: React.FC<ProductPreviewCardProps> = (props) => {
  const { product } = props;
  const imageName = require(`../images/${product?.directory}/${product?.heroImages[0]}`);
  /* const products = category.items.map((product) => {
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
          ); */

  return (
    <Link
      className='link'
      to={{
        pathname: `shop/${product?.directory}`,
        state: { product: product },
      }}>
      <div className='product-preview-card'>
        <img
          className='product-preview-card--image'
          src={imageName.default}
          alt={product.name}></img>
        <h4 className='product-preview-card--name'>{product.name}</h4>
        <p className='product-preview-card--description'>
          {product.description.preview}
        </p>
        <p className='product-preview-card--price'>${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductPreviewCard;
