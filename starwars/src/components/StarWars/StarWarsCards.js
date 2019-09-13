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
    border-radius:8%;
    text-align:center;
  `;

  // const MainCard = styled.div `
  //   display:flex;
  //   justify-content:space-around;
  //   margin:20px;
  // `;

  const Title = styled.h1 `
    color:darkslategray;
  `;

  const Details = styled.h3 `
      color:dimgray;
  `;
  

  return (
    
      <MainContainer key = {props.name}>
      
            <Title>{props.name}</Title>
            <Details> Height: {props.height}</Details>
            <Details>Birth-Year: {props.birth_year}</Details>
            <Details>Mass: {props.mass}</Details>
            
        </MainContainer>
    
  )
}
export default StarWarsCards;