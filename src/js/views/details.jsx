import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Details = () => {
  const params = useParams();
  const [search, setsearch] = useState({});
  const { store } = useContext(Context);

  const detail = () => {
    if (params.nature === "people") {
      const searchFind = store.people.find((item) => item._id === params.id);
      setsearch(searchFind);
    } else if (params.nature === "planets") {
      const searchFind = store.planets.find((item) => item._id === params.id);
      setsearch(searchFind);
    } else {
      (params.nature === "vehicles")
      const searchFind = store.vehicles.find((item) => item._id === params.id);
      setsearch(searchFind);
    }
  };


  useEffect(() => {
    detail()
  }, [store.people, search])

  return (
    <div className="container">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={search?.url} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">hola</h5>
              <p className="card-text">{search?.properties?.name}</p>
            </div>
          </div>
        </div>
      </div>


      <div className="card d-flex">
        <div className="row">
          <div className="col-2">
            <p className="list-group-item">An item</p> </div>
          <div className="col-2">
            <p className="list-group-item">A second item</p></div>
          <div className="col-2">
            <p className="list-group-item">A third item</p></div>
          <div className="col-2">
            <p className="list-group-item">A third item</p></div>
          <div className="col-2">
            <p className="list-group-item">A third item</p></div>
          <div className="col-2">
            <p className="list-group-item">A third item</p></div>

        </div>
      </div>
    </div>

  )
};


export default Details;
