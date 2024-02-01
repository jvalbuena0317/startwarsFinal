import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

1


const People = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className="container">
            <h1 className="text-danger"> People</h1>
            <div className="my-carousel">
                {store.people.map((item) => {
                    return (
                        <div>
                            <div className="my-card">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top rounded" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title"><b>{item.properties.name}</b></h5>
                                    <p className="card-text"><b>Gender:</b> {item.properties.gender}</p>
                                    <p className="card-text"><b>Hair Color:</b> {item.properties.hair_color}</p>
                                    <p className="card-text"><b>Eyes Color:</b> {item.properties.eye_color}</p>
                                </div>
                                <div className="card-footer d-flex justify-content-between">
                                    <div>
                                        <Link to={`/component/people/${item._id}`} className="btn btn-outline-primary">Learn More</Link></div>
                                    <div>
                                        <button onClick={() => actions.addToFavorites(item)}>
                                            <i className="fa fa-heart text-danger" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default People;