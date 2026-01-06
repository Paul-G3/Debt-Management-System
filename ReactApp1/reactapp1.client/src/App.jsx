import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "..//src/Landing/Components/LandingPage"
import './App.css';

function App() {


    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage /> }></Route>  
            </Routes>
        </Router>
    );
}

export default App;