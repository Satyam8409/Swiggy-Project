import Header from "./Header"
import FoodOption from "./FoodOption"
import GroceryOption from "./GroceryOption"
import DineOption from "./DineOption"
import GetApp from "./GetApp"
import React,{ useRef } from "react"; 


export default function Home(){
    const sectionRef = useRef(null);

    const scrollToSection = () => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return(
        <>
            <Header props={scrollToSection}></Header>
            <FoodOption></FoodOption>
            <GroceryOption></GroceryOption>
            <DineOption></DineOption>
            <GetApp sectionRef={sectionRef}></GetApp>
        </>
    )
}


/*useRef -how it works & its flow
    1. useRef Created in Home.js
        -const sectionRef = useRef(null);
        -This creates a reference to be used by a DOM element.
        -Initially, sectionRef.current is null, but once React renders the component, it will point to the <div> in GetApp.

     2. You pass this reference to <GetApp />
        -<GetApp sectionRef={sectionRef} />
        -And in GetApp.js:<div ref={sectionRef}>
        -React assigns sectionRef.current to the DOM element of that <div> — ✅ now sectionRef.current points to that actual DOM node.

    3. You pass a scroll function to <Header />
        <Header props={scrollToSection} />
            -The function:
                const scrollToSection = () => {
                    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
                }
                This tells the browser: "Scroll to the element that sectionRef points to, smoothly."

    4. Button in <Header /> calls that function:
        -<button onClick={onScrollClick}>Get the App</button>
        -ls the browser to the <div> in GetApp.





*/