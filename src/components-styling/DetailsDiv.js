import styled from "styled-components";
export const Details=styled.div`
    display:${(props)=>props.display};
    background-color:white;
    flex-direction:column;
    width:650px;
    margin:10px auto;
    align-items: center;
    justify-content: center;
    padding:20px;
    position:absolute;
    border-radius:3px;
    top:0;
    left:0;
    right:0;
    z-index:1;
`