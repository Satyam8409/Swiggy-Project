import {createSlice} from "@reduxjs/toolkit"
import { Decrement, Increment } from "../../../Day14/src/Slicer1"

const cart=createSlice({
    name:'cartslicer',
    //variable ko array kyu liye-->kyuki uder se jo data cart me add krege o boht sara ho skta hai
    initialState:{
        items:[],
        count:0,       
    },
    //isme 3 fn bana hoga [ek add(new obj send krege), ek -(same obj ko 1 se ghata denge), ek +(same obj ko 1 se ghata denge)] ke liye smjhe
    reducers:{          
        addItems:(state,action)=>{                            //action me jo data ye fn ke sath bheje hai oo aata hai
            state.items.push({...action.payload, quantity:1});//state me sara initialState me jo var create kiye hai uska access rhta hai
            state.count++;
        },
        IncrementItems:(state,action)=>{
            let itemAlready=state.items.find(item=>item.id==action.payload.id);
            itemAlready.quantity+=1;
            // console.log(action.payload.id);
            state.count++;
        },                    
        DecrementItems:(state,action)=>{
            let itemPresent=state.items.find(item=>item.id==action.payload.id);
            if(itemPresent.quantity>1){
                itemPresent.quantity-=1;
            }
            else{
                state.items=state.items.filter(item=>item!==action.payload.id);
            }
            state.count--;
        },
    }    
})
export const {addItems,IncrementItems,DecrementItems}=cart.actions;//jis file ye fn use krna hai oha pe isko import krege
export default cart.reducer;    //store configure krne ke liye ye use hota hai