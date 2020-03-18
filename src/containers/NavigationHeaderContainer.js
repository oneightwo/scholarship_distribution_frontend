import React from 'react';
import {connect} from "react-redux";
import NavigationHeaderAll from "../components/page/user/NavigationHeaderAll";
import NavigationHeaderAdmin from "../components/page/admin/NavigationHeaderAdmin";
import {ACTIVE_USER} from "../data/Constants";
import {setActiveAdmin} from "../store/navigationHeader/actions";

class NavigationHeaderContainer extends React.Component {

    componentDidMount() {
        if (localStorage.getItem(ACTIVE_USER) !== null) {
            this.props.setActiveAdmin(true);
        }
    }

    render() {
        const {isAdminActive} = this.props;
        console.log('NavigationHeaderContainer activeUser', isAdminActive);
        return (
            isAdminActive === true ? <NavigationHeaderAdmin/> : <NavigationHeaderAll/>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.navigation,
        isAdminActive: state.navigation.isAdminActive
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setActiveAdmin: (isActive) => dispatch(setActiveAdmin(isActive))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeaderContainer);