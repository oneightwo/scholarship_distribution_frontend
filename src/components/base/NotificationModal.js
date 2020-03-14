import React from 'react';
import {Container, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {hideNotificationModal} from "../../store/notificationModal/actions";

class NotificationModal extends React.Component {

    handleClick = () => {
        const {hideAlert} = this.props;
        hideAlert();
    };

    className = (isOk) => {
        const defaultClassName = 'btn col-4';
        return isOk ? defaultClassName + ' btn-success' : defaultClassName + ' btn-danger';
    };

    render() {
        const {show, typeIsOk, text} = this.props;
        console.log('SUCCESS....', show, typeIsOk);
        return (
            <Modal
                show={show}
                dialogClassName="modal"
                size='sm'
                centered
                animation={false}>
                <Modal.Body>
                    <Container>
                        {text}
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <div className='container-fluid'>
                        <div className='row justify-content-end'>
                            <button className={this.className(typeIsOk)} onClick={this.handleClick}>
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
        data: state.alert,
        typeIsOk: state.alert.typeIsOk,
        show: state.alert.show,
        text: state.alert.text
    }
};

const mapDispatchToProps = dispatch => {
    return {
        hideAlert: (isOk) => dispatch(hideNotificationModal(isOk))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NotificationModal);
