import { RouteComponentProps } from 'react-router';
import { useLocation } from 'react-router';
import { Product } from '../types';

interface LocationState {
  state: {
    product: Product;
  };
}

const ProductDetails: React.FC<RouteComponentProps> = (props) => {
  const location = useLocation() as LocationState;
  const product = location.state.product;

  console.log(product);
  return <div>Details</div>;
};

export default ProductDetails;
