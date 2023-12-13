import { Outlet } from "react-router-dom";
import Navbar from '../components/ui/Navbar';
import Sidebar from "../components/ui/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="mx-10 my-5">
            <Navbar />
            <div className="flex mt-5">
                <Sidebar />
                <div className="flex-1">
                    {/* Content area */}
                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DashboardLayout;