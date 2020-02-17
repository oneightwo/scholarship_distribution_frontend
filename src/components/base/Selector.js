import React, {Component} from "react";

import PropTypes from 'prop-types';

export default class Selector extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
        isValid: PropTypes.bool,
        validation: PropTypes.func,
        required: PropTypes.bool,
        onChange: PropTypes.func.isRequired
    };

    static defaultProps = {
        id: '',
        value: '',
        isValid: null,
        validation: value => {
            return value !== ''
        },
        required: false,
        onChange: () => {
        }
    };

    className = (isValid) => {
        const className = 'custom-select';
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
            <select id={id}
                    className={this.className(isValid)}
                    onChange={(e) => {
                        onChange(e, this.validation(e.target.value), required)
                    }}
                    value={value}>
                {}
                <option>-</option>
            </select>
        );
    }
}

