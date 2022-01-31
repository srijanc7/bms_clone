import React from "react";
import {  Card,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TextWrapper } from "./style";
import styled from "styled-components";

const GreyContainer=styled.div`
  background-color:rgb(43,49,72);
  padding:100px;
  border:20px;
  margin-top:40px;
  margin-bottom:40px;

`;

export default function Premiers({ posts,movie }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };
  return (
      <>
      <GreyContainer>

      <div className="clearfix mt-5 mb-2">
      <TextWrapper className="float-left">
      <h4 >Premieres</h4>
      </TextWrapper>
    
    <Link className="float-right text-uppercase" to="/">
      see all
    </Link>
  </div>
  <Slider {...settings}>
    {posts.map(function(movie,index) {
      return (
        <React.Fragment key={index}>
          <Link to={`/movies/${movie.id}`}>
            <Col>
              <Card style={{ backgroundColor:"rgb(43,49,72)",color:"white" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <Card.Body>
                  <span>{movie.title}</span>
                </Card.Body>
              </Card>
            </Col>
          </Link>
        </React.Fragment>
      );
    })}
  </Slider>

</GreyContainer>

      </>
    
  );
}
