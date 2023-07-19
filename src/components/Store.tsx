import { configureStore} from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import signupReducer from "./SignupSlice"
const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
  })

export const store=configureStore ({
    reducer:{
        signup:signupReducer,
    },
    
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default store;


export type AppDispatch = typeof store.dispatch; // Here we export the store's dispatch type
export type RootState = ReturnType<typeof store.getState>;