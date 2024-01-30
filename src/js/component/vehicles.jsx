import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Vehicles = () => {
    const { store } = useContext(Context)
    return (
        <div className="container">
            <h1 className="text-danger"> Vehicles</h1>
            <div className="my-carousel">
                {store.vehicles.map((item) => {
                    return (
                        <div>
                            <div className="my-card">
                                <img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top rounded" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.properties.name}</h5>
                                    <p className="card-text"><b>Model:</b> {item.properties.model}</p>
                                    <p className="card-text"><b>Class:</b> {item.properties.vehicle_class}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <div>
                                        <Link to={`/component/vehicles/${item._id}`} className="btn btn-outline-primary">Learn More</Link></div>
                                    <div><button><i className="fa fa-heart text-danger" /></button></div>

                                </div>
                            </div>
                        </div>


                    )
                })}


            </div>
        </div>
    )
}

export default Vehicles;
