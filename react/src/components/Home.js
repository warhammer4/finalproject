import ps5 from '../assets/ps5.jpg'
import iphone14 from '../assets/phone14.jpg'
import g22 from '../assets/g22.jpg'
import windows from '../assets/windows.jpg'
import xbox from '../assets/xbox.jpg'
import gopro from '../assets/gopro.jpg'
import Card from './Card'


const Home =(props)=>{
    // const [storeArr, setStoreArr] = useState([])

    // useEffect(()=> {
    //     const url = 'http://localhost:3003/api/store'

    //     axios.get(url)
    //     .then(res => {
    //         setStoreArr(res.data)
    //     })
    // }, [])

        const storeCard = props.props.map(item => {
            return <Card key={item.id} deals={item.deals} image={item.img} price={item.price} desc={item.desc} year={item.year} depart={item.department}></Card>
        })
        storeCard
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
    <main className="main" id="main">
        <div className="container">
            <div className="row">
                <h2 className="content-header">recommended items</h2>
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
    {/* <footer className="footer">
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
                                <h3 className="footerh3">Likes</h3>
                                <p className="blog-text">12 million</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h2 className="footerh2">get in touch</h2>
                            <ul className="contact-address">
                                <li className="address-item">4958 utinee street</li>
                                <li className="address-item">goonin,bush 95484</li>
                                <li className="address-item">Cellphone +3015849845</li>
                                <li className="address-item">Telephone +654989897</li>
                                <li className="address-item">FAX:+57635623476</li>
                                <li className="address-item email">Email:joemama@gmail.com</li>
                            </ul>
                    </div>
                </div>
            </div>
        </section>
        <section className="bottom-footer">
            <p className="bottom-logo text-center text-md-start">InfiniteShop</p>
            <p className="colophon">site by joemama &copy;2022</p>
        </section>
    </footer> */}
        </>
    )
}

export default Home