
export default function GroceryCard({Grocery}){
    return(
        <>
            <div className="flex-none">
                <a href={Grocery?.action?.link}>
                    <img className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+Grocery.imageId} />
                    <h2 className="w-33 text-xl font-bold flex flex-wrap text-center text-gray-600 ">{Grocery?.action?.text}</h2>
                </a>
            </div>
        </>
    )
}



