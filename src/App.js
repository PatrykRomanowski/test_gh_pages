import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import MainSite from "./screens/MainSite";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<MainSite />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
