import styled from "styled-components";

export const Button = styled.button`
    display: inline-block;
    background-color: ${({active}) => active ? "red" : "white"};
    text-decoration: none;
    padding: 10px 15px;    
    color: ${({active}) => active ? "white" : "red"};
    border-radius: 5px;
    border: 1px solid red;
    cursor: pointer;
`;

