import React from 'react';
import style from "./LoginForm.module.css";

import Input from "../../../../shared/components/Input"

import {fields} from "./fields";

const LoginForm = ()=> {
    return (
        <form>
            <Input {...fields.email} className={style.loginField}  />
            <Input {...fields.password} className={style.loginField} />
        </form>
    )
}

export default LoginForm;