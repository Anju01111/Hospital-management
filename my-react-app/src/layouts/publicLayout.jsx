import { Outlet } from "react-router-dom"
import Topbar from "../component/pages/topbar";
import Sidebar from "../component/pages/sidebar";

const PublicLayout = () => {
    return (
        <>
            <div className="web-app">
            
                <Outlet/>
    
            </div>
        </>
    )
}

export default PublicLayout;