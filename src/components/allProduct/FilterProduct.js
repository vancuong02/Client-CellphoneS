import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { filterProductByPrice } from "../../actions/ProductAction";

function FilterProduct() {
    const dispatch = useDispatch();
    const [startPrice, setStartPrice] = useState(0);
    const [endPrice, setEndPrice] = useState(0);

    const FilterProductByPrice = (a, b) => {
        let startPrice = parseInt(a);
        let endPrice = parseInt(b);
        dispatch(filterProductByPrice(startPrice, endPrice));
    };

    return (
        <div className="filter">
            <div className="options-price">
                <input
                    id="priceStart"
                    placeholder="đ TỪ"
                    onChange={(e) => setStartPrice(e.target.value)}
                ></input>
                <input
                    id="priceEnd"
                    placeholder="đ ĐẾN"
                    onChange={(e) => setEndPrice(e.target.value)}
                ></input>
                <button
                    style={{ cursor: "pointer" }}
                    onClick={() => FilterProductByPrice(startPrice, endPrice)}
                >
                    Tìm
                </button>
            </div>
        </div>
    );
}

export default FilterProduct;
