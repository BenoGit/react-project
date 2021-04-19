import React from 'react';
import Form from './Form'
import DisplayForm from './DisplayForm'


class CommentParentComponent extends React.Component {
  state = {
    Name: "",
    Comment: "",
  }



  
  fetchpost = () =>{
    const serverurl="http://localhost:4000/posts"
    fetch(serverurl, { 
        method: 'POST',
        headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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
        />
        <button onClick={this.fetchpost}>Post</button>
        <DisplayForm formData={this.state} />
      </div>
    )
  }
}

export default CommentParentComponent;