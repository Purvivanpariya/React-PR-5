
import React from "react";

function Section4() {
  return (
    <div>
      <div
        style={{
          height: "420px",
          backgroundImage:
            'url("https://htmldemo.net/bakerfresh/bakerfresh/assets/images/newsletter-bg.jpg")',
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 className="  fs-1 text-white d-flex justify-content-center" style={{paddingTop:'70px'}}>STAY IN TOUCH & GET 10% OFF</h3>
        <label className="mt-5 d-flex justify-content-center" htmlFor="">
        <input className=" fs-4" type="text" placeholder="Your Email Address" style={{border:'none',paddingBottom:'12px',paddingTop:'12px',paddingLeft:'30px',paddingRight:'250px'}} />
        </label>
      </div>
      
    </div>
  );
}

export default Section4;