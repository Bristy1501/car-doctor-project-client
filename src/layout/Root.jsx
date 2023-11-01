import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Navbar from '../shared/navbar/Navbar';

const Root = () => {
    return (
        <>
          <Navbar></Navbar> 
          <Outlet></Outlet> 
          <Footer></Footer>
        </>
    );
};

export default Root;