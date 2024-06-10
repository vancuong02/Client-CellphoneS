import { message } from "antd";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
    editCurrentPage,
    saveProduct,
} from "../../../../actions/ProductAction";
import { getAllSelectList } from "../../../../actions/SelectListAction";
import { getAllTypeProduct } from "../../../../actions/ListTypeProductAction";

message.config({
    top: 20,
    duration: 1,
    maxCount: 1,
});

function AdminCreate() {
    const { register, handleSubmit } = useForm({ defaultValues: {} });
    const dispatch = useDispatch();
    const history = useHistory();

    const [image, setImage] = useState("");
    const [activeTypeProduct, setActiveTypeproduct] = useState("");
    const SelectList = useSelector((state) => state.selectList.List);
    const { pages } = useSelector((state) => state.allProduct.product);
    const { List } = useSelector((state) => state.allTypeProduct);

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
