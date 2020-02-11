import React from "react";
import styled from "styled-components";


const Card = props => {
  const { login, id, url, avatar_url } = props.user;
  return (
    <StyledDiv>
      <h1>{login}</h1>
      <h3>id: {id}</h3>
      <h3>url: {url}</h3>
      <img className="avatar" src={avatar_url} alt="avatar pic" />
    </StyledDiv>
  );
};
export default Card;


    //styling
    const StyledDiv = styled.div`
      display:flex;
      margin: 50px auto;
      padding: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
        
   
     
      border:  2px solid;
      color: black;
      background-color: #FFF;
    
      height: auto;
      border-radius: 8px;
      box-shadow: 0 1px 6px -2px #000;
      overflow: hidden;
    
      &:hover {
        background-color: red;
        color: white;
      }
    `;