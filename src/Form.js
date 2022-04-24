import { useState } from "react";

export default function Form({ setGreeting }) {
	const key = process.env.REACT_APP_SMARTY_WEBSITE_KEY;
	const [name, setName] = useState('');
	const [street, setStreet] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zip, setZip] = useState('');

	const setFunctions = {
		setName: setName,
		setStreet: setStreet,
		setCity: setCity,
		setState: setState,
		setZip: setZip
	}

	function handleChange(e) {
		setFunctions[`set${e.target.id}`](e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		const url = `https://us-street.api.smartystreets.com/street-address?key=${key}&street=${street}&city=${city}&state=${state}&zipcode=${zip}`;
		handleResponse(url);
	}

	function handleSuccess(data) {
		console.log(data)
	}
	
	function handleError(response) {
		console.log(response);
	}

	async function handleResponse(url) {
		try {
			const result = await fetch(url);
			const data = await result.json();
			if (!data.length) {
				setGreeting('Sorry, that address doesn\'t exist. Please try again');
				for(const key in setFunctions) {
					setFunctions[key]('');
				}
			} else {
				handleSuccess(data);
			}
		} catch(err) {
			handleError(err);
		}
	}

	return (
		<div className="form-wrapper">
			<form onSubmit={e => handleSubmit(e)} action="#" method="post" className="px-3" >
			<div className="mb-3">
					<label htmlFor="Name" className="form-label">Name</label>
					<input type="text" className="form-control" id="Name" value={name} onChange={e => handleChange(e)} required />
				</div>
				<div className="mb-3">
					<label htmlFor="Street" className="form-label">Street Address</label>
					<input type="text" className="form-control" id="Street" value={street} onChange={e => handleChange(e)} required />
				</div>
				<div className="mb-3">
					<div className="city-wrapper">
						<label htmlFor="City" className="form-label">City</label>
						<input type="text" className="form-control" id="City" value={city} onChange={e => handleChange(e)} required />
					</div>
					<div className="state-wrapper">
						<label htmlFor="State" className="form-label">State</label>
						<input type="text" className="form-control" id="State" value={state} onChange={e => handleChange(e)} required />
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="Zip" className="form-label">Zipcode</label>
					<input type="text" className="form-control" id="Zip" value={zip} onChange={e => handleChange(e)} required />
				</div>
				<button className="btn btn-secondary" action="submit">Submit</button>
			</form>
		</div>
	);
}