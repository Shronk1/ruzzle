import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Settings from "../pages/Settings";
import Authors from "../pages/Authors";
import NoPage from "../pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="play" element={<Game />} />
          <Route path="settings" element={<Settings />} />
          <Route path="authors" element={<Authors />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}