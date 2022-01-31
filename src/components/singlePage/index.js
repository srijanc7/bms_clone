import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const CoverImage = styled.img`
  
  min-width:100%;
  height:400px;
  
  
`;

export default function SingleMoviesPage(props) {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=dc5395d18e42f03f74b0cc2e102e3a93&language=en-US`
    )
      .then(res => setMovie(res.data))
      .catch(err => console.error(err));
  }, []);

  
  return (
    <Container fluid>
      <Row>
        
        <CoverImage src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />
        
        
      
        <Col md="6">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <ul>
            <li><b>Revenue:</b>{movie.revenue}</li>
            <li><b>Popularity:</b>{movie.popularity}</li>
            <li><b>Original Language:</b>{movie.original_language}</li>
            <li>
              <b>Generes:</b>
              {Array.isArray(movie.genres) &&
                movie.genres.map(el => <span className="ml-2">{el.name}</span>)}
            </li>
            <li><b>Release Date:</b>{movie.release_date}</li>
          </ul>
        </Col>
        </Row>
        
      
    </Container>
  );
}
