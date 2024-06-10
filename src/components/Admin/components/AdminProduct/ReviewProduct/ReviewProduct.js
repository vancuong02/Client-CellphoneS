import React, { useEffect, useRef } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { Editor } from "@tinymce/tinymce-react";
import {
    BlogProduct,
    getproductById,
} from "../../../../../actions/ProductAction";
import { useParams } from "react-router-dom";
import "./ReviewProduct.css";

export default function ReviewProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const editorRef = useRef(null);

    const detailProduct = useSelector((state) => state.getProductById.product);

    const addBlog = async () => {
        if (editorRef.current) {
            const blog = String(editorRef.current.getContent());
            if (blog === "") {
                message.warning("Hãy nhập miêu tả sản phẩm");
            } else {
                console.log(blog);
                await dispatch(BlogProduct(id, { blog }));
                message.success("Thêm miêu tả thành công");
            }
        }
    };

    useEffect(() => {
        dispatch(getproductById(id));
    }, [dispatch, id]);

    return (
        <section id="review">
            <div className="review">
                <span className="review-title">Review </span>

                <div className="review-content">
                    {detailProduct ? (
                        <Editor
                            apiKey="cmlltcvw2ydrtenwdgwdwqqrvsje6foe8t5xtyaq6lo2ufki"
                            language="vi"
                            onInit={(evt, editor) =>
                                (editorRef.current = editor)
                            }
                            initialValue={detailProduct.blog}
                            init={{
                                height: 500,
                                menubar:
                                    "file edit view insert format tools table tc help",
                                plugins: [
                                    "advlist autolink lists link image charmap print preview anchor",
                                    "searchreplace visualblocks code fullscreen",
                                    "insertdatetime media table paste code help wordcount",
                                ],
                                toolbar:
                                    "undo redo | formatselect | " +
                                    "bold italic backcolor | alignleft aligncenter " +
                                    "alignright alignjustify | bullist numlist outdent indent | " +
                                    "removeformat | help",
                                content_style:
                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                            }}
                        />
                    ) : (
                        ""
                    )}
                    <button onClick={addBlog}>Add Review Product</button>
                </div>
            </div>
        </section>
    );
=======
import "./ReviewProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import {
  BlogProduct,
  getproductById,
} from "../../../../../actions/ProductAction";
import { useParams } from "react-router-dom";

export default function ReviewProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const editorRef = useRef(null);

  const detailProduct = useSelector((state) => state.getProductById.product);

  const log = () => {
    if (editorRef.current) {
      const blogContent = String(editorRef.current.getContent());
      dispatch(BlogProduct(id, { blogContent }, () => {
        alert('Add review product success');
      }));
    }
  };

  useEffect(() => {
    dispatch(getproductById(id));
  }, [dispatch, id]);

  return (
    <section id="review">
      <div className="review">
        <span className="review-title">Review </span>

        <div className="review-content">
          {detailProduct ? (
            <Editor
              apiKey="cmlltcvw2ydrtenwdgwdwqqrvsje6foe8t5xtyaq6lo2ufki"
              language='vi'
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={detailProduct.blog}
              init={{
                height: 500,
                menubar: "file edit view insert format tools table tc help",
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          ) : (
            ""
          )}
          <button onClick={log}>Add Review Product</button>
        </div>
      </div>
    </section>
  );
>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
}
