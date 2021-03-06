import { configureStore } from "@reduxjs/toolkit";
import musicLibraryReducer from "../componants/musicLibrarySlice";
import songInfoReducer from "../componants/songInfoSlice";

export default configureStore({
  reducer: {
    musicLibrary: musicLibraryReducer,
    songInfo: songInfoReducer,
  },
});
