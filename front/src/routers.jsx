import { Routes, Route } from "react-router-dom"; 
import Header from "./Header";
import Home from "./Home";
import Games from "./Games";
import Footer from "./Footer";
import SobreMim from "./SobreMim";
import WebDesign from "./WebDesign";


function MainRoutes(){


    return(

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Games" element={<Games/>}/>
            <Route path="/SobreMim" element={<SobreMim />}/>
            <Route path="/WebDesign" element={<WebDesign />}/>
        </Routes>
    )
}

export default MainRoutes;