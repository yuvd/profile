import React, {useMemo} from 'react';
import {Link} from "react-router-dom";

import "./Sidebar.css"

interface props {

}

export default function Sidebar (props: props) {
  const navLinks = useMemo(() => {
    const nl = [];
    
    nl.push(<Link className="sbLink" to="/">About</Link>)
    nl.push(<Link className="sbLink" to="/">Projects</Link>)
    nl.push(<Link className="sbLink" to="/">Contact</Link>)

    return nl;
  }, [])

  return (
    <div id="sidebar">
      <h1 style={{fontFamily: "Quatro Sans", fontSize: "24px"}}>Yuval Drori</h1>
      <div id="nlContainer">
        {navLinks}
      </div>
    </div>
  );
}
