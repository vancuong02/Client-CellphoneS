import React, { useState } from "react";
import { useSelector } from "react-redux";

<<<<<<< HEAD
function BlogContent(props) {
    const detailProduct = useSelector((state) => state.getProductById.product);
=======
function BlogContent() {
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
    const [showMoreBlog, setShowMoreBlog] = useState(false);
    const [styleBlog, setStyleBlog] = useState({
        height: "500px",
    });
<<<<<<< HEAD
=======
    const detailProduct = useSelector((state) => state.getProductById.product);
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41

    return (
        <section id="blog">
            {detailProduct.blog ? (
                <div className="blog">
                    <div className="blog-content" style={styleBlog}>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: detailProduct.blog,
                            }}
                        />

                        {showMoreBlog === false ? (
                            <div
                                className="blog-showmore"
                                onClick={() => {
                                    setStyleBlog({ height: "100%" });
                                    setShowMoreBlog(!showMoreBlog);
                                }}
                            >
                                Xem Thêm đánh giá
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ) : (
                ""
            )}
        </section>
    );
}

export default BlogContent;
