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
              api="https://api.edamam.com/api/recipes/v2?type=public&q=Italian&app_id=c200b080&app_key=d4e33ef484921f29fcc246e7fa60e28f"
            />
          }
        />
        <Route
          path="/mexican"
          element={
            <ResipcesFullPage
              name="mexican"
              api="https://api.edamam.com/api/recipes/v2?type=public&q=Mexican&app_id=c200b080&app_key=d4e33ef484921f29fcc246e7fa60e28f"
            />
          }
        />
        <Route
          path="/pastries"
          element={
            <ResipcesFullPage
              name="pastries"
              api="https://api.edamam.com/api/recipes/v2?type=public&q=pastries&app_id=c200b080&app_key=d4e33ef484921f29fcc246e7fa60e28f"
            />
          }
        />
        <Route
          path="/dessert"
          element={
            <ResipcesFullPage
              name="dessert"
              api="https://api.edamam.com/api/recipes/v2?type=public&q=dessert&app_id=c200b080&app_key=d4e33ef484921f29fcc246e7fa60e28f"
            />
          }
        />
      </Routes>
      <Fotter />
    </div>
  );
}

export default App;
