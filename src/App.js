import {StyledHeading} from './components/styles/StyledHeading'
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar/>
        <StyledHeading className="text-green-800 underline">
        Hello world!
        </StyledHeading>
      <Footer/>
    </>
  );
}

export default App;

