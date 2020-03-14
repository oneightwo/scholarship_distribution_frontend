import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {connect} from "react-redux";
import {openForm} from "../store/login/actions";
import {Link} from "react-router-dom";
import {ACTIVE_USER} from "../data/Constants";

class NavigationHeaderAll extends React.Component {

    onClick = () => {
        this.props.openForm();
    };

    render() {
        // console.log('NavigationHeaderAll token', localStorage.getItem(ACTIVE_USER));
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light light shadow fixed-top">
                <a className="navbar-brand" href="/registration">Стипендия Губернатора</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className='navbar-nav mr-auto'>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Документы</a>
                            </li>
                        </ul>
                    </div>
                        <img src='/login.svg'
                             width="30"
                             height="30"
                             alt="Вход"
                             onClick={this.onClick}/>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => {
    return {
        login: state.login
    }
};

const mapDispatchToProps = dispatch => {
    return {
        openForm: () => dispatch(openForm())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeaderAll);