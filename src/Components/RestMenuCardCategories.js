import RestaurantItemCard from "./RestaurantItemCard"
import { useState } from "react"

export default function RestMenuCardCategories({itemAll, foodType}){

    const [isOpen,setIsOpen]=useState(true)
        if(!isOpen){
            return(
                <div className="w-full">
                    <div className="flex justify-between w-full">
                        <h1 className="mt-4 text-lg font-bold">{itemAll?.title}({itemAll?.itemCards?.length})</h1>
                        <button className="text-3xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
                    </div>
                    <div className='w-full mt-5 mb-6 text-gray-300'><hr /></div>
                </div>
            )
        }

    if(foodType=='veg'){
        return(
            <div className="w-full">
                <div>
                    <div className="flex justify-between w-full">
                        <h1 className="mt-4 text-lg font-bold">{itemAll?.title}({itemAll?.itemCards?.filter((vegData)=>'isVeg' in vegData.card.info)?.length})</h1>
                        <button className="text-3xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
                    </div>  
                    <div className='w-27 mt-5 mb-6 text-gray-300'><hr /></div>
                </div>
                <div>
                    {
                    itemAll?.itemCards?.filter((vegData)=>'isVeg' in vegData.card.info)?.map((items)=><RestaurantItemCard key={items?.card?.info?.id} data={items.card.info} ></RestaurantItemCard>)
                    }
                    </div>
            </div>
        )
    }

    if(foodType=='nonVeg'){
        return(
            <div className="w-full">
                <div>
                    <div className="flex justify-between w-full">
                        <h1 className="mt-4 text-lg font-bold">{itemAll?.title}({itemAll?.itemCards?.filter((vegData)=>!('isVeg' in vegData.card.info))?.length})</h1>
                        <button className="text-3xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
                    </div>  
                    <div className='w-27 mt-5 mb-6 text-gray-300'><hr /></div>
                </div>
                <div>
                    {
                    itemAll?.itemCards?.filter((vegData)=>!('isVeg' in vegData.card.info))?.map((items)=><RestaurantItemCard key={items?.card?.info?.id} data={items.card.info} ></RestaurantItemCard>)
                    }
                    </div>
            </div>
        )
    }
    


    return(
        <>
            <div className="w-full">
                <div>
                    <div className="flex justify-between w-full">
                        <h1 className="mt-4 text-lg font-bold">{itemAll?.title}({itemAll?.itemCards?.length})</h1>
                        <button className="text-3xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
                    </div>  
                    <div className='w-27 mt-5 mb-6 text-gray-300'><hr /></div>
                </div>
                <div>
                    {
                    itemAll?.itemCards?.map((items)=><RestaurantItemCard key={items?.card?.info?.id} data={items.card.info} ></RestaurantItemCard>)
                    }
                    </div>
            </div>
            {/* <div className='w-full mb-10 h-5 bg-gray-200 text-gray-300'><hr /></div> */}
        </>
    )
}