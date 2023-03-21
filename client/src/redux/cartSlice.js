import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartlists: [],
    quantity: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        AddCard: (state, action) => {
            console.log("action", action)
            const find = state.cartlists.findIndex(item=>item._id === action.payload._id);
            console.log("find", find)
            if(find>=0)
                state.cartlists[find].quantity += 1
            else {

                const tempvar = {...action.payload, quantity:1}
                console.log("tem", tempvar)
                state.cartlists.push(tempvar)
                console.log("state", state.cartlists)
            }
            localStorage.setItem("cartList", JSON.stringify(state.cartlists))
        },
        DeleteCart: (state, action) => {
            const itemDelete = state.cartlists.filter(
                (item) => item._id !== action.payload._id
            )
            state.cartlists = itemDelete;
            
            const itemCart = JSON.parse(localStorage.getItem("cartList"))

            var indexDelete = action.payload._id;

            itemCart.splice(indexDelete, 1)
            localStorage.setItem("cartList", JSON.stringify(itemCart))
            
        },
        IncreaseCart: (state, action) => {
            const indexItem = state.cartlists.findIndex(item=>item._id === action.payload._id);
            if(state.cartlists[indexItem].quantity >=1)
            state.cartlists[indexItem].quantity += 1
        },
        DecreaseCart: (state, action) => {
            const indexItem = state.cartlists.findIndex(item=>item._id === action.payload._id);         
            if(state.cartlists[indexItem].quantity >1)
                state.cartlists[indexItem].quantity -= 1
            else
                state.cartlists.splice(indexItem, 1)

        }
    }
})

export const {AddCard, DeleteCart, DecreaseCart, IncreaseCart} = cartSlice.actions;

export default cartSlice.reducer;