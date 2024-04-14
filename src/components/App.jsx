import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Game from "../pages/Game";
import Authors from "../pages/Authors";
import NoPage from "../pages/NoPage";
import Levels from "../pages/Levels";
import { levelsList } from "../data/levels";
import { createContext, useEffect } from "react";
import { scaleImage } from "../scripts/gameLogic";

export const LevelsContext = createContext(null);

export default function App() {
  useEffect(_=>{
    async function scale(){
      for (let i = 0; i < levelsList.length; i++) {
        levelsList[i].img = await scaleImage(levelsList[i].img, 600);
      }
    };
    scale();
  },[])

  return (
    <LevelsContext.Provider value={levelsList}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Layout />}>
            <Route path="levels" element={<Levels/>} />
            <Route path="authors" element={<Authors />} />
            {
              levelsList.map((lvl,i)=><Route key={i} path={`level/${i+1}`} element={<Game levelData={lvl} level={i+1}/>}/>)
            }
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LevelsContext.Provider>
  )
}