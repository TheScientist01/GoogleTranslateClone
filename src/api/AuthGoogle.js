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
                    // console.log(this.auth);
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

    renderAuthButton(){
        if(this.props.isSignedIn){
            // return <button onClick={()=>this.auth.signOut()} className="btn btn-primary mr-2" style={{fonSize: "small"}}>{this.props.user.name+" "+this.props.user.surname}</button>
            return <div className="pp mr-3"><img onClick={()=>this.auth.signOut()} src={this.props.user.pp}></img></div>
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