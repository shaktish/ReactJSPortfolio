import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';


const Layout = (props) => {
    return (
        <div className="section">
            <Navbar />
            {props.children}            
        </div>
    )

}

export default Layout;