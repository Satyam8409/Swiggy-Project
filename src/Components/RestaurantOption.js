import { useEffect, useState } from "react"
import RestCard from "./RestCard";
import Shimmer from "./Simmer";

export default function Restaurant(){
    const [RestData,setRestData]=useState([]);
    useEffect(()=>{
        async function fetchData(){
            const proxyServer="https://thingproxy.freeboard.io/fetch/"; //CORS
            const swiggyAPI="https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"
            const response=await fetch(proxyServer+swiggyAPI);
            const data=await response.json();
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData()
    },[])

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










/*
https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&
restaurantId=${id}
https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.29040&lng=70.79150&
restaurantId=223427&catalog_qa=undefined&submitAction=ENTER
*/

/*CORS(Cross-Origin Resource Sharing) error
    -access to fetch at 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true'from origin 'http://localhost:1234' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    -This happens when your frontend (running at http://localhost:1234) tries to make a request to a backend 
    (like https://www.swiggy.com) that doesn't allow cross-origin requests from your domain.

 Why This Happens:
    -Swiggy’s API doesn't include the Access-Control-Allow-Origin header in its response, so browsers block your request for security reasons.

 Solved by using 
    -another server which get data for u and include allow in header this server do all this
    -Proxy server "https://cors-anywhere.herokuapp.com/"; 
    */