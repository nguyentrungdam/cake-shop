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
const date =[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 
19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const listOptions = date.map((value) => 
    <option key={value} value={value}>{value}</option>
);

const Selectdate = ({value}) => {
    return(
        <Select size="1" name="date" id="date" defaultValue={value}>
            {listOptions}
        </Select>
    )
}

export default Selectdate
