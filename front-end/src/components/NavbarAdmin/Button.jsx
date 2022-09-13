import React from 'react'
import styled from "styled-components";
const Container4 = styled.div`
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
    overflow: hidden;
    border-radius: 0.125rem;
    display: flex;
    background: #fff;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    z-index: 11;
   
`
const Container5 = styled.button`
    font-size: 1rem;
    line-height: 1.1875rem;
    padding: 1rem 0;
    text-align: center;
    color: rgba(0,0,0,.8);
    flex-grow: 1;
    cursor: pointer;
    user-select: none;
    &:hover{
        color:#fff;
    }
   
`
function Button({button, filter}) {
    return (
        <Container4>
            {
                button.map((cat, i)=>{
                    return <Container5 key={cat}  onClick={()=> filter(cat)}>{cat}</Container5>
                })
            }
        </Container4>
    )
}

export default Button;
