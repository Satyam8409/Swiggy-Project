/*When you apply fixed to an element, it’s taken out of the document layout — which means:
            -Margins like mb-60 or mt-0 won't affect the layout below it
            -Its position is completely independent of siblings or parents

container mx-auto
    -Using container to limit the width responsively
    -Using mx-auto to horizontally center it with automatic side margins
*/

import { Link } from 'react-router'
import swiggyLogo from './swiggyLogo.svg'
// import search from './search.png'
import { useSelector } from 'react-redux'


export default function RestHeader(){
    const cartCount=useSelector(state=>state?.cartslicer?.count)//pura array cartCount me bhej dega
    return(
        <>
        <div className="w-[100%] mt-0 fixed top-0 left-0 z-50 bg-white shadow-lg  p-3 rounded-xl ">
            <div className="w-[80%] py-2 container mx-auto flex justify-between items-center ">
                <Link to='/'>
                    <img className='w-10 h-10 object-cover hover:cursor-pointer' src={swiggyLogo} alt="logo" />
                </Link>
                <Link to='/checkout'>
                    <span className='font-semibold text-lg'><span className='font-bold mr-2 text-lg '> {`[${cartCount}]`}</span>Cart</span>
                </Link>
            </div>
        </div>
        <div className="mb-40"></div>
        </>
    )
}