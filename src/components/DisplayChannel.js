import React from 'react'
import { connect } from 'react-redux'
//firebase
import { db } from '../services/firebase'
//action
import { selectChannel } from '../actions'
//helper
import { deleteChannel } from '../helpers/db'



class DisplayChannel extends React.Component {
    

    deletingChannel = () => {
        deleteChannel(this.props.channel.id)
        this.props.unSelect()
    }

    state = {
        messages: [],        
        newMessage: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return this.props.channel ? (
            <div className="content">
                <div  className="header">
                    <h3> { this.props.channel.name } </h3>
                </div>
                <span onClick={ this.deletingChannel } className="ui right floated raised segment">
                <i className="  trash icon" ></i>
                </span>
            </div>

        ) : (
            <div className="ui segment">
                Select a Channel
            </div>
        )
    }
}

export default connect( null, { selectChannel } )(DisplayChannel)

// export default DisplayChannel
