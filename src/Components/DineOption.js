import { dineoutRestaurants } from "../Utils/DineData";
import DineCard from "./DineCard";
// import React from "react";

export default function DineOption(){
    return(
        <>
        <div className="w-[80%] container mx-auto mt-20 mb-25" >
            <p className="text-3xl font-bold mb-9">Discover best restaurants on Dineout</p>
            <div className="flex flex-nowrap overflow-x-auto scrollbar-hide gap-5 ">
                {dineoutRestaurants.map((dineData)=><DineCard key={dineData?.info?.id} Data={dineData}></DineCard>)}
            </div>
        </div>
        
        </>
    )
}