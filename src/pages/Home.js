import React from "react";
import KardSelectors from "./KardSelectors";

const Home = () => {
  return (
    <>

    <BrowserRouter>
      <Link to="/book">Book</Link>

      <Switch>
        <Route path="/book">
          <Book />
        </Route>
      </Switch>
    </BrowserRouter>
{/* 
      <KardContainer>Album</KardContainer>
      <KardContainer>Restaurant</KardContainer>
      <KardContainer>City</KardContainer>
      <KardContainer>Books</KardContainer> */}

    </>
  );
};

export default Home;