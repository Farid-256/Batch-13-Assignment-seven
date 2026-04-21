import React from 'react';

const Bannar = () => {
    return (
        <section className="bg-gray-50 py-12">

            {/* Text Section */}
            <div className="max-w-6xl mx-auto px-4 text-center space-y-4">

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                    Friends to keep close in your life
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.
                </p>

                <button className="bg-green-700 hover:bg-green-600 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold text-sm sm:text-lg cursor-pointer">
                    + Add a Friend
                </button>
            </div>

            {/* Stats Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-6xl mx-auto px-4'>

                <div className='flex flex-col items-center bg-white p-6 rounded-xl hover:shadow-xl transition'>
                    <h2 className='text-2xl md:text-3xl font-bold'>60</h2>
                    <h5 className='text-gray-500 text-sm mt-1'>Total Friends</h5>
                </div>

                <div className='flex flex-col items-center bg-white p-6 rounded-xl hover:shadow-xl transition'>
                    <h2 className='text-2xl md:text-3xl font-bold'>3</h2>
                    <h5 className='text-gray-500 text-sm mt-1'>On Track</h5>
                </div>

                <div className='flex flex-col items-center bg-white p-6 rounded-xl hover:shadow-xl transition'>
                    <h2 className='text-2xl md:text-3xl font-bold'>6</h2>
                    <h5 className='text-gray-500 text-sm mt-1'>Need Attention</h5>
                </div>

                <div className='flex flex-col items-center bg-white p-6 rounded-xl hover:shadow-xl transition'>
                    <h2 className='text-2xl md:text-3xl font-bold'>12</h2>
                    <h5 className='text-gray-500 text-sm mt-1'>Interactions This Month</h5>
                </div>

            </div>
        </section>
    );
};

export default Bannar;