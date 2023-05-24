const Footer =()=> {
    return(
        <>
        <footer className="footer">
        <section className="top-footer">
            <div className="container">
                <div className="row">
                    <ul className=" nav client-list">
                        <li className=" nav-item client-item">
                            <a href="#link" className=" nav-link client-link">customer services</a>
                        </li>
                        <li className=" nav-item client-item ">
                            <a href="#link" className=" nav-link client-link">membership</a>
                        </li>
                        <li className=" nav-item client-item d-none d-md-block">
                            <a href="#link" className=" nav-link client-link">gift cards</a>
                        </li>
                        <li className=" nav-item client-item d-none d-lg-block">
                            <a href="#link" className=" nav-link client-link">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="mid-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-content">
                            <h2 className="footerh2">about us</h2>
                            <p className="about-text">the biggest company!</p>
                            <p className="about-text">have all the helpful stuff in the store!</p>
                            <a href="#link" className="read-link">&gt;&gt;read more</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-content">
                            <h2 className="footerh2">our blog</h2>
                            <div className="blog" id="blog1">
                                <h3 className="footerh3">I don't know.</h3>
                                <p className="blog-text">I still don't know.</p>
                            </div>
                            </div>
                            <div className="blog">
                                <nav className="nav socials justify-content-center">
                        <a href="https://twitter.com/JaceSteen" target="_blank" className="social-link"> <i className="bi bi-twitter"></i> <span className="visually-hidden"></span></a>
                        <a href="https://github.com/warhammer4" target="_blank" className="social-link"> <i className="bi bi-github"></i> <span className="visually-hidden"></span></a>
                    </nav>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2 className="footerh2">get in touch</h2>
                            <ul className="contact-address">
                            <li className="adress-item">
                            <form id="form" action="https://www.freecodecamp.com/street-submit">
                                <input  id="street" type="street" required placeholder="Enter your street number" name="number"/>
                                <input type="submit" id="submit" value="GET STARTED" />
                            </form>
                                </li>
                            <li className="adress-item">
                                <form id="form" action="https://www.freecodecamp.com/linkin-submit">
                                <input  id="email" type="email" required placeholder="Enter your email address" name="email"/>
                                <input type="submit" id="submit" value="GET STARTED" />
                            </form>
                                </li>
                                <li className="adress-item">
                            <form id="form" action="https://www.freecodecamp.com/number-submit">
                                <input  id="number" type="number" required placeholder="Enter your phone number" name="number"/>
                                <input type="submit" id="submit" value="GET STARTED" />
                            </form>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="bottom-footer">
            <p className="bottom-logo text-center text-md-start">InfiniteShop</p>
            <p className="colophon">site by joemama &copy;2022</p>
        </section>
    </footer>
        </>
    )
}

export default Footer