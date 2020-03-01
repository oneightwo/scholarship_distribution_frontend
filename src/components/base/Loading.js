import React from 'react';
import PropTypes from 'prop-types';
import {Container, Modal} from "react-bootstrap";
import {connect} from "react-redux";

class Loading extends React.Component {

    static propTypes = {
        show: PropTypes.bool
    };

    static defaultProps = {
        show: null
    };

    render() {
        const {show} = this.props;
        console.log('LOADING....');
        return (
            <Modal
                show={show}
                dialogClassName="modal"
                size='sm'
                centered
                scrollable={false}
                keyboard={false}
                backdrop='static'
                animation={false}>
                <Modal.Body>
                    <Container>
                        <div className='row'>
                            <div className="spinner-border text-primary mx-3" role="status"/>
                            <h4 className='text-primary mx-3'>Отправка...</h4>
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }
}
const mapStateToProps = state => {
    return {
        show: state.registration.settings.sending
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
