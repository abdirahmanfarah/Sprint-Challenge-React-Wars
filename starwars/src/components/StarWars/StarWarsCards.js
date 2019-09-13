import React from "react";
import styled from "styled-components";

const StarWarsCards = (props) => {


  const Container = styled.div `
    background:teal;
    width:200px;
    max-height:200px;
    display:flex;
    flex-direction: column;
  `;

  return (
    <Container key = {props.name}>
      <h2>{props.name}</h2>
      <h3>{props.mass}</h3>
      
    </Container>
  )
}
export default StarWarsCards;