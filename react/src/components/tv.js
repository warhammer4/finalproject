import LED from '../assets/LED.jpg'
import Sam from '../assets/Sam.jpg'
import viz from '../assets/viz.jpg'
import io from '../assets/io.jpg'
import sung from '../assets/sung.jpg'
import LG from '../assets/LG.jpg'
import sony from '../assets/sony.jpg'



const TV =()=> {
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
                <div className="row">
                <div className="shopping-buttons" >
                            <button type="button" className="btn" id="cartBtn"><span id="cartItems">0</span>item(s) -
                                $<span id="cartSubtotal">0.00</span></button>
                        </div>
                            <div className="col-md-4 content-box3">
                                <div className="content -hisense-content">
                                    <h2 className="content-header">InStore</h2>
                                    <img src={LED} alt="Led" className="content-img img-fluid"/>
                                    <p>Hisense 58" Class 4K UHD LED LCD</p>
                                    <p className="cart"><span className="sr-only">cart</span>$700.99</p>
                                    <button className="content-btn">buy now</button>
                                </div>
                            </div>
                        <div className="col-md-4 content-box3">
                            <div className="content-sam-content " >
                                <img src={Sam} alt="Sam"  className="content-img img-fluid"/>
                                <p>SAMSUNG 55" Class 4K Crystal UHD</p>
                                <p className="cart"><span className="sr-only">cart</span>$900.89</p>
                                <button className="content-btn">buy now</button>
                            </div>
                        </div>
                        <div className="col-sm-4 content-box3">
                            <div className="content-vizio-content" >
                                <img src={viz} alt="viz"  className="content-img img-fluid"/>
                                <p>VIZIO - 40" Class D-Series LED 1080P</p>
                                <p className="cart"><span className="sr-only">cart</span>$230.89</p>
                                <button className="content-btn">buy now</button>
                            </div>
                        </div>
                        <div className="col-sm-4 content-box3">
                            <div className="content-viz-content" >
                                <img src={io} alt="io"  className="content-img img-fluid"/>
                                <p>VIZIO 65" Class V-Series 4K UHD LED</p>
                                <p className="cart"><span className="sr-only">cart</span>$576.89</p>
                                <button className="content-btn">buy now</button>
                            </div>
                        </div>
                        <div className="col-sm-4 content-box3">
                            <div className="content-sung-content" >
                                <img src={sung} alt="sung"  className="content-img img-fluid"/>
                                <p>SAMSUNG 75" Class Q60B QLED 4K</p>
                                <p className="cart"><span className="sr-only">cart</span>$989.89</p>
                                <button className="content-btn">buy now</button>
                            </div>
                        </div>
                        <div className="col-sm-4 content-box3">
                            <div className="content-lg-content" >
                                <img src={LG} alt="lg"  className="content-img img-fluid"/>
                                <p>LG 75" Class 4K UHD 2160P WebOS22</p>
                                <p className="cart"><span className="sr-only">cart</span>$687.89</p>
                                <button className="content-btn">buy now</button>
                            </div>
                        </div>
                        <div className="col-sm-4 content-box3">
                            <div className="content-sony-content" >
                                <img src={sony} alt="sony"  className="content-img img-fluid"/>
                                <p>Sony KD43X85K 43 inch X85K 4K HDR LED TV</p>
                                <p className="cart"><span className="sr-only">cart</span>$1000.99</p>
                                <button className="content-btn">buy now</button>
                            </div>
                        </div>
                    </div>
            </div>

        </>
    )
}

export default TV