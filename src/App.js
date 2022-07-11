import './App.css';
import Login from './Login';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} exact/>
      </Routes>
    </Router>
  );
}

export default App;
