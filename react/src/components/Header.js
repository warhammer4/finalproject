import { Link } from "react-router-dom"

const Header =()=> {
    return(
        <header className="header" id="header">
            <ul class="nav top-nav justify-content-center justify-content-md-end ">
                        <div className="row">
                        <Link to='/' className="nav-item top-nav-item"><a href="#link" class="nav-link">Home</a></Link>
                        </div>
                        <div className="row">
                        <Link to='phone' className="nav-item top-nav-item"><a href="#link" class="nav-link">Phone</a></Link>
                        </div>
                        <div className="row">
                        <Link to='laptop' className="nav-item top-nav-item"><a href="#link" class="nav-link">Laptop</a></Link>
                        </div>
                        <div className="row">
                        <Link to='tv' className="nav-item"><a href="#link" class="nav-link">TV</a></Link>
                        </div>
                        <div className="row">
                        <Link to='signin' className="nav-item"><a href="#link" class="nav-link">Sign Up</a></Link>
                        </div>
                        <div className="row">
                        <Link to='cart' className="nav-item"><a href="#link" class="nav-link">Cart</a></Link>
                        </div>
                    </ul>
        {/* <div className="topheader">
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
        </div> */}
        
    </header>
    )
}

export default Header

