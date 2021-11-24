import './App.css';
import {Nav} from './nav.js'
import {Home} from './Home.js';
import {Favourites} from './Favourites.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
         <Nav/>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/favourites" exact element ={<Favourites/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
