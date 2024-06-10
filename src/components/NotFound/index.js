import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <main style={{ marginTop: "90px" }}>
            <img
                width={500}
                alt="not found"
                src="https://cellphones.com.vn/sforum/_next/image?url=https%3A%2F%2Fcdn-static.sforum.vn%2Fsforum%2F_next%2Fstatic%2Fmedia%2F404.a1659360.png&w=640&q=75"
            />
            <h1>Bạn chắc đã nhập đúng đường dẫn chứ?</h1>
            <p>
                Đường dẫn bạn vừa nhập không hợp lệ, vui lòng liên hệ bộ phận hỗ
                trợ hoặc di chuyển về trang chủ.
            </p>
            <Link
                style={{
                    padding: "12px 20px",
                    background: "rgb(223 6 45)",
                    color: "white",
                    borderRadius: "6px",
                }}
                to="/"
            >
                Về trang chủ
            </Link>
        </main>
    );
};

export default NotFound;
