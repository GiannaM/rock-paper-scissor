
import  {configureStore} from  "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice.js";

export default configureStore({
          reducer: {
                    game: gameReducer,
          }
});


