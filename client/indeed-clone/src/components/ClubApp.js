import { useState } from "react";
import App from "../App";
import Toggle from 'react-toggle';
import "react-toggle/style.css";

export default function ClubApp(props) {
  const [organization, setOrganization] = useState("");
  const [category, setCategory] = useState("");
  const [roleTitle, setRoleTitle] = useState("");
  const [timeCommit, setTimeCommit] = useState("");
  const [meetingType, setMeetingType] = useState("");
  const [semester, setSemester] = useState("");
  const [duesRequired, setDuesRequired] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <h2>Provide Basic Information</h2>
        <div className="InputInfo">
          <div>
            <h5>Organization</h5>
            <input
              onChange={(e) => {
                setOrganization(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div>
            <h5>Category</h5>
            <input
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            />
          </div>
          <div>
            <h5>Role Title</h5>
            <input
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            />
          </div>
          <div>
            <h5>Time Commit</h5>
            <input
              onChange={(e) => {
                setTimeCommit(e.target.value)
              }}
            />
          </div>
          <div>
            <h5>Semester</h5>
            <input
              onChange={(e) => {
                setSemester(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div>
            <h5>Meeting Type</h5>
            <input
              onChange={(e) => {
                setCategory(e.target.value)
              }}
            />
          </div>
          <div>
            <h5>Are dues required?</h5>
            <Toggle
              className="Toggle"
              icons={false}
              onChange={(e) => {
                setDuesRequired(e.target.value)
              }}
            />
          </div>
        </div>
      </header>
    </div>
  );
}