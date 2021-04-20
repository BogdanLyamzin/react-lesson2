import React, {useState} from 'react';

import {Button} from "./button";

const ToggleButton = ({active = false, children})=> {

    const [isActive, setIsActive] = useState(active);

    const HandleClick = () => setIsActive(!isActive);
    
    return <Button onClick={HandleClick} active={isActive}>{children}</Button>
}

export default ToggleButton;