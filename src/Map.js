import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Verify({ setView }) {
	const [locations, setLocations] = useState(null);
	const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;
	const getURL = process.env.REACT_APP_AWS_API_GATEWAY_URL + '?TableName=drone_subscribers';
	const mapStyles = {        
		minHeight: '20rem',
		width: '100%'};
	  
	const defaultCenter = {
	lat: 40.4842, lng: -88.9937
	}

	async function getUsers() {
		try {
			const res = await fetch(getURL);
			const data = await res.json();
			makeMarkers(data);
		} catch(err) {
			console.log(err);
		}
	}

	getUsers();

	let formatedData = [];
	function makeMarkers(data) {
		data.Items.forEach(obj => {
			let locale = {
				location: {
					lat: obj.lat,
					lng: obj.lon
				}
			} ;
			formatedData.push(locale);
		});
		setLocations(formatedData);
	}

	return (
		<div>
			<LoadScript
				googleMapsApiKey={key}>
				<GoogleMap
					mapContainerStyle={mapStyles}
					zoom={7}
					center={defaultCenter}
				>
					{
						locations ? locations.map( (item, index) => {
							return (
								<Marker key={index} position={item.location} />
							)
						})
						: null
					}
				</GoogleMap>
			</LoadScript>
		</div>
	)
	
}