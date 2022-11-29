import './App.css';
import Background from './components/backgroundComponent'
// The primary component for the entire application
// This will contain the other components that you use
// in your application, such as Home
function App() {
 return (
   <div>
     <header>
       <Background/>
     </header>
   </div>
 );
}
 
export default App;