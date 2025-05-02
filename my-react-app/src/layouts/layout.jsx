import { Outlet } from "react-router-dom"
import Topbar from "../component/pages/topbar";
import Sidebar from "../component/pages/sidebar";

const Layout = () => {
    return (
        <>
            <div className="web-app">
                <Topbar/>
                <Outlet/>
                <Sidebar/>
            </div>
        </>
    )
}

export default Layout;