// Import data
import Gallery from './gallery';
import Directory from './directory'; 
import Search from './searchbar';
import Sidebar from './sidebar'; 
// Import components
import './App.css';


function App(){
  return (
   
    <div>
      <h1>craigslist</h1>
      <div className="App">
      <Gallery />
      </div>
    </div>
  );
}

export default App;
