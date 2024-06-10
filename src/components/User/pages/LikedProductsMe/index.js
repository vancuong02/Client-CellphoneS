import axios from "axios";
import { useEffect, useState } from "react";

import "./LikedProductsMe.css";
import LikedProducts from "../../../ProductLiked/ProductLiked";

const LikedProductsMe = () => {
    const [load, setLoad] = useState(false);

    const [productLiked, setProductLiked] = useState([]);
    async function getLikedProducts() {
        try {
            const response = await axios.get("http://localhost:4000/products");
            const products = response.data;

            // Lọc các sản phẩm có thuộc tính like: true
            const likedProducts = products.filter(
                (product) => product.like === true
            );

            // In ra các sản phẩm đã lọc
            setProductLiked(likedProducts);

            return likedProducts;
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getLikedProducts();
    }, [load]);

    return (
        <div className="product-liked-element">
            {productLiked &&
                productLiked.length > 0 &&
                productLiked.map((product, index) => (
                    <LikedProducts
                        load={load}
                        setLoad={setLoad}
                        product={product}
                        key={index}
                    ></LikedProducts>
                ))}
            {productLiked && productLiked.length === 0 && (
                <>Chưa có sản phẩm yêu thích</>
            )}
        </div>
    );
};

export default LikedProductsMe;
