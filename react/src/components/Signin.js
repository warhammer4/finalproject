const Signin =()=> {
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
            <div className="row ">
                <div className="col-12">
                    <h2 className="text-center sign-up-header"><span></span>Sign in</h2>
                </div>
                <form action="">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center sign-in-box">
                                <input type="username" placeholder="Username" className="sign-in-input" />
                            </div>
                            <div className="col-12 d-flex justify-content-center sign-in-box">
                                <input type="password" placeholder="password" className="sign-in-input" />
                            </div>
                            <div className="col-12 d-flex justify-content-center sign-in-box">
                                <button  className="login-btn" id="loginBtn">Sign in</button>
                            </div>
                            <div className="col-12 text-center">
                                <p  className="create-text" >Forgot account?<a href="./createAccount.html">New Account</a></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Signin