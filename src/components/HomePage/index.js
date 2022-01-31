import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Axios from "axios";
import NowPlaying from "./nowplaying";
import { HomeWrapper } from "./style";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Container, Card,Col } from "react-bootstrap";
import Premiers from "./premiers";

import Pagination from "../Pagination";



const StaticImage = styled.img`
  
display: flex;
height: 100%;
width: 100%;
padding:50px;
  
`;

// const MovieListContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   padding: 30px;
//   gap: 25px;
//   justify-content: space-evenly;;
// `;

const staticImages=[
  {
    imageStatic:"https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTI1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png"
  },
  {
    imageStatic:"https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png"
  },
  {
    imageStatic:"https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MzArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png"
  },
  {
    imageStatic:"https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAwKyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png"
  },
  {
    imageStatic:"https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png"
  },
  {
    imageStatic:"https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png"
  },
  {
    imageStatic:"https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png"
  },
  {
    imageStatic:"https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:w-300/cooking-collection-202007222211.png"
  },
];

export default function HomePage() {
  const [nowPlaying, setnowPlaying] = useState([]);
  const [popularMovies, setpopularMovies] = useState([]);
  //const [topRated, settopRated] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  
  let newTemp=[]
  
 

  
 
   
  
  const [wishlistItems,setWishlistItems]=useState([])
  const handleWishlist=(e,item)=>{
   
    
    
    //temp.push(item)
    
    //setWishlistItems(temp)
    newTemp=[{...wishlistItems},item]
    console.log(e)
    console.log(newTemp)
    
    
    
    localStorage.setItem('movie',JSON.stringify(newTemp))
    

    setWishlistItems([...wishlistItems,item])
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = popularMovies.slice(indexOfFirstPost, indexOfLastPost);

  

  const paginate = (pageNumber) =>setCurrentPage(pageNumber);
    
  

  const getAllMovies = async () => {
    let apiKey = "dc5395d18e42f03f74b0cc2e102e3a93";
    const allMovies = await Axios.all([
      Axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${currentPage}`
      ),
      Axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`
      ),
      Axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${currentPage}`
      )
    ]);
    setnowPlaying(allMovies[0].data.results);
    setpopularMovies(allMovies[1].data.results);
    //settopRated(allMovies[2].data.results);
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <>
    <Container>

    
      <HomeWrapper>
      <NowPlaying movie={nowPlaying} handleWishlist={handleWishlist} />
    </HomeWrapper>
    <div>

    <Link className="float-right text-uppercase" to="/">
    <StaticImage src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png" alt=""/>
    </Link>
    </div>

    </Container>

    <HomeWrapper>
    <Container>

<div className="clearfix mt-5 mb-2">
    <h4 className="float-left">The Best Of Entertainment</h4>
    </div>
    <Slider {...settings}>
    {staticImages.map(function(movie,index) {
      return (
        <React.Fragment key={index}>
          <Link to='/'>
            <Col>
              <Card>
                <Card.Img
                  variant="top"
                  src={movie.imageStatic}
                />
                
              </Card>
            </Col>
          </Link>
        </React.Fragment>
      );
    })}
  </Slider>
    


</Container>

    </HomeWrapper>

    <HomeWrapper>
      <Premiers posts={currentPosts} movie={popularMovies} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={popularMovies.length}
        paginate={paginate}
      />
    </HomeWrapper>
    

    

    

    

   


    
    </>
    
    
    
  );
}
