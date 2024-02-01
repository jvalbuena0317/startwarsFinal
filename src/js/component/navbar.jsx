import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="container">
			<nav className="navbar navbar-light  mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						< img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" alt="Logo" width="150" height="80" /></span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</a>
						<ul className="dropdown-menu dropdown-menu-end justify-content-between align-item center">
							{store.favorites.map((item) => {
								return (
									<li key={item._id} className="d-flex">
										<a className="dropdown-item" href="#">{item.properties?.name}</a>
										<span onClick={() => actions.deleteFav(item._id)} className="mx-3"><i class="fas fa-trash"></i></span>
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Navbar;