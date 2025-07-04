import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(()=> {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //     .then(response => response.json())
    //     .then((data)=> {
    //         setData(data)
    //     })
    // },[])

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

export const githubApiInfo = async ()=>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    return response.json();
}