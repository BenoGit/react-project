import React from 'react';
import "./DisplayForm.css"

class DisplayForm extends React.Component {
    
    constructor() {
        super()
        this.state = {
            Comments:[]
        }

    }

    componentDidMount=()=>{
        this.fetchdata()
    }

    fetchdata = () =>{
        const serverurl="http://localhost:4000/posts"
        fetch(serverurl, { 
            method: 'GET',
            headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            })
        })
        .then(response=> response.json())
        .then(data=>{
            console.log(data);
            const datacommentlist =[];
            for(var key in data){
                datacommentlist.push({
                    commentID: data[key].id,
                    Author: data[key].Name,
                    commentText: data[key].Comment
                })}
                this.Comments = [...datacommentlist];
                console.log(datacommentlist);
                this.setState({Comments: datacommentlist})
            }) 
    }
    
    rendercomments = () => {
        return this.state.Comments.map(Comments => {
          return (
            <div className="commentCard">
                <u><h2 className="commentAuthor">{Comments.Author}</h2></u>
                <h3 className="commentText">{Comments.commentText}</h3>
            </div>
       
          )
        })
      }

  render() {
    return (
      <div className="grid">      
        {this.rendercomments()}
      </div>
      
    )
  }
}

export default DisplayForm