import React from "react";
import styled from "styled-components";
import {  Row } from "react-bootstrap";

const MovieImage = styled.img`
width: 134px;
min-width: 134px;
display: block;
margin-left: auto;
margin-right: auto;

`;

const Footer=()=>{
    return <>
    <footer style={{color:"#fff",backgroundColor:"rgb(51, 53, 69)"}}>
        <Row>
            
            <MovieImage src="/image/logo.png" />
            
        
        </Row>
        <Row>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}} className="container">
        
        
        <i style={{ margin: "20px 10px"}} className="fab fa-youtube"></i>
      
      
        <i style={{ margin: "20px 10px"}} className="fab fa-twitter"></i>
      
      
        <i style={{ margin: "20px 10px"}} className="fab fa-instagram"></i>
      
      
        <i style={{ margin: "20px 10px"}} className="fab fa-facebook"></i>
      
      
        <i style={{ margin: "20px 10px"}} className="fab fa-dribbble"></i>

        
      
    
    
  </div>

        </Row>
        <Row>
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}} className="container">
        <p>&copy; 2022 bookmyshow</p>
        </div>
        </Row>
      
      
    </footer>
    </>
}

export default Footer;