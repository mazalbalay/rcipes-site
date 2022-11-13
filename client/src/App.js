import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Fotter from "./components/Fotter";
import ResipcesFullPage from "./components/ResipcesFullPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/italian"
          element={
            <ResipcesFullPage
              name="italian"
              api="http://localhost:7000/italian"
            />
          }
        />
        <Route
          path="/mexican"
          element={
            <ResipcesFullPage
              name="mexican"
              api="http://localhost:7000/mexican"
            />
          }
        />
        <Route
          path="/pastries"
          element={
            <ResipcesFullPage
              name="pastries"
              api="http://localhost:7000/pastries"
            />
          }
        />
        <Route
          path="/dessert"
          element={
            <ResipcesFullPage
              name="dessert"
              api="http://localhost:7000/dessert"
            />
          }
        />
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
