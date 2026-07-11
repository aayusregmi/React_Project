import React from 'react'
import { useLoaderData } from 'react-router'

const Github2 = () => {
  let Data = useLoaderData();
  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'> 
      Github followers: {Data.followers}
      <img src={Data.avatar_url} alt="Git picture" width={300} className='rounded-3xl' />
    </div>
    </>
  )
}

export default Github2

export const githubinfo = async () =>{
    const resp = await fetch('https://api.github.com/users/aayusregmi')
    const data =  await resp.json()
   
    return data;
}