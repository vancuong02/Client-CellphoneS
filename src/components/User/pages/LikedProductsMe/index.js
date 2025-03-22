import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import "./LikedProductsMe.css";
import LikedProducts from "../../../ProductLiked/ProductLiked";

const LikedProductsMe = () => {
  const [load, setLoad] = useState(false);
  const [productLiked, setProductLiked] = useState([]);
  var userInfo = useSelector((state) => state.userSignin.userInfo);

  async function getLikedProducts() {
    try {
      const products = await axios.get(
        `http://localhost:4000/products/liked/${userInfo._id}`
      );

      setProductLiked(products.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  console.log("productLiked", productLiked);

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
