import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import Wishlist from "./components/Wishlist";

const HomePage = React.lazy(() => import("./components/HomePage"));
const SingleMoviePage = React.lazy(() => import("./components/singlePage"));
function App() {
  
  return <>
   <Router>
      <Navbar />
      <React.Suspense fallback={"loading  ....."}>
        <Switch>
          <Route path="/" exact component={HomePage}  />
          <Route path="/movies/:id" component={SingleMoviePage} />
          <Route path="/wishlist">
                <Wishlist  />
            </Route>
        </Switch>
      </React.Suspense>
    </Router>
    <Footer/>
  </>
   
    
  
}

export default App;
