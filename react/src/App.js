import  {useState, useEffect} from "react";
import {Routes, Route} from 'react-router-dom'
import axios from 'axios'

import React from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import Phone from "./components/Phone"
import Laptop from "./components/Laptop"
import Tv from "./components/tv";
import Home from "./components/Home"
import Signin from "./components/Signin";
import Cart from "./components/Cart";
const App =()=> {
    const [storeArr, setStoreArr] = useState([])

    useEffect(()=> {
        const url = 'http://localhost:3003/api/store'

        axios.get(url)
        .then(res => {
            setStoreArr(res.data)
        })
    }, [])


    return(
        <>
        <div>
            <Header/>
            <div className="container">
                <Routes>
                    <Route path='/' index element={<Home props={storeArr}/>} />
                    <Route path='/phone' element={<Phone />} />
                    <Route path='/laptop' element={<Laptop />} />
                    <Route path='/tv' element={<Tv/>}  />
                    <Route path='/main' element={<Main />} />
                    <Route path='/signin' element={<Signin />} />
                    <Route path='/cart' element={<Cart />} />
                </Routes>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default App