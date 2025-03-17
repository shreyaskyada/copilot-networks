import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/Home/Home";
import Contact from "./modules/Contact/Contact";
import TeamsPage from "./pages/Teams/Teams";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
