import React from "react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
import { WechatOutlined } from "@ant-design/icons";
import { getFirstCharacterUser } from "../../untils";

function AllRepComment(props) {
    const { allrepcomment, showRepComment, id } = props;

    return (
        <div className="all-comment-rep-list">
            <div className="arrow-up"></div>
            {allrepcomment.map((repComment, index) => (
                <div key={index} className="all-comment-rep-list-item">
                    <div className="all-comment-info">
                        {repComment.isAdmin ? (
                            <div className="all-comment-info-name admin">
                                <img
<<<<<<< HEAD
                                    alt=""
                                    src="https://cellphones.com.vn/skin/frontend/default/cpsdesktop/images/media/logo.png"
=======
                                    src="https://cellphones.com.vn/skin/frontend/default/cpsdesktop/images/media/logo.png"
                                    alt="oke"
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                                ></img>
                            </div>
                        ) : (
                            <div className="all-comment-info-name">
                                {getFirstCharacterUser(repComment.nameUser)}
                            </div>
                        )}
                        {repComment.isAdmin ? (
                            <strong>
                                {repComment.nameUser} <span>QTV</span>
                            </strong>
                        ) : (
                            <strong>{repComment.nameUser}</strong>
                        )}
                    </div>

                    <div className="all-comment-content">
                        {repComment.content}
                    </div>

                    <div className="all-comment-more">
<<<<<<< HEAD
                        <span
=======
                        <Link
                            to="#"
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                            className="all-comment-more-chat"
                            onClick={() => showRepComment(id)}
                        >
                            <WechatOutlined style={{ color: "#e11b1e" }} />{" "}
                            <p> Trả lời</p>
<<<<<<< HEAD
                        </span>
=======
                        </Link>
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AllRepComment;
