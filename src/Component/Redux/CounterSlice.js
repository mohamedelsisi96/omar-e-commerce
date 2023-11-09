import { createSlice } from "@reduxjs/toolkit";


let initialState={counter:0,}
let counterSlice=createSlice({
    name:"counterSlice",
    initialState:initialState,
    reducers:{
    increase:(state)=>{
      
        state.counter +=1
        localStorage.setItem('mycounter', state.counter);
    },
    decrease:(state)=>{
      
        state.counter -=1
        localStorage.setItem('mycounter', state.counter);
        
    },
    delet:(state)=>{
       
        state.counter =0
        localStorage.setItem('mycounter', state.counter);
    },
    }
})
export let counterReducer=counterSlice.reducer;
export let {increase , decrease ,delet } = counterSlice.actions;