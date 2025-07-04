import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userId} = useParams()  // ✅ Destructure the param
    return ( 
            <div className='text-center text-3xl p-5 bg-gray-400'>
                User: {userId}
            </div>
     );
}

export default User