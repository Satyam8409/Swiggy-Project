import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import Restaurant from "./Components/RestaurantOption";
import Home from "./Components/Home";
import {BrowserRouter,Routes,Route,Link} from 'react-router'
import RestaurantMenu from "./Components/RestaurantMenu";
import Search from "./Components/Search";
import SecHome from "./Components/SecHome";
import {Provider} from "react-redux";
import {store} from './Stored/stores';
import Checkout from "./Components/Checkout";

function App(){
    
    return(
       <>
       {/* <Header></Header>
       <FoodOption></FoodOption>
       <GroceryOption></GroceryOption>
       <DineOption></DineOption> */}

        <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route element={<SecHome></SecHome>}>
                    <Route path="/restaurants" element={<Restaurant></Restaurant>}></Route>
                    <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route> 
                    <Route path="/city/delhi/:id/search" element={<Search></Search>}></Route>
                    <Route path="/checkout" element={<Checkout></Checkout>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
        </Provider>
       </>
    )
}

// ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);
export default App;


