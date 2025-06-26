import { useState } from 'react'
import search from './search.png'

export default function Search(){
    const[food,setFood]=useState('');

    return(
        <div className="w-[50%] mx-auto">
            <div className="w-full text-center mt-10 bg-gray-50 p-3 rounded-xl hover:cursor-pointer relative ">
                <input className="w-full text-gray-700 text-lg border-none outline-none focus:ring-0  hover:cursor-pointer relative " onChange={(e)=>setFood(e.target.value)} placeholder="serach for food"></input>
                <img className='h-5 absolute right-2 top-4' src={search} alt="Icon" />
            </div>
        </div>
    )
}