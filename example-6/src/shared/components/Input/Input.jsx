import React from 'react';
import {formControl} from "./Input.module.css";

const Input = (props)=> {
    const {type = "text", className} = props;
    const fullClassName = `${formControl} ${className || ""}`;
    const inputProps = {...props, type, className: fullClassName};
    return <input {...inputProps} />
}

export default Input;