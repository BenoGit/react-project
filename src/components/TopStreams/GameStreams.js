import React, {Component}  from 'react';
import'./GameStreams.css'
import Games from '../Games'

class GameStreams extends Component{

    constructor() {
        super()
        this.state = {
            stream:[],
            gamebyid: 32982,
            gamebyname: "Grand Theft Auto V"
        }
    }

    
    componentDidMount(){
        this.fetchbygame()
    }


    fetchbygame = () =>{
        const streamurl=`https://api.twitch.tv/helix/streams?game_id=${this.state.gamebyid}`
        const clientid='wwtzqmixfgwqi0b3hkw5bzzlf2jkx8'
        fetch(streamurl, { 
            method: 'GET', 
            headers: new Headers({
                'Authorization': 'Bearer vi9errxn96tnaedhskjh1rjdrlq6n2',
                'Client-ID': clientid,
            })
        })
            .then(response=> response.json())
            .then(data=>{
                console.log(data);
                const datagameidlist =[];
                for(var key in data.data){
                    datagameidlist.push({
                        streamTitle: data.data[key].title,
                        streamBroad: data.data[key].user_name,
                        gameThumbArt: data.data[key].thumbnail_url.replace('{width}', '325').replace('{height}', '183'),
                    })}
                    this.stream = [...datagameidlist];
                    console.log(datagameidlist);
                    this.setState({stream: datagameidlist})
                })        
    }

    renderGamesid = () => {
    return this.state.stream.map(stream => {
      return (
        <div>
            <a className="thumbclick" href={"https://twitch.tv/" + stream.streamBroad}>
                <img src={stream.gameThumbArt} alt={stream.gameThumbArt} className="gameThumbArt"/>
            </a>
            <h2 className="streamT">{stream.streamTitle}</h2>
            <h3 className="streamB">{stream.streamBroad}</h3>
        </div>
   
      )
    })
  }

    render(){
        
        console.log(this.state.stream)
        return(
        <div>
            <h1 className="popTitle">Top Streams For {this.state.gamebyname}</h1>   
            <div className="grid">
                {this.renderGamesid()} 
            </div>
        </div>
        )
    }
}

export default GameStreams