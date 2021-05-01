import React from "react";
import { useDispatch } from "react-redux";
import { setUserHand } from "../slices/gameSlice";

const Hand = ({value}) => {
          const dispatch = useDispatch ();

          const pickHand = (e, value) => {
                    dispatch(setUserHand(value))
                    // console.log(value, "What is the Hand");
          }
          return (
                    <div className="hand" onClick= {(e) => pickHand(e, value)}>
                               <img src={`/images/hand-${value}.png`} alt="hand"/>

                    </div>

              )
}
export default Hand;
