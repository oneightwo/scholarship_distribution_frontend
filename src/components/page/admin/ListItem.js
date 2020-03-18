import React from 'react';
import PropTypes from "prop-types";

class ListItem extends React.Component {

    state = {
        showButton: false
    };

    static propTypes = {
        student: PropTypes.object.isRequired,
        onClick: PropTypes.func
        // id: PropTypes.number.isRequired,
        // surname: PropTypes.string.isRequired,
        // name: PropTypes.string.isRequired,
        // patronymic: PropTypes.string,
        // university: PropTypes.object.isRequired,
        // course: PropTypes.object.isRequired,
        // email: PropTypes.string.isRequired,
        // phone: PropTypes.string,
        // faculty: PropTypes.string.isRequired,
        // scienceDirection: PropTypes.object.isRequired,
        // topic: PropTypes.string.isRequired,
        // c1: PropTypes.number.isRequired,
        // c2: PropTypes.number.isRequired,
        // c3: PropTypes.number.isRequired,
        // c4: PropTypes.number.isRequired,
        // c5: PropTypes.number.isRequired,
        // c6: PropTypes.number.isRequired,
        // c7: PropTypes.number.isRequired,
        // c8: PropTypes.number.isRequired,
        // c9: PropTypes.number.isRequired,
        // c10: PropTypes.number.isRequired,
        // c11: PropTypes.number.isRequired,
        // c12: PropTypes.number.isRequired,
        // c13: PropTypes.number.isRequired,
        // c14: PropTypes.number.isRequired,
        // c15: PropTypes.number.isRequired,
        // rating: PropTypes.number.isRequired,
        // dataRegistration: PropTypes.string.isRequired,
        // valid: PropTypes.bool.isRequired
    };

    static defaultProps = {
        student: {},
        onClick: (student) => {
        }
        // id: null,
        // surname: null,
        // name: null,
        // patronymic: null,
        // university: {},
        // course: {},
        // email: "",
        // phone: "",
        // faculty: null,
        // scienceDirection: {},
        // topic: null,
        // c1: null,
        // c2: null,
        // c3: null,
        // c4: null,
        // c5: null,
        // c6: null,
        // c7: null,
        // c8: null,
        // c9: null,
        // c10: null,
        // c11: null,
        // c12: null,
        // c13: null,
        // c14: null,
        // c15: null,
        // rating: null,
        // dataRegistration: null,
        // valid: null
    };

    showButton = () => {
        this.setState({showButton: true});
    };

    hideButton = () => {
        this.setState({showButton: false});
    };

    render() {
        const {showButton} = this.state;
        const {onClick, student, student: {surname, name, patronymic, university, scienceDirection, rating, course, topic}} = this.props;
        return (
            <div className="card" onMouseOver={() => this.showButton()} onMouseOut={() => this.hideButton()}
                 onClick={() => onClick(student)}>
                <div className="card-body m-0 p-0">
                    <div className='row align-items-center p-0 m-1'>
                        <div className='col-3 text-truncate my-2'>
                            {surname + " " + name + " " + patronymic}
                        </div>
                        <div className='col-1 text-truncate text-center'>
                            {course.name}
                        </div>
                        <div className='col-1 text-truncate'>
                            {university.abbreviation}
                        </div>
                        <div className='col-1 text-truncate'>
                            {scienceDirection.name}
                        </div>
                        <div className='col-1 text-truncate text-center'>
                            {rating}
                        </div>
                        <div className='col-4 text-truncate'>
                            {topic}
                        </div>
                        <div className='col-1 mx-0 px-0 text-center' hidden={!showButton}>
                            <img src='/pdf.svg'
                                 width="35"
                                 height="35"
                                 alt="PDF"
                                 onClick={this.onClick}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;