import styled from "styled-components";

export const Div=styled.div`
    width:300px;
    display:flex;
    flex-direction:column;
    margin:40px 15px;
    padding:20px 20px;
    height:auto;
    border-radius:5px;
    background-color:white;
    // justify-content:center;
    align-items:center;
    cursor:pointer;
    &:hover{
        box-shadow:2px 2px 2px 2px lightgray;
    }
`