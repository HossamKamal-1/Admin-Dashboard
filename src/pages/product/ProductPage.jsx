import { Single } from '../../components';
import './ProductPage.scss';
import { singleProduct } from '../../utils/constants/data';
import useDocumentTitle from '../../hooks/useDocumentTitle';
function ProductPage() {
  
  useDocumentTitle();  
  // Fetch data here
  
  return (
    <div className="product-wrapper">
      <Single {...singleProduct} />
    </div>
  );
}
export default ProductPage;
