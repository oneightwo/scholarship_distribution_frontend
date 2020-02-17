import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import {connect} from "react-redux";
import {openForm} from "../store/login/actions";
import {Link} from "react-router-dom";

class NavigationHeader extends React.Component {

    onClick = () => {
        this.props.openForm();
    };

    render() {
        return (
            <Navbar expand="lg" bg="light shadow">
                <Link to='/'>
                    <Navbar.Brand>Стипендия Губернатора</Navbar.Brand>
                </Link>
                <Nav className="mr-auto"/>
                <Nav>
                    <img src="/login.svg"
                         width="30"
                         height="30"
                         alt="React Bootstrap logo"
                         onClick={this.onClick}/>
                </Nav>
            </Navbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeader);