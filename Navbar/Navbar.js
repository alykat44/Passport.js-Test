import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="pos-f-t">
                <div className="collapse " id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <a className="text-white h4" href="/customer">Customer</a>
                        <a className="text-white h4" href="/dispatch">Dispatch</a>
                        {/* <a className="text-white h4" href="/">Login</a> */}
                        {/* <a className="text-white h4" href="/unlock">UNLOCK VEHICLE</a>
                        <a className="text-white h4" href="/tire">CHANGE A TIRE</a>  */}
                  /*   </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button className="navbar-toggler" id="navbtn" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <h1 className="text" id="title">FAST</h1>
                </nav>

            </div>

        );
    }
}


export default Navbar; 






