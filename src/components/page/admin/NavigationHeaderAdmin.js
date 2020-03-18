import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {
    changeActiveRegistration,
    initNavHeader,
    logoff,
    setActiveRegistration
} from "../../../store/navigationHeader/actions";

class NavigationHeaderAdmin extends React.Component {

    componentDidMount() {
        this.props.initNavHeader();
    }

    onClick = () => {
        this.props.logoff();
    };

    handleSwitch = (e) => {
        const isActive = e.target.checked;
        console.log(isActive);
        this.props.setActiveRegistration(isActive);
        this.props.changeActiveRegistration(isActive);
    };

    render() {
        // console.log('NavigationHeaderAll token', localStorage.getItem(ACTIVE_USER));
        const {activeRegistration} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light shadow bg-light fixed-top">
                <a className="navbar-brand" href="/registration">Стипендия Губернатора</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className='navbar-nav mr-auto'>
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to='/main' className="nav-link">Главная</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/participants' className="nav-link">Участники</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/winners' className="nav-link">Победители</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/reports' className="nav-link">Отчеты</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/history' className="nav-link">История</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='mr-4'>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={this.handleSwitch} checked={activeRegistration}/>
                            <label className="custom-control-label" htmlFor='customSwitch1'>Запустить
                                регистрацию</label>
                        </div>
                    </div>
                    <img src='/logout.svg'
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
        activeRegistration: state.navigation.activeRegistration
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logoff: () => dispatch(logoff()),
        setActiveRegistration: () => dispatch(setActiveRegistration()),
        initNavHeader: () => dispatch(initNavHeader()),
        changeActiveRegistration: (isActive) => dispatch(changeActiveRegistration(isActive))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeaderAdmin);