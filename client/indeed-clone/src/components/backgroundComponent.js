import React, { useReducer, useState } from 'react';
const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

function Background() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

 }
 const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div className="wrapper">
      <h1 className = "middle">Job application listing</h1>
      {submitting &&
       <div className = "middle">
         You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}  
         </ul>
       </div>

     }
      <form className ="middle" onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Club Name:</p>
            <input name="orgName" onChange={handleChange} required/>
          </label>
          <label>
            <p>Position Title:</p>
            <input name="jobTitle" onChange={handleChange} required/>
          </label>
          <label>
            <p>Organization Type:</p>
            <input name="orgType" onChange={handleChange} required/>
          </label>
          <label>
            <p>Club Description:</p>
            <input name="orgDescription" onChange={handleChange} required/>
          </label>
          <label>
            <p>Job Description:</p>
            <input name="jobdescription" onChange={handleChange} required/>
          </label>
          <label>
            <p>Posting Date:</p>
            <input name="postingDate" onChange={handleChange} required/>
          </label>
          <label>
            <p>Time Commitment:</p>
            <input name="timeCommitment" onChange={handleChange} required/>
          </label>
          <label>
            <p>Meeting Type</p>
            <input name="meetingType" onChange={handleChange} required/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Background;