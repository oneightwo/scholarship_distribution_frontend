import React from "react"
import {connect} from 'react-redux';
import {openForm} from "../store/login/actions";
import Login from "../components/Login";

class LoginContainer extends React.Component {

    componentDidMount() {
        console.log('OPEN_LOGIN_FORM');
        this.props.openForm();
    }

    render() {
        return (
            <Login/>
        );
    }
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        openForm: () => dispatch(openForm())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);