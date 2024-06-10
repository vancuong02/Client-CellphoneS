import "./Page.css";
import Header from "../components/header/Header";
import SideNav from "../components/User/components/SideNav";

function UserPage({ children }) {
    return (
        <>
            <Header></Header>
            <div className="user-container">
                <div className="user-content">
                    <div className="user-sidenav">
                        <SideNav />
                    </div>
                    <div className="user-children-content">{children}</div>
                </div>
            </div>
        </>
    );
}

export default UserPage;
