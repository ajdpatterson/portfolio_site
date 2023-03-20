import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import LandingContainer from './LandingContainer';
// import CVContainer from './CVContainer';
import WorkContainer from './WorkContainer';

const AboutContainer = () => {
    return(
        <div>
            <NavBar />
            
            <Router>
                <Routes>
                    <Route path="/" element={<LandingContainer />} />
                    {/* <Route path="/CV" element={<CVContainer />} /> */}
                    <Route path="/work" element={<WorkContainer />} />
                </Routes>
            </Router>


        </div>
    )
}

export default AboutContainer;