import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

const Details = () => {
  const params = useParams();
  const [search, setsearch] = useState({});
  const { store, actions } = useContext(Context);

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
    <>
      {params.nature === "people" ?
        <div className="container">
          <div className="card mb-3 bg-dark text-white">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${search.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h3 className="card-title">{search?.properties?.name}</h3>
                  <p className="card-text"></p>
                  <p>{search?.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptates dolores harum dolorum cupiditate. Accusantium officia quidem odit quod ducimus sunt omnis non, rem est.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card d-flex justify-content-between p-2 ">
            <div className="row m-0">

              <div className="col-2">
                <h5 className="list-group-item border-0 p-0">Name </h5>
                <p>
                  {search?.properties?.name}</p>

              </div>
              <div className="col-lg-2">
                <h5 className="list-group-item border-0 p-0">Birth</h5>
                <p>
                  {search?.properties?.birth_year}</p>
              </div>
              <div className="col-lg-2">
                <h5 className="list-group-item border-0 p-0">Gender</h5>
                <p>
                  {search?.properties?.gender}</p>
              </div>
              <div className="col-lg-2">
                <h5 className="list-group-item border-0 p-0">Height</h5>
                <p>
                  {search?.properties?.height}</p>
              </div>
              <div className="col-lg-2">
                <h5 className="list-group-item border-0 p-0">Skin Color</h5>
                <p>
                  {search?.properties?.skin_color}</p>
              </div>
              <div className="col-lg-2">
                <h5 className="list-group-item border-0 p-0">Eye Color</h5>
                <p>
                  {search?.properties?.eye_color}</p>
              </div>
            </div>
          </div>
        </div>
        :
        params.nature === "planets" ?
          <div className="container">
            <div className="card mb-3 bg-dark text-white">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`https://starwars-visualguide.com/assets/img/planets/${search.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{search?.properties?.name}</h3>
                    <p className="card-text"></p>
                    <p>{search?.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptates dolores harum dolorum cupiditate. Accusantium officia quidem odit quod ducimus sunt omnis non, rem est.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card d-flex justify-content-between p-2">
              <div className="row">

                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Name </h5>
                  <p>
                    {search?.properties?.name}</p>

                </div>
                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Terrain</h5>
                  <p>
                    {search?.properties?.terrain}</p>
                </div>
                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Population</h5>
                  <p>
                    {search?.properties?.population}</p>
                </div>
                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Climate</h5>
                  <p>
                    {search?.properties?.climate}</p>
                </div>
                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Diameter</h5>
                  <p>
                    {search?.properties?.diameter}</p>
                </div>
                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Created</h5>
                  <p>
                    {search?.properties?.created}</p>
                </div>
              </div>
            </div>
          </div>
          :
          <div className="container">
            <div className="card mb-3 bg-dark text-white">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`https://starwars-visualguide.com/assets/img/vehicles/${search.uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h3 className="card-title">{search?.properties?.name}</h3>
                    <p className="card-text"></p>
                    <p>{search?.description} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptates dolores harum dolorum cupiditate. Accusantium officia quidem odit quod ducimus sunt omnis non, rem est.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card d-flex justify-content-between p-2">
              <div className="row">

                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Name </h5>
                  <p>
                    {search?.properties?.name}</p>

                </div>
                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Model</h5>
                  <p>
                    {search?.properties?.model}</p>
                </div>
                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Crew</h5>
                  <p>
                    {search?.properties?.crew}</p>
                </div>
                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Length</h5>
                  <p>
                    {search?.properties?.length}</p>
                </div>
                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Passengers</h5>
                  <p>
                    {search?.properties?.passengers}</p>
                </div>
                <div className="col-lg-2">
                  <h5 className="list-group-item border-0 p-0">Created</h5>
                  <p>
                    {search?.properties?.created}</p>
                </div>
              </div>
            </div>
          </div>


      }

    </>

  )
};


export default Details;
