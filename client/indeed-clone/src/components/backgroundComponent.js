const Background= () => {
    return (
        <div className="background">
            <div className="input divider">
                <form>
                    <label>Club Name:</label>
                    <input type="text" className ="inputbuttons"></input>
                </form>
                <form>
                    <label>Job Title:</label>
                    <input type="text" className ="inputbuttons"></input>
                </form>
                <form>
                    <label>Location (Main Campus, France, etc.):</label>
                    <input type="text" className ="inputbuttons"></input>
                </form>
                <p>Attendance Type:</p>
                <form action="/action_page.php">
                    <input type="checkbox" id ="Hybrid"></input>
                    <lable for="Hybrid">Hybrid</lable>
                    <br></br>
                    <input type="checkbox" id ="Online"></input>
                    <lable for="Online">Online</lable>
                    <br></br>
                    <input type="checkbox" id ="Both"></input>
                    <lable for="Both">Both</lable>                
                </form>
            </div>
            <div className = "description"> 
                <form>
                    <label className = "descriptiontext">Include a Club Description:</label>
                    <input type="text" className ="inputbuttons"></input>
                </form>
            </div>
            <div className="input divider">
            </div>
            <div className="input divider">
                <form>
                    <label>Hours per Week/Schedule:</label>
                    <input type="text" className ="inputbuttons"></input>
                </form>
                <form>
                    <label>Number of Openings:</label>
                    <input type="text" className ="inputbuttons"></input>
                </form>
                <form>
                    <label>Building Location:</label>
                    <input type="text" className ="inputbuttons"></input>
                </form>
                <form>
                    <label>Deadline to Apply:</label>
                    <input type="text" className ="inputbuttons"></input>
                </form>
            </div>
            <div className = "description"> 
                <form>
                    <label className = "descriptiontext">Include a Position Description:</label>
                    <input type="text" className ="inputbuttons"></input>
                </form>
            </div>
        </div>
    )
}
export default Background
