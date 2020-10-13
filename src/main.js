import React from 'react';
import newimage from './img/new.png';


const Main = () =>
{
    return(
<>
<div class="row">
      <div class="col-1">
         <h2>BOOST YOURSELF FROM <br/> ANYWHERE ANYTIME</h2>
          <h3> Join Millions of Learners From Around The World Already Learning
 On CourseXD! Find the right instructor for you. Any topic, skill level, or
 language. Lifetime Access.Coursexd one of the best in the market
 Download To Your Phone. 30-Day Money Guarantee</h3>
          <button type="button">Buy Now</button>
      </div>
      <div class="col-2">
        <img src={newimage} class="glass"/>
          <div class="color-box"></div>
          <div class="add-box">
              
          </div>
      </div>
    </div>

    
</>
    );
}
export default Main;