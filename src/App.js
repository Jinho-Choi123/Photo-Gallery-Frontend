import './App.css';
import HomePage from './components/pages/Home';
import LoginPage from './components/pages/Login';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
