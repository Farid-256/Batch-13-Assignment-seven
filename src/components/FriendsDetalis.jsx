import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import phone from '../assets/call.png'
import text from '../assets/text.png'
import video from '../assets/video.png'
import { ToastContainer, toast } from 'react-toastify'
import { useOutletContext } from 'react-router'

const FriendsDetalis = () => {
    const { id } = useParams()
    const friendsId = parseInt(id)
    const friendsData = useLoaderData()
    const friend = friendsData.find(f => f.id === friendsId)

    const { timeline, setTimeline } = useOutletContext()

    const addToTimeline = (type) => {
        const newEntry = {
            id: Date.now(),
            type: type,
            date: new Date().toLocaleDateString(),
            title: `${type} with ${friend.name}`
        };

        setTimeline([...timeline, newEntry])

        toast.success(`${type} added to timeline`)
    };


    if (!friend) {
        return <h2 className="text-center py-20 text-2xl">Friend not found</h2>
    }

    const statusColor = friend.status === 'overdue' ? 'bg-red-500 text-white' : 'bg-emerald-500 text-white'


    return (
        <div className="px-50 mx-auto py-20 bg-gray-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

  
                <div className="bg-white rounded-3xl shadow-sm p-8 border border-amber-300 space-y-5">
                    <div className="flex justify-center mb-8">
                        <img
                            src={friend.picture}
                            alt={friend.name}
                            className="w-48 h-48 rounded-full object-cover border-8 border-white shadow-xl"
                        />
                    </div>

                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">{friend.name}</h1>
                        <p className="text-gray-500 mb-6">{friend.email}</p>


                        <div className={`inline-block px-6 py-2 rounded-full text-sm font-semibold mb-8 ${statusColor}`}>
                            {friend.status === 'overdue' ? 'Overdue' : 'On Track'}
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                            <p className="text-gray-700 italic">"{friend.bio}"</p>
                        </div>

                        <p className="text-sm text-gray-500">
                            Preferred email: <span className="font-medium text-gray-800">{friend.email}</span>
                        </p>
                    </div>

                    <div className="space-y-3">
                        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-2xl transition flex items-center justify-center gap-2">
                            ⏰ Snooze 2 Weeks
                        </button>
                        <button className="w-full py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-2xl transition flex items-center justify-center gap-2">
                            📁 Archive
                        </button>
                        <button className="w-full py-4 bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-2xl transition flex items-center justify-center gap-2">
                            🗑️ Delete
                        </button>
                    </div>
                </div>


                <div className="space-y-6">


                    <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                            <h3 className="text-2xl font-bold text-gray-800">{friend.days_since_contact}</h3>
                            <p className="text-gray-500 text-sm mt-1">Days Since Contact</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                            <h3 className="text-2xl font-bold text-gray-800">{friend.goal}</h3>
                            <p className="text-gray-500 text-sm mt-1">Goal (Days)</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm text-center">
                            <h3 className="text-2xl font-bold text-gray-800">{friend.next_due_date}</h3>
                            <p className="text-gray-500 text-sm mt-1">Next Due</p>
                        </div>
                    </div>

  
                    <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-semibold">Relationship Goal</h3>
                            <button className="text-emerald-600 text-sm font-medium hover:underline">Edit</button>
                        </div>
                        <p className="text-gray-700">
                            Connect every <span className="font-semibold">{friend.goal} days</span>
                        </p>
                    </div>


                    <div className="bg-white rounded-3xl p-8 shadow-sm">
                        <h3 className="text-xl font-semibold mb-6">Quick Check-In</h3>
                        <div className="grid grid-cols-3 gap-4">

                            <button onClick={() => addToTimeline('Call')} className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl transition cursor-pointer">
                                <img src={phone} alt="" />
                                <span className="text-sm font-medium">Call</span>
                            </button>

                            <button onClick={() => addToTimeline('Text')} className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl transition cursor-pointer">
                                <img src={text} alt="" />
                                <span className="text-sm font-medium">Text</span>
                            </button>

                            <button onClick={() => addToTimeline('Video')} className="flex flex-col items-center gap-2 p-4 bg-gray-50 rounded-2xl transition cursor-pointer">
                                <img src={video} alt="" />
                                <span className="text-sm font-medium">Video</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default FriendsDetalis;