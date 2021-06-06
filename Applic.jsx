import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";
import Infi from "./Infi.jsx";

function Applic(){
    return(
        <div>
            <Header />
            <Footer />
            <Content />
            <Content /> <Content /> <Content /> <Content />
            <Infi /> <Infi /> <Infi />
        </div>
    );
}
export default Applic;
