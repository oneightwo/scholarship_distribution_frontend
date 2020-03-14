import React from 'react';
import {Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {
    changeField,
    checkValidation,
    hideEditStudentModal,
    saveEditStudent
} from "../../../store/editStudentModal/actions";
import Label from "../../base/Label";
import Input from "../../base/Input";
import Selector from "../../base/Selector";
import store from "../../../store/store";

class EditStudentModal extends React.Component {

    static defaultProps = {
        student: {},
        onClick: (student) => {
        }
    };

    handleClickClose = () => {
        const {hideEditStudentModal} = this.props;
        hideEditStudentModal();
    };

    handleClickSave = () => {
        const {saveEditStudent, checkValidation, student} = this.props;
        checkValidation();
        if (store.getState().editStudentModal.isValid) {
            saveEditStudent(student);
        }
    };

    onChange = (id, value, isValid, required) => {
        this.props.changeField(id, value, isValid, required);
    };

    validationCriteria = (value) => {
        return parseInt(value) >= 0 && parseInt(value) <= 5 && value.length === 1;
    };

    render() {
        const {
            show, courses, scienceDirections, universities, student: {
                surname, name, patronymic, university, course, faculty, email, phone, scienceDirection, topic,
                c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, rating
            }
        } = this.props;

        console.log('EditStudentModal courses', courses);
        return (
            <Modal
                show={show}
                dialogClassName="edit-dialog"
                centered={true}>
                <Modal.Header>
                    <Modal.Title>
                        Редактировать
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 mb-3">
                                <Label value="Фамилия"/>
                                <Input id="surname"
                                       placeholder="Иванов"
                                       onChange={this.onChange}
                                       value={surname.value}
                                       required={true}
                                       isValid={surname.isValid}/>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <Label value="Имя"/>
                                <Input id="name"
                                       placeholder="Иван"
                                       onChange={this.onChange}
                                       value={name.value}
                                       required={true}
                                       isValid={name.isValid}/>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <Label value="Отчество"/>
                                <Input id="patronymic"
                                       placeholder="Иванович"
                                       onChange={this.onChange}
                                       value={patronymic.value}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <Label value="Университет"/>
                                <Selector id="university"
                                          listValues={universities}
                                          onChange={this.onChange}
                                          required={true}
                                          value={university.value}
                                          isValid={university.isValid}/>
                            </div>
                            <div className="col-lg-2 mb-3">
                                <Label value="Курс"/>
                                <Selector id="course"
                                          listValues={courses}
                                          onChange={this.onChange}
                                          required={true}
                                          value={course.value}
                                          isValid={course.isValid}/>
                            </div>
                            <div className="col-lg-4 mb-3">
                                <Label value="Факультет"/>
                                <Input id="faculty"
                                       placeholder="ФАИТ"
                                       onChange={this.onChange}
                                       value={faculty.value}
                                       required={true}
                                       isValid={faculty.isValid}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <Label value="E-mail"/>
                                <Input id="email"
                                       type="email"
                                       placeholder="ivamov@gmail.com"
                                       onChange={this.onChange}
                                       value={email.value}
                                       required={true}
                                       isValid={email.isValid}/>
                            </div>
                            <div className="col-lg-6 mb-3">
                                <Label value="Номер телефона"/>
                                <Input id="phone"
                                       type="phone"
                                       placeholder="88005553535"
                                       onChange={this.onChange}
                                       value={phone.value}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-3">
                                <Label value="Направление"/>
                                <Selector id="scienceDirection"
                                          listValues={scienceDirections}
                                          onChange={this.onChange}
                                          required={true}
                                          value={scienceDirection.value}
                                          isValid={scienceDirection.isValid}/>
                            </div>
                            <div className="col-lg-8 mb-3">
                                <Label value="Тема"/>
                                <Input id="topic"
                                       placeholder="Исследование космоса"
                                       onChange={this.onChange}
                                       value={topic.value}
                                       required={true}
                                       isValid={topic.isValid}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-9 mb-3">
                                <Label value="Критерии"/>
                                <div className="input-group">
                                    <Input id="c1"
                                           placeholder="№1"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c1.value}
                                           required={true}
                                           isValid={c1.isValid}/>
                                    <Input id="c2"
                                           placeholder="№2"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c2.value}
                                           required={true}
                                           isValid={c2.isValid}/>
                                    <Input id="c3"
                                           placeholder="№3"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c3.value}
                                           required={true}
                                           isValid={c3.isValid}/>
                                    <Input id="c4"
                                           placeholder="№4"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c4.value}
                                           required={true}
                                           isValid={c4.isValid}/>
                                    <Input id="c5"
                                           placeholder="№5"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c5.value}
                                           required={true}
                                           isValid={c5.isValid}/>
                                    <Input id="c6"
                                           placeholder="№6"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c6.value}
                                           required={true}
                                           isValid={c6.isValid}/>
                                    <Input id="c7"
                                           placeholder="№7"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c7.value}
                                           required={true}
                                           isValid={c7.isValid}/>
                                    <Input id="c8"
                                           placeholder="№8"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c8.value}
                                           required={true}
                                           isValid={c8.isValid}/>
                                    <Input id="c9"
                                           placeholder="№9"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c9.value}
                                           required={true}
                                           isValid={c9.isValid}/>
                                    <Input id="c10"
                                           placeholder="№10"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c10.value}
                                           required={true}
                                           isValid={c10.isValid}/>
                                    <Input id="c11"
                                           placeholder="№11"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c11.value}
                                           required={true}
                                           isValid={c11.isValid}/>
                                    <Input id="c12"
                                           placeholder="№12"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c12.value}
                                           required={true}
                                           isValid={c12.isValid}/>
                                    <Input id="c13"
                                           placeholder="№13"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c13.value}
                                           required={true}
                                           isValid={c13.isValid}/>
                                    <Input id="c14"
                                           placeholder="№14"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c14.value}
                                           required={true}
                                           isValid={c14.isValid}/>
                                    <Input id="c15"
                                           placeholder="№15"
                                           validation={this.validationCriteria}
                                           onChange={this.onChange}
                                           value={c15.value}
                                           required={true}
                                           isValid={c15.isValid}/>
                                </div>
                            </div>
                            <div className='col-lg-3 mb-3'>
                                <Label value='Рейтинг'/>
                                <Input id="rating"
                                       placeholder="Рейтинг"
                                       value={rating.value}/>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-outline-danger'>
                        Удалить
                    </button>
                    <button className='btn btn-primary' onClick={this.handleClickClose}>
                        Отменить
                    </button>
                    <button className='btn btn-success' onClick={this.handleClickSave}>
                        Сохранить
                    </button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.editStudentModal,
        show: state.editStudentModal.show,
        student: state.editStudentModal.student,
        isValid: state.editStudentModal.isValid,
        courses: state.data.courses,
        scienceDirections: state.data.scienceDirections,
        universities: state.data.universities,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        hideEditStudentModal: () => dispatch(hideEditStudentModal()),
        saveEditStudent: (student) => dispatch(saveEditStudent(student)),
        changeField: (id, value, isValid, required) => dispatch(changeField(id, value, isValid, required)),
        checkValidation: () => dispatch(checkValidation())
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(EditStudentModal);
