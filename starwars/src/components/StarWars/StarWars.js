import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import StarWarsCards from "./StarWarsCards"


export default function StarWars(){
  const [star, setStar] = useState([]);

  useEffect (() => {
    axios
      .get("https://swapi.co/api/people/")
        .then(response => {
          const star = response.data.results;
          console.log(star);
          setStar(star);

        })
        .catch(error => {
          console.log("Sorry, no star war images can be displayed");
        });
  },[]);

  return (
    <div>
      {
        star.map(index => {
          return <StarWarsCards
           key = {index.name}
           name = {index.name}
           mass = {index.mass}

           />
        })
      }
    </div>
  );
};