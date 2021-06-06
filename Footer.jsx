import React from "react";

function Footer(){
    var date = new Date().getFullYear();
    return(
        <footer>
            <h1>contact</h1>
            <p>
                copyright@{date}
            </p>
        </footer>
    );
}
export default Footer;