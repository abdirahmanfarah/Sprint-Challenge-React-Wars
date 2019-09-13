import React from "react";
import styled from "styled-components";

const StarWarsCards = (props) => {

  // const AllCards = styled.div `
  //   display:flex;
  //   justify-content: space-between;
  // `;

  const MainContainer = styled.div `
    background:skyblue;
    width:48%;
    padding:20px;
    margin-bottom:20px;
  `;

  // const MainCard = styled.div `
  //   display:flex;
  //   justify-content:space-around;
  //   margin:20px;
  // `;

  const Details = styled.h3 `
      color:dimgray;
  `;
  

  return (
    
      <MainContainer key = {props.name}>
      
            <h2>{props.name}</h2>
            <Details>{props.height}</Details>
            <Details>{props.birth_year}</Details>
            <Details>{props.mass}</Details>
            
        </MainContainer>
    
  )
}
export default StarWarsCards;