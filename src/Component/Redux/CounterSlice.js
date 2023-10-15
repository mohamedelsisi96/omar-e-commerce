import { createSlice } from "@reduxjs/toolkit";


let initialState={counter:0,}
let counterSlice=createSlice({
    name:"counterSlice",
    initialState:initialState,
    reducers:{
    increase:(state)=>{
      
        state.counter +=1
    },
    decrease:(state)=>{
      
        state.counter -=1
    },
    delet:(state)=>{
        console.log("decrease");
        state.counter =0
    },
    }
})
export let counterReducer=counterSlice.reducer;
export let {increase , decrease ,delet } = counterSlice.actions;