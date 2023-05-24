import  React from "react";
import { Outlet,Link } from "react-router-dom"


const Card =(props)=> {
    return (
        <>
        <div className="col d-flex justify-content-center">
                <div className="card item-card">
                    <img src={props.image} alt={props.desc} className="card-img-top card-image" />
                    <div className="card-body">
                    <h2 className="card-title text-center">{props.title}</h2>
                        <ul className="store-list list-group list-group-flush">
                            <li className="store-item deals-item list-group-item">{props.deals }</li>
                            <li className="store-item department-item list-group-item">{props.department}</li>
                            <li className="store-item year-item list-group-item">{props.year}</li>
                            <li className="store-item price-item list-group-item">${props.price}</li>
                        </ul>
                        <button className="btn cart-btn">add to cart</button>
                        <Link to={`/store/${props.type}/${props.id}`} key={props.key} >
                            <button className="find-more-btn text-uppercase">findout more</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Card