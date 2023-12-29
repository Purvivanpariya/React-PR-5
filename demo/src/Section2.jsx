
import React from "react";
function Section2() {
  return (
    
    <div
      className="bg-white text-center   container"
      style={{ fontFamily: "Montage" , paddingTop:'70px',paddingBottom:'70px'}}
    >
        <hr/>
      <div className="row">
      <h3 className="pb-2 pt-5">FOR A SWEET DAY</h3>
      <span className=" pb-5" style={{ fontSize: "19px" ,color:'gray',fontFamily:'Montage',fontWeight:'400'}}>
      Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.
        <br /> Voluptate exercitation incididunt
      </span>
      <div className="col-4">
        <div className="card" style={{ width: "25rem"  ,marginBottom:'15px'}}>
          <img
            src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-1.jpg"
          />
          <span className="fs-3" style={{color:'#656565'}}>Italian Loaf</span>
      <p className="" style={{color:'#000000',fontSize:'25px'}}>$4.99</p>
      <i style={{fontSize:'35px',color:'#BC8157'}} class="fa-solid fa-arrow-right-long"></i>
          <div className="card-body">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping px-4"></i>
            <i class="fa-regular fa-heart pe-4"></i>
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
        </div>
      
      </div>
      <div className="col-4">
        <div className="card" style={{ width: "25rem"  ,marginBottom:'15px'}}>
          <img
            src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-2.jpg"
          />
      <span className="fs-3 " style={{color:'#656565'}}>Croissant Italy Cake</span>
      <p className="" style={{color:'#000000',fontSize:'25px'}}>$5.00</p>
      <i style={{fontSize:'35px',color:'#BC8157'}} class="fa-solid fa-arrow-right-long"></i>
          <div className="card-body">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping px-4"></i>
            <i class="fa-regular fa-heart pe-4"></i>
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card" style={{ width: "25rem"  ,marginBottom:'15px'}}>
          <img
            src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/product/product-3.jpg"
          />
      <span className="fs-3 " style={{color:'#656565'}}>Chocolate Muffin</span>
      <p className="" style={{color:'#000000',fontSize:'25px'}}>$7.55</p>
      <i style={{fontSize:'35px',color:'#BC8157'}} class="fa-solid fa-arrow-right-long"></i>
          <div className="card-body">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-cart-shopping px-4"></i>
            <i class="fa-regular fa-heart pe-4"></i>
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
}

export default Section2;