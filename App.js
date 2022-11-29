import './App.css';
import Home from './components/Home';
import JobFind from './components/JobFind';


// The primary component for the entire application
// This will contain the other components that you use
// in your application, such as Home
function App() {
  return (
    <div className="App">

    
        
         <Home />
         <JobFind />

         
      

    </div>
    
      
     
  );
}

export default App;