import React , { Component } from 'react'

class Img extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <img
                src={this.props.src}
                className={this.props.className}
                alt={this.props.alt}
            />
        )
    }
}

export default Img;