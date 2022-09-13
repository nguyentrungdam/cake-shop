import React from 'react'
import styled from "styled-components";
const Container4 = styled.div`
    overflow: hidden;
    border-radius: 0.125rem;
    display: flex;
    background: #fff;
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
    z-index: 11;
   
`
const Container5 = styled.div`
    font-size: 1rem;
    line-height: 1.1875rem;
    padding: 1rem 0;
    text-align: center;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    color: rgba(0,0,0,.8);
    flex-grow: 1;
    cursor: pointer;
    user-select: none;
    &:hover {
        color: #EE4D2D;
    }
`

const CssCheck = {
    color : "#EE4D2D",
    borderBottom: "2px solid #EE4D2D",
}

function Button({button, setcheck, check}) {
    return (
        <Container4>
            {
                button.map((title, index)=>{
                    return <Container5 key={index} onClick={()=> setcheck(index)} style={(index === check) ? CssCheck : {}}>{title}</Container5>
                })
            }
        </Container4>
    )
}

export default Button;
