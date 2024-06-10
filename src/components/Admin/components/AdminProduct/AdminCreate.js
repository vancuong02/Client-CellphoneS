<<<<<<< HEAD
import { message } from "antd";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
=======
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
import { useSelector, useDispatch } from "react-redux";

import {
    editCurrentPage,
    saveProduct,
} from "../../../../actions/ProductAction";
<<<<<<< HEAD
import { getAllSelectList } from "../../../../actions/SelectListAction";
import { getAllTypeProduct } from "../../../../actions/ListTypeProductAction";

message.config({
    top: 20,
    duration: 1,
    maxCount: 1,
});

function AdminCreate() {
=======
import { useHistory } from "react-router-dom";
import { getAllSelectList } from "../../../../actions/SelectListAction";
import { getAllTypeProduct } from "../../../../actions/ListTypeProductAction";

const typeOptions = [
    "iphone",
    "samsung",
    "xiaomi",
    "oppo",
    "huawei",
    "apple watch",
];

function AdminCreate(props) {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    const { register, handleSubmit } = useForm({ defaultValues: {} });
    const dispatch = useDispatch();
    const history = useHistory();

    const [image, setImage] = useState("");
<<<<<<< HEAD
    const [activeTypeProduct, setActiveTypeproduct] = useState("");
    const SelectList = useSelector((state) => state.selectList.List);
    const { pages } = useSelector((state) => state.allProduct.product);
    const { List } = useSelector((state) => state.allTypeProduct);
=======
    const { pages } = useSelector((state) => state.allProduct.product);
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

    useEffect(() => {
        dispatch(getAllSelectList());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getAllTypeProduct());
    }, [dispatch]);

    const handleFileImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const onSubmit = async (data) => {
<<<<<<< HEAD
        if (
            !data.name ||
            !data.price ||
            !data.quantity ||
            !data.salePrice ||
            !image ||
            !activeTypeProduct
        ) {
            message.warning("Hãy thông đầy đủ thông tin");
            return;
        } else {
            let formData = new FormData();

            formData.append("name", data.name);
            formData.append("price", data.price);
            formData.append("quantity", data.quantity);
            formData.append("salePrice", data.salePrice);
            formData.append("type", activeTypeProduct);
            formData.append("image", image);

            await dispatch(saveProduct(formData));
            await dispatch(editCurrentPage(pages));
            message.success("Thêm sản phẩm thành công");
            history.push("/admin/product");
        }
    };

    const MenuFirmProduct = (item, index) => (
        <div
            key={index}
            className={
                activeTypeProduct === item.name
                    ? `filter-menu-firm-item active`
                    : "filter-menu-firm-item"
            }
            onClick={() => HandleFilterProductByType(item.name)}
        >
            <img src={item.img} alt=""></img>
        </div>
    );

    const HandleFilterProductByType = (name) => {
        setActiveTypeproduct(name);
=======
        let formData = new FormData();

        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("quantity", data.quantity);
        formData.append("salePrice", data.salePrice);
        formData.append("type", data.type);
        formData.append("image", image);

        formData.append("os", data.os);
        formData.append("ram", data.ram);
        formData.append("battery", data.battery);
        formData.append("rom", data.rom);
        formData.append("camera", data.camera);
        formData.append("special", data.special);
        formData.append("design", data.design);
        formData.append("screen", data.screen);

        await dispatch(saveProduct(formData));
        await dispatch(editCurrentPage(pages));
        history.push("/admin/product");
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    };

    return (
        <div className="admin-create">
            <span>Create Product</span>
            <form
                className="admin-create-product"
                onSubmit={handleSubmit(onSubmit)}
                encType="multipart/form-data"
            >
                <input {...register("name")} placeholder="Name"></input>
                <input
                    {...register("quantity")}
                    placeholder="Quantity"
                    type="number"
                ></input>
                <input
                    {...register("price")}
                    placeholder="Price"
                    type="number"
                ></input>
                <input
                    {...register("salePrice")}
                    placeholder="SalePrice"
                    type="number"
                ></input>
<<<<<<< HEAD

                <div className="filter-menu-firm">
                    {List
                        ? List.map((item, index) =>
                              MenuFirmProduct(item, index)
                          )
                        : ""}
                </div>

                {SelectList && SelectList.length > 0
                    ? SelectList.map((item) => (
                          <div className="select-type">
                              <select {...register(`${item.property}`)}>
                                  <option>{item.name}</option>
                                  {item.options.map((x) => (
                                      <option value={x}>{x}</option>
                                  ))}
                              </select>
                          </div>
                      ))
                    : ""}

=======
                <select
                    {...register("type")}
                    defaultValue=""
                    placeholder="Choose type..."
                >
                    <option value="">Choose type...</option>
                    {typeOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                <input
                    type="file"
                    {...register("image")}
                    onChange={handleFileImageChange}
                ></input>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AdminCreate;
