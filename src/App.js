import Translate from "./components/Translate";
import React from "react";
import Header from "./components/Header";


const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="row" style={{ position: "relative" }}>
        <div className="row" style={{ border: "2px solid #e5e5e5", position: "absolute", background: "#fafafa", height: "110px", width: "110vw" }}>
          <div className="col-11 mx-auto">
            <button className="btn btn-lg mt-3 mt-md-4 mr-2" style={{ background: "#e4ecfa", color: "#1a68d2", border: "1px solid lightgray" }}><i class="fa-solid fa-language mr-2"></i>Text</button>
            <button className="btn btn-lg mt-3 mt-md-4 mr-2" style={{ color: "#1a68d2", border: "1px solid lightgray" }}><i className="fa-solid fa-file mr-2"></i>Documents</button>
            <button className="btn btn-lg mt-3 mt-md-4" style={{ color: "#1a68d2", border: "1px solid lightgray" }}><i className="fa-solid fa-globe mr-2"></i>Web Sites</button>
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
