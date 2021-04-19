import React, {Component, Fragment} from 'react'
import "../App.css"

class Contact extends Component {
    render() {
        return(
            <Fragment>
                <h1 className="contactTitle">Contact Info</h1>
                <p className="aboutP">If you have any questions/feedback or improvments in mind please hesitate to contact me.
                </p>
                <a id='contactMe' href="mailto:benporter@protonmail.com">Contact Me📧</a>
                
            </Fragment>
        )
    }
}

export default Contact