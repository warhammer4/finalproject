import iphonex from '../assets/iphonex.jpg'
import iphone11 from '../assets/11.jpg'
import iphoneXR from '../assets/XR.jpg'
import iphone12 from '../assets/iphone12.jpg'
import galaxy3 from '../assets/galaxy fold 3.jpg'
import flipphone from '../assets/flipphone.jpg'
import android32 from '../assets/android 32.jpg'
import iphone8 from '../assets/8.jpg'
import galaxy8 from '../assets/galaxy 8.jpg'

const Phone =()=> {
    return(
        <>
        <header className="header" id="header">
        <div className="topheader">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="logo text-center text-md-start">
                            <a href="index.html" className="home-link">InfiniteShop</a>
                        </h1>
                    </div>
                    <div className="col-md-6">
                        <ul className="nav top-nav justify-content-center justify-content-md-end ">
                            <li className="nav-item top-nav-item"><a href="#link" class="nav-link">services</a></li>
                            <li className="nav-item top-nav-item"><a href="#link" class="nav-link">sign up</a></li>
                            <li className="nav-item top-nav-item"><a href="#link" class="nav-link">pre-order</a></li>
                            <li className="nav-item"><a href="#link" className="nav-link">help</a></li>
                            <input type="search" className="search-bar" />
                        </ul>
                        <div id="shoppingDiv">
                        <div className="shopping-buttons">
                            <button type="button" className="btn" id="cartBtn"><span id="cartItems">0</span>item(s) -
                                $<span id="cartSubtotal">0.00</span></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottomheader">
            <div className="container">
                <div className="row">
                    <nav class="nav bottom-nav justify-content-center  justify-content-around">
                        <a href="phone.html" className="nav-link btn">phones</a>
                        <a href="tv.html" className="nav-link btn">T.V</a>
                        <a href="laptop.html" className="nav-link btn">Laptop</a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
        <div className="container">
                        <div className="shopping-buttons" >
                            <button type="button" className="btn" id="cartBtn"><span id="cartItems">0</span>item(s) -
                                $<span id="cartSubtotal">0.00</span></button>
                        </div>
            <div className="row">
                <div className="col-md-4 content-box2">
                    <div className="content iphonex-content">
                        <h2 className="content-header">New</h2>
                            <img src={iphonex} alt="iphoneX" className="content-img img-fluid"/>
                            <p>iphoneX</p>
                            <p className="cart"><span className="sr-only">cart</span>$399.99</p>
                            <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box2">
                    <div className="content iphone11-content" >
                        <img src={iphone11} alt="iphone11"  className="content-img img-fluid"/>
                        <p>iphone14</p>
                        <p className="cart"><span className="sr-only">cart</span>$400.89</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box2">
                    <div className="content iphonexr-content" >
                        <img src={iphoneXR} alt="iphonexr"  className="content-img img-fluid"/>
                        <p>iphoneXR</p>
                        <p className="cart"><span className="sr-only">cart</span>$120.89</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box2">
                    <div className="content iphone12-content" >
                        <img src={iphone12} alt="iphone12"  className="content-img img-fluid"/>
                        <p>iphone12</p>
                        <p className="cart"><span className="sr-only">cart</span>$270.89</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box2">
                    <div className="content galaxyfold3-content" >
                        <img src={galaxy3} alt="galaxy"  className="content-img img-fluid"/>
                        <p>galaxy fold 3</p>
                        <p className="cart"><span className="sr-only">cart</span>$500.89</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box2">
                    <div className="content flipphone-content" >
                        <img src={flipphone} alt="flipphone"  className="content-img img-fluid"/>
                        <p>cat s22</p>
                        <p className="cart"><span className="sr-only">cart</span>$400.89</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box2">
                    <div className="content android32-content" >
                        <img src={android32} alt="android"  className="content-img img-fluid"/>
                        <p>a32</p>
                        <p className="cart"><span className="sr-only">cart</span>$690.89</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box2">
                    <div class="content iphone8-content" >
                        <img src={iphone8} alt="iphone8"  className="content-img img-fluid"/>
                        <p>iphone8</p>
                        <p className="cart"><span className="sr-only">cart</span>$723.89</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box2">
                    <div className="content galaxy8-content" >
                        <img src={galaxy8} alt="galaxy 8"  className="content-img img-fluid"/>
                        <p>galaxy 8</p>
                        <p className="cart"><span className="sr-only">cart</span>$400.89</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Phone