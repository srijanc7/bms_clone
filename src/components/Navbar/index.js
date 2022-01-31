import React, { useState} from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { NavWrapper } from "./style";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import Axios from "axios";


const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;;
`;
const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
`;
const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;




const MovieImage = styled.img`
width: 134px;
min-width: 134px;
vertical-align: middle;
display: block;
`;

export default function Navbars() {
  const [searchQuery, updateSearchQuery] = useState('');
  //const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const API_KEY='dc5395d18e42f03f74b0cc2e102e3a93';

  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchString}&page=1&include_adult=false`,
    );
    console.log(response.data.results);
    updateMovieList(response.data.results);
  };


  const onTextChange = (e) => {
    // onMovieSelect("")
    //clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    fetchData(e.target.value);
    // const timeout = setTimeout(() => fetchData(e.target.value), 500);
    // updateTimeoutId(timeout);
  };
  return <>

<NavWrapper>
      
      <Navbar  expand="lg">
      <MovieImage src="/image/logo.png" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FaSearch />
            <FormControl
              type="text"
              value={searchQuery}
              onChange={onTextChange}
              placeholder="Search"
              className="mr-sm-2"
            />
          </Form>
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Home
            </Link>
            {/* <Link to="/wishlist" className="nav-link">
            <i className="fa fa-heart" aria-hidden="true"></i>
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    
  </NavWrapper>

<MovieListContainer>
{movieList?.length ? (
movieList.map((movie, index) => (

  <MovieContainer>
      <CoverImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <MovieName>{movie.original_title}</MovieName>
      
    </MovieContainer>
  
))
) : (
" "
)}
</MovieListContainer>
  </>
   
  
}
