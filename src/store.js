
import  {configureStore} from  "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice.js";
import scoreReducer from "./slices/ScoreSlice"

export default configureStore({
          reducer: {
                    game: gameReducer,
                    score: scoreReducer,
          }
});
