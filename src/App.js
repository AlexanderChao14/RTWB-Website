import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Volunteer from './components/pages/Volunteer'

function App() {
  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/AboutUs" element={<AboutUs/>}/>
              <Route path="/Volunteer" element={<Volunteer/>}/>
              <Route index element={<Home/>}/>
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;

