import React from "react";
import { Container, Card,  Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function NowPlaying({ movie,handleWishlist }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  
  return (
    <Container>
      
      <div className="clearfix mt-5 mb-2">
        <h4 className="float-left">Recommended Movies</h4>
        <Link className="float-right text-uppercase" to="/">
          see all
        </Link>
      </div>
      <Slider {...settings}>
        {movie.map(function(movie,index) {
          
          return (
            <React.Fragment key={index}>
              <Link to={`/movies/${movie.id}`}>
                <Col>
                  <Card style={{color:"black" }}>
                    <Card.Img
                      variant="top"
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    />
                    <Card.Body>
                      <span>{movie.title}</span>
                      {/* <button style={{color:"red",float: "right"}} onClick={(e)=>
                        
                           handleWishlist(e,movie)
                         
                       }>
                      <i style={{color:"red",float: "right"}} class="fa fa-heart" aria-hidden="true"></i>
                      </button> */}
                      
                     
                      
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            </React.Fragment>
          );
        })}
      </Slider>
    </Container>
  );
}
