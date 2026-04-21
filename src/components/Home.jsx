import React, { Suspense } from 'react';
import FriendsData from './FriendsData';
import Bannar from './Bannar';



const Home = () => {
    const friendsPromise = fetch('friendsData.json')
        .then((res) => res.json())
    return (
        <section className='bg-gray-50'>

            <Suspense fallback={<span className='flex items-center justify-center py-10'><span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner text-error"></span></span>}>
                <FriendsData friendsPromise={friendsPromise}></FriendsData>
            </Suspense>

        </section>
    )
}

export default Home;