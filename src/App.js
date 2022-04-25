import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Map from "./Map";

export default function App() {
	const [greeting, setGreeting] = useState('Welcome');
	const [view, setView] = useState('form');
	let currentView;
	if (view === 'form') currentView = <Form setGreeting={setGreeting} setView={setView} />;
	if (view === 'map') currentView = <Map />

	return (
		<div className='d-flex flex-column justify-content-between' style={{ minHeight: "100vh", backgroundColor: "#f8f8f8" }}>
			<Header />
			<div className="container">
				<div className="row">
					<main className='text-center pb-5 px-lg-5'>
						<h4 className='my-5'>{greeting}</h4>
						{currentView}
					</main>
				</div>
			</div>
			<Footer />
		</div>
	);
}
