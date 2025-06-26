
export default function GetApp({sectionRef}){

    /*ref-is a special built-in prop in React — you cannot rename it.
        -ref is a reserved prop in React that tells React:
        -“Assign this DOM element (or component instance) to the .current property of the ref object.”
        -If you use anything other than ref, React won’t know it’s supposed to attach that ref to the DOM element.
    */
    return(
        <div ref={sectionRef} >
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" alt="scanner" />
        </div>
    )
}