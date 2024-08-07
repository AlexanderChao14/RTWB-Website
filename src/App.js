import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import GetInvolved from './components/pages/GetInvolved'
import Volunteers from './components/pages/Volunteers'
import GetDeployed from './components/pages/GetDeployed'
import HealthEducationPartner from './components/pages/HealthEducationPartner'
import Board from './components/pages/Board'
import ProfessionalTeams from './components/pages/ProfessionalTeams'
import News from './components/pages/News'
import TestPage from './components/pages/TestPage'
import Sponsors from './components/pages/Sponsors'
import WhereWeWork from './components/pages/WhereWeWork'

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/AboutUs" element={<AboutUs/>}/>
              <Route path="/Volunteers" element={<Volunteers/>}/>
              <Route path="/GetInvolved/" element={<GetInvolved/>}/>
              <Route path="/GetDeployed" element={<GetDeployed/>}/>
              <Route path="/HealthEducationPartner" element={<HealthEducationPartner/>}/>
              <Route path="/Board" element={<Board/>}/>
              <Route path="/Teams" element={<ProfessionalTeams/>}/>
              <Route path="/News" element={<News/>}/>
              <Route path="/Sponsors" element={<Sponsors/>}/>
              <Route path="/TestPage" element={<TestPage/>}/>
              <Route path="/WhereWeWork" element={<WhereWeWork/>}/>
              <Route index element={<Home/>}/>
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

