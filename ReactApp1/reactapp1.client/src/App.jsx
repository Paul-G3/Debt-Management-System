import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from "..//src/Landing/Components/LandingPage"
import CustometRoutes from './/Customer/CustometRoutes'
import OwnerRoutes from './Owner/OwnerRoutes';
import './App.css';
import { UserProvider } from './Context/UserContext';

function App() {


    return (
        <UserProvider>
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>  
                <Route path="/Customer/*" element={<CustometRoutes />} />
                <Route path="/Owner/*" element={<OwnerRoutes/> } />
            </Routes>
            </Router>
        </UserProvider>
    );
}

export default App;