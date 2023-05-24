import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Cart=()=> {
    const [store, setStore] = useState({})
    const params = useParams()
    console.log(params)
    const url = `http://localhost:3001/api/store/${params.id}`

    useEffect(()=> {
        axios.get(url)
            .then(res => {
                setStore(res.data)
            })

    }, [])
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
        <main className='main main-cart'>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                    <img src={store.img} alt="placeholder img" className="img-fluid store-img shadow" />
                    </div>
                    <div className="col-7">
                    <h2 className="store-h2">{store.description}</h2>
                        <ul className="store-list list-group list-group-flush">
                            <li className="store-item deals-item list-group-item">{store.deals }</li>
                            <li className="store-item department-item list-group-item">{store.department}</li>
                            <li className="store-item year-item list-group-item">{store.year}</li>
                            <li className="store-item price-item list-group-item">${store.price}</li>
                        </ul>
                        <button className="btn cart-btn">add to cart</button>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default Cart
{/* <div className="container">
    <div className="row">
        <div className="col">
            <div className="bar-text">Home &gt; Checkout</div>
        </div>
    </div>
</div>
<div className="section checkout-section">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2 className="checkout-header">checkout</h2>
                <p className="checkout-text">please make your selections and pay</p>
            </div>
            <div className="col-md-6">
                <p className="checkput-item-count">
                    <span id="checkoutItemCount"></span>
                </p>
            </div>
        </div>

            <div className="row">
                <div className="col">
                    <table className="table" id="table">
                        <tr className="table-headers">
                            <td>product name</td>
                            <td>unit price</td>
                            <td>quantity</td>
                            <td>subtotal</td>
                        </tr>
                        <tbody id="tbody"></tbody>
                        <tr className="totals" id="totals">
                            <td colspan="4">
                                <p className="total-subtotal" id="totalSubtotal">totalSubtotal</p>
                                <p className="total-shipping" id="totalShipping">totalShipping</p>
                                <p className="total-tax" id="totalTax">totalTax</p>
                                <p className="total-total" id="totalTotal">totalTotal</p>
                            </td>
                            <td className="total-values" id="totalValues">
                                <p className="subtotal-value" id="subtotalValue">subtotalValue</p>
                                <p className="shipping-value" id="shippingValue">shippingValue</p>
                                <p className="tax-value" id="taxValue">taxValue</p>
                                <p className="total-value" id="totalValue">$<span></span> </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="btn btn-secondary confirm-button">confirm order</p>
                    <p className="clear btn btn-secondary" id="clear">clear order</p>
                </div>
    </div>
</div>
</div> */}