"use client";

import styled from "styled-components";
import {useState} from "react";
import Link from "next/link";

const StyledDiv=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

const StyledLink = styled(Link)`
  color: black;
  font-size:large;
  text-decoration: none;
  padding: 1%;
  margin: 1%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    }
`;

const StyledInput = styled.input `
  padding: 1%;
  margin: 2%;
  border: solid black 1px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 200px;
  font-size: 16px;
`;

export default function Home(){

  const [city,setCity] = useState("");

  return (
    <StyledDiv>
      <h1>Find the Weather in any city!</h1>
      <p>Enter a city name below to get the current weather</p>
      <StyledInput type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)}/>
      <StyledLink href={`/${city}`}>Get Weather</StyledLink>
    </StyledDiv>
  );
}
