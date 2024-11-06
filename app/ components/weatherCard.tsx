import styled from "styled-components";
import {Weather} from "@/app/interfaces/weather";

const WeatherCardWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 1px solid black;
    margin: 1rem;
    width: 200px;
    border-radius: 10px;
    background: #FAF9F6;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
    }
`;

export default function WeatherCard(props:Weather){
    return(
        <WeatherCardWrapper className="weather-card">
            <h2>{props.datetime}</h2>
            <p>{props.conditions}</p>
            <p>{props.description}</p>
            <p>{props.tempmin}°-{props.tempmax}°</p>
        </WeatherCardWrapper>
    )
}