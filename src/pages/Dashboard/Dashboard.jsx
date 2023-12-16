import ApplicantsCart from "../../components/ui/ApplicantsCart";
import CandidateTable from "../../components/ui/CandidateTable";

const Dashboard = () => {
    return (
        <div>
            <div className="flex">
                <div className="flex flex-1 space-x-4">
                    <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden shadow-md p-6">
                        <div className="font-bold text-lg mb-2 text-gray-800">Available Positions</div>
                        <p className="text-gray-800 text-2xl font-bold">67</p>
                    </div>

                    <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden shadow-md p-6">
                        <div className="font-bold text-lg mb-2 text-gray-800">Job Open</div>
                        <p className="text-gray-800 text-2xl font-bold">67</p>
                        <p className="text-gray-600 text-sm mt-2">4 Active hiring</p>
                    </div>

                    <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden shadow-md p-6">
                        <div className="font-bold text-lg mb-2 text-gray-800">Lorem Ipsum</div>
                        <p className="text-gray-800 text-2xl font-bold">67</p>
                        <p className="text-gray-600 text-sm mt-2">4 Active hiring</p>
                    </div>
                </div>

                <div className="flex flex-col w-4/12 ml-8">
                    <div className="max-w-2xl bg-white rounded-lg overflow-hidden shadow-md p-6 mb-4">
                        <div className="font-bold text-lg mb-2 text-gray-800">Recent Activity</div>
                    </div>
                </div>
            </div>
            <CandidateTable/>
        </div>
    );
};

export default Dashboard;
