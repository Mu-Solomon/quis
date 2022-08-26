import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./main";
import Questions from "./questions";

let RouterPage = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default RouterPage;
