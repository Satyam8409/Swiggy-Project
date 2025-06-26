import { Link } from "react-router"
import React, { useRef } from 'react';

export default function Header({props}){
    

    return(
        <>
            <header className="bg-[#ff5200] font-serif">  
                {/* logo */}
                <div className="flex justify-around container mx-auto py-8">
                    <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png" alt="" />
                    <div className="text-white text-base font-semibold flex items-center gap-8">
                        <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                        <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner with us</a>
                        {/* <a className="border py-3 px-4 rounded-xl" href="https://www.swiggy.com/corporate/" target="_blank">Get the App</a> */}
                        <button className="border py-3 px-4 rounded-xl hover:cursor-pointer" onClick={props}>Get the App</button>

                        <a className="border py-3 px-8 rounded-xl bg-black border-black"  href="https://www.swiggy.com/corporate/" target="_blank">Sign in</a>
                    </div>
                </div>


                {/* search bar */}
                <div className="pt-16 pb-8 relative">
                    <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
                    <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
                    <div className="max-w-[60%] text-center container mx-auto text-5xl font-semibold text-white w-60%">
                        Order food &amp; groceries. Discover best restaurants. Swiggy it!
                    </div>
                    <div className="max-w-[70%] text-center container mx-auto  mt-10">
                        <input className="bg-white w-[30%] text-xl px-6 py-4 rounded-2xl mr-4" placeholder="Delhi, India"></input>
                        <input className="bg-white w-[50%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for restaurant and items for more"></input>
                    </div>
                </div>

                    {/* dineout/delivery */}
                <div className="max-w-[80%] container mx-auto flex">
                    <Link to="/restaurants">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                    </Link>
                    <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                    </a>
                    <a href="https://www.swiggy.com/dineout">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                    </a>
                    <a href="https://www.swiggy.com/genie">
                        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
                    </a>
                </div>
               

                

                {/* <div className="max-w-[100%] flex justify-center flex-wrap p-4">
                    <img className="h-100 w-80" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" alt="" />
                    <img className="h-100 w-80" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" alt="" />
                    <img className="h-100 w-80" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" alt="" />
                    <img className="h-100 w-80" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png" alt="" />
                </div> */}


                
            </header>
            
        </>
    )
}

/*
import React, { useRef } from 'react';

function App() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={scrollToSection}>Go to Section</button>

      <div ref={sectionRef} style={{ backgroundColor: 'lightgreen', padding: '100px 0' }}>
        <h2>This is the section!</h2>
      </div>
    </div>
  );
}

export default App;
*/




// first div: swiggy ka logo

/*
export default function Header(){


    return (
        <header className="bg-[#ff5200] font-serif">
            <div className="flex justify-between container mx-auto py-8">
                <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <div className=" text-white text-base font-bold flex gap-15 items-center">
                    <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                    <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with Us</a>
                    <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Get The App</a>
                    <a className="border border-black bg-black py-3 px-4 rounded-2xl"target="_blank" href="https://www.swiggy.com/corporate/">Sign in</a>
                </div>
            </div>

            <div className="pt-16 pb-8 relative">
                 <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                 <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
                <div className="max-w-[60%] text-5xl text-white font-bold container mx-auto text-center">
                    Order Food and groceries. Discover best restaurants. Swiggy it!
                </div>
                <div className="max-w-[70%] container mx-auto flex gap-5 mt-10">
                 <input className="bg-white w-[40%] text-xl px-6 py-4 rounded-2xl" placeholder="Delhi, India"></input>
                 <input className="bg-white w-[55%] text-xl px-6 py-4 rounded-2xl" placeholder="Search for restaurant and items for more"></input>
                </div>
            </div>

            <div className="max-w-[80%] container mx-auto flex">
                <a href="https://www.swiggy.com/restaurants">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/genie">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"></img>
                </a>

            </div>
        </header>
    )
}

*/