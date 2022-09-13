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
const year =[ 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 
    2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022 ];
const listOptions = year.map((value) => 
    <option key={value} value={value}>{value}</option>
);

const Selectyear = ({value}) => {
    return(
        <Select name="year" id="year" defaultValue={value}>
            {listOptions}
        </Select>
    )
}

export default Selectyear
