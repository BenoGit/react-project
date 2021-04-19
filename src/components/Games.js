import React, {Component}  from 'react';
import './Games.css';


class Games extends Component{

    constructor() {
        super()
        this.state = {
            game:[],
        }

    }
    
    componentDidMount(){
        this.fetchtopgames()
    }


    fetchtopgames = () =>{
        const gamesurl='https://api.twitch.tv/helix/games/top?first=30'
        const clientid='wwtzqmixfgwqi0b3hkw5bzzlf2jkx8'
        fetch(gamesurl, { 
            method: 'GET', 
            headers: new Headers({
                'Authorization': 'Bearer 5s7qcckfilx3k6f3e7u5ne5tnvilhj',
                'Client-ID': clientid,
            })
        })
            .then(response=> response.json())
            .then(data=>{
                console.log(data);
                const datagameslist =[];
                for(var key in data.data){
                    datagameslist.push({
                        gameID: data.data[key].id,
                        gameName: data.data[key].name,
                        gameBoxArt: data.data[key].box_art_url.replace('{width}', '213').replace('{height}', '285'),
                    })}
                    this.game = [...datagameslist];
                    console.log(datagameslist);
                    this.setState({game: datagameslist})
                })        
    }


    renderGames = () => {
    return this.state.game.map(game => {
      return (
        <div>
            <img src={game.gameBoxArt} alt={game.gameBoxArt} className="gameArt"/>
            <h3 className="gameName">{game.gameName}</h3>
        </div>
   
      )
    })
  }

    render(){
        
        console.log(this.state.game)
        return(
        <div>
            <h1 className="popTitle">Most Popular Games</h1>   
            <div className="grid">
                {this.renderGames()} 
            </div>
        </div>
        )
    }
}

export default Games