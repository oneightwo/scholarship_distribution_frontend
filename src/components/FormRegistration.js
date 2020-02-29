import React from "react"
import {connect} from 'react-redux';
import Input from "./base/Input";
import Label from "./base/Label";
import Selector from "./base/Selector";
import {
    changeField, changeFile, checkValidation,
    loadCoursesData,
    loadScienceDirectionsData,
    loadUniversitiesData, setAllowed, submitForm
} from "../store/registration/actions";
import store from "../store/store";

class FormRegistration extends React.Component {

    componentDidMount() {
        const {loadCoursesData, loadUniversitiesData, loadScienceDirectionsData} = this.props;
        loadCoursesData();
        loadUniversitiesData();
        loadScienceDirectionsData();
    }

    handleSubmit = () => {
        const {data, submitForm, checkValidation, isAllowed, file} = this.props;
        if (isAllowed) {
            checkValidation();
            if (store.getState().registration.isValid && isAllowed) {
                submitForm(data, file);
            }
        }
    };

    onChange = (id, value, isValid, required) => {
        console.log(id, value, isValid, required);
        this.props.changeFields(id, value, required, isValid);
    };

    validationCriteria = (value) => {
        return parseInt(value) >= 0 && parseInt(value) <= 5;
    };

    handleCheckbox = (e) => {
        this.props.setAllowed(e.target.checked)
    };

    getClassSubmitButton = () => {
        return this.props.isAllowed ? 'btn btn-primary col-auto' : 'btn btn-primary col-auto disabled'
    };

    handleChangeFile = (id, value, isValid, required) => {
        console.log(id, value, isValid, required);
        this.props.changeFile(id, value, required, isValid);
    };

    render() {
        const {
            surname, name, patronymic, university, course, faculty, email, number, scienceDirection, topic,
            c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, courses, scienceDirections, universities,
            isAllowed
        } = this.props;
        return (
            <div className='card m-5'>
                <div className='card-header'><h5>Регистрация</h5></div>
                <div className='card-body'>
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
                                       value={patronymic.value}
                                       required={true}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-3">
                                <Label value="Университет"/>
                                <Selector id="university"
                                          listValues={universities}
                                          onChange={this.onChange}
                                          required={true}
                                          isValid={university.isValid}/>
                            </div>
                            <div className="col-lg-2 mb-3">
                                <Label value="Курс"/>
                                <Selector id="course"
                                          listValues={courses}
                                          onChange={this.onChange}
                                          required={true}
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
                                <Input id="number"
                                       type="phone"
                                       placeholder="88005553535"
                                       onChange={this.onChange}
                                       value={number.value}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-3">
                                <Label value="Направление"/>
                                <Selector id="scienceDirection"
                                          listValues={scienceDirections}
                                          onChange={this.onChange}
                                          required={true}
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
                                <Label value='Пояснительная записка'/>
                                <input type="file"
                                       onChange={(e) => this.handleChangeFile('file', e.target.files[0], true, true)}/>
                                {/*<div className='custom-file'>*/}
                                {/*    <Label value='Пояснительная записка'/>*/}
                                {/*    <input type="file" className="custom-file-input" id="customFile"/>*/}
                                {/*    <label className="custom-file-label" htmlFor="customFile">Выберите файл</label>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-footer'>
                    <div className='row'>
                        <div className='col-11 align-self-center'>
                            <div className="custom-control custom-checkbox">
                                <input id="customCheck1" type="checkbox" className="custom-control-input"
                                       checked={isAllowed} onChange={this.handleCheckbox}/>
                                <label className="custom-control-label" htmlFor="customCheck1">Разрешаю обработку своих
                                    персональных данных</label>
                            </div>
                        </div>
                        <div className={this.getClassSubmitButton()} onClick={this.handleSubmit}>Отправить</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.registration.fields,
        surname: state.registration.fields.filter(v => v.id === 'surname')[0],
        name: state.registration.fields.filter(v => v.id === 'name')[0],
        patronymic: state.registration.fields.filter(v => v.id === 'patronymic')[0],
        university: state.registration.fields.filter(v => v.id === 'university')[0],
        course: state.registration.fields.filter(v => v.id === 'course')[0],
        faculty: state.registration.fields.filter(v => v.id === 'faculty')[0],
        email: state.registration.fields.filter(v => v.id === 'email')[0],
        number: state.registration.fields.filter(v => v.id === 'number')[0],
        scienceDirection: state.registration.fields.filter(v => v.id === 'scienceDirection')[0],
        topic: state.registration.fields.filter(v => v.id === 'topic')[0],
        c1: state.registration.fields.filter(v => v.id === 'c1')[0],
        c2: state.registration.fields.filter(v => v.id === 'c2')[0],
        c3: state.registration.fields.filter(v => v.id === 'c3')[0],
        c4: state.registration.fields.filter(v => v.id === 'c4')[0],
        c5: state.registration.fields.filter(v => v.id === 'c5')[0],
        c6: state.registration.fields.filter(v => v.id === 'c6')[0],
        c7: state.registration.fields.filter(v => v.id === 'c7')[0],
        c8: state.registration.fields.filter(v => v.id === 'c8')[0],
        c9: state.registration.fields.filter(v => v.id === 'c9')[0],
        c10: state.registration.fields.filter(v => v.id === 'c10')[0],
        c11: state.registration.fields.filter(v => v.id === 'c11')[0],
        c12: state.registration.fields.filter(v => v.id === 'c12')[0],
        c13: state.registration.fields.filter(v => v.id === 'c13')[0],
        c14: state.registration.fields.filter(v => v.id === 'c14')[0],
        c15: state.registration.fields.filter(v => v.id === 'c15')[0],
        file: state.registration.file,

        courses: state.registration.courses,
        scienceDirections: state.registration.scienceDirections,
        universities: state.registration.universities,

        isValid: state.registration.isValid,
        isAllowed: state.registration.isAllowed,
        all: state.registration
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeFields: (id, value, required, isValid) => dispatch(changeField(id, value, required, isValid)),
        changeFile: (id, value, required, isValid) => dispatch(changeFile(id, value, required, isValid)),
        loadCoursesData: () => dispatch(loadCoursesData()),
        loadUniversitiesData: () => dispatch(loadUniversitiesData()),
        loadScienceDirectionsData: () => dispatch(loadScienceDirectionsData()),
        setAllowed: (isAllow) => dispatch(setAllowed(isAllow)),
        submitForm: (data, file) => dispatch(submitForm(data, file)),
        checkValidation: () => dispatch(checkValidation())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRegistration);