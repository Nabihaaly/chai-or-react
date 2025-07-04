import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Github() {
    const [data,setData] = useState([])
    useEffect(()=> {
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(response => response.json())
        .then((data)=> {
            setData(data)
        })
    },[])
    return ( 
        <div className='text-center text-3xl p-5 bg-gray-400'>
            Github followers: {data.followers}
            <div className='mt-4'>
                <img src={data.avatar_url} alt="" width={200} />
            </div>
        </div>
     );
}

export default Github;