import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Spot from "./components/Spot"
import * as spotsActions from "./store/spots";
import Home from './components/Home'
import CreateEvent from './components/CreateEvent'
import EditSpot from './components/EditSpot'
import { loadReviews } from './store/reviews'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(spotsActions.getSpots())
    dispatch(loadReviews())
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/spots/:id" exact >
            <Spot />
          </Route>
          <Route path="/new">
            <CreateEvent />
          </Route>
          <Route path="/spots/:id/edit" exact>
            <EditSpot />
          </Route>
          <Route path="*">
            <h2 className="page-not-found">Sorry, page was not found 404</h2>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;