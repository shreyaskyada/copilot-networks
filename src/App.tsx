import { BrowserRouter, Route, Routes } from "react-router";

import Contact from "./modules/Contact/Contact";
import TeamsPage from "./pages/Teams/Teams";
import { Layout } from "./components/Layout";
import { useState } from "react";
import Home from "./modules/Home/Home";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout activeTab={activeTab} />}>
            <Route
              path="/"
              element={
                <Home activeTab={activeTab} setActiveTab={setActiveTab} />
              }
            />
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
