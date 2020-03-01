import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Admin from "./components/Admin";
import NavigationHeader from "./components/NavigationHeader";
import Login from "./components/Login";
import FormRegistration from "./components/FormRegistration";
import Loading from "./components/base/Loading";
import TextModal from "./components/base/TextModal";

const App = ({store}) => (
    <Provider store={store}>
            <BrowserRouter>
                <NavigationHeader/>
                <Switch>
                    <Route exact path='/' component={FormRegistration}/>
                    <Route path='/admin' component={Admin}/>
                </Switch>
                <Login/>
                <Loading/>
                <TextModal/>
            </BrowserRouter>
    </Provider>
);

export default App;
