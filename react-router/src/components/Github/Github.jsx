import React, { useEffect , useState } from 'react'
import { data, useLoaderData } from 'react-router';


function Message(){
    return(
        <h1>Sorry!!Internal System Error</h1>
    )
}

function Github() {
    const Data = useLoaderData();
    // useEffect(()=>{
    //     const resp = fetch('https://api.github.com/users/aayusregmi')
    //     .then(resp => resp.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // } , [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'> 
      Github followers: {Data.followers}
      <img src={Data.avatar_url} alt="Git picture" width={300} className='rounded-3xl' />
    </div>
  )
}

export default Github
 
export const infoGithub = async () =>{
    
        const resp = await fetch('https://api.github.com/users/aayusregmi')
        const data = await resp.json()
     
     return data ;
    }
   