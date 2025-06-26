import {GrocerGridCard} from '../Utils/Grocery';
import GroceryCard from './Grocerycard';

export default function GroceryOption(){
    return(
        <>
            <div className=" w-[80%] container mx-auto mt-25 mb-10">
                <h1 className='text-3xl font-bold mb-6'>Shop groceries on Instamart</h1>
                <div className='flex flex-nowrap overflow-x-auto gap-10 ' >
                    {
                        GrocerGridCard.map((GroceryData)=><GroceryCard key={GroceryData.id} Grocery={GroceryData}></GroceryCard>)
                    }
                </div>
            </div>
            
        </>
    )
}





/*
import {GrocerGridCard} from "../Utils/Grocery"
import Grocerycard from "./GroceryCard"

export default function GroceryOption(){


    return(
         <div className="mt-20 w-[80%] container mx-auto">
            <h1>Shop Groceries on Instamart</h1>
            <div className="w-[80%] container mx-auto flex flex-wrap mt-20 gap-3">
                    {
                        GrocerGridCard.map((foodData)=><Grocerycard key={foodData.id} foodData={foodData}></Grocerycard>)
                    }
                  </div>
        </div>
    )
}
    */