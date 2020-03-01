import React, {Component} from "react";

import PropTypes from 'prop-types';

export const defaultItem = {id: '', name: '-'};

export default class Selector extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        value: PropTypes.string,
        listValues: PropTypes.array,
        isValid: PropTypes.bool,
        validation: PropTypes.func,
        required: PropTypes.bool,
        onChange: PropTypes.func.isRequired
    };

    static defaultProps = {
        id: '',
        value: defaultItem,
        listValues: [defaultItem],
        isValid: null,
        validation: value => {
            return value !== defaultItem.name
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

    validation = (value) => {
        const {validation, required} = this.props;
        if (required) {
            return validation(value);
        } else {
            return null;
        }
    };

    value = (value) => {
        const {listValues} = this.props;
        let val = [...listValues].filter(v => v.name == value)[0];
        // console.log('val', val);
        return val;
    };

    render() {
        const {id, listValues, isValid, onChange, required, value} = this.props;

        console.log('Selector', value);
        return (
            <select id={id}
                    className={this.className(isValid)}
                    onChange={(e) => {
                        onChange(e.target.id, this.value(e.target.value), this.validation(e.target.value), required)
                    }}>
                <option key={defaultItem.id}>{defaultItem.name}</option>
                {listValues.map((v) =>
                    <option key={v.id} selected={v.name === value.name ? 'selected' : ''}>{v.name}</option>
                )}
            </select>
        );
    }
}

