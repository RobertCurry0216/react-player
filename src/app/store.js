import { configureStore } from "@reduxjs/toolkit";
import musicLibraryReducer from "../componants/musicLibrarySlice";

export default configureStore({
  reducer: {
    musicLibrary: musicLibraryReducer,
  },
});
