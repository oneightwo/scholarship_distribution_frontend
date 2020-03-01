import React from 'react';
import PropTypes from 'prop-types';

export default class InputFile extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        value: PropTypes.object,
        type: PropTypes.string,
        isValid: PropTypes.bool,
        validation: PropTypes.func,
        required: PropTypes.bool,
        onChange: PropTypes.func.isRequired
    };

    static defaultProps = {
        id: '',
        value: '',
        type: 'file',
        isValid: null,
        validation: value => {
            console.log('validation', value);
            return value !== undefined && new RegExp('\\.(pdf)$').test(value.name) && value.size <= 10485760
        },
        required: false,
        onChange: () => {
        }
    };

    className = (isValid) => {
        const className = 'custom-file-input';
        if (isValid === null || !this.props.required) {
            return className;
        }
        return isValid ? className + ' is-valid' : className + ' is-invalid';
    };

    validation = value => {
        const {validation, required} = this.props;
        if (required) {
            return validation(value);
        } else {
            return null;
        }
    };

    label = () => {
        const {value} = this.props;
        if (value.name === '') {
            return 'Выберите файл'
        } else {
            return value.name;
        }
    };

    render() {
        const {id, type, isValid, onChange, required} = this.props;
        console.log('InputFile', this.props);
        return (
            <div className='custom-file'>
                <input id={id} type={type} className={this.className(isValid)}
                       onChange={(e) => onChange(id, e.target.files[0], this.validation(e.target.files[0]), required)}/>
                <label className="custom-file-label text-truncate">{this.label()}</label>
            </div>
        );
    }
}

