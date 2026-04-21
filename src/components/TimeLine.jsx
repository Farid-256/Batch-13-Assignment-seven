import React, { useState } from 'react';
import { useOutletContext } from 'react-router';
import { FaPhone, FaComment, FaVideo, FaSortAmountDown } from 'react-icons/fa';

const TimeLine = () => {

    const { timeline } = useOutletContext();

    const [activeFilter, setActiveFilter] = useState('all');

    // 📅 Date format
    const formatDate = (date) => {
        return new Date(date).toLocaleString('en-BD', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    // 🔽 Sort newest first
    const sortedData = [...timeline].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    // 🔍 Filter
    const filteredData = sortedData.filter(item => {
        if (activeFilter === 'all') return true;
        return item.type.toLowerCase() === activeFilter;
    });

    // 🎯 Icon
    const getIcon = (type) => {
        if (type === 'Call') return <FaPhone className="text-green-500 text-3xl" />;
        if (type === 'Text') return <FaComment className="text-blue-500 text-3xl" />;
        if (type === 'Video') return <FaVideo className="text-purple-500 text-3xl" />;
    };

    return (
        <div className="p-6 max-w-6xl mx-auto">

            {/* Heading */}
            <h1 className="text-4xl text-purple-500 font-bold mb-8 flex items-center gap-3">
                <FaSortAmountDown /> Activity Timeline
            </h1>

            {/* Filter */}
            <div className="mb-10">
                <select
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                    className="px-5 py-3 border rounded-xl shadow-sm">
                    <option value="all">All Activities ({timeline.length})</option>
                    <option value="call">Calls</option>
                    <option value="text">Messages</option>
                    <option value="video">Video Calls</option>
                </select>
            </div>

            {/* Timeline Items */}
            <div className="space-y-6 border border-amber-300 rounded-xl">
                {filteredData.length > 0 ? (
                    filteredData.map(item => (
                        <div
                            key={item.id}
                            className="bg-white p-6 flex items-center gap-4 rounded-2xl shadow-lg hover:shadow-2xl transition"
                        >

                            {/* Icon */}
                            {getIcon(item.type)}

                            {/* Info */}
                            <div className="flex-1">
                                <h3 className="font-bold text-xl">{item.title}</h3>
                                <p className="text-gray-500 text-sm">
                                    {formatDate(item.date)}
                                </p>
                            </div>

                            {/* Type Badge */}
                            <span className={`px-4 py-1 rounded-full text-sm font-medium
                                ${item.type === 'Call' && 'bg-green-100 text-green-700'}
                                ${item.type === 'Text' && 'bg-blue-100 text-blue-700'}
                                ${item.type === 'Video' && 'bg-purple-100 text-purple-700'}
                            `}>
                                {item.type}
                            </span>

                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center py-20 text-xl">
                        No activities found
                    </p>
                )}
            </div>
        </div>
    );
};

export default TimeLine;