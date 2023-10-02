import doctor_pepe from "../assets/doctor_pepe.png"
import "./Navbar.css"

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
                    <img src={doctor_pepe} alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>
                    Dr.Pepe Hospital
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#"
							>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Add Patient
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
