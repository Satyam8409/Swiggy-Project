import { useSelector } from "react-redux"

export default function Checkout(){
    const order= useSelector(count=>count?.cartslicer?.items)
    console.log(order);
    return(
        <>
        
        <div className="w-full">
            <div className="w-[30%] flex justify-center flex-wrap container mx-auto text-2xl  ">
            {
                order?.map(data=><div><img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+data.imageId}></img> <h2>{data.name}  {data.quantity}</h2></div>)
            }
            </div>
        </div>
        
        
        </>
    )
}