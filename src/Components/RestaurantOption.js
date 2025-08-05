import { useEffect, useState } from "react"
import RestCard from "./RestCard";
import Shimmer from "./Simmer";

export default function Restaurant(){
    const [RestData,setRestData]=useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://swiggy-backend-rosy.vercel.app/api/restaurants?lat=28.7040592&lng=77.10249019999999");
            // const response = await fetch(`http://localhost:5000/api/restaurants?lat=28.7040592&lng=77.10249019999999`);
            const data = await response.json();
            setRestData(
              data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
        }
        fetchData();
    }, []);


    //shimmer effect
    if(RestData?.length==0){
        return(
            <>
                {/* <h1 className="text-9xl font-extrabold ">Data is loading please wait</h1> */}
                <h1 className="w-[77%] mx-auto text-2xl font-bold mb-2 mt-10">Restaurants with online food delivery in Rajkot</h1>
                <Shimmer/>
            </>
        )
    }
    
    return(
        <>
        <div className="w-[82%] mx-auto mt-10 mb-10 ml-44  ">
            <h1 className="mx-auto text-2xl font-bold mb-4">Restaurants with online food delivery in Rajkot</h1>
            <div className="mx-auto flex flex-wrap gap-7 ">
            {
                RestData?.map((restInfo) => (<RestCard key={restInfo?.info?.id} data={restInfo} />))
            }
            </div>
        </div>
        
        
        </>
    )
}
