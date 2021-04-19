import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import twitchlogo from './twitchlogo.png'


class Nav extends Component {
    render() {
        return(
            <div id="Nav-Bar">
                <a className="navHeader" href='https://twitch.tv'>
                    <img id="twitchlogo"  src={twitchlogo} alt=""/>
                </a>
                <Link to='/'> Home </Link>
                <Link to ='/Games'> Top Games </Link>
                <Link to ='/Streams'> Streams </Link>
                <Link to ='/Comments'> Comments </Link>
                <Link to='/Contact'> Contact </Link>
                
            </div>
        )
    }
}

export default Nav