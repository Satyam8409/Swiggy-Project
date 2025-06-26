import { Outlet } from "react-router"
import RestHeader from "./RestHeader"

export  default function SecHome(){
    return(
        <>
            <RestHeader></RestHeader>
            <Outlet></Outlet>

        </>
    )
}