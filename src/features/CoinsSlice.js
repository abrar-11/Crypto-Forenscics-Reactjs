import { createSlice } from '@reduxjs/toolkit'



export const CoinSlice = createSlice({
  name: 'Coins_states',
  initialState:{
      allCoins: [],
  },
  reducers: {
      setAllCoins:(state,action)=>{
        state.allCoins = action.payload
      }
  },
})

// Action creators are generated for each case reducer function
export const {setAllCoins} = CoinSlice.actions

export default CoinSlice.reducer