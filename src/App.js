import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import GetInvolved from './components/pages/GetInvolved'
import GetDeployed from './components/pages/GetDeployed'
import HealthEducationPartner from './components/pages/HealthEducationPartner'

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/AboutUs" element={<AboutUs/>}/>
              <Route path="/GetInvolved" element={<GetInvolved/>}/>
              <Route path="/GetDeployed" element={<GetDeployed/>}/>
              <Route path="/HealthEducationPartner" element={<HealthEducationPartner/>}/>
              <Route index element={<Home/>}/>
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

