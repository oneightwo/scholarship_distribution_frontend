import React from 'react';
import PropTypes from 'prop-types';

export default class Input extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        type: PropTypes.string,
        placeholder: PropTypes.string,
        isValid: PropTypes.bool,
        validation: PropTypes.func,
        required: PropTypes.bool,
        onChange: PropTypes.func.isRequired
    };

    static defaultProps = {
        id: '',
        value: '',
        type: 'text',
        placeholder: '',
        isValid: null,
        validation: value => {return value !== '' },
        required: false,
        onChange: () => {}
    };

    className = (isValid) => {
        const className = 'form-control';
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

    render() {
        const {id, type, placeholder, isValid, value, onChange, required} = this.props;
        return (
            <input id={id}
                   type={type}
                   className={this.className(isValid)}
                   placeholder={placeholder}
                   onChange={(e) => {onChange(e, this.validation(e.target.value), required)}}
                   value={value}/>
        );
    }
}

