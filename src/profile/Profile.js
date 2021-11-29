import React from "react";

const Profile = (props, handleName) => {
  console.log(props);
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>This is profile</h1>
      <h3 style={{ color: "blue", textAlign: "center" }}>
        My name is {props.fullName}
      </h3>
      <h3 style={{ color: "blue", textAlign: "center" }}>
        My level is {props.level}
      </h3>
      <h3 style={{ color: "blue", textAlign: "center" }}>
        My profession is {props.profession}
      </h3>
      <button onClick={()=>props.handleName(props.fullName)}>Click to alert</button>
      {props.children}
    </div>
  );
};
Profile.defaultProps ={
  name:"jhon",
  age:23
}

export default Profile;
