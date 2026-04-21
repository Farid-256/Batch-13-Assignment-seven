import React, { use } from 'react';
import FriendsCard from './FriendsCard';

const FriendsData = ({ friendsPromise }) => {
    const friendsData = use(friendsPromise)

    return (
        <div className=' px-50 py-20'>
            <h3 className='text-4xl pb-10'>My Friends</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    friendsData.map(friend => <FriendsCard key={friend.id} friend={friend}></FriendsCard>)
                }
            </div>
        </div>
    );
};

export default FriendsData;