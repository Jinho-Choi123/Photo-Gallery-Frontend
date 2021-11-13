import './App.css';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import {Link, Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
