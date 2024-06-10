<<<<<<< HEAD
import { Col } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { WechatOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import AllRepComment from "./AllRepComment";
import { getFirstCharacterUser } from "../../untils";
import { repCommentProduct } from "../../actions/ProductAction";

function AllComment({ allComment }) {
    const [repValue, setRepValue] = useState("");
    const [repCmt, setRepCmt] = useState({ key: "", status: false });

    const { id } = useParams();
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userSignin);

    const showRepComment = (id) => {
        if (userInfo) {
            setRepCmt({ key: id, status: !repCmt.status });
        } else {
            alert("Đăng nhập để bình luận");
        }
    };

    const handleRepComment = () => {
=======
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Col } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
    WechatOutlined,
    PushpinOutlined,
    LockOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
    pinCommentProduct,
    repCommentProduct,
} from "../../actions/ProductAction";
import AllRepComment from "./AllRepComment";
import { getFirstCharacterUser } from "../../untils";

function AllComment(props) {
    const { id } = useParams();
    const { allComment } = props;
    const dispatch = useDispatch();
    const [repCmt, setRepCmt] = useState({ key: "", status: false });
    const { userInfo } = useSelector((state) => state.userSignin);
    const [repValue, setRepValue] = useState("");
    const showRepComment = (id) => {
        setRepCmt({ key: id, status: !repCmt.status });
    };
    const handleRepComment = (value) => {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
        if (userInfo) {
            const comment = {
                idComment: repCmt.key,
                isAdmin: userInfo.isAdmin,
                content: repValue,
                nameUser: userInfo.name,
            };
            dispatch(repCommentProduct(id, comment));
            setRepValue("");
            setRepCmt({ key: "", status: false });
<<<<<<< HEAD
        } else {
            setRepValue("");
            alert("Đăng nhập để bình luận");
        }
=======
        } else alert("Vui lòng đănd nhập");
    };

    const PinComment = (comment) => {
        const UpdateComment = { ...comment, status: "pin" };
        dispatch(pinCommentProduct(id, UpdateComment));
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    };

    return (
        <div className="all-comment">
            {allComment?.map((comment, index) => (
                <div key={index}>
                    <Col
                        span={18}
                        style={{ marginTop: "1rem" }}
                        xs={24}
                        sm={24}
                        md={18}
                    >
                        <div className="all-comment-info">
                            <div style={{ display: "flex" }}>
<<<<<<< HEAD
                                {comment?.isAdmin ? (
                                    <div className="all-comment-info-name admin">
                                        <img
                                            alt=""
                                            src="https://cellphones.com.vn/skin/frontend/default/cpsdesktop/images/media/logo.png"
                                        ></img>
=======
                                {comment.isAdmin ? (
                                    <div className="all-comment-info-name admin">
                                        <img src="https://cellphones.com.vn/skin/frontend/default/cpsdesktop/images/media/logo.png"></img>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                                    </div>
                                ) : (
                                    <div className="all-comment-info-name">
                                        {getFirstCharacterUser(comment.author)}
                                    </div>
                                )}
                                {comment.isAdmin ? (
                                    <strong>
                                        {comment.author} <span>QTV</span>
                                    </strong>
                                ) : (
                                    <strong>{comment.author}</strong>
                                )}
                            </div>
<<<<<<< HEAD
=======

                            {userInfo.isAdmin ? (
                                <div className="comment-status">
                                    <div
                                        className="comment-status-pin"
                                        onClick={() => PinComment(comment)}
                                    >
                                        {comment.status === "pin" ? (
                                            <LockOutlined></LockOutlined>
                                        ) : (
                                            <PushpinOutlined></PushpinOutlined>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="comment-status">
                                    <div className="comment-status-pin">
                                        {comment.status === "pin" ? (
                                            <PushpinOutlined></PushpinOutlined>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                            )}
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                        </div>
                        <div className="all-comment-content">
                            {comment.content}
                        </div>
                        <div className="all-comment-more">
<<<<<<< HEAD
                            <div
=======
                            <a
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                                className="all-comment-more-chat"
                                onClick={() => showRepComment(comment._id)}
                            >
                                <WechatOutlined style={{ color: "#e11b1e" }} />{" "}
                                <p> Trả lời</p>
<<<<<<< HEAD
                            </div>
=======
                            </a>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                        </div>
                        {comment.replies.length > 0 ? (
                            <AllRepComment
                                allrepcomment={comment.replies}
                                showRepComment={showRepComment}
                                id={comment._id}
                            ></AllRepComment>
                        ) : (
                            ""
                        )}
                    </Col>
                    {repCmt.status === true && repCmt.key === comment._id ? (
                        <Col
                            span={18}
                            xs={24}
                            md={18}
                            align="start"
                            style={{
                                alignItems: "center",
                                marginTop: "1rem",
                                marginBottom: "1rem",
                            }}
                        >
                            <div
                                className="comment-area"
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <textarea
                                    placeholder="Xin mời để lại câu hỏi, CellphoneS sẽ trả lời trong 1h từ 8h - 22h mỗi ngày."
                                    rows={10}
                                    cols={3}
                                    vaule={repValue}
                                    onChange={(e) =>
                                        setRepValue(e.target.value)
                                    }
                                ></textarea>
                            </div>

                            <div className="comment-send">
                                <button onClick={() => handleRepComment()}>
                                    Trả lời
                                </button>
                            </div>
                        </Col>
                    ) : (
                        ""
                    )}
                </div>
            ))}
        </div>
    );
}

export default AllComment;
