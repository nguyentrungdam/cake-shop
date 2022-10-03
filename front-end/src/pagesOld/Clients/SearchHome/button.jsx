import React from 'react'
import styled from "styled-components";

const HomeFilterList = styled.div`    
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    margin-bottom: 10px;
    border-radius: 3px;
`
const FilterControl = styled.div`    
    display: flex;
    align-items: center;
  
`
const CssCheck = {
    color : "white",
    backgroundColor : "#FE6432"
}

function Button({button, filter,check}) {
   
    return (
        <HomeFilterList>
            <FilterControl>
            <p className="home-filter-title">Sắp xếp theo</p>
            {
                button.map((cat, i)=>{
                    return <button key={i} type="button" onClick={()=> filter(cat)} className="btn btn--primary btn home-filter-btn" style={(i === check) ? CssCheck : {}}>{cat}</button>
                })
            }
            
                    
            </FilterControl>
            <div className="home-filter-page">
                    <div className="home-filter-page-number">
                        <p className="home-filter-page-now">1</p>
                            /14
                    </div>
                    <div className="home-filter-page-control">
                        <a href="/#" className="home-filter-page-btn home-filter-page-btn--disable">
                            <i className="fas fa-angle-left"></i>
                        </a>
                        <a href="/#" className="home-filter-page-btn">
                            <i className="fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>
        </HomeFilterList>
    )
}

export default Button;