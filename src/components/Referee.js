import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComputerHand, setUserHand } from "../slices/gameSlice";
import { setScore } from "../slices/ScoreSlice";
import "./Referee.css";

const Referee = () => {
          const userHand = useSelector(state => state.game.userHand);
          const compHand = useSelector(state => state.game.computerHand);

          const [result, setResults] = useState("You Lose");
          const dispatch = useDispatch();


          const win  = () => {
                    if (userHand === "Paper" && compHand ==="Rock") {
                              dispatch(setScore(1));
                              setResults("You win")
                    }
                    if (userHand === "Rock" && compHand ==="Scissor") {
                               dispatch(setScore(1));
                              setResults("You win")
                    }
                    if (userHand === "Scissor" && compHand ==="Paper") {
                               dispatch(setScore(1));
                              setResults("You win")
                    }
          };
          //useEffect to call the function win
          useEffect(() => {
                    win();

          }, [compHand]);

          return (
                    <div className="referee">
                              <h1> {result}</h1>
                              <button onClick={()=> {
                                        dispatch(setComputerHand(""))
                                        dispatch(setUserHand(""))
                                        }
                                        }>Play again
                              </button>
                    </div>
          )


}


export default Referee;
