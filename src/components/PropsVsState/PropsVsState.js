import { Component } from "react";

export default class Parent extends Component {
    constructor() {
        super();
        this.state = {
            message: "God is Great"
        }
    }
    render() {
        return (
            <h1>{this.state.message}</h1>
        )
    }
}