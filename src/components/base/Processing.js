import React from 'react';
import PropTypes from 'prop-types';
import {Container, Modal} from "react-bootstrap";
import {connect} from "react-redux";

class Processing extends React.Component {

    static propTypes = {
        show: PropTypes.bool,
        text: PropTypes.string
    };

    static defaultProps = {
        show: false,
        text: ''
    };

    render() {
        const {show, text} = this.props;
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
                            <h4 className='text-primary mx-3'>{text}</h4>
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        );
    }
}
const mapStateToProps = state => {
    return {
        show: state.processing.show,
        text: state.processing.text
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Processing);
