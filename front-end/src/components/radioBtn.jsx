import React from "react";
import styled from "styled-components";

const Radio = styled.input`
  accent-color: ${({theme}) => theme.mainColor};
  display: inline;
  text-align: right;
  height: 15px;
  width: 15px;
  margin-left: 10px;
  margin-right: 10px;
`

const Radiobtn = ({values, check}) => {
  return(
      <React.Fragment>
        {
          values.map((item, index) => {
            return(
              <React.Fragment key={index}>
                <Radio type="radio" value={item} name="gender" defaultChecked={(index === check)}/>
                {item}
              </React.Fragment>
            )
          })
        }
      </React.Fragment>
    )
}

export default Radiobtn