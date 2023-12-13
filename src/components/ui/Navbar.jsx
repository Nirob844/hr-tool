import { FaBell, FaEnvelope, FaSearch } from 'react-icons/fa';
import avatar from '../../assets/JivaLOGO.jpg';
import logo from '../../assets/JivaLOGOVartical.jpg';

const Navbar = () => {
    return (
        <nav className="bg-white p-4 flex justify-between items-center shadow-md">
            <div className="w-[173px] h-[60px] top-[32px] left-[56px] flex items-center">
                <img src={logo} alt="Logo" className="h-8 w-auto" />
            </div>
            <div className="flex items-center">
                <img src={avatar} alt="Avatar" className="w-[px] h-[48px] rounded-full" />
                <div className='w-[504px] h-[80px]'>
                    <p className="w-[228px] h-[29px] text-2xl text-[#333333] font-semibold">Hello, Admirra John</p>
                    <p className='w-[504px] h-[36px] text-base text-[#6D758F] font-medium'>Welcome to our portal, we require few details about you 40% your profile is completed. Complete Profile Lorem ipsum dolor sit...</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-[316px] h[44px] py-2.5 px-4 bg-gray-200 text-black rounded focus:outline-none focus:ring focus:border-blue-300"
                    />
                    <FaSearch className="w-[24px] h-[24px] absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                {/* Notification Icon */}
                <FaBell className="w-[30px] h-[30px] text-2xl cursor-pointer" />

                {/* Message Icon */}
                <FaEnvelope className="w-[30px] h-[30px] text-2xl cursor-pointer" />
            </div>
        </nav>
    );
};

export default Navbar; 