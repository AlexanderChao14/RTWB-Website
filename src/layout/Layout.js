import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { Outlet} from "react-router-dom";


const Layout = (props) =>{
    return(
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>

    )
}

export default Layout;