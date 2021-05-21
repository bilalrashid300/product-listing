import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setProducts} from '../../../redux/action/productActions'
import ProductComponent from "../productComponent/index";
import "../style.css";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
      dispatch(setProducts(response.data));
  };

  useEffect(() => {
      fetchProducts();
    },[])
         
  return (
    <div className="">
      <h6>Product Listing</h6>
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
