import React from "react";
import styled from "styled-components";


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


const Wishlist=({wishlistItems})=>{
    let movie=JSON.parse(localStorage.getItem('movie'))


    
    return(
        

        <MovieListContainer>

{movie?.length ? (
movie.map((movie, index) => (

  <MovieContainer>
      <CoverImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <MovieName>{movie.original_title}</MovieName>
      
    </MovieContainer>
  
))
) : (
" "
)}
</MovieListContainer>
    )
    
}

export default Wishlist;