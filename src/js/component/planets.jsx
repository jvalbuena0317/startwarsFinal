import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Planets = () => {
    const { store } = useContext(Context)
    return (
        <div className="container">
            <h1 className="text-danger"> Planets</h1>
            <div className="my-carousel">
                {store.planets.map((item) => {
                    return (
                        <div>
                            <div className="my-card">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} className="card-img-top rounded" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><b>{item.properties.name}</b></h5>
                                    <p className="card-text"><b>Population:</b> {item.properties.population}</p>
                                    <p className="card-text"><b>Terrain:</b> {item.properties.terrain}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <div>
                                        <Link to={`/component/planets/${item._id}`} className="btn btn-outline-primary">Learn More</Link></div>

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

export default Planets;
