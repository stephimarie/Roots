import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <h5>
        <strong>|| Roots || </strong>{" "}
      </h5>
      <p id="team">
        <a href="https://github.com/stephimarie" target="blank">
          {" "}
          || Stephanie McCandless ||
        </a>{" "}
        <a href="https://github.com/NhiDanis" target="blank">
          Nhi Danis ||{" "}
        </a>{" "}
        <a href="https://github.com/maxx-808" target="blank">
          Max Higa ||
        </a>{" "}
        <a href="https://github.com/cadeburkett" target="blank">
          Michael Burkett ||{" "}
        </a>{" "}
        <a href="https://github.com/lzegart" target="blank">
          Lara Zegart ||{" "}
        </a>
      </p>
    </div>
  );
}

export default Footer;
