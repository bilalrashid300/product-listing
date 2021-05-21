import {useParams} from 'react-router-dom'
import {useEffect} from 'react'
import '../style.css'

const ProductDetail = () => {
    const { productId } = useParams();
    console.log(productId);
    return (
        <div className="">
            <h6>Product Detail</h6>
        </div>
    )
}

export default ProductDetail