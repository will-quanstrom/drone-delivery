export default function Header() {
	return (
		<header>
			<div className="container-fluid">
				<nav className="row justify-content-between navbar px-3">
					<div className="col navbar-brand mb-0 h1">Drone Drop Delivery</div>
					<div className="col icon-wrapper d-flex justify-content-end">
						<object type="image/svg+xml" data="./drone-icon.svg">Drone Flying</object>
					</div>
				</nav>
			</div>
		</header>
	);
}