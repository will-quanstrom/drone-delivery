export default function Verify({ setGreeting, setView, data, resetState, setIsVerify }) {
	function handleSubmit() {

		setGreeting(`Here are all of our subscribers`);
		setView('map');
	}
	return(
		<div>
			<p>{data[0].delivery_line_1}</p>
			<p className="mb-4">{data[0].last_line}</p>
			<button className="btn btn-primary me-2" onClick={handleSubmit}>Correct</button>
			<button className="btn btn-danger ms-2" onClick={() => { resetState(); setIsVerify(false) }}>Wrong</button>
		</div>
	);
}