import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComputerHand, setUserHand } from "../slices/gameSlice";
import { setScore } from "../slices/ScoreSlice";
import "./Referee.css";

const Referee = () => {
          const userHand = useSelector((state) => state.game.userHand);
          const compHand = useSelector((state) => state.game.computerHand);

          const [result, setResult] = useState("You Lose");
          const dispatch = useDispatch();


          const win  = () => {

                    if (userHand === "paper" && compHand ==="rock") {
                              dispatch(setScore(1));
                              setResult("You win!")
                    }
                    if (userHand === "rock" && compHand ==="scissor") {
                               dispatch(setScore(1));
                              setResult("You win")
                    }
                    if (userHand === "scissor" && compHand ==="paper") {
                               dispatch(setScore(1));
                              setResult("You win!")
                    }
                    if (userHand === compHand) {
                              setResult("No winners !")
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
