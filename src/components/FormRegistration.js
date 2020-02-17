import React from "react"
import {connect} from 'react-redux';
import Input from "./base/Input";
import Label from "./base/Label";
import Selector from "./base/Selector";
import {changeField} from "../store/registration/actions";

class FormRegistration extends React.Component {

    handleSubmit = () => {

    };

    handleClose = () => {

    };

    onChange = ({target: {id, value}}, isValid, required) => {
        this.props.changeFields(id, value, required, isValid);
    };

    setValue = (v) => {

    };

    getObject = (key) => {
        const {data} = this.props;
        return data.filter(v => v.id === key)[0];
    };

    render() {
        const {
            surname, name, patronymic, university, course, faculty, email, number, scienceDirection, topic,
            c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15
        } = this.props;
        console.log(this.props);
        return (
            <div>
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
                                      setValue={this.setValue}
                                      isRequired={true}/>
                        </div>
                        <div className="col-lg-2 mb-3">
                            <Label value="Курс"/>
                            <Selector id="course"
                                      setValue={this.setValue}
                                      isRequired={true}/>
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
                                      setValue={this.setValue}
                                      isRequired={true}/>
                        </div>
                        <div className="col-lg-8 mb-3">
                            <Label value="Тема"/>
                            <Input id="topic" value="Тема"
                                   placeholder="Исследование космоса"
                                   onChange={this.onChange}
                                   value={topic.value}
                                   required={true}
                                   isValid={topic.isValid}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 mb-3">
                            <Label value="Критерии"/>
                            <div className="input-group">
                                <Input id="c1"
                                       placeholder="№1"
                                       onChange={this.onChange}
                                       value={c1.value}
                                       required={true}
                                       isValid={c1.isValid}/>
                                <Input id="c2"
                                       placeholder="№2"
                                       onChange={this.onChange}
                                       value={c2.value}
                                       required={true}
                                       isValid={c2.isValid}/>
                                <Input id="c3"
                                       placeholder="№3"
                                       onChange={this.onChange}
                                       value={c3.value}
                                       required={true}
                                       isValid={c3.isValid}/>
                                <Input id="c4"
                                       placeholder="№4"
                                       onChange={this.onChange}
                                       value={c4.value}
                                       required={true}
                                       isValid={c4.isValid}/>
                                <Input id="c5"
                                       placeholder="№5"
                                       onChange={this.onChange}
                                       value={c5.value}
                                       required={true}
                                       isValid={c5.isValid}/>
                                <Input id="c6"
                                       placeholder="№6"
                                       onChange={this.onChange}
                                       value={c6.value}
                                       required={true}
                                       isValid={c6.isValid}/>
                                <Input id="c7"
                                       placeholder="№7"
                                       onChange={this.onChange}
                                       value={c7.value}
                                       required={true}
                                       isValid={c7.isValid}/>
                                <Input id="c8"
                                       placeholder="№8"
                                       onChange={this.onChange}
                                       value={c8.value}
                                       required={true}
                                       isValid={c8.isValid}/>
                                <Input id="c9"
                                       placeholder="№9"
                                       onChange={this.onChange}
                                       value={c9.value}
                                       required={true}
                                       isValid={c9.isValid}/>
                                <Input id="c10"
                                       placeholder="№10"
                                       onChange={this.onChange}
                                       value={c10.value}
                                       required={true}
                                       isValid={c10.isValid}/>
                                <Input id="c11"
                                       placeholder="№11"
                                       onChange={this.onChange}
                                       value={c11.value}
                                       required={true}
                                       isValid={c11.isValid}/>
                                <Input id="c12"
                                       placeholder="№12"
                                       onChange={this.onChange}
                                       value={c12.value}
                                       required={true}
                                       isValid={c12.isValid}/>
                                <Input id="c13"
                                       placeholder="№13"
                                       onChange={this.onChange}
                                       value={c13.value}
                                       required={true}
                                       isValid={c13.isValid}/>
                                <Input id="c14"
                                       placeholder="№14"
                                       onChange={this.onChange}
                                       value={c14.value}
                                       required={true}
                                       isValid={c14.isValid}/>
                                <Input id="c15"
                                       placeholder="№15"
                                       onChange={this.onChange}
                                       value={c15.value}
                                       required={true}
                                       isValid={c15.isValid}/>
                            </div>
                        </div>
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
        c15: state.registration.fields.filter(v => v.id === 'c15')[0]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeFields: (id, value, required, isValid) => dispatch(changeField(id, value, required, isValid))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormRegistration);