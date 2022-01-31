import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import MovieComponent from "./MovieComponent";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      arrows:true,
      fase:true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
      <div>
        <h2> Recommended Movies</h2>
        <Slider {...settings}>
          <MovieComponent/>
          <MovieComponent/>
          <MovieComponent/>
          <MovieComponent/>
          <MovieComponent/>

          <MovieComponent/>
          <MovieComponent/>
          <MovieComponent/>
          <MovieComponent/>
          <MovieComponent/>
         

        </Slider>
      </div>
    );
  }
}