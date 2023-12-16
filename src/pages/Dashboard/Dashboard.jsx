import ApplicantsCart from "../../components/ui/ApplicantsCart";
import CandidateTable from "../../components/ui/CandidateTable";
import {HiOutlineDotsHorizontal} from "react-icons/hi";

const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                <div className="flex flex-1 space-x-4">
                    <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden shadow-md p-6 h-40">
                        <div className="font-bold text-lg mb-2 text-gray-800">Available Positions</div>
                        <p className="text-gray-800 text-3xl font-bold">67</p>
                    </div>

                    <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden shadow-md p-6 h-40">
                        <div className="font-bold text-lg mb-2 text-gray-800">Job Open</div>
                        <p className="text-gray-800 text-3xl font-bold">67</p>
                        <p className="text-gray-600 text-sm mt-2">4 Active hiring</p>
                    </div>

                    <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden shadow-md p-6 h-40">
                        <div className="font-bold text-lg mb-2 text-gray-800">Lorem Ipsum</div>
                        <p className="text-gray-800 text-3xl font-bold">67</p>
                        <p className="text-gray-600 text-sm mt-2">4 Department</p>
                    </div>
                </div>

                <div className="flex flex-col w-4/12 ml-8">
                    <div className="max-w-2xl bg-gray-700 rounded-t-lg overflow-hidden shadow-md p-3">
                        <div className="font-bold text-lg text-white">Recent Activity</div>
                    </div>
                    <div className="max-w-2xl bg-gray-600 rounded-b-lg overflow-hidden shadow-md p-4 mb-2">
                        <p className="text-gray-200 text-sm">10.40 AM, Fri 10 Sept 2021</p>
                        <div className="font-bold text-lg text-white mt-2">You Posted a New Job</div>
                        <p className="text-gray-200 text-sm mt-2 w-10/12">Kindly check the requirements and terms of work and make sure everything is right.</p>
                        <div className="mt-4 flex items-center">
                            <p className="text-gray-200 text-sm">Today you made 12 Activities</p>
                            <button className="ml-4 px-4 py-2 bg-gray-100 text-gray-800 rounded">See All Activity</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="flex flex-1 space-x-4">
                    <div className="flex-1 -mt-16 bg-white rounded-lg overflow-hidden shadow-md p-6 h-48">
                        <div className="font-bold text-lg mb-2 text-gray-800">Total Candidate</div>
                        <p className="text-gray-800 text-3xl font-bold">67</p>
                        <div className="mt-2 flex items-center">
                            <div>
                                <p className="text-gray-600 text-sm mt-2">120 Male</p>
                                <p className="text-gray-600 text-sm mt-2">124 Female</p>
                            </div>
                            <button className="ml-auto bg-gray-300 text-black px-2 py-1 rounded text-sm">+2% Past Month</button>
                        </div>
                    </div>

                    <div className="flex-1 -mt-16 bg-white rounded-lg overflow-hidden shadow-md p-6 h-48">
                        <div className="font-bold text-lg mb-2 text-gray-800">Total Candidate</div>
                        <p className="text-gray-800 text-3xl font-bold">67</p>
                        <div className="mt-2 flex items-center">
                            <div>
                                <p className="text-gray-600 text-sm mt-2">120 Male</p>
                                <p className="text-gray-600 text-sm mt-2">124 Female</p>
                            </div>
                            <button className="ml-auto bg-gray-300 text-black px-2 py-1 rounded text-sm">+2% Past Month</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-4/12 ml-8">
                    <div className="max-w-2xl bg-white rounded-t-lg overflow-hidden shadow-md p-4 border border-gray-300">
                        <div className="mt-2 flex items-center">
                            <div>
                                <div className="text-xl text-black">Upcoming Schedule</div>
                            </div>
                            <select name="" id="" className="text-sm ml-auto bg-white rounded border border-gray-400 p-1">
                                <option value="">Today, 13 Sep 2021</option>
                            </select>
                        </div>
                        <p className="text-sm text-gray-700 mt-6">Priority</p>
                        <div className="bg-gray-200 p-4 rounded-lg mt-3">
                            <div className="flex items-center">
                                <div>
                                    <p className="text-md text-gray-700">Review Candidate Applications</p>
                                    <p className="text-sm text-gray-600 mt-1">Today, 11:30</p>
                                </div>
                                <div className="ml-auto">
                                    <HiOutlineDotsHorizontal className="text-gray-40700"/>
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700 mt-6">Other</p>
                        <div className="bg-gray-200 p-4 rounded-lg mt-3">
                            <div className="flex items-center">
                                <div>
                                    <p className="text-md text-gray-700">Review Candidate Applications</p>
                                    <p className="text-sm text-gray-600 mt-1">Today, 11:30</p>
                                </div>
                                <div className="ml-auto">
                                    <HiOutlineDotsHorizontal className="text-gray-40700"/>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg mt-3">
                            <div className="flex items-center">
                                <div>
                                    <p className="text-md text-gray-700">Review Candidate Applications</p>
                                    <p className="text-sm text-gray-600 mt-1">Today, 11:30</p>
                                </div>
                                <div className="ml-auto">
                                    <HiOutlineDotsHorizontal className="text-gray-40700"/>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="max-w-2xl text-center bg-white rounded-b-lg overflow-hidden border border-gray-300 shadow-md p-2">
                        <div className=" text-lg text-black">Create a New Schedule</div>
                    </div>
                </div>
            </div>

            <div className="flex">

                <div className="flex flex-1 space-x-4 -mt-80">
                    <div className="flex-1">
                        <div className="max-w-2xl bg-white rounded-t-lg overflow-hidden shadow-md p-4 border border-gray-300">
                            <div className="mt-2 flex items-center">
                                <div>
                                    <div className="text-xl text-black">Announcement</div>
                                </div>
                                <select name="" id="" className="text-sm ml-auto bg-white rounded border border-gray-400 p-1">
                                    <option value="">Today, 13 Sep 2021</option>
                                </select>
                            </div>
                            <div className="bg-gray-200 p-2 rounded-lg mt-3">
                                <div className="flex items-center">
                                    <div>
                                        <p className="text-md text-gray-700">Review Candidate Applications</p>
                                        <p className="text-sm text-gray-600 mt-1">Today, 11:30</p>
                                    </div>
                                    <div className="ml-auto">
                                        <HiOutlineDotsHorizontal className="text-gray-40700"/>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-200 p-2 rounded-lg mt-3">
                                <div className="flex items-center">
                                    <div>
                                        <p className="text-md text-gray-700">Review Candidate Applications</p>
                                        <p className="text-sm text-gray-600 mt-1">Today, 11:30</p>
                                    </div>
                                    <div className="ml-auto">
                                        <HiOutlineDotsHorizontal className="text-gray-40700"/>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-200 p-2 rounded-lg mt-3">
                                <div className="flex items-center">
                                    <div>
                                        <p className="text-md text-gray-700">Review Candidate Applications</p>
                                        <p className="text-sm text-gray-600 mt-1">Today, 11:30</p>
                                    </div>
                                    <div className="ml-auto">
                                        <HiOutlineDotsHorizontal className="text-gray-40700"/>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="max-w-2xl text-center bg-white rounded-b-lg overflow-hidden border border-gray-300 shadow-md p-2">
                            <div className="text-md text-black">See All Anouncement</div>
                        </div>
                    </div>
                </div>
            </div>

            <CandidateTable/>
            <ApplicantsCart/>
        </div>
    );
};

export default Dashboard;
