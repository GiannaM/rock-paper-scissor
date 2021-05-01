import React from "react";
import { useSelector } from "react-redux";
import "./ScoreBoard.css";



const ScoreBoard = () => {

          const score = useSelector(state => state.score);

          return (
                    <div className= "scoreBoard">
                              <div className="scoreBoard_gameName">
                                        <div className="scoreboard_text">
                                                  <img src= "/images/rock-paper-scissor.svg" alt="rockPaperScissorText"/>
                                        </div>
                              </div>
                              <div className="scoreBoard_score">
                                        <p>Score</p>
                                        <h1>{score}</h1>
                              </div>
                    </div>


          )

}
export default ScoreBoard;
