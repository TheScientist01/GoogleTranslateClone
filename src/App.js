import Translate from "./components/Translate";
import React, { useState } from "react";
import { store } from "./index";
import AuthGoogle from "./api/AuthGoogle";
import SideBar from "./components/SideBar";


const App = () => {

  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-light p-3">
        
          <div className="row">
            <SideBar /> 

            <a href="/" className="navbar-brand my-auto"><h3 className="text-secondary"><img alt="Google" height={25} src="google-logo.png"></img>  Translate</h3></a>
          </div>
          <div className="row">
            <button className="btn btn-lg berry mr-2"><i className="fa-solid fa-grip text-secondary"></i></button>
            <AuthGoogle />
          </div>
        </nav>
      </div>
      <div className="row" style={{ position: "relative" }}>
        <div className="row" style={{ border: "2px solid #e5e5e5", position: "absolute", background: "#fafafa", height: "110px", width: "110vw" }}>
          <div style={{ marginLeft: "80px" }}>
            <button className="btn btn-lg mt-4 mr-2" style={{ background: "#e4ecfa", color: "#1a68d2", border: "1px solid lightgray" }}><i className="fa-brands fa-adversal mr-2"></i>Text</button>
            <button className="btn btn-lg mt-4 mr-2" style={{ color: "#1a68d2", border: "1px solid lightgray" }}><i className="fa-solid fa-file mr-2"></i>Documents</button>
            <button className="btn btn-lg mt-4" style={{ color: "#1a68d2", border: "1px solid lightgray" }}><i className="fa-solid fa-globe mr-2"></i>Web Sites</button>
          </div>
        </div>
        <div className="col-lg-11 mx-auto col-sm-12 p-0">
          <div style={{ height: "80px" }}></div>
          <Translate />
        </div>
      </div>
    </div>
  );
}

export default App;
