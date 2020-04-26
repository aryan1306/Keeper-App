import React from 'react';

function Footer(){
    var now = new Date();
    var year = now.getFullYear();
    return(<footer>
        <p>Copyright {year}</p>
    </footer>)
}

export default Footer;