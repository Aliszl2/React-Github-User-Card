import React from "react";
import axios from "axios";
import Card from "./Card";

export default class GithubUserData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Aliszl/followers")
      .then(response => {
       
        this.setState(oldState => {
          return {
            users: [...response.data]
          };
        });
      })
      .then(
            axios
            .get("https://api.github.com/users/Aliszl")
            .then(response => {
                  this.setState(oldState=>{
                return{
                 
                  users:[
                    response.data,
                    ...oldState.users
                   ]
                                }
              
            });

        })
   )
  }

  render() {

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


