import { useState } from "react";
import RestaurantItemCard from "./RestaurantItemCard"
import RestMenuCardCategories from "./RestMenuCardCategories";

export default function RestaurantMenuCard({itemAll, foodType}){
    const [isOpen,setIsOpen]=useState(true)
    if(!isOpen){
        return(
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <h1 className="mt-4 mb-7 text-2xl font-bold">{itemAll?.title}({itemAll?.itemCards?.length}) </h1>
                    <button className="text-3xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
                </div>
                <div className='w-full mb-10 h-4 bg-gray-200 text-gray-300'><hr /></div>
            </div>
        )
    }
    if (!itemAll) return null;

    if(foodType=='veg'){
        if("categories" in itemAll){
            return(
                <div className="w-full">
                    <div className="flex justify-between w-full">
                        <h1 className="mt-2 mb-7 text-2xl font-bold">{itemAll?.title} </h1>
                        <button className="text-3xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
                    </div>                    
                    <div>   {
                            // itemAll?.categories?.map((data)=><RestaurantMenuCard key={data.title} itemAll={data}></RestaurantMenuCard>)
                            itemAll?.categories?.map((data)=><RestMenuCardCategories key={data.title} itemAll={data} foodType={foodType}></RestMenuCardCategories>)}
                    </div>
                </div>
            )
        }

        return(
        <>
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <h1 className="mt-2 mb-7 text-2xl font-bold">{itemAll?.title}({itemAll?.itemCards?.filter((vegdata)=>'isVeg' in vegdata.card.info)?.length}) </h1>
                    <button className="text-3xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
                </div>                
                <div>
                    {itemAll?.itemCards?.filter((vegdata)=>'isVeg' in vegdata.card.info)?.map((items)=><RestaurantItemCard key={items?.card?.info?.id} data={items.card.info}></RestaurantItemCard>)}
                </div>
            </div>
            <div className='w-full mb-10 h-4 bg-gray-200 text-gray-300'><hr /></div>
        </>
        )
    }
    if(foodType=='nonVeg'){
        if("categories" in itemAll){
            return(
                <div className="w-full">
                    <div className="flex justify-between w-full">
                        <h1 className="mt-2 mb-7 text-2xl font-bold">{itemAll?.title} </h1>
                        <button className="text-3xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
                    </div>                    
                    <div>   {
                            // itemAll?.categories?.map((data)=><RestaurantMenuCard key={data.title} itemAll={data}></RestaurantMenuCard>)
                            itemAll?.categories?.map((data)=><RestMenuCardCategories key={data.title} itemAll={data} foodType={foodType}></RestMenuCardCategories>)}
                    </div>
                </div>
            )
        }

        return(
        <>
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <h1 className="mt-2 mb-7 text-2xl font-bold">{itemAll?.title}({itemAll?.itemCards?.filter((vegdata)=>!('isVeg' in vegdata.card.info))?.length}) </h1>
                    <button className="text-3xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
                </div>                
                <div>
                    {itemAll?.itemCards?.filter((vegdata)=>!('isVeg' in vegdata.card.info))?.map((items)=><RestaurantItemCard key={items?.card?.info?.id} data={items.card.info}></RestaurantItemCard>)}
                </div>
            </div>
            <div className='w-full mb-10 h-4 bg-gray-200 text-gray-300'><hr /></div>
        </>
        )
    }


    //categories wala
    if("categories" in itemAll){
        return(
                <div className="w-full">
                    <div className="flex justify-between w-full">
                        <h1 className="mt-2 mb-7 text-2xl font-bold">{itemAll?.title} </h1>
                        <button className="text-3xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
                    </div>                    
                    <div>   {
                            // itemAll?.categories?.map((data)=><RestaurantMenuCard key={data.title} itemAll={data}></RestaurantMenuCard>)
                            itemAll?.categories?.map((data)=><RestMenuCardCategories key={data.title} itemAll={data}></RestMenuCardCategories>)}
                    </div>
                </div>
        )
    }

    //Top Picks
    if("carousel" in itemAll){
        return(
            <>
            <div className='w-full mt-5 text-gray-300'><hr /></div>
            <div className="w-full mt-3">
                <h1 className="mt-2 mb-7 text-2xl font-bold">{itemAll?.title}</h1>
                <div className="flex flex-nowrap overflow-x-auto gap-2.5 ">
                    {
                        itemAll.carousel.map((dataC)=><RestaurantItemCard key={dataC.bannerId} data={dataC}></RestaurantItemCard>)
                    }
                </div>
            </div>  
            <div className='w-full mb-4 mt-8 h-4 bg-gray-200 text-gray-300'><hr /></div>

            </>
        )
    }    

    return(
        //ALL recommended card data isme phele aayega fir next ALL card data aayega and so on..
        <>
            <div className="w-full">
                <div className="flex justify-between w-full">
                    <h1 className="mt-2 mb-7 text-2xl font-bold">{itemAll?.title}({itemAll?.itemCards?.length}) </h1>
                    <button className="text-3xl" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄':'˅'}</button>
                </div>                
                <div>
                    {itemAll?.itemCards?.map((items)=><RestaurantItemCard key={items?.card?.info?.id} data={items.card.info}></RestaurantItemCard>)}
                </div>
            </div>
            <div className='w-full mb-10 h-4 bg-gray-200 text-gray-300'><hr /></div>
        </>
    )
}