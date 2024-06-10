import React, { useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import {
    deleteTypeProduct,
    getAllTypeProduct,
} from "../../../../../actions/ListTypeProductAction";

export default function AllTypeProduct() {
    const dispatch = useDispatch();
    const { List } = useSelector((state) => state.allTypeProduct);

    useEffect(() => {
        dispatch(getAllTypeProduct());
    }, [dispatch]);

    const handleRemoveItem = async (item) => {
        await dispatch(deleteTypeProduct(item));
        dispatch(getAllTypeProduct());
    };

    const MenuFirmProduct = (firmItem) => (
        <div className="filter-menu-firm-item">
            <img src={firmItem.img} alt="filter"></img>
            <div
                className="filter-menu-firm-item-delete"
                onClick={() => handleRemoveItem(firmItem)}
            >
                <span>
                    <CloseOutlined></CloseOutlined>
                </span>
            </div>
        </div>
    );

    return (
        <div>
            <div className="filter-menu-firm">
                {List ? List.map((item) => MenuFirmProduct(item)) : ""}
            </div>
        </div>
    );
=======
import { deleteTypeProduct, getAllTypeProduct } from "../../../../../actions/ListTypeProductAction";

export default function AllTypeProduct() {
  const dispatch = useDispatch();
  const { List } = useSelector((state) => state.allTypeProduct);

  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, [dispatch]);

  const handleRemoveItem = async (item) => {
    await dispatch(deleteTypeProduct(item))
    dispatch(getAllTypeProduct())
  }

  const MenuFirmProduct = (firmItem) => (
    <div className="filter-menu-firm-item">
      <img src={firmItem.img}></img>
      <div className="filter-menu-firm-item-delete" onClick={() => handleRemoveItem(firmItem)}>
        <span>
          <CloseOutlined></CloseOutlined>
        </span>
      </div>
    </div>
  );


  return (
    <div>
      <div className="filter-menu-firm">
        {List ? List.map((item) => MenuFirmProduct(item)) : ""}
      </div>
    </div>
  );
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
}
