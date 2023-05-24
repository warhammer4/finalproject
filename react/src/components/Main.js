import ps5 from '../assets/ps5.jpg'
import iphone14 from '../assets/phone14.jpg'
import g22 from '../assets/g22.jpg'
import windows from '../assets/windows.jpg'
import xbox from '../assets/xbox.jpg'
import gopro from '../assets/gopro.jpg'




const Main =()=>{
    return(
        <>
        <main className="main" id="main">
        <div className="container">
                <div className="shopping-buttons">
                        <button type="button" className="btn" id="cartBtn"><span id="cartItems">0</span>item(s) -
                            $<span id="cartSubtotal">0.00</span></button>
                    </div>
                <h2 className="content-header">recommended items</h2>
            <div className="row">
                <div className="col-md-4 content-box">
                    <div className="content ps5-content" >
                        <img src={ps5} alt="PlayStation5" className="content-img img-fluid" />
                        <p>PlayStation5</p>
                        <p className="cart"><span className="sr-only">cart</span>$399.99</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box">
                    <div className="content phone14 -content" >
                        <img src={iphone14} alt="iphone14"  className="content-img img-fluid" />
                        <p>iphone14</p>
                        <p className="cart"><span className="sr-only">cart</span>$400.89</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box">
                    <div className="content g22-content" >
                        <img src={g22} alt="galaxy" className="content-img img-fluid" />
                        <p>galaxy s20</p>
                        <p className="cart"><span className="sr-only">cart</span>$300</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box">
                    <div className="content windows-content" >
                        <img src={windows} alt="windows" className="content-img img-fluid" />
                        <p>windows 11</p>
                        <p className="cart"><span className="sr-only">cart</span>$500.99</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box">
                    <div className="content xbox-content" >
                        <img src={xbox} alt="xbox" className="content-img img-fluid" />
                        <p>Xbox Series X</p>
                        <p className="cart"><span class="sr-only">cart</span>$399.99</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
                <div className="col-md-4 content-box">
                    <div className="content gopro-content" >
                        <img src={gopro} alt="goPro" className="content-img img-fluid" />
                        <p>goPro</p>
                        <p className="cart"><span class="sr-only">cart</span>$200.50</p>
                        <button className="content-btn">buy now</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
        </>
    )
}

export default Main