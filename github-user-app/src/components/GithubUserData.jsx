// import React, { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import Card from "./Card";

export default class GithubUserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: {},
      users: []
    };
  }

  // componentDidMount() {
  //   axios.get("https://api.github.com/users/Aliszl").then(response => {
  //     console.log(response);
  //     console.log(response.data);
  //     console.log(this.state.users);
  //     this.setState(oldState=>{
  //       return{
  //         user1: response.data
  //       }
      
  //   });
  //   });
  // }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/Aliszl/followers")
      .then(response => {
       
        this.setState(oldState => {
          return {
            users: response.data
          };
        });
      })
      .then(
            axios
            .get("https://api.github.com/users/Aliszl")
            .then(response => {
                  // console.log(response.data);
                  this.setState(oldState=>{
                return{
                  user1: response.data,
                  users:[...this.state.users.concat(this.state.user1)]
                  // users: oldState.users.unshift(user1)
                  // users: oldState.users.concat(this.state.user1)
                }
              
            });

        })
   )
  }

  render() {
    console.log(this.state.user1);
    console.log(this.state.users);
    return (
      <div>
        {
        this.state.users.map((user, index) => {
          return <Card key={index} user={user} />;
        })}
      </div>
    );
  }
}

// export default function GithubUserData() {
//   const [users, fetchUsers] = useState([]);

//   useEffect(() => {

//     axios
//       .get("https://api.github.com/users/Aliszl/followers")

//       .then(response => {

//         fetchUsers(response.data);
//       })
//       .catch(error => {
//         console.log("the data was not returned", error);
//       });
//   }, []);

//   return (
//     <div>
//       {users.map(user => {
//         return <Card user={user} />;
//       })}
//          </div>
//   );
// }
