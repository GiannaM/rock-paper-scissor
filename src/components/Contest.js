import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComputerHand } from "../slices/gameSlice";
import "./Contest.css";
import Referee from "./Referee";

const hands = ["rock", "paper", "scissor"];



const Contest= () => {

          // const [cpHand, setCpHand] = useState();
          // const userHand  = useSelector(state => state.game.userHand);
          const [timer, setTimer] =useState(false);
          const dispatch = useDispatch();

          const userHand  = useSelector(state => state.game.userHand);
          const compHand = useSelector((state) => state.game.computerHand);

          useEffect(() => {
                    let cpHand = hands[Math.floor(Math.random()*hands.length)];
                    //random give number between 1 and 3 hands.length =3 because = ["rock", "paper", "scissor"]

                    setTimeout(()=> dispatch(setComputerHand(cpHand)),500);

                     setTimeout(()=> setTimer(true), 1000);
          },[]);

          return ( <div className="contest">
                              <div  className="contest_container" >
                                        <div className="contest_handContainer">
                                                  <h1>You picked</h1>
                                                  <img  src={`/images/hand-${userHand}.png`} alt=""/>
                                        </div>
                                        {timer && <Referee/>}
                                        <div className="contest_handContainer">
                                                  <h1>The House Picked</h1>
                                                   <img  src={`/images/hand-${compHand ? compHand:"blank"}.png`} alt=""/>
                                        </div>
                              </div>
                              <h1>{console.log(compHand)}</h1>
                  </div>

          )

};


export default Contest;
