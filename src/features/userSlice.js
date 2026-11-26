import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
   name: 'user',
   initialState: {name: '유비', age: 20},
   reducers: {
      // state 변경 함수 tjsdjs
      changeName(state){
         state.name = '관우';
      },
      increase(state, action){
         state.age += action.payload;
      }
   }
});

export const {changeName, increase} = user.actions;

export default user.reducer;