import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({ friend }) => {

    const statusColors = {
        Overdue: 'bg-red-500 text-white',
        'On-track': 'bg-green-500 text-white',
        'Almost due': 'bg-yellow-400 text-black',
    };

    const statusColor = statusColors[friend.status] || 'bg-gray-400 text-white';

    return (
        <Link to={`/friendsDetails/${friend.id}`}>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center text-center border border-gray-100 cursor-pointer">


                <div className="relative mb-6">
                    <img src={friend.picture} alt={friend.name}
                        className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md" />

                    <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></div>
                </div>


                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    {friend.name}
                </h3>


                <p className="text-gray-500 text-sm mb-5">
                    {friend.days_since_contact}d ago
                </p>


                <div className="flex flex-wrap gap-2 justify-center mb-6">
                    {friend.tags.map((tag, index) => (
                        <span key={index} className="px-4 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-700">
                            {tag.toUpperCase()}
                        </span>
                    ))}
                </div>


                <div className={`px-6 py-2 rounded-full text-sm font-medium ${statusColor}`}>
                    {friend.status === 'Overdue' ? 'Overdue' : friend.status}
                </div>

            </div>
        </Link>
    );
};

export default FriendsCard;