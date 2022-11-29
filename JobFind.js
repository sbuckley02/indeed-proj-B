// Imports
import axios from 'axios';
import {useState, useEffect} from 'react';




// A sample component arbitrarily called "Home"
function JobFind() {
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
		<div className="JobFind">
			<main className = "job-grid">
			<article className ="job"> 
					<h1 className="jobTitle"> GT WebDev</h1>
					<p className= "jobCompany">Beginner Friendly</p>
					<p className="jobLocation"> College of Computing </p>

					<p className="jobDetail"> Tuesday 6.30-7.30</p>
					<p className="jobDetail"> Howey Building</p>
					<p className="jobDetail"> 3hr/wk </p>

					<ul> 
						<li> 
							Job Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

						</li>
					</ul>

				</article>


				<article className ="job"> 
					<h1 className="jobTitle"> GT WebDev</h1>
					<p className= "jobCompany">Beginner Friendly</p>
					<p className="jobLocation"> College of Computing </p>

					<p className="jobDetail"> Tuesday 6.30-7.30</p>
					<p className="jobDetail"> Howey Building</p>
					<p className="jobDetail"> 3hr/wk </p>

					<ul> 
						<li> 
							Job Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

						</li>
					</ul>

				</article>

				<article className ="job"> 
					<h1 className="jobTitle"> GT WebDev</h1>
					<p className= "jobCompany">Beginner Friendly</p>
					<p className="jobLocation"> College of Computing </p>

					<p className="jobDetail"> Tuesday 6.30-7.30</p>
					<p className="jobDetail"> Howey Building</p>
					<p className="jobDetail"> 3hr/wk </p>

					<ul> 
						<li> 
							Job Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

						</li>
					</ul>

				</article>

				<article className ="job"> 
					<h1 className="jobTitle"> GT WebDev</h1>
					<p className= "jobCompany">Beginner Friendly</p>
					<p className="jobLocation"> College of Computing </p>

					<p className="jobDetail"> Tuesday 6.30-7.30</p>
					<p className="jobDetail"> Howey Building</p>
					<p className="jobDetail"> 3hr/wk </p>

					<ul> 
						<li> 
							Job Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

						</li>
					</ul>

				</article>

			</main>
			
            

		

			
			
			
		</div>
	)
}

export default JobFind;