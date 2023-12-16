import { FaBell, FaEnvelope, FaSearch } from 'react-icons/fa';
import avatar from '../../assets/avatar.png';
import logo from '../../assets/JivaLOGOVartical.png';

const Navbar = () => {
    return (
        <nav className="p-4 flex justify-between items-center">
            <div className="w-[180px] h-[60px] top-[32px] left-[56px] flex items-center">
                <img src={logo} alt="Logo" className="h-14 w-auto" />
            </div>
            <div className="flex items-center">
                <img src={avatar} alt="Avatar" className="w-[px] h-[52px] rounded-full" />
                <div className='w-[504px] h-[80px] ml-4'>
                    <p className="w-[250px] h-[29px] text-2xl text-[#333333] font-semibold">Hello, Admirra John</p>
                    <p className='w-[550px] h-[36px] text-base text-[#6D758F] font-medium mt-3'>Welcome to our portal, we require few details about you 40% your profile is completed. Complete Profile Lorem ipsum dolor sit...</p>
                </div>
            </div>
            <div className="flex items-center space-x-8">
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
                <FaBell className="w-[20px] h-[30px] text-gray-500 cursor-pointer" />

                {/* Message Icon */}
                <FaEnvelope className="w-[20px] h-[30px] cursor-pointer text-gray-500" />
            </div>
        </nav>
    );
};

export default Navbar; 