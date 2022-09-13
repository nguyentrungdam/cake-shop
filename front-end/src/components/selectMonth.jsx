import React from "react";
import styled from "styled-components";

const Select = styled.select`
  height: 40px;
  width: 120px;
  background-color: ${({theme}) => theme.backGroundWhite};
  border: 1px solid ${({theme}) => theme.lineColor};
  border-radius: 2px;
  margin-right: 20px;
  padding-left: 10px;
`
const month =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const listOptions = month.map((value) => 
    <option key={value} value={value}>Tháng {value}</option>
);

const Selectmonth = ({value}) => {
    return(
        <Select name="month" id="month" defaultValue={value}>
            {listOptions}
        </Select>
    )
}

export default Selectmonth
