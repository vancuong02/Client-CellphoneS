import { useDispatch } from "react-redux";
import { format, parseISO } from "date-fns";
import Highlighter from "react-highlight-words";
import { Button, Input, Modal, Space, Table } from "antd";
import { useRef, useState } from "react";
import {
    CheckCircleTwoTone,
    EyeOutlined,
    SearchOutlined,
} from "@ant-design/icons";

import {
    ShippingOrder,
    deleteOrder,
    getAllOrder,
} from "../../../../actions/OrderAction";
import { createOrderGhn } from "../../../../actions/GhnAction";
import { formatPrice } from "../../../../untils";

function ListOrder({ orders }) {
    const dispatch = useDispatch();
    const searchInput = useRef(null);
    const [searchText, setSearchText] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchedColumn, setSearchedColumn] = useState("");
    const [selectedOrder, setSelectedOrder] = useState(null);

    // Search
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1677ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    // Modal
    const showModal = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Handle
    const handleDeleteOrder = async (order) => {
        await dispatch(deleteOrder(order.id));
        dispatch(getAllOrder());
    };

    const handleShippingOrder = async (order) => {
        await dispatch(createOrderGhn(order.id));
        await dispatch(ShippingOrder(order.id));
        dispatch(getAllOrder());
    };

    // Data Table
    const data = orders.map((item, index) => ({
        id: item._id,
        key: index + 1,
        status: item.status,
        orderItems: item.orderItems,
        cancelOrder: item.cancelOrder,
        paymentMethod: item.paymentMethod,
        paymentResult: item.paymentResult,
        customerInfo: item.shippingAddress,
        totalPrice: formatPrice(item.totalPrice),
        createAt: format(parseISO(item.createdAt), "yyyy-MM-dd"),
    }));

    const columns = [
        {
            title: "STT",
            dataIndex: "key",
            key: "key",
            ...getColumnSearchProps("key"),
        },
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            ...getColumnSearchProps("id"),
        },
        {
            title: "Order date",
            dataIndex: "createAt",
            key: "createAt",
            ...getColumnSearchProps("createAt"),
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            ...getColumnSearchProps("status"),
        },
        {
            title: "Payment methods",
            dataIndex: "paymentMethod",
            key: "paymentMethod",
            ...getColumnSearchProps("paymentMethod"),
        },
        {
            title: "Verify request",
            key: "verifyRequest",
            render: (_, record) => (
                <Space size="middle">
                    <div className="order-button">
                        {record.status === "pendding" &&
                            record.cancelOrder === false && (
                                <button
                                    type="button"
                                    className="shipping"
                                    onClick={() => handleShippingOrder(record)}
                                >
                                    Xác nhận đơn hàng
                                </button>
                            )}
                        {record.status === "shipping" && (
                            <CheckCircleTwoTone twoToneColor="#52c41a" />
                        )}

                        {record.status === "pendding" &&
                        record.cancelOrder === true ? (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <span> Khách yêu cầu hủy đơn </span>
                                <button
                                    type="button"
                                    className="shipping"
                                    onClick={() => handleDeleteOrder(record)}
                                >
                                    Hủy đơn
                                </button>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </Space>
            ),
        },
        {
            title: "Detail",
            key: "detail",
            render: (_, record) => (
                <Space
                    onClick={() => showModal(record)}
                    size="middle"
                    style={{ cursor: "pointer" }}
                >
                    <EyeOutlined />
                </Space>
            ),
        },
    ];

    return (
        <div className="all-order">
            <Table columns={columns} dataSource={data} />
            <Modal
                title="Order Details"
                visible={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
            >
                <div className="info-customer-wrapper">
                    <div className="info-customer-order">
                        <div className="info-customer-title">
                            THÔNG TIN KHÁCH HÀNG
                        </div>
                        <p>
                            <strong>Tên khách hàng:</strong>{" "}
                            {selectedOrder?.customerInfo.name}
                        </p>
                        <p>
                            <strong>Số điện thoại:</strong>{" "}
                            {selectedOrder?.customerInfo.phone}
                        </p>
                        <p>
                            <strong>Địa chỉ giao hàng:</strong>{" "}
                            {`${selectedOrder?.customerInfo.detail}, ${selectedOrder?.customerInfo.ward}, ${selectedOrder?.customerInfo.district}, ${selectedOrder?.customerInfo.province}`}
                        </p>
                    </div>
                    <div>
                        <div className="info-customer-title">
                            THÔNG TIN ĐƠN HÀNG
                        </div>
                        <p>
                            <strong>Mã đơn hàng:</strong> {selectedOrder?.id}
                        </p>
                        <table className="table-order-list">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Sale Price</th>
                                    <th>Quantity</th>
                                </tr>
                            </thead>
                            <tbody className="table-tbody-order">
                                {selectedOrder?.orderItems.map((item) => (
                                    <tr key={item._id}>
                                        <td>
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                width={80}
                                            />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{formatPrice(item.salePrice)}</td>
                                        <td>{item.qty}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="customer-payment-action">
                            <p className="customer-total-price">
                                <strong>Tổng tiền:</strong>{" "}
                                {selectedOrder?.totalPrice} VND
                            </p>
                            {selectedOrder?.paymentResult && (
                                <p className="paid-customer">
                                    Đã thanh toán:{" "}
                                    {format(
                                        parseISO(
                                            selectedOrder?.paymentResult
                                                ?.update_time
                                        ),
                                        "yyyy-MM-dd"
                                    )}
                                    {"    "}
                                    <CheckCircleTwoTone twoToneColor="#52c41a" />
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ListOrder;
