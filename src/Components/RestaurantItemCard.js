// import { ReactComponent as Icon } from './Icon.svg';
import Icon from './Icon.svg';
import { useState } from 'react';
import {addItems,IncrementItems,DecrementItems} from '../Stored/CartSlicer';
import { useDispatch,useSelector } from 'react-redux';

export default function RestaurantItemCard({data}){

    //Top Picks
    if("dish" in data){
        return(
            <>
                <div className='flex flex-none'>
                    <div className='relative'>
                        <img className='w-77 h-79' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/"+data.creativeId} />
                        {/* https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/KoSCB1 */}
                        <p className='absolute bottom-9.5 left-4.5 text-white font-medium'>{"\u20B9"}{data.dish.info.price/100}</p>
                        <button className='absolute bottom-8 right-4.5 px-10 py-1.5 bg-white rounded-lg shadow-md text-[#1BA672] font-bold text-lg'>ADD</button>
                    </div>
                </div>
            </>
        )
    }




    //CART functionality
    // const [count,setCount]= useState(0); //isse trika se ek prbm hia ye apna val loose kr deta hai jaise dusre route pe jate hai //to iske pace pe useSelector se value read kryege
        
    const dispatch=useDispatch();
    const items=useSelector(state=>state.cartslicer.items)
    const element=items.find(item=>item.id==data.id)
    const count=element?element.quantity:0;

    function handleAddItems(){
        // setCount(1);
        dispatch(addItems(data))
    }
    function handleIncItems(){
        // setCount(count+1);
        dispatch(IncrementItems(data));
    }
    function handleDecItems(){
        // setCount(count-1);
        dispatch(DecrementItems(data));
    }

    return(
        //all recommended card ka ek ek card isme aa raha hai
        <>
            <div className="flex justify-between w-full mb-10">
                <div className="w-[70%]">
                    {/* <img className='w-4 h-4 text-[#1BA672] bg-gree' src={swiggyIcon} alt="Swiggy Icon" /> */}
                    <img className='w-4 h-4 text-[#1BA672]' src={Icon} alt="Swiggy Icon" />
                    <p className="text-lg text-gray-700 font-bold">{data.name}</p>
                    <p className="font-semibold mb-1">{"\u20B9"}{(data.defaultPrice?data.defaultPrice/100:data.price/100)}</p>
                    <span className="text-[#1BA672] font-bold text-[13.5px]">{"\u2605 "}{data.ratings.aggregatedRating.rating}</span>
                    <span className="font-semibold text-[13.5px] text-gray-500">({data.ratings.aggregatedRating.ratingCountV2})</span>
                    <p className="truncate-2-lines mt-2 text-[#02060C99] text-[16px] font-semibold">{data.description}</p>
                </div>

                <div className="w-[25%] relative">
                    <img className="w-39 h-36 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+data?.imageId}  />                    {/*                                                       https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks/KoSCB1 */}
                    {
                        count==0?(<button className='absolute top-30 left-4.5 px-10 py-1.5 bg-white rounded-lg shadow-md text-[#1BA672] font-bold text-lg hover:cursor-pointer' onClick={()=>handleAddItems()}>ADD</button>):(
                            <div className='min-w-[120px] absolute top-30 left-4.5 px-5 py-1.5 bg-white rounded-lg shadow-md text-[#1BA672] font-bold text-lg flex justify-between '>
                                <button className='hover:cursor-pointer' onClick={()=>handleDecItems()}>-</button>
                                <span>{count}</span>
                                <button className='hover:cursor-pointer' onClick={()=>handleIncItems()}>+</button>
                            </div>
                        )
                    }
                    
                </div>
            </div>
            <div className='w-full mb-10 text-gray-300'><hr /></div>

        </>
    )
}

/*
  https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg
//                                                                                            FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed
*/       