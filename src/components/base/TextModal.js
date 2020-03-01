import React from 'react';
import {Container, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {closeNotification} from "../../store/registration/actions";

class TextModal extends React.Component {

    handleClick = () => {
        const {closeNotification, isOk} = this.props;
        closeNotification(isOk);
    };

    className = (isOk) => {
        const defaultClassName = 'btn col-4';
        return isOk ? defaultClassName + ' btn-success' : defaultClassName + ' btn-danger';
    };

    render() {
        const {show, isOk} = this.props;
        console.log('SUCCESS....', show, isOk);
        return (
            <Modal
                show={show}
                dialogClassName="modal"
                size='sm'
                centered
                animation={false}>
                <Modal.Body>
                    <Container>
                        {isOk ? 'Регистрация прошла успешно' : 'Произошла ошибка'}
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className='container-fluid'>
                        <div className='row justify-content-end'>
                            <button className={this.className(isOk)} onClick={this.handleClick}>
                                Ок
                            </button>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.registration,
        isOk: state.registration.notification.isOk,
        show: state.registration.notification.show
    }
};

const mapDispatchToProps = dispatch => {
    return {
        closeNotification: (isOk) => dispatch(closeNotification(isOk))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TextModal);
