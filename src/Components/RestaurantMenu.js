import { useState,useEffect } from "react";
import { useParams } from "react-router";
import RestaurantMenuCard from "./RestaurantMenuCard";
import search from './search.png'
import { Link } from "react-router";

export default function RestaurantMenu(){
    const [restData,setRestData]=useState([]);
    let {id}=useParams();//obj return krta hai isliye destructure kr liye
    let [selected,setSelected]=useState(null);

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






