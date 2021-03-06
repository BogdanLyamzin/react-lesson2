import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
    display: inline-block;
    background-color: white;
    text-decoration: none;
    padding: 10px 15px 10px 30px;    
    color: red;
    border-radius: 5px;
    border: 1px solid red;
    cursor: pointer;
    position: relative;
  
    &:hover {
        background-color: red;
        color: white;
        &::before {
            color: white;
        }
    }
    &::before {
        content: "\\27A6";
        font-size: 18px;
        font-weight: bold;
        color: red;
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
    }
    `

export default Button;