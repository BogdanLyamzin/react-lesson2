import React from 'react';
import styled from "styled-components";

import Button from "./ButtonBasic";

const PrimaryButton = styled(Button)`
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
`;

const SecondaryButton = styled(Button)`
    color: #fff;
    background-color: #545b62;
    border-color: #4e555b;
`;

const SuccessButton = styled(Button)`
    color: #fff;
    background-color: #1e7e34;
    border-color: #1c7430;
`;

export {PrimaryButton, SecondaryButton, SuccessButton}