import React from "react";
import { Routes, Route } from "react-router-dom";
import { AUTH_ROUTE_MODEL, ROUTE_MODEL } from "../Models/RouterModel";
// import NavbarContainer from "../Utility/NavbarContainer";
// import FooterContainer from "../Utility/FooterContainer";
const IndexRouter = () => {
  return  <>
      <main>
        <Routes>
          {AUTH_ROUTE_MODEL.map((res, i) => {
            return (
              <Route key={i} path={res.PAGEPATH} element={res.PAGECOMPONENT} />
            );
          })}
          <Route path="user">
            {ROUTE_MODEL.map((res, i) => {
              return (
                <Route
                  key={i}
                  path={res.PAGEPATH}
                  element={res.PAGECOMPONENT}
                />
              );
            })}
          </Route>
        </Routes>
      </main>
    
    </>
  
};

export default IndexRouter;
