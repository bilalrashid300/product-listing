import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import "../style.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.product);

  const renderProductList = products?.map((product) => {
    const { id, title, category, price, image } = product;
    return (
      <div className="card mb-3" key={id}>
        <div className="image-card p-4">
          <img src={image} className="card-img-top" alt={title} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{category}</p>
          <p className="card-text">
            <strong>{price}</strong>
          </p>
          <Link to={`/product/${id}`} className="btn btn-primary">
            DETAIL
          </Link>
        </div>
      </div>
    );
  });

  return <div className="card-columns">{renderProductList}</div>;
};

export default ProductComponent;
