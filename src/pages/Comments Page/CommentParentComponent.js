import React from 'react';
import Form from './Form'
import DisplayForm from './DisplayForm'


class CommentParentComponent extends React.Component {
  state = {
    Name: "",
    Comment: "",
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  fetchpost = () =>{
    const serverurl="https://my-json-server.typicode.com/benogit/react-project-db/posts"
    fetch(serverurl, { 
        method: 'POST',
        headers:{
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          'Accept': 'application/json;odata.metadata=full'
        },
        body: JSON.stringify({
          Name: this.state.Name,
          Comment: this.state.Comment
        })
    })
    .then(response=> response.json())
    .then(data=>{
        console.log(data); window.location.reload()})
  }

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
        />
        <button onClick={this.fetchpost}>Post</button>
        <DisplayForm formData={this.state} />
      </div>
    )
  }
}

export default CommentParentComponent;