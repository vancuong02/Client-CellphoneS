import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {
    GetAllDistrict,
    GetAllProvince,
    GetAllWard,
    OrderInfo,
} from "../../actions/OrderAction";
import "./Order.css";
import Payment from "./Payment";
<<<<<<< HEAD
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { formatPrice } from "../../untils";

function Order() {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const userInfo = useSelector((state) => state.userSignin.userInfo);
=======

function Order(props) {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    const allProvince = useSelector((state) => state.address.province);
    const allDistrict = useSelector((state) => state.address.district);
    const allWard = useSelector((state) => state.address.ward);

    const [listProvince, setListProvince] = useState(false);
    const [listDistrict, setListDistrict] = useState(false);
    const [listWard, setListWard] = useState(false);

    const [chooseProvince, setChooseProvince] = useState({
        name: "Hồ Chí Minh",
    });
    const [chooseDistrict, setChooseDistrict] = useState({
        name: "Quận / Huyện",
    });
    const [chooseWard, setChooseWard] = useState({ name: "Phường / Xã" });

    const handleListProvince = (e) => {
        e.preventDefault();
        setListProvince(!listProvince);
    };
    const handleListDistrict = (e) => {
        e.preventDefault();
        setListDistrict(!listDistrict);
    };
    const handleListWard = (e) => {
        e.preventDefault();
        setListWard(!listWard);
    };

<<<<<<< HEAD
=======
    const cartItems = useSelector((state) => state.cart.cartItems);
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.qty * item.salePrice,
        0
    );
<<<<<<< HEAD

    const onSubmit = (data) => {
=======
    const userInfo = useSelector((state) => state.userSignin.userInfo);

    const onSubmit = async (data) => {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        if (!data) {
            alert("Bạn hãy nhập đầy đủ thông tin");
            return;
        }
        const Order = {
            to_ward_code: chooseWard.id,
            to_district_id: chooseDistrict.id,

            orderItems: [...cartItems],
            shippingAddress: {
                ...data,
                province: chooseProvince.name,
                district: chooseDistrict.name,
                ward: chooseWard.name,
            },
            totalPrice: totalPrice,
            name: userInfo.name,
            user: userInfo,
        };

<<<<<<< HEAD
        dispatch(OrderInfo(Order));
=======
        await dispatch(OrderInfo(Order));
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    };

    useEffect(() => {
        dispatch(GetAllProvince());
    }, [dispatch]);

    useEffect(() => {
        dispatch(GetAllDistrict(202));
    }, [dispatch]);

    const handleSelectProvince = (name, id) => {
        setChooseProvince({ name, id });
        setListProvince(!listProvince);
        dispatch(GetAllDistrict(id));
    };

    const handleSelectDistrict = (name, id) => {
        setChooseDistrict({ name, id });
        setListDistrict(!listDistrict);
        dispatch(GetAllWard(id));
    };

    const handleSelectWard = (name, id) => {
        setChooseWard({ name, id });
        setListWard(!listWard);
    };

    return (
<<<<<<< HEAD
        <section id="orElement">
            <div className="order">
                <div className="payment-header">
                    <Link to="/cart" className="back-cart">
                        <i className="fa-solid fa-arrow-left"></i>
                    </Link>
                    <h2 className="payment-title">Thanh toán</h2>
                </div>
                <div className="order-content">
                    <form
                        className="order-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <div className="customer">
                            <h4>THÔNG TIN KHÁCH HÀNG </h4>
                            <div className="form-customer">
                                <input
                                    placeholder="Họ và tên"
                                    {...register("name")}
                                    required
                                ></input>
                                <input
                                    placeholder="Số điện thoại"
                                    {...register("phone")}
                                    required
                                ></input>
                            </div>
                        </div>

                        <div className="address">
                            <h4>CHỌN ĐỊA CHỈ</h4>
                            <div className="address-form">
                                <div className="province">
                                    {allProvince ? (
                                        <button
                                            className=""
                                            onClick={(e) =>
                                                handleListProvince(e)
                                            }
                                        >
                                            {chooseProvince.name}
                                        </button>
                                    ) : (
                                        <button
                                            className=""
                                            onClick={(e) =>
                                                handleListProvince(e)
                                            }
                                        >
                                            {chooseProvince.name}
                                        </button>
                                    )}
                                    {listProvince ? (
                                        <div className="select">
                                            <div className="select-list">
                                                <aside>
                                                    {allProvince
                                                        ? allProvince.data.map(
                                                              (item, index) => (
                                                                  <span
                                                                      key={
                                                                          index
                                                                      }
                                                                      onClick={() =>
                                                                          handleSelectProvince(
                                                                              item.ProvinceName,
                                                                              item.ProvinceID
                                                                          )
                                                                      }
                                                                  >
                                                                      {
                                                                          item.ProvinceName
                                                                      }
                                                                  </span>
                                                              )
                                                          )
                                                        : ""}
                                                </aside>
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="province">
                                    {chooseProvince ? (
                                        <button
                                            className=""
                                            onClick={(e) =>
                                                handleListDistrict(e)
                                            }
                                        >
                                            {chooseDistrict.name}
                                        </button>
                                    ) : (
                                        <button
                                            className=""
                                            onClick={(e) =>
                                                handleListProvince(e)
                                            }
                                            disabled="disabled"
                                        >
                                            {chooseDistrict.name}
                                        </button>
                                    )}
                                    {listDistrict ? (
                                        <div className="select">
                                            <div className="select-list">
                                                <aside>
                                                    {allDistrict
                                                        ? allDistrict.data.map(
                                                              (item, index) => (
                                                                  <span
                                                                      key={
                                                                          index
                                                                      }
                                                                      onClick={() =>
                                                                          handleSelectDistrict(
                                                                              item.DistrictName,
                                                                              item.DistrictID
                                                                          )
                                                                      }
                                                                  >
                                                                      {
                                                                          item.DistrictName
                                                                      }
                                                                  </span>
                                                              )
                                                          )
                                                        : ""}
                                                </aside>
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="province">
                                    {chooseWard ? (
                                        <button
                                            className=""
                                            onClick={(e) => handleListWard(e)}
                                        >
                                            {chooseWard.name}
                                        </button>
                                    ) : (
                                        <button
                                            className=""
                                            onClick={(e) => handleListWard(e)}
                                            disabled
                                        >
                                            {chooseWard.name}
                                        </button>
                                    )}
                                    {listWard ? (
                                        <div className="select">
                                            <div className="select-list">
                                                <aside>
                                                    {allWard &&
                                                    allWard.data !== null
                                                        ? allWard.data.map(
                                                              (item, index) => (
                                                                  <span
                                                                      key={
                                                                          index
                                                                      }
                                                                      onClick={() =>
                                                                          handleSelectWard(
                                                                              item.WardName,
                                                                              item.WardCode
                                                                          )
                                                                      }
                                                                  >
                                                                      {
                                                                          item.WardName
                                                                      }
                                                                  </span>
                                                              )
                                                          )
                                                        : ""}
                                                </aside>
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                                <div className="province">
                                    <input
                                        placeholder="Số nhà, đường ..."
                                        {...register("more")}
                                        required
                                    ></input>
                                </div>
                            </div>
                        </div>
                        <Payment></Payment>
                    </form>
                    <div className="order-overview">
                        <div className="subtotal">
                            <span>Số lượng</span>
                            <span>{cartItems.length}</span>
                        </div>
                        <div className="checkout-separate"></div>
                        <div className="subtotal">
                            <span>Tổng tiền</span>
                            <span>₫{formatPrice(totalPrice)}</span>
                        </div>
                    </div>
                </div>
=======
        <section id="order">
            <div className="order-content">
                <form className="order-page" onSubmit={handleSubmit(onSubmit)}>
                    <div className="customer">
                        <h4>THÔNG TIN KHÁCH HÀNG </h4>
                        <div className="form-customer">
                            <input
                                placeholder="Họ và tên"
                                {...register("name")}
                                required
                            ></input>
                            <input
                                placeholder="Số điện thoại"
                                {...register("phone")}
                                required
                            ></input>
                        </div>
                    </div>

                    <div className="address">
                        <h4>CHỌN ĐỊA CHỈ</h4>
                        <div className="address-form">
                            <div className="province">
                                {allProvince ? (
                                    <button
                                        className=""
                                        onClick={(e) => handleListProvince(e)}
                                    >
                                        {chooseProvince.name}
                                    </button>
                                ) : (
                                    <button
                                        className=""
                                        onClick={(e) => handleListProvince(e)}
                                    >
                                        {chooseProvince.name}
                                    </button>
                                )}
                                {listProvince ? (
                                    <div className="select">
                                        <div className="select-list">
                                            <aside>
                                                {allProvince
                                                    ? allProvince.data.map(
                                                          (item) => (
                                                              <span
                                                                  onClick={() =>
                                                                      handleSelectProvince(
                                                                          item.ProvinceName,
                                                                          item.ProvinceID
                                                                      )
                                                                  }
                                                              >
                                                                  {
                                                                      item.ProvinceName
                                                                  }
                                                              </span>
                                                          )
                                                      )
                                                    : ""}
                                            </aside>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="province">
                                {chooseProvince ? (
                                    <button
                                        className=""
                                        onClick={(e) => handleListDistrict(e)}
                                    >
                                        {chooseDistrict.name}
                                    </button>
                                ) : (
                                    <button
                                        className=""
                                        onClick={(e) => handleListProvince(e)}
                                        disabled="disabled"
                                    >
                                        {chooseDistrict.name}
                                    </button>
                                )}
                                {listDistrict ? (
                                    <div className="select">
                                        <div className="select-list">
                                            <aside>
                                                {allDistrict
                                                    ? allDistrict.data.map(
                                                          (item) => (
                                                              <span
                                                                  onClick={() =>
                                                                      handleSelectDistrict(
                                                                          item.DistrictName,
                                                                          item.DistrictID
                                                                      )
                                                                  }
                                                              >
                                                                  {
                                                                      item.DistrictName
                                                                  }
                                                              </span>
                                                          )
                                                      )
                                                    : ""}
                                            </aside>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="province">
                                {chooseWard ? (
                                    <button
                                        className=""
                                        onClick={(e) => handleListWard(e)}
                                    >
                                        {chooseWard.name}
                                    </button>
                                ) : (
                                    <button
                                        className=""
                                        onClick={(e) => handleListWard(e)}
                                        disabled
                                    >
                                        {chooseWard.name}
                                    </button>
                                )}
                                {listWard ? (
                                    <div className="select">
                                        <div className="select-list">
                                            <aside>
                                                {allWard &&
                                                allWard.data !== null
                                                    ? allWard.data.map(
                                                          (item) => (
                                                              <span
                                                                  onClick={() =>
                                                                      handleSelectWard(
                                                                          item.WardName,
                                                                          item.WardCode
                                                                      )
                                                                  }
                                                              >
                                                                  {
                                                                      item.WardName
                                                                  }
                                                              </span>
                                                          )
                                                      )
                                                    : ""}
                                            </aside>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="province">
                                <input
                                    placeholder="Số nhà, đường ..."
                                    {...register("more")}
                                    required
                                ></input>
                            </div>
                        </div>
                    </div>
                    <Payment></Payment>
                </form>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
            </div>
        </section>
    );
}

export default Order;
