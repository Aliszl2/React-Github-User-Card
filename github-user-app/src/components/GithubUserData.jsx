import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

export default function GithubUserData() {
  const [users, fetchUsers] = useState([]);

  useEffect(() => {
  
    axios
      .get("https://api.github.com/users/Aliszl/followers")

      .then(response => {
       

        fetchUsers(response.data);
      })
      .catch(error => {
        console.log("the data was not returned", error);
      });
  }, []);

  return (
    <div>
      {users.map(user => {
        return <Card user={user} />;
      })}
         </div>
  );
}

// export default class GithubUserData extends React.Component {
//   state = {
//     users: []
//   };

//   componentDidMount() {
//     axios
//       .get("https://api.github.com/users/Aliszl/followers")
//       .then(response => {
//         console.log(response);
//         console.log(response.data);
//         this.setState({ users: response.data });
//       });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.users.map(user => (
//           <li key={user.name}>{user.name}</li>
//         ))}
//       </div>
//     );
//   }
// }
// <ul>
//   {this.state.users.map(user => (
//     <li key={user.name}>{user.name}</li>
//   ))}
// </ul>;
