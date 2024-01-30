import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">< img src="https://1000logos.net/wp-content/uploads/2017/06/Star-Wars-Logo-1.png" alt="Logo" width="100" height="50
				"/></span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<a className="btn btn-primary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>

						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a>
								<i class="fas fa-trash"></i></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
export default Navbar;