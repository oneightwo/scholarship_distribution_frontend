import React from "react";


export default class Label extends React.Component {


    render() {
        const {value} = this.props;
        return (
            <label htmlFor="labelTextInputId">{value}</label>
        );
    }
}