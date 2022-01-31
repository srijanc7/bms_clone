// import React from "react";
// import styled from "styled-components";
// import MovieComponent from "./MovieComponent";

// const MovieListContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   padding: 30px;
//   gap: 25px;
//   justify-content: space-evenly;;
// `;

// const MovieContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   width: 280px;
//   box-shadow: 0 3px 10px 0 #aaa;
//   cursor: pointer;
// `;
// const CoverImage = styled.img`
//   object-fit: cover;
//   height: 362px;
// `;
// const MovieName = styled.span`
//   font-size: 18px;
//   font-weight: 600;
//   color: black;
//   margin: 15px 0;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// const MovieSearch = (props) => {
//   const { original_title,poster_path } = props.movie;

//   return (
    // <MovieListContainer>
    //     {movieList?.length ? (
    //       movieList.map((movie, index) => (
    //         <MovieComponent
    //           key={index}
    //           movie={movie}
    //         />
    //       ))
    //     ) : (
    //       <img src="https://image.tmdb.org/t/p/w500//1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" />
    //     )}
    //   </MovieListContainer>
//   );
// };
// export default MovieSearch;