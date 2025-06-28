import { useState,useEffect } from "react";
import { useParams } from "react-router";
import RestaurantMenuCard from "./RestaurantMenuCard";
import search from './search.png'
import { Link } from "react-router";

export default function RestaurantMenu(){
    const [restData,setRestData]=useState([]);
    let {id}=useParams();//obj return krta hai isliye destructure kr liye
    let [selected,setSelected]=useState(null);
/*
    useEffect(()=>{
        async function fetchData(){
            // const proxyServer="https://thingproxy.freeboard.io/fetch/";
            const proxyServer = "https://cors-anywhere.herokuapp.com/"; 
            const swiggyAPI=`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`
            //               https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=10208
            //               https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=16866
            const response=await fetch(proxyServer+swiggyAPI);
            // const response = await fetch(
            //     "https://api.allorigins.win/raw?url=" + encodeURIComponent(swiggyAPI)
            // );
            const data=await response.json();
            const tempData=data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData=tempData?.filter((data)=>'title' in data?.card?.card);
            setRestData(filterData);
        }
        fetchData()
    },[id])
*/

useEffect(() => {
  async function fetchData() {
    const response = await fetch(`https://swiggy-backend-rosy.vercel.app/api/menu?lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`);
    // const response = await fetch(`http://localhost:5000/api/menu?lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`);
    const data = await response.json();
    const tempData =data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const filterData = tempData?.filter(
      (data) => "title" in data?.card?.card
    );
    setRestData(filterData);
  }
  fetchData();
}, [id]);


/*wrong logic bcz useEffect can't return JSX
    useEffect(()=>{
        if(selected=='veg'){
            const vegData=restData?.filter((data)=>data?.card?.card?.itemCards?.some((data)=>'isVeg' in data?.card?.info));// restData?.filter((data)=>TRUE or FALSE)
            setAllVegData(vegData);
            return(
                <>
                <div className="w-[50%] mx-auto flex flex-wrap">
                    <div className="w-full mt-10 flex gap-4">
                        <button className={`border p-1 border-gray-300 rounded-2xl w-20 hover:cursor-pointer ${selected=='veg'?'bg-green-400':'bg-white'}`} onClick={()=>setSelected(selected=='veg'?null:'veg')}>Veg</button>
                        <button className={`border p-1 border-gray-300 rounded-2xl w-20 hover:cursor-pointer ${selected=='nonVeg'?'bg-red-400':"bg-white"}`} onClick={()=>setSelected(selected=='nonVeg'?null:'nonVeg')}>NonVeg</button>
                    </div>

                    {allVegData?.map((menuItems)=><RestaurantMenuCard key={menuItems?.card?.card?.title} itemAll={menuItems?.card?.card}></RestaurantMenuCard>)}
                </div>
                </>
            )
        }
        if(selected=='nonVeg'){
            const nonvegData=restData?.filter((data)=>data?.card?.card?.itemCards?.some((data)=>!('isVeg' in data?.card?.info)));// restData?.filter((data)=>TRUE or FALSE)
            setAllVegData(nonvegData);
            return(
                <>
                <div className="w-[50%] mx-auto flex flex-wrap">
                    <div className="w-full mt-10 flex gap-4">
                        <button className={`border p-1 border-gray-300 rounded-2xl w-20 hover:cursor-pointer ${selected=='veg'?'bg-green-400':'bg-white'}`} onClick={()=>setSelected(selected=='veg'?null:'veg')}>Veg</button>
                        <button className={`border p-1 border-gray-300 rounded-2xl w-20 hover:cursor-pointer ${selected=='nonVeg'?'bg-red-400':"bg-white"}`} onClick={()=>setSelected(selected=='nonVeg'?null:'nonVeg')}>NonVeg</button>
                    </div>

                    {allVegData?.map((menuItems)=><RestaurantMenuCard key={menuItems?.card?.card?.title} itemAll={menuItems?.card?.card}></RestaurantMenuCard>)}
                </div>
                </>
            )
        }   
    },[selected])
*/    
    
       
        
    return(
        //all card jisme title exist krta hai o isme hai 
        <>
            <div className="w-[50%] mx-auto flex flex-wrap">
                <div className="w-full text-center mt-20 bg-gray-100 p-3 rounded-xl hover:cursor-pointer relative">
                    <Link to={`/city/delhi/${id}/search`}>
                        <div>
                            <span className="text-gray-500 font-bold ">Search for dishes</span>
                            <img className='h-5 absolute right-2 top-4' src={search} alt="Icon" />
                        </div>
                    </Link>    
                </div>
                
                <div className="w-full mt-10 flex gap-4">
                    <button className={`border p-1 border-gray-300 rounded-2xl w-20 hover:cursor-pointer ${selected=='veg'?'bg-green-400':'bg-white'}`} onClick={()=>setSelected(selected=='veg'?null:'veg')}>Veg</button>
                    <button className={`border p-1 border-gray-300 rounded-2xl w-20 hover:cursor-pointer ${selected=='nonVeg'?'bg-red-400':"bg-white"}`} onClick={()=>setSelected(selected=='nonVeg'?null:'nonVeg')}>NonVeg</button>
                </div>
                <div className='w-full mt-7 mb-3 text-gray-300'><hr /></div>

                {restData.map((menuItems)=><RestaurantMenuCard key={menuItems?.card?.card?.title} itemAll={menuItems?.card?.card} foodType={selected}></RestaurantMenuCard>)}
            </div>
        </>
    )
}











/*.some((data)=>data.isVeg==1)
 .some()
    Returns: true or false
    Use when: You just want to check if at least one item passes a condition.
    Efficient: Stops early once it finds a match (short-circuits).
    [1, 2, 3].some(n => n > 2)   // true
    [1, 2, 3].some(n => n > 5)   // false

.filter()
    Returns: Always an array
    Even when false: It returns an empty array, which is truthy in JS (⚠️ can cause bugs).
    Use when: You want a list of matching elements.
    [1, 2, 3].filter(n => n > 2)   // [3]
    [1, 2, 3].filter(n => n > 5)   // []

*/


/*
`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&
restaurantId=${id}`
*/