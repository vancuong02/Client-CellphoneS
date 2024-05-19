import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import {
    editCurrentPage,
    saveProduct,
} from "../../../../actions/ProductAction";
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
    const { register, handleSubmit } = useForm({ defaultValues: {} });
    const dispatch = useDispatch();
    const history = useHistory();

    const [image, setImage] = useState("");
    const { pages } = useSelector((state) => state.allProduct.product);

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
