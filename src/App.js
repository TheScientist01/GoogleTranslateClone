import Translate from "./components/Translate";
import React from "react";



const App = () => {
  

  return (
    <div className="App">
      <div>
      <nav className="navbar navbar-light p-3"> 
        <a href="/" className="navbar-brand ml-5"><h3 className="text-secondary"><img alt="Google" height={25} src="google-logo.png"></img>  Translate</h3></a>
      </nav>
      </div>
      <div className="row" style={{position: "relative"}}>
      <div className="row" style={{border:"2px solid #e5e5e5",position: "absolute", background: "#fafafa",height: "110px", width:"110vw"}}>
        <div style={{marginLeft:"80px"}}>
          <button className="btn btn-lg mt-4 mr-2" style={{background: "#e4ecfa", color: "#1a68d2", border: "1px solid lightgray"}}><i className="fa-brands fa-adversal mr-2"></i>Text</button>
          <button className="btn btn-lg mt-4 mr-2" style={{ color: "#1a68d2", border: "1px solid lightgray"}}><i className="fa-solid fa-file mr-2"></i>Documents</button>
          <button className="btn btn-lg mt-4" style={{ color: "#1a68d2", border: "1px solid lightgray"}}><i className="fa-solid fa-globe mr-2"></i>Web Sites</button>
        </div>
      </div>
      <div className="col-lg-11 mx-auto col-sm-12 offset-lg-1 p-0">
        <div style={{ height: "80px" }}></div>
        <Translate />
      </div>
    </div>    
    </div>
  );
}

export default App;
