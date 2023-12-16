import img from '../../assets/JivaLOGO.jpg';
import avatar from '../../assets/Ellipse 9.svg';

const CandidateTable = () => {
    return (
        <div className="overflow-x-auto bg-gray-100 p-5 rounded-lg">
            <div className='flex justify-between my-5'>
                <p className="ml-5 text-lg font-bold">Interview Schedule</p>
                <select name="" id="" className='bg-white px-4 rounded font-bold'>
                    <option value="today">Today</option>
                </select>
            </div>
            <table className="min-w-full border-collapse border-none border-gray-800">
                <thead>
                    <tr className='odd:bg-white odd:dark:bg-gray-200 even:bg-gray-50 even:dark:bg-gray-100 dark:border-gray-300'>
                        <th className="py-2 px-4 ">Candidate Name</th>
                        <th className="py-2 px-4">Post Name</th>
                        <th className="py-2 px-4">Designation</th>
                        <th className="py-2 px-4">Hiring Manager</th>
                        <th className="py-2 px-4">Time</th>
                        <th className="py-2 px-4">Project</th>
                        <th className="py-2 px-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add table rows with data here */}
                    <tr className="border-t odd:bg-white odd:dark:bg-gray-200 even:bg-gray-50 even:dark:bg-gray-0 dark:border-gray-300">
                        <td className="py-6 px-4 flex items-center">
                            <img
                                src={avatar}
                                alt="Candidate Avatar"
                                className="h-8 w-8 rounded-full mr-2"
                            />
                            John Doe
                        </td>
                        <td className="py-6 px-4">Software Engineer</td>
                        <td className="py-6 px-4">Senior Developer</td>
                        <td className="py-6 px-4">Jane Smith</td>
                        <td className="py-6 px-4">2023-01-01 12:00 PM</td>
                        <td className="py-6 px-4">Project X</td>
                        <td className="py-6 px-4">
                            <div className='border text-sm px-2 border-gray-800 p-1 rounded-lg'>
                                In Progress
                            </div>
                        </td>
                    </tr>
                    <tr className="border-t odd:bg-white odd:dark:bg-gray-200 even:bg-gray-50 even:dark:bg-gray-0 dark:border-gray-300">
                        <td className="py-6 px-4 flex items-center">
                            <img
                                src={avatar}
                                alt="Candidate Avatar"
                                className="h-8 w-8 rounded-full mr-2"
                            />
                            John Doe
                        </td>
                        <td className="py-6 px-4">Software Engineer</td>
                        <td className="py-6 px-4">Senior Developer</td>
                        <td className="py-6 px-4">Jane Smith</td>
                        <td className="py-6 px-4">2023-01-01 12:00 PM</td>
                        <td className="py-6 px-4">Project X</td>
                        <td className="py-6 px-4">
                            <div className='border text-sm px-2 border-gray-800 p-1 rounded-lg'>
                                In Progress
                            </div>
                        </td>
                    </tr>
                    <tr className="border-t odd:bg-white odd:dark:bg-gray-200 even:bg-gray-50 even:dark:bg-gray-0 dark:border-gray-300">
                        <td className="py-6 px-4 flex items-center">
                            <img
                                src={avatar}
                                alt="Candidate Avatar"
                                className="h-8 w-8 rounded-full mr-2"
                            />
                            John Doe
                        </td>
                        <td className="py-6 px-4">Software Engineer</td>
                        <td className="py-6 px-4">Senior Developer</td>
                        <td className="py-6 px-4">Jane Smith</td>
                        <td className="py-6 px-4">2023-01-01 12:00 PM</td>
                        <td className="py-6 px-4">Project X</td>
                        <td className="py-6 px-4">
                            <div className='border text-sm px-2 border-gray-800 p-1 rounded-lg'>
                                In Progress
                            </div>
                        </td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default CandidateTable;