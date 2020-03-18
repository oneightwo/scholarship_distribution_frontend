import React from "react"
import {connect} from "react-redux";
import {loadWinnerStudents} from "../../../store/reports/actions";

class Winners extends React.Component {

    componentDidMount() {
        this.props.loadWinnerStudents();
    }

    render() {
        const {listWinnerStudents} = this.props;

        console.log('render', listWinnerStudents);
        // Object.entries(listWinnerStudents).forEach(([key, value]) => {
        //     console.log(key, value);
        // });
        return (
            <table className="table table-bordered">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">ФИО</th>
                    <th scope="col">Университет</th>
                    <th scope="col">Курс</th>
                    <th scope="col">Направление</th>
                    <th scope="col">Тема</th>
                    <th scope="col">Рейтинг</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(listWinnerStudents).map(([key, value]) =>
                    <>
                        <tr className='table-active'>
                            <td className='text-center ' colSpan="6"><strong>{key}</strong></td>
                        </tr>
                        {value.map(student =>
                            <tr>
                                <td>{student.surname + " " + student.name + " " + student.patronymic}</td>
                                <td>{student.university.abbreviation}</td>
                                <td>{student.course.name}</td>
                                <td>{student.scienceDirection.name}</td>
                                <td>{student.topic}</td>
                                <td>{student.rating}</td>
                            </tr>
                        )}
                    </>
                )}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = state => {
    return {
        reports: state.reports,
        listWinnerStudents: state.reports.listWinnerStudents
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadWinnerStudents: () => dispatch(loadWinnerStudents())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Winners);