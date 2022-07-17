import React from "react";

const Profile = (props) => {
    return (
        <React.Fragment>
            <div style={{display:'flex', padding:'1rem', border:'1px solid red'}}>
                <div style={{paddingRight:'1rem'}}>
                    <p>My name is <span style={{color:'red'}}>{props.fullName}</span>.</p>
                    <p><span style={{color:'green'}}>{props.bio}</span></p>
                    <p>I'm a <span style={{color:'red'}}>{props.profession}</span></p>
                </div>
                <div>{props.children}</div>
            </div>
        </React.Fragment>
    );
}

export default Profile;