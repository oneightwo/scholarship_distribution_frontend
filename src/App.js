import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Login from "./components/page/admin/Login";
import FormRegistration from "./components/page/user/FormRegistration";
import Loading from "./components/base/Processing";
import TextModal from "./components/base/NotificationModal";
import NavigationHeaderContainer from "./containers/NavigationHeaderContainer";
import Main from "./components/page/admin/Main";
import Participants from "./components/page/admin/Participants";
import Reports from "./components/page/admin/Reports";
import History from "./components/page/admin/History";
import EditStudentModal from "./components/page/admin/EditStudentModal";
import Winners from "./components/page/admin/Winners";

const App = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <NavigationHeaderContainer/>
            <div style={{ marginTop: "56px" }}>
                <Switch>
                    <Route exact path='/registration' component={FormRegistration}/>
                    <Route path='/main' component={Main}/>
                    <Route path='/participants' component={Participants}/>
                    <Route path='/reports' component={Reports}/>
                    <Route path='/history' component={History}/>
                    <Route path='/winners' component={Winners}/>
                </Switch>
            </div>
            <Login/>
            <Loading/>
            <TextModal/>
            <EditStudentModal/>
        </BrowserRouter>
    </Provider>
);

export default App;
