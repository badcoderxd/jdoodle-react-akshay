import React from 'react';
import logo from './img/logo-cxd.svg';

function Navbar() {
  return (
    <>
    <div class="nav">
     
           
     <div>
     
          <ul>
 
            <li>
                  <img class="logo" src={logo}/>
             </li>
          
 
            <li style={{paddingTop: '5px'}}>
                  Home
             </li>
 
             <li style={{paddingTop: '5px'}}>
                  Courses
             </li>
 
             <li style={{paddingTop: '5px'}}>
                  Offers
             </li>
 
             <li style={{paddingTop: '5px'}}>
                  About Us
             </li>
 
             <li style={{paddingTop: '5px'}}>
                  Contact
             </li>
 
         </ul>
 
       </div>
       <div class="space">
 
             <i>TRY FOR FREE</i> 
 
         </div>
     
   </div>
    </>
  );
}

export default Navbar;