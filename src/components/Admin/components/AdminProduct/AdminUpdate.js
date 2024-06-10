import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    getproductById,
    removeProductById,
    saveProduct,
} from "../../../../actions/ProductAction";
import { useHistory, useParams } from "react-router-dom";
import { getAllSelectList } from "../../../../actions/SelectListAction";
import { message } from "antd";

function AdminUpdate() {
    const [image, setImage] = useState("");
    const [activeTypeProduct, setActiveTypeproduct] = useState(undefined);

    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const { List } = useSelector((state) => state.allTypeProduct);
    const SelectList = useSelector((state) => state.selectList.List);
    const detailProduct = useSelector((state) => state.getProductById.product);

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

        formData.append("_id", id);
        formData.append("image", image);
        formData.append("name", data.name);
        formData.append("price", data.price);
        formData.append("quantity", data.quantity);
        formData.append("salePrice", data.salePrice);
        formData.append(
            "type",
            activeTypeProduct ? activeTypeProduct : detailProduct.type
        );

        await dispatch(saveProduct(formData));

        message.success("Cập nhập sản phẩm thành công");

        history.push("/admin/product");
    };

    const MenuFirmProduct = (item, index) => (
        <div
            key={index}
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
                        {List
                            ? List.map((item, index) =>
                                  MenuFirmProduct(item, index)
                              )
                            : ""}
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
