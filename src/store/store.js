import { configureStore } from "@reduxjs/toolkit";
import sneakersSlice from "./Sneakers/sneackerSlice";


export default configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }),
  reducer: {
    sneakers: sneakersSlice,
  }
})