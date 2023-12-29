

import React from "react";

function Footer() {
  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-between">
          
          <div className="col-3">
            <a className="navbar-brand" href="#">
              <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/logo.svg" />
            </a><br/>
            <div className="d-flex justify-content-start">
            <i style={{padding:'12px',fontSize:'25px'}} class="fa-brands fa-facebook-f"></i>
            <i style={{padding:'12px',fontSize:'25px'}} class="fa-brands fa-twitter"></i>
            <i style={{padding:'12px',fontSize:'25px'}} class="fa-brands fa-pinterest-p"></i>
            <i style={{padding:'12px',fontSize:'25px'}} class="fa-brands fa-instagram"></i>  
            </div>
          </div>
          <div className="col-3">
            <p style={{fontSize:'25px',color:'#212121',fontFamily:'Montaga',fontWeight:'500'}}>CATEGORIES</p><br/>
            <p style={{fontSize:'20px',color:'#858585'}}>Cupcake</p>
            <p style={{fontSize:'20px',color:'#858585'}}>Pastry</p>
            <p style={{fontSize:'20px',color:'#858585'}}>Muffin</p>
            <p style={{fontSize:'20px',color:'#858585'}}>Waffle</p>
          </div>
          <div className="col-3">
            <p style={{fontSize:'25px',color:'#212121',fontFamily:'Montaga',fontWeight:'500'}}>SERVICES</p><br/>
            <p style={{fontSize:'20px',color:'#858585'}}>Delivery</p>
            <p style={{fontSize:'20px',color:'#858585'}}>Payment</p>
            <p style={{fontSize:'20px',color:'#858585'}}>Returns</p>
            <p style={{fontSize:'20px',color:'#858585'}}>Privacy</p>
          </div>
          <div className="col-3">
            <p style={{fontSize:'25px',color:'#212121',fontFamily:'Montaga',fontWeight:'500'}}>INFORMATION</p><br/>
            <p style={{fontSize:'20px',color:'#858585'}}>About us</p>
            <p style={{fontSize:'20px',color:'#858585'}}>Contact Us</p>
            <p style={{fontSize:'20px',color:'#858585'}}>Latest Post</p>
            <p style={{fontSize:'20px',color:'#858585'}}>Selling Tips</p>
          </div>
        </div> 
      </div>
      <div className="py-4 " style={{backgroundColor:'#F4F4F4',fontSize:'18px'}}>
      <div className="container text-center" >
        <span className="pt-3">© 2022 Bakerfresh Made with 💟 by</span>
        &nbsp;
        <span style={{textDecoration:'underline' , color:'#BC8157'}}>BootXperts</span>
      </div>
      </div>
      
    </div>
  );
}

export default Footer;