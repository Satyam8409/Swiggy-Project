import { Link } from "react-router"

export default function RestCard({data}){
    return(
        <>
        <div className="w-68 flex flex-none flex-wrap mb-7 transform hover:scale-95 transition duration-200  ">
            <Link to={"/city/delhi/"+data?.info?.id}>
    
            <img className="w-69 h-46 object-cover rounded-2xl pb-2" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+data?.info?.cloudinaryImageId}/>
            <div className="pl-4">
                <p className="text-lg font-bold w-64 truncate">{data.info.name}</p>
                <div className="flex gap-2">
                    <p className="font-semibold">{data.info.avgRating}  • </p>
                    <p className="font-bold">{data.info.sla.slaString}</p>
                </div>
                <div className="text-gray-500 font-semibold h-5">
                    <p className="w-64 truncate ">{data.info.cuisines.join(", ")}</p>
                    <p className="w-64 truncate ">{data.info.locality} , {data.info.areaName}</p>
                </div>
                
            </div>

            </Link>
        </div>
        </>
    )
}

