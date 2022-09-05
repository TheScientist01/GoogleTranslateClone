import React, { useState, useEffect, useRef } from "react";


const SideBar = ({ sidebar }) => {
    const [sideBarActive, setSideBarActive] = useState(false);
    const ref = useRef();
    const buttonRef=useRef();
    
        useEffect(() => {
            function handleOutsideClick(event) { 
                if(event.path[0].id==='collapse' || event.path[0].id==='collapseI'){  
                    setSideBarActive(true);
                }
                else if (event.path[0].id !== "sidebar"){       
                    setSideBarActive(false);
                }
            
                }
            
            document.addEventListener("click", handleOutsideClick);
            return () => document.removeEventListener("click", handleOutsideClick);
        },[]);
    

    if (!sideBarActive) {
        return <button id='collapse' className="btn btn-lg berry ml-4 mr-2" style={{ animationDelay: "2s" }}><i class="fa-solid fa-bars text-secondary" id="collapseI" style={{ fontSize: "20px" }}></i></button>
    }
    else {
        return (
            <div ref={ref} id="sidebar">
                <ul className="list-group">
                    <div className="pl-5 py-4"><a href="/" className="navbar-brand my-auto"><h3 className="text-secondary"><img alt="Google" height={25} src="google-logo.png"></img>  Translate</h3></a></div>
                    <li ><a href="https://translate.google.com/about/?hl=az" className="text-dark mt-autpo" rel="noopener noreferrer" target="_blank"><u>About Google Translate</u></a></li>
                    <hr></hr>
                    <li ><a href="https://policies.google.com/?hl=az" className="text-dark">Privacy & Terms</a></li>
                    <li ><a href="https://support.google.com/translate/?hl=az" className="text-dark">Help</a></li>
                    <li ><a href="" className="text-dark">Send Feedback</a></li>
                    <li ><a href="https://www.google.com/about?hl=az" className="text-dark">About Google</a></li>
                </ul>
            </div>
        )
    }
};

export default SideBar;