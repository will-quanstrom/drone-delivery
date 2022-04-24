export default function Footer () {
	return (
		<footer>
			<div className="container-fluid">
				<div className="row justify-content-between px-3">
					<div className="col icon-wrapper">
						<object type="image/svg+xml" data="./drone-icon.svg">Drone Flying</object>
					</div>
					<div className="col d-flex justify-content-end align-items-center copyright">
						<p>&copy; Drone Drop Delivery 2022</p>
					</div>
				</div>
			</div>
		</footer>
	);
}