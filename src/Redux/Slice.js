import { createSlice } from "@reduxjs/toolkit"

   
   const initialState={
    selectedService: null
   }

   const BookNow= createSlice({
    name:'Cart',
    initialState,
    reducers:{
        addItem:(state, action)=>{
      state.selectedService = action.payload;
        },
         removeItem:(state)=>{
         state.selectedService = null;
        },
    }
   })


   export const {addItem,removeItem} = BookNow.actions;
   export default BookNow.reducer