import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense, useState } from "react";
import { Layout } from "./components/Layout";

// Lazy load components
const Home = lazy(() => import("./pages/Home/Home"));
const TeamsPage = lazy(() => import("./pages/Teams/Teams"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

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
                <Suspense fallback={<div>Loading...</div>}>
                  <Home activeTab={activeTab} setActiveTab={setActiveTab} />
                </Suspense>
              }
            />
            <Route
              path="/teams"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <TeamsPage />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Contact />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
