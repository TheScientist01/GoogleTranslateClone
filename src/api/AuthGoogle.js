import React from "react";
import { connect } from 'react-redux';
import {signIn, signOut} from "../redux/actions"

class AuthGoogle extends React.Component{
    componentDidMount=()=>{
        window.gapi.load(
            "client:auth2",
            ()=>{
                window.gapi.client.init({
                    clientId: "203609992783-kj7u2u9ai9joicbmt1jl85g3vv4ns8qj.apps.googleusercontent.com",
                    scope: "email",
                    plugin_name: "Twitch"
                }).then(()=>{
                    this.auth=window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                    
                });
            }
        )
    }

    onAuthChange=isSignedIn=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getBasicProfile());
        }
        else{
            this.props.signOut();
        }
    }

    state={isClicked: false};

    renderAuthButton(){
        if(this.props.isSignedIn){
            // return <button onClick={()=>this.auth.signOut()} className="btn btn-primary mr-2" style={{fonSize: "small"}}>{this.props.user.name+" "+this.props.user.surname}</button>
            return(
            <div>
            <div className="pp mr-3"><img onClick={()=>{this.setState({isClicked:this.state.isClicked ? false : true})}} src={this.props.user.pp}></img></div>
            <div className={`profile-info ${!this.state.isClicked ? "d-none" : ""}`}>
                <ul className="list-group">
                    <div className="pp-big mx-auto mt-4"><img src={this.props .user.pp}></img></div>
                    <li className="mt-2"><h5>{this.props.user.name} {this.props.user.surname}</h5></li>
                    <li className="text-muted mt-1">{this.props.user.mail}</li>
                    <li className="manage my-4"><button className="btn px-4">Manage Google Account</button></li>
                    <li className="add-account mb-4"><button className="btn btn-lg py-3">Add another account</button></li>
                    <li className="logout"><button onClick={()=>{this.auth.signOut();this.setState({isClicked:false});}} className="btn btn-lg">Logout</button></li>
                    <hr></hr>
                    <li>
                        <div className="row terms">
                            <button className="btn">Privacy Policy</button>
                            <button className="btn" >&middot;</button>
                            <button className="btn">Service Terms</button>
                        </div>
                    </li>
                </ul>
            </div>
            </div>
            )
        }
        else{

            return <button onClick={()=>this.auth.signIn()} className="btn btn-primary mr-3 pr-1" style={{fontSize: "normal", fontWeight: "500"}}><div className="mx-4 my-1">Sign in</div></button>
        }
    }

    render(){
        return(
            this.renderAuthButton()
        )
    };
}

const mapStateToProps=(state)=>{
    return {isSignedIn: state.auth.isSignedIn, user: state.auth};
};

export default connect(mapStateToProps,{signIn,signOut})(AuthGoogle);