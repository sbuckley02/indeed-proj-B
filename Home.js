// Imports
import axios from 'axios';
import {useState, useEffect} from 'react';
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'

<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Bodoni&display=swap');
</style>

// A sample component arbitrarily called "Home"
function Home() {
	const [sampleBackendText, setSampleBackendText] = useState();

	// When the component mounts, call the back-end API endpoint to
	// get its text
	useEffect(() => {
		axios.get('http://localhost:4000/api/sample-req')
			.then(response => {
				console.log(JSON.stringify(response))
				setSampleBackendText(response.data);
			}).catch(err => {
				console.log(err);
				setSampleBackendText('null');
			})
	}, []);

	// Return the HTML that will display for this component, including an
	// embedded variable
	return (
		<div className="App">

			<form>

			

				<label id="searchLabel" for="search">What?</label>
				<input type="text" placeholder="Role, keywords, or club" id="search"   /> < AiOutlineSearch />

			

			<label id="whereLabel" for="where">Where? </label>
			<input type="text" placeholder= "City, state, zip code, or 'remote' " id="where"   /> < HiOutlineLocationMarker />

			<button id="searchButton"> Search Jobs </button>

			<h2 id="resume"> <span id="resumeLabel"> Post your Resume </span> - It only takes a few seconds </h2>

			<h2 id="employer"> <span id="employerLabel"> Club Execs: post a role </span> - Your next leader is here </h2>

			<hr></hr>

			<h2 id="jobFeed"> Club Feed</h2>






			</form>

			
			
			
		</div>
	)
}

export default Home;