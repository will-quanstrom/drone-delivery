import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function Verify({ setView }) {
	const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;
	console.log(key)
	const mapStyles = {        
		minHeight: '20rem',
		width: '100%'};
	  
	  const defaultCenter = {
		lat: 40.4842, lng: -88.9937
	  }
	  
	  return (
		 <LoadScript
		   googleMapsApiKey={key}>
			<GoogleMap
			  mapContainerStyle={mapStyles}
			  zoom={7}
			  center={defaultCenter}
			/>
		 </LoadScript>
	  )
	
}