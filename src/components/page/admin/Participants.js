import React from "react"
import ListItem from "./ListItem";
import {connect} from "react-redux";
import {loadParticipants, searchName} from "../../../store/participants/actions";
import Input from "../../base/Input";
import {showEditStudentModal} from "../../../store/editStudentModal/actions";

class Participants extends React.Component {

    componentDidMount() {
        this.props.loadParticipants()
    }

    search = (id, value) => {
        this.props.searchName(value);
        console.log("search id", id, "value", value);
    };

    onClickListItem = (student) => {
        console.log("onClickListItem", student);
        this.props.showEditStudentModal(student);
    };

    clearSearch = () => {
        this.props.searchName('');
    };

    render() {
        const {listParticipants, search} = this.props;
        console.log("listParticipants", listParticipants);
        return (
            <div>
                <div className="card fixed-top shadow" style={{marginTop: "56px"}}>
                    <div className="card-body m-1 p-0">
                        <div className='row align-items-center p-0 m-1'>
                            <div className='col-4 input-group'>
                                <Input id='searchName' value={search} onChange={this.search}
                                       placeholder='Поиск (ФИО)...'/>
                                <button className='btn btn-info' onClick={this.clearSearch}>
                                    Очистить
                                </button>
                            </div>
                            <div className='col-1 text-truncate'>
                            </div>
                            <div className='col-1 text-truncate'>
                            </div>
                            <div className='col-1 text-truncate text-center'>
                            </div>
                            <div className='col-4 text-truncate'>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{marginTop: "112px"}}>
                    {listParticipants.map(student =>
                        <ListItem student={student}
                                  onClick={this.onClickListItem}
                            // id={student.id}
                            // surname={student.surname}
                            // name={student.name}
                            // patronymic={student.patronymic}
                            // university={student.university}
                            // course={student.course}
                            // phone={student.phone}
                            // email={student.email}
                            // faculty={student.faculty}
                            // scienceDirection={student.scienceDirection}
                            // topic={student.topic}
                            // c1={student.c1}
                            // c2={student.c2}
                            // c3={student.c3}
                            // c4={student.c4}
                            // c5={student.c5}
                            // c6={student.c6}
                            // c7={student.c7}
                            // c8={student.c8}
                            // c9={student.c9}
                            // c10={student.c10}
                            // c11={student.c11}
                            // c12={student.c12}
                            // c13={student.c13}
                            // c14={student.c14}
                            // c15={student.c15}
                            // rating={student.rating}
                            // dataRegistration={student.dataRegistration}
                            // valid={student.valid}
                        />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        participants: state.participants,
        listParticipants: state.participants.listParticipants,
        search: state.participants.search
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadParticipants: () => dispatch(loadParticipants()),
        searchName: (value) => dispatch(searchName(value)),
        showEditStudentModal: (student) => dispatch(showEditStudentModal(student))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Participants);