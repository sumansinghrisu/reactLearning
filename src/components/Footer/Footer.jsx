import React, { Component } from "react"
import "./Footer.css"
export default class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer>
                <p>Author: Suman Singh<br />
                    <a href="mailto:sumansinghrisu@gmail.com">sumansinghrisu@gmail.com</a></p>
            </footer>
        )
    }
}