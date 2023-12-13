import img from '../../assets/JivaLOGO.jpg';

const CandidateTable = () => {
    return (
        <div className="overflow-x-auto bg-[#F7F6F9] p-5">
            <div className='flex justify-between my-5'>
                <p className="ml-5 text-lg font-medium">Interview Schedule</p>
                <button className='bg-[#FFFFFF]'><span className='text-sm font-medium p-2'>Today</span></button>
            </div>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-r">Candidate Name</th>
                        <th className="py-2 px-4 border-r">Post Name</th>
                        <th className="py-2 px-4 border-r">Designation</th>
                        <th className="py-2 px-4 border-r">Hiring Manager</th>
                        <th className="py-2 px-4 border-r">Time</th>
                        <th className="py-2 px-4 border-r">Project</th>
                        <th className="py-2 px-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add table rows with data here */}
                    <tr className="border-t">
                        <td className="py-2 px-4 border-r flex items-center">
                            <img
                                src={img}
                                alt="Candidate Avatar"
                                className="h-8 w-8 rounded-full mr-2"
                            />
                            John Doe
                        </td>
                        <td className="py-2 px-4 border-r">Software Engineer</td>
                        <td className="py-2 px-4 border-r">Senior Developer</td>
                        <td className="py-2 px-4 border-r">Jane Smith</td>
                        <td className="py-2 px-4 border-r">2023-01-01 12:00 PM</td>
                        <td className="py-2 px-4 border-r">Project X</td>
                        <td className="py-2 px-4">Approved</td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-2 px-4 border-r flex items-center">
                            <img
                                src={img}
                                alt="Candidate Avatar"
                                className="h-8 w-8 rounded-full mr-2"
                            />
                            John Doe
                        </td>
                        <td className="py-2 px-4 border-r">Software Engineer</td>
                        <td className="py-2 px-4 border-r">Senior Developer</td>
                        <td className="py-2 px-4 border-r">Jane Smith</td>
                        <td className="py-2 px-4 border-r">2023-01-01 12:00 PM</td>
                        <td className="py-2 px-4 border-r">Project X</td>
                        <td className="py-2 px-4">Approved</td>
                    </tr>
                    <tr className="border-t">
                        <td className="py-2 px-4 border-r flex items-center">
                            <img
                                src={img}
                                alt="Candidate Avatar"
                                className="h-8 w-8 rounded-full mr-2"
                            />
                            John Doe
                        </td>
                        <td className="py-2 px-4 border-r">Software Engineer</td>
                        <td className="py-2 px-4 border-r">Senior Developer</td>
                        <td className="py-2 px-4 border-r">Jane Smith</td>
                        <td className="py-2 px-4 border-r">2023-01-01 12:00 PM</td>
                        <td className="py-2 px-4 border-r">Project X</td>
                        <td className="py-2 px-4">Approved</td>
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );
};

export default CandidateTable;