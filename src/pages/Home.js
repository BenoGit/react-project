import React, {Component, Fragment} from 'react'

class Home extends Component {
    render() {
        return(
            <Fragment>
                <h1 className="homeheader">Twitch Explorer</h1>
                <iframe title="gif" src="https://giphy.com/embed/Nx0rz3jtxtEre" width="960" height="480" frameBorder="0" className="giphy" ></iframe><p></p>
                <p className="homeP">Thanks for stubling upon my first react web application, this app utilizezes the Twitch API,
                displaying various resourses relating to Gaming! Feel free to leave a comment of your favourite game in the comments tab.
                </p>
            </Fragment>
        )
    }
}

export default Home