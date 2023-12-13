import { IoIosSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";

const Sidebar = () => {
    return (

        <div>
            <div className="w-[232px] h-[423px] top-[125px] left-[58px]">
                <div className="[212px] [h-18px] opacity-50 py-[10px] pl-[30px]  gap-[10px]">
                    <h3 className="text-[#686868] text-xs font-medium uppercase">main menu</h3>
                </div>
                <div className="flex [232px] [h-56px] py-[16px] pl-[30px]  gap-[24px] bg-[#F2F2F2]">
                    <MdDashboard className="w-[18px] h-[18px] mt-[3px] ml-[3px]" />
                    <p className="text-[#6D758F] text-base font-semibold">Dashboard</p>
                </div>
                <div className="flex [232px] [h-56px] py-[16px] pl-[30px]  gap-[24px]">
                    <MdDashboard className="w-[18px] h-[18px] mt-[3px] ml-[3px]" />
                    <p className="text-[#6D758F] text-base font-medium">Creating Job</p>
                </div>
                <div className="flex [232px] [h-56px] py-[16px] pl-[30px]  gap-[24px]">
                    <MdDashboard className="w-[18px] h-[18px] mt-[3px] ml-[3px]" />
                    <p className="text-[#6D758F] text-base font-medium">Talent Search</p>
                </div>
                <div className="flex [232px] [h-56px] py-[16px] pl-[30px]  gap-[24px]">
                    <MdDashboard className="w-[18px] h-[18px] mt-[3px] ml-[3px]" />
                    <p className="text-[#6D758F] text-base font-normal">Applying Job Via Hiring Jiva</p>
                </div>
                <div className="flex [232px] [h-56px] py-[16px] pl-[30px]  gap-[24px]">
                    <MdDashboard className="w-[18px] h-[18px] mt-[3px] ml-[3px]" />
                    <p className="text-[#6D758F] text-base font-normal">Manage Profile</p>
                </div>
                <div className="flex [232px] [h-56px] py-[16px] pl-[30px]  gap-[24px]">
                    <MdDashboard className="w-[18px] h-[18px] mt-[3px] ml-[3px]" />
                    <p className="text-[#6D758F] text-base font-normal">Job Status / Job Operations</p>
                </div>
            </div>
            <div className="w-[232px] h-[150px] top-[532px] left-[58px]">
                <div className="[232px] [h-18px] opacity-50 py-[10px] pl-[30px]  gap-[10px]">
                    <h3 className="text-[#686868] text-xs font-medium uppercase">other</h3>
                </div>
                <div className="flex [232px] [h-56px] py-[16px] pl-[30px]  gap-[24px]">
                    <IoIosSettings className="w-[18px] h-[18px] mt-[3px] ml-[3px]" />
                    <p className="text-[#6D758F] text-base font-normal">User Management</p>
                </div>
                <div className="flex [232px] [h-56px] py-[16px] pl-[30px]  gap-[24px]">
                    <IoIosSettings className="w-[18px] h-[18px] mt-[3px] ml-[3px]" />
                    <p className="text-[#6D758F] text-base font-normal">My Profile/Settings</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;