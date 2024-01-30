import React from "react";
import People from "../component/people.jsx"
import "../../styles/home.css";
import Planets from "../component/planets.jsx"
import Vehicles from "../component/vehicles.jsx";




const Home = () => {
	return (
		<div>
			<People />
			<Planets />
			<Vehicles />


		</div>
	);
}

export default Home;