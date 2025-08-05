export default function FoodCard({FoodData}){
    return(
        <>
            <a href={FoodData?.action?.link}>
                <img className="w-36 h-45 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+FoodData?.imageId} />
            </a>
        
        </>
    )
}

