import './App.css';
import ReviewPosting from './components/reviewPosting'
import Background from './components/backgroundComponent'
// The primary component for the entire application
// This will contain the other components that you use
// in your application, such as Home
function App() {
 return (
   <div>
     <header>
       <ReviewPosting/>
       <Background/>
     </header>
   </div>
 );
}
 
export default App;