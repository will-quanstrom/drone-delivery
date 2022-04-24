import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';

export default function App() {
	const [greeting, setGreeting] = useState('Welcome');

	return (
		<div className='d-flex flex-column justify-content-between' style={{ minHeight: "100vh" }}>
			<Header />
			<main className='container text-center pb-5 px-lg-5'>
				<h4 className='my-5'>{greeting}</h4>
				<Form setGreeting={setGreeting} />	
			</main>
			<Footer />
		</div>
	);
}
