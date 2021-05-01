import React from "react";
import Hand from "./Hand";
import "./Hands.css";


const Hands = () => {
          //pass certain props to get images
          return (
          <div className='hands'>
                    <div className='hands_triangle'>
                              <img src='/images/bg-triangle.svg' alt="triangle.svg"/>
                    </div>
                    <div className='hands_top'>
                              <Hand value='paper'/>
                              <Hand value='scissor'/>
                    </div>
                    <div className='hands_bottom'>
                              <Hand value='rock'/>
                    </div>
          </div>
          )
}

export default Hands;
