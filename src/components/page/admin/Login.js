import React from "react"
import Label from "../../base/Label";
import Input from "../../base/Input";
import {Button, Container, Modal, Row} from "react-bootstrap";
import {connect} from 'react-redux';
import {authorization, changeField, checkValidation, closeForm} from "../../../store/login/actions";
import {ACTIVE_USER} from "../../../data/Constants";

class Login extends React.Component {

    handleSubmit = () => {
        this.props.checkValidation();
        // console.log(this.props.data);
        this.props.authorization(this.props.data);
    };

    handleClose = () => {
        localStorage.removeItem(ACTIVE_USER);
        this.props.closeForm()
    };

    onChange = (id, value, isValid, required) => {
        // console.log(value);
        this.props.changeLogin(id, value, required, isValid);
    };

    render() {
        const {show, username, password} = this.props;
        // console.log(this.props.username);
        return (
            <Modal
                show={show}
                onHide={this.handleClose}
                dialogClassName="modal"
                // aria-labelledby="example-custom-notificationModal-styling-title"
                centered
                keyboard={false}
                backdrop='static'>
                <Modal.Header className="justify-content-md-center">
                    <Modal.Title>
                        АВТОРИЗАЦИЯ
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Label value="Логин: "/>
                            <Input id="username"
                                   placeholder="Логин"
                                   onChange={this.onChange}
                                   value={username.value}
                                   required={true}
                                   isValid={username.isValid}/>
                        </Row>
                        <Row className="my-3">
                            <Label value="Пароль: "/>
                            <Input id="password"
                                   type="password"
                                   placeholder="Пароль"
                                   onChange={this.onChange}
                                   value={password.value}
                                   required={true}
                                   isValid={password.isValid}/>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={this.handleClose}>
                        Отменить
                    </Button>
                    <Button variant="success" onClick={this.handleSubmit}>
                        Войти
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.login.fields,
        username: state.login.fields.filter(v => v.id === 'username')[0],
        password: state.login.fields.filter(v => v.id === 'password')[0],
        show: state.login.settings.show
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLogin: (id, value, required, isValid) => dispatch(changeField(id, value, required, isValid)),
        checkValidation: () => dispatch(checkValidation()),
        authorization: (data) => dispatch(authorization(data)),
        closeForm: () => dispatch(closeForm())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);