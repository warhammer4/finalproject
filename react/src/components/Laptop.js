import ASUS from '../assets/ASUS.jpg'
import ideapad from '../assets/ideapad.jpg'
import envy from '../assets/envy.jpg'
import lenovo from '../assets/lenovo.jpg'
import gaming from '../assets/gaming.jpg'
import touch from '../assets/touch.jpg'





const Laptop =()=> {
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
            <div id="shoppingDiv">
                        <div className="shopping-buttons" />
                            <button type="button" className="btn" id="cartBtn"><span id="cartItems">0</span>item(s) -
                                $<span id="cartSubtotal">0.00</span></button>
                        </div>
                        <div className="col-md-4 content-box4">
                            <div className="content-asus-content">
                                <h2 className="content-header">recommended</h2>
                                    <img src={ASUS} alt="ASUS" class="content-img img-fluid"/>
                                    <p>ASUS - Vivobook 14" Laptop </p>
                                    <p className="cart"><span class="sr-only">cart</span>$399.99</p>
                                    <button class="content-btn">buy now</button>
                            </div>
                        </div>
                        <div className="col-md-4 content-box4">
                            <div className="content-ideapad-content" >
                                <img src={ideapad} alt="ideapad"  className="content-img img-fluid"/>
                                <p>HP - 15.6" Touch-Screen Laptop</p>
                                <p className="cart"><span className="sr-only">cart</span>$100.89</p>
                                <button className="content-btn">buy now</button>
                            </div>
                        </div>
                        <div className="col-md-4 content-box4">
                            <div className="content-envy-content" >
                                <img src={envy} alt="envy"  className="content-img img-fluid"/>
                                <p>HP - ENVY x360 2-in-1 15.6" Touch-Screen Laptop </p>
                                <p className="cart"><span className="sr-only">cart</span>$545.89</p>
                                <button className="content-btn">buy now</button>
                            </div>
                        </div>
                        <div className="col-md-4 content-box4">
                            <div className="content-lenovo-content" >
                                <img src={lenovo} alt="lenovo"  className="content-img img-fluid"/>
                                <p>Lenovo - Flex 3 Chromebook 11.6" HD Touch-screen Laptop</p>
                                <p className="cart"><span className="sr-only">cart</span>$875.89</p>
                                <button className="content-btn">buy now</button>
                            </div>
                        </div>
                        <div className="col-md-4 content-box4">
                            <div className="content-gaming-content" >
                                <img src={gaming} alt="gaming"  className="content-img img-fluid"/>
                                <p>HP - Victus 15.6" Gaming Laptop</p>
                                <p className="cart"><span className="sr-only">cart</span>$942.89</p>
                                <button className="content-btn">buy now</button>
                            </div>
                        </div>
                        <div className="col-md-4 content-box4">
                            <div className="content-touch-content" >
                                <img src={touch} alt="touch"  className="content-img img-fluid"/>
                                <p>Lenovo - Yoga 7i 16" 2.5K Touch 2-in-1 Laptop </p>
                                <p className="cart"><span className="sr-only">cart</span>$140.89</p>
                                <button className="content-btn">buy now</button>
                            </div>
                        </div>
                </div>
        </div>

        </>
    )
}

export default Laptop