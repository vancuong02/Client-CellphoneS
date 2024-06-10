<<<<<<< HEAD
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
import { useSelector, useDispatch } from "react-redux";
import {
    getproductById,
    removeProductById,
    saveProduct,
} from "../../../../actions/ProductAction";
import { useHistory, useParams } from "react-router-dom";
import { getAllSelectList } from "../../../../actions/SelectListAction";
<<<<<<< HEAD
import { message } from "antd";

function AdminUpdate() {
    const [image, setImage] = useState("");
    const [activeTypeProduct, setActiveTypeproduct] = useState(undefined);

=======

function AdminUpdate(props) {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

<<<<<<< HEAD
    const { List } = useSelector((state) => state.allTypeProduct);
    const SelectList = useSelector((state) => state.selectList.List);
    const detailProduct = useSelector((state) => state.getProductById.product);
=======
    const [image, setImage] = useState("");
    const detailProduct = useSelector((state) => state.getProductById.product);
    const SelectList = useSelector((state) => state.selectList.List);
    const [activeTypeProduct, setActiveTypeproduct] = useState(undefined);
    const { List } = useSelector((state) => state.allTypeProduct);
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

    useEffect(() => {
        dispatch(getproductById(id));

        return () => {
            dispatch(removeProductById());
        };
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getAllSelectList());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllSelectList());
    }, [dispatch]);

    const handleFileImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmit = async (data) => {
        let formData = new FormData();

<<<<<<< HEAD
        formData.append("_id", id);
        formData.append("image", image);
=======
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("quantity", data.quantity);
        formData.append("salePrice", data.salePrice);
        formData.append(
            "type",
            activeTypeProduct ? activeTypeProduct : detailProduct.type
        );
<<<<<<< HEAD

        await dispatch(saveProduct(formData));

        message.success("Cập nhập sản phẩm thành công");

        history.push("/admin/product");
    };

    const MenuFirmProduct = (item, index) => (
        <div
            key={index}
=======
        formData.append("image", image);
        formData.append("_id", id);

        formData.append("os", data.os);
        formData.append("ram", data.ram);
        formData.append("battery", data.battery);
        formData.append("rom", data.rom);
        formData.append("camera", data.camera);
        formData.append("special", data.special);
        formData.append("design", data.design);
        formData.append("screen", data.screen);

        await dispatch(saveProduct(formData));
        history.push("/admin/product");
    };

    const MenuFirmProduct = (item) => (
        <div
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            className={
                activeTypeProduct
                    ? activeTypeProduct === item.name
                        ? `filter-menu-firm-item active`
                        : "filter-menu-firm-item"
                    : detailProduct.type === item.name
                    ? `filter-menu-firm-item active`
                    : "filter-menu-firm-item"
            }
            onClick={() => HandleFilterProductByType(item.name)}
        >
            <img src={item.img} alt="oke"></img>
        </div>
    );

    const HandleFilterProductByType = (name) => {
        setActiveTypeproduct(name);
    };

    return (
        <div className="admin-create">
            <span>Update Product</span>
            {detailProduct ? (
                <form
                    className="admin-create-product"
                    onSubmit={handleSubmit(onSubmit)}
                    encType="multipart/form-data"
                >
                    <input
                        {...register("name")}
                        placeholder="Name"
                        defaultValue={detailProduct.name}
                    ></input>
                    <input
                        {...register("quantity")}
                        placeholder="Quantity"
                        type="number"
                        defaultValue={detailProduct.quantity}
                    ></input>
                    <input
                        {...register("price")}
                        placeholder="Price"
                        type="number"
                        defaultValue={detailProduct.price}
                    ></input>
                    <input
                        {...register("salePrice")}
                        placeholder="SalePrice"
                        type="number"
                        defaultValue={detailProduct.salePrice}
                    ></input>

                    <div className="filter-menu-firm">
<<<<<<< HEAD
                        {List
                            ? List.map((item, index) =>
                                  MenuFirmProduct(item, index)
                              )
                            : ""}
=======
                        {List ? List.map((item) => MenuFirmProduct(item)) : ""}
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                    </div>

                    {SelectList && SelectList.length > 0
                        ? SelectList.map((item) => (
                              <div className="select-type">
                                  <select
                                      {...register(`${item.property}`)}
                                      defaultValue={
                                          detailProduct[`${item.property}`]
                                      }
                                  >
                                      {item.options.map((x) => (
                                          <option value={x}>{x}</option>
                                      ))}
                                  </select>
                              </div>
                          ))
                        : ""}

                    <input
                        type="file"
                        {...register("image")}
                        onChange={handleFileImageChange}
                    ></input>
                    <button type="submit">Update Product</button>
                </form>
            ) : (
                ""
            )}
        </div>
    );
}

export default AdminUpdate;
