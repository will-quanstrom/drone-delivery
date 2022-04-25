export default function Verify({ setGreeting, setView, data, resetState, setIsVerify }) {
	const postURL = process.env.REACT_APP_AWS_API_GATEWAY_URL + '?TableName=drone_subscribers';

	async function handleSubmit() {
		try {
			fetch(postURL, { 
				method: "POST",
				body: JSON.stringify({
					id: (Math.random() * 1000000).toString(),
					lat: data[0].metadata.latitude,
					lon: data[0].metadata.longitude
				})
			}).then(res => {
				if (res.ok) {
					setGreeting(`Here are all of our subscribers`);
					setView('map');
				} else {
					setGreeting('Sorry there was an error. Please try again.')
				}
			});
		} catch(err) {
			console.log(err);
		}
	}
	return(
		<div>
			<p>{data[0].delivery_line_1}</p>
			<p className="mb-4">{data[0].last_line}</p>
			<button className="btn btn-primary me-2" onClick={handleSubmit}>Correct</button>
			<button className="btn btn-danger ms-2" onClick={() => { setGreeting('Welcome'); resetState(); setIsVerify(false) }}>Wrong</button>
		</div>
	);
}