import React from "react";
import "../styles/header.scss";

export default function Header() {
  // const [a, setA] = useState('')
  return (
    <>
      <div className="nav">
        <div className="navbtns">
          <ul className="list-unstyled">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>NOTE</li>
            <li>NEWS</li>
            <li>MEMBER</li>
            <li>ACCESS</li>
          </ul>
        </div>
        <div className="intro">
          <div className="links">
            <div className="linkto">CONTACT －</div>
            <div className="linkto">Q & A －</div>
          </div>
          <div className="button">
            <div className="btn">HOW TO USE</div>
          </div>
        </div>
      </div>
    </>
  );
}
