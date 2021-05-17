import React from "react";
import "./style.css";
// import header from "../../images/header-background.jpg"

function Header() {
  return (
    <div>
      <header
        className="row header-background"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/header-background.jpg)",

          paddingTop: "25px",
          paddingBottom: "20px",
        }}
      >
        <h1 className="col-sm-9 text-center display-3">Israel Molestina</h1>
      </header>
      <hr />
    </div>
  );
}

export default Header;
