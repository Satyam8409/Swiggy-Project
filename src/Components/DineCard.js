

export default function DineCard({Data}){
    return(
        <>
        {/* The flex-none property in Tailwind CSS (or the flex: none; shorthand in regular CSS) is used 
            to prevent a flex item from growing or shrinking in a flex container. */}
        <div className="w-82 h-92 flex-none bg-white shadow-2xl relative">
            <a target="_blank" href={Data?.cta?.link}>
                <div className="relative">
                    <img className="w-81 h-48 object-cover rounded-t-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+Data?.info?.mediaFiles[0]?.url} />
                    <p className="absolute bottom-2 left-3 text-white text-xl font-bold z-10">{Data.info.name}</p>
                    <p className="absolute bottom-2 right-3 text-white text-xl font-bold z-10">{Data.info.rating.value}</p>
                    <div className="absolute bg-gradient-to-t from-black h-16 bottom-0 left-0 right-0 z-0"></div>
                </div>

                <div className="text-[13px] text-gray-500 font-semibold">
                    <div className="">
                        <p className="absolute left-3 top-50">{Data.info.cuisines[0]} • {Data.info.cuisines[1] }</p>
                        <p className="absolute right-3 top-50">{Data.info.costForTwo}</p>
                    </div>
                    <div className="">
                        <div className="absolute left-3 top-57">{Data.info.locationInfo.formattedAddress}</div>
                        <div className="absolute right-3 top-57">{Data.info.locationInfo.distanceString}</div>
                    </div>
                </div>

                <div className="absolute top-69 left-3 right-3 w-76 h-9 bg-[#1BA672] flex items-center text-white text-[14px] font-bold rounded-lg">
                    <img className="w-6 h-5 absolute left-2 " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"  />
                    <p className="absolute left-8">Flat 20% off on pre-booking</p>
                    <p className="absolute right-2">+ 2 more</p>
                </div>
                <div className="absolute top-81 left-3 right-3 w-76 h-9 bg-[#C8F9E5] flex items-center text-[#1BA672] text-[14px] font-bold rounded-lg">
                    <p className="absolute left-2">Up to 10% off with bank offers</p>
                </div>
                
            </a>
            

            
        </div>
        
        </>
    )
}