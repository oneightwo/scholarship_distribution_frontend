import React from "react"
import {connect} from "react-redux";
import {loadReportByDirections, loadReportByUniversities} from "../../../store/reports/actions";
import {instanceOf} from "prop-types";

class Reports extends React.Component {

    componentDidMount() {
        this.props.loadReportByDirections();
        this.props.loadReportByUniversities();
    }

    render() {
        const {reportByDirections, reportByUniversities} = this.props;

        console.log('Reports', reportByDirections, reportByUniversities);
        // Object.entries(listWinnerStudents).forEach(([key, value]) => {
        //     console.log(key, value);
        // });


        Object.entries(reportByUniversities).map(([key, value]) => {
                Object.entries(value['0']).map(([k, v]) => {
                        console.log('test1', k);

                        Object.entries(value['0']).map(([k, v]) =>
                            console.log(value[k])
                        );
                    console.log('----------------------------------');
                    }
                )
            }
        );
        return (
            <>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Направления</th>
                        <th scope="col">Кол-во заявок</th>
                        <th scope="col">Средний рейтинг</th>
                        <th scope="col">Граница 25%</th>
                        <th scope="col">Кол-во исключенных</th>
                        <th scope="col">Кол-во прошедших</th>
                        <th scope="col">Рекомендованное кол-во стипендий</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(reportByDirections[0]).map(([key, value]) =>
                        <>
                            <tr>
                                <td>{key}</td>
                                {reportByDirections.map(v =>
                                    <td>{v[key]}</td>
                                )}
                            </tr>

                        </>
                    )}
                    </tbody>
                </table>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">Университет</th>
                        <th scope="col">Средний рейтинг</th>
                        <th scope="col">Кол-во заявок допущенных до конкурса</th>
                        <th scope="col">Расчетное кол-во стипендий</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(reportByUniversities).map(([key, value]) =>
                        <>
                            <tr className='table-active'>
                                <td className='text-center' colSpan="6"><strong>{key}</strong></td>
                            </tr>
                            {Object.entries(value['0']).map(([k, v]) =>
                                <tr>
                                    <td>{k}</td>
                                    <td>{value['0'][k]}</td>
                                    <td>{value['1'][k]}</td>
                                    <td>{value['2'][k]}</td>
                                </tr>
                            )}
                        </>
                    )}
                    </tbody>
                </table>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        reports: state.reports,
        reportByDirections: state.reports.reportByDirections,
        reportByUniversities: state.reports.reportByUniversities
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadReportByDirections: () => dispatch(loadReportByDirections()),
        loadReportByUniversities: () => dispatch(loadReportByUniversities())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Reports);