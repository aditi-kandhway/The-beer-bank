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
        box-shadow:0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
`