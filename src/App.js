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
              option="italian"
            />
          }
        />
        <Route
          path="/mexican"
          element={
            <ResipcesFullPage
              name="mexican"
              option="mexican"
            />
          }
        />
        <Route
          path="/pastries"
          element={
            <ResipcesFullPage
              name="pastries"
              option="pastries"
            />
          }
        />
        <Route
          path="/dessert"
          element={
            <ResipcesFullPage
              name="dessert"
              option="dessert"
            />
          }
        />
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
