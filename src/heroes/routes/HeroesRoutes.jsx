import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPage, MarvelPage } from "../pages"

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="marvel" element={ <MarvelPage /> } />
            <Route path="dc" element={ <DcPage /> } />

            {/* Falta Serach y Hero by id */}
            
            <Route path="/*" element={ <Navigate to="marvel" /> } />
        </Routes>
    </>
  )
}
