
import React from 'react'

function Slider() {

    return (

        <div>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div>
                        <div className="carousel-item active">
                            <div 
                            style = {{
                                height: "850px",
                                backgroundImage:
                                'url("https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/slider-02.jpg")',
                                backgroundRepeat: "no-repeat",
                             }}
                            >
                                <div className="container">
                                <div className=' w-50 text-center' style={{paddingTop:'200px',}}>
                                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/shape-02.png" alt="" style={{width:'15%'}}/>
                                    <h1 className='text-white' style={{fontSize:'70px',fontFamily: 'Montage'}}>Taste That Lasts Forever </h1>
                                    <button style={{border:'#BC8157',marginTop:'30px',backgroundColor:'#BC8157',padding:'17px 30px',color:'white',fontWeight:'bold'}}>ORDER NOW</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                        <div 
                            style = {{
                                height: "850px",
                                backgroundImage:
                                'url("https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/slider-01.jpg")',
                                backgroundRepeat: "no-repeat",
                             }}
                            >
                                <div className="container">
                                <div className='  text-center' style={{paddingTop:'200px',}}>
                                    <img src="https://htmldemo.net/bakerfresh/bakerfresh/assets/images/slider/shape-01.png" alt="" style={{width:'8%'}}/>
                                    <h1 className='text-white' style={{fontSize:'80px',fontFamily: 'Montage'}}>Bring The Best <br/>Experience </h1>
                                    <button style={{border:'#BC8157',marginTop:'30px',backgroundColor:'#BC8157',padding:'12px 30px',color:'white',fontWeight:'bold'}}>ORDER NOW</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default Slider
