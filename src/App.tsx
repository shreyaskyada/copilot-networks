import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense, useState } from "react";
import { Loader } from "./components/Loader";

// Lazy load components
const Layout = lazy(() => import("./components/Layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const TeamsPage = lazy(() => import("./pages/Teams/Teams"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

function App() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Suspense fallback={<Loader />}>
                <Layout activeTab={activeTab} />
              </Suspense>
            }
          >
            <Route
              path="/"
              element={
                <Suspense fallback={<Loader />}>
                  <Home activeTab={activeTab} setActiveTab={setActiveTab} />
                </Suspense>
              }
            />
            <Route
              path="/teams"
              element={
                <Suspense fallback={<Loader />}>
                  <TeamsPage />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Loader />}>
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
